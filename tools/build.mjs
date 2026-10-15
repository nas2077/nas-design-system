import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const target=path.join(root,'dist');fs.mkdirSync(target,{recursive:true});
for(const name of ['kit','assets','LICENSE','README.md'])fs.cpSync(path.join(root,name),path.join(target,name),{recursive:true});
console.log('Built reusable kit in dist/.');
