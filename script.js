/*
  ______   ______  ________  ________  ________ 
 /      \ |      \|        \|        \|        \
|  $$$$$$\ \$$$$$$| $$$$$$$$ \$$$$$$$$| $$$$$$$$
| $$___\$$  | $$  | $$__       | $$   | $$__    
 \$$    \   | $$  | $$  \      | $$   | $$  \   
 _\$$$$$$\  | $$  | $$$$$      | $$   | $$$$$   
|  \__| $$ _| $$_ | $$_____    | $$   | $$_____ 
 \$$    $$|   $$ \| $$     \   | $$   | $$     \
  \$$$$$$  \$$$$$$ \$$$$$$$$    \$$    \$$$$$$$$

*/

const lenis=new Lenis({duration:1.2,easing:(t)=>Math.min(1,1.001-Math.pow(2,-10*t)),direction:'vertical',gestureDirection:'vertical',smooth:!0,mouseMultiplier:1,smoothTouch:!1,touchMultiplier:2,});function raf(time){lenis.raf(time);requestAnimationFrame(raf)}
requestAnimationFrame(raf);document.querySelectorAll('a[href^="#"]').forEach(anchor=>{anchor.addEventListener('click',function(e){e.preventDefault();lenis.scrollTo(this.getAttribute('href'))})});const yearEl=document.getElementById('year');if(yearEl)yearEl.textContent=new Date().getFullYear();const observerOptions={root:null,rootMargin:'0px',threshold:0.1};const observer=new IntersectionObserver((entries,observer)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('active');observer.unobserve(entry.target)}})},observerOptions);document.querySelectorAll('.reveal').forEach((el)=>{observer.observe(el)});const cursorDot=document.querySelector('.cursor-dot');const cursorOutline=document.querySelector('.cursor-outline');if(cursorDot&&cursorOutline){window.addEventListener('mousemove',function(e){const posX=e.clientX;const posY=e.clientY;cursorDot.style.left=`${posX}px`;cursorDot.style.top=`${posY}px`;cursorOutline.animate({left:`${posX}px`,top:`${posY}px`},{duration:500,fill:"forwards"})});const interactiveElements=document.querySelectorAll('a, button, .glass-card, .btn');interactiveElements.forEach(el=>{el.addEventListener('mouseenter',()=>{cursorOutline.classList.add('cursor-hover')});el.addEventListener('mouseleave',()=>{cursorOutline.classList.remove('cursor-hover')})})}