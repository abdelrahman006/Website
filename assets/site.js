document.body.classList.add('js');
const toggle=document.querySelector('.menu-toggle'), nav=document.querySelector('#navigation');
function closeMenu(){toggle.setAttribute('aria-expanded','false');nav.classList.remove('open');}
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));nav.classList.toggle('open',open);});
nav.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
const search=document.querySelector('#project-search'), projects=[...document.querySelectorAll('.archive-item')];
search.addEventListener('input',()=>{let count=0;const query=search.value.trim().toLowerCase();projects.forEach(item=>{item.hidden=!item.dataset.search.includes(query);if(!item.hidden)count++;});document.querySelector('#search-count').textContent=`${count} projects`;document.querySelector('#no-results').hidden=count!==0;});
