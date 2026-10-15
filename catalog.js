/* Catalog controls; the reusable API lives in kit/nas.js. */
Nas.init();
const hero = Nas.orbi(document.querySelector('#hero-orbi'), {remember:false});
const sample = Nas.orbi(document.querySelector('#component-orbi'), {remember:false});
function repaint(){
  document.querySelectorAll('.mini').forEach(canvas=>Orbi.icon(canvas,Number(canvas.dataset.size)));
  document.querySelectorAll('[data-expression]').forEach(canvas=>Orbi.draw(canvas,{t:0,face:canvas.dataset.expression}));
}
for(const name of Orbi.FACES){
  const canvas=document.createElement('canvas');canvas.width=56;canvas.height=46;
  canvas.dataset.expression=name;canvas.setAttribute('aria-label',name);
  document.querySelector('#expressions').append(canvas);
}
repaint();
document.querySelectorAll('[data-theme-toggle]').forEach(button=>button.addEventListener('click',()=>{
  const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
  Nas.configure({theme});document.querySelector('.top [data-theme-toggle]').textContent=theme==='dark'?'Light theme':'Dark theme';repaint();
}));
for(const [id,key] of [['preset','personality'],['density','density'],['motion','motion']])
  document.querySelector('#'+id).addEventListener('change',event=>Nas.configure({[key]:event.target.value}));
document.querySelector('#export-preset').addEventListener('click',()=>Nas.download('nas-preset.css',Nas.presetCSS(),'text/css;charset=utf-8'));
