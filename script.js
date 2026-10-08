const button=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');
function closeNav(){nav.classList.remove('open');button.setAttribute('aria-expanded','false');button.setAttribute('aria-label','Open navigation');button.textContent='☰'}
button.addEventListener('click',()=>{const opened=nav.classList.toggle('open');button.setAttribute('aria-expanded',String(opened));button.setAttribute('aria-label',opened?'Close navigation':'Open navigation');button.textContent=opened?'×':'☰'});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeNav()});
document.getElementById('year').textContent=new Date().getFullYear();
const dialog=document.querySelector('#figure-dialog');const modalImg=document.querySelector('#dialog-image');
document.querySelectorAll('.figure-button').forEach(b=>b.addEventListener('click',()=>{modalImg.src=b.dataset.full;modalImg.alt=b.querySelector('img').alt;document.querySelector('#dialog-caption').textContent=b.dataset.caption;dialog.showModal()}));
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
