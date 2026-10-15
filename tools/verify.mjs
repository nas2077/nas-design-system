import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import crypto from 'node:crypto';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const document={documentElement:{dataset:{}},querySelectorAll:()=>[],dispatchEvent(){}};
const context={document,window:{matchMedia:()=>({matches:false,addEventListener(){}})},CustomEvent:class{constructor(type,options){this.type=type;this.detail=options.detail;}}};
context.matchMedia=context.window.matchMedia;vm.createContext(context);
for(const name of ['orbi.js','orbi-icons.js','nas.js'])vm.runInContext(fs.readFileSync(path.join(root,'kit',name),'utf8'),context,{filename:name});
const {Orbi,Nas}=context.window;
for(const name of ['init','configure','configuration','presetCSS','download','toast','openDialog','celebrate','orbi'])assert.equal(typeof Nas[name],'function',name);
Nas.configure({personality:'workshop',motion:'off',density:'compact'});
assert.equal(document.documentElement.dataset.personality,'workshop');
assert.equal(Nas.motion.enabled(),false);
assert.match(Nas.presetCSS(),/--radius: 8px/);
const hash=crypto.createHash('sha256');let renderings=0;
for(const light of [false,true])for(const face of Orbi.FACES)for(const time of [0,1,3,8,12]){
 const buffer=new Uint32Array(56*46),depth=new Float32Array(56*46);
 Orbi._internals.renderPixels(buffer,depth,Orbi._internals.stillPose(time,face),Orbi._internals.palette(light));
 hash.update(Buffer.from(buffer.buffer));renderings++;
}
const expected=JSON.parse(fs.readFileSync(path.join(root,'docs/pixel-baseline.json'),'utf8'));
assert.equal(hash.digest('hex'),expected.sha256);assert.equal(renderings,expected.renderings);
const manifest=JSON.parse(fs.readFileSync(path.join(root,'design-system.json'),'utf8'));
for(const name of manifest.assets)assert.ok(fs.existsSync(path.join(root,name)),name);
assert.equal(manifest.components.length,22);
const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
assert.ok(html.includes('lang="en"'));
assert.equal([...html.matchAll(/<article class="component"/g)].length,22);
for(const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)){
 if(!/^https?:/.test(match[1]))assert.ok(fs.existsSync(path.join(root,match[1])),match[1]);
}
console.log(`PASS: English API, ${renderings} pixel renders, 22 component examples and all catalog assets.`);
