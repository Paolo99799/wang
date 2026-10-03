var G=[
 {t:'FOUNDERS',cls:'f',role:'👑 FOUNDER',m:[{n:'Paolo Wang',img:'images/paolo.jpg',u:'https://www.facebook.com/share/18Pj4PQPcR/'}]},
 {t:'LEADERS',cls:'l',role:'🛡️ LEADER',m:[{n:'Meturr Wang',img:'images/meturr.jpg',u:'https://www.facebook.com/share/1EqZ9jec1Z/'},{n:'Dylan Wang',img:'images/dylan.jpg',u:'https://www.facebook.com/share/18uEb65A7z/'},{n:'Fahad Wang',img:'images/fahad.jpg',u:'https://www.facebook.com/share/1EL2qPF716/'}]},
 {t:'MEMBERS',cls:'s',role:'♡ MEMBER',m:[{n:'Tuayfuu Wang',img:'images/tuayfuu.jpg',u:'https://www.facebook.com/share/19aJG4RdBM/'},{n:'White Wang',img:'images/white.jpg',u:'https://www.facebook.com/share/19sFbojgpe/'},{n:'Yibpy Wang',img:'images/yibpy.jpg',u:'https://www.facebook.com/share/18wXJRM2fx/#'},{n:'Billy Wang',img:'images/billy.jpg',u:'https://www.facebook.com/share/19guExQHbT/'}]},
];
function esc(t){var d=document.createElement('div');d.textContent=t;return d.innerHTML}
document.getElementById('list').innerHTML=G.map(function(g){
  return '<h2>'+g.t+' <span>/ 0'+g.m.length+'</span></h2><div class="grp'+''+'">'+g.m.map(function(p){
    return '<div class="c '+g.cls+'"><div class="av">'+(p.img?'<img src="'+p.img+'" alt="">':esc(p.n.charAt(0)))+'</div><div><div class="role">'+g.role+'</div><div class="nm">'+esc(p.n)+'</div>'+(p.u!=='#'?'<a href="'+p.u+'" target="_blank" rel="noopener">FACEBOOK</a>':'')+'</div></div>'}).join('')+'</div>'}).join('');
var H=document.getElementById('home'),L=document.getElementById('list'),B=document.getElementById('bk');
var F=document.getElementById('fade'),busy=false;
function sw(fn){if(busy)return;busy=true;F.style.opacity=1;setTimeout(function(){fn();scrollTo(0,0);F.style.opacity=0;busy=false},550)}
document.getElementById('go').onclick=function(){sw(function(){H.classList.add('hide');L.classList.remove('hide');B.classList.remove('hide')})};
B.onclick=function(){sw(function(){L.classList.add('hide');B.classList.add('hide');H.classList.remove('hide')})};

/* ===== MUSIC (วางไฟล์เพลงไว้ที่ music/song.mp3 แล้วใช้ได้เลย) ===== */
var MUSIC={file:'music/song.mp3',title:'คนตาย',artist:'YOUNGOHM',volume:20};
var au=document.getElementById('au'),vol=document.getElementById('vol'),plb=document.getElementById('pl');
au.src=MUSIC.file;au.volume=MUSIC.volume/100;vol.value=MUSIC.volume;
document.getElementById('tt').textContent=MUSIC.title;
document.querySelector('.pl .ar').textContent=MUSIC.artist;
au.addEventListener('play',function(){plb.textContent='\u275A\u275A'});
au.addEventListener('pause',function(){plb.textContent='\u25B6'});
plb.onclick=function(){if(au.paused){var p=au.play();if(p&&p.catch)p.catch(function(){})}else au.pause()};
vol.oninput=function(){au.volume=this.value/100};
document.getElementById('rp').onclick=function(){au.currentTime=0};
var nx=document.getElementById('nx');nx.style.color='#fff';
nx.onclick=function(){au.loop=!au.loop;this.style.color=au.loop?'#fff':'#555'};
var started=false;
function autoStart(e){
  document.removeEventListener('pointerdown',autoStart,true);document.removeEventListener('keydown',autoStart,true);
  if(started||(e&&e.target&&e.target.closest&&e.target.closest('.pl')))return;
  started=true;var p=au.play();if(p&&p.catch)p.catch(function(){});
}
document.addEventListener('pointerdown',autoStart,true);document.addEventListener('keydown',autoStart,true);

/* ===== SNOW ===== */
(function(){
  var cv=document.getElementById('snow');if(!cv)return;
  var ctx=cv.getContext('2d'),W,H,fl=[],N=0,dpr=Math.min(window.devicePixelRatio||1,2);
  function size(){W=innerWidth;H=innerHeight;cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
    N=Math.round(Math.min(150,W*H/9000));while(fl.length<N)fl.push(mk(true));fl.length=N}
  function mk(r){return{x:Math.random()*W,y:r?Math.random()*H:-10,r:Math.random()*2.6+.7,v:Math.random()*.9+.35,s:Math.random()*Math.PI*2,w:Math.random()*.012+.004,a:Math.random()*.5+.35}}
  function tick(){
    ctx.clearRect(0,0,W,H);
    for(var i=0;i<fl.length;i++){var f=fl[i];
      f.y+=f.v*(f.r>2?1.5:1);f.s+=f.w;f.x+=Math.sin(f.s)*.5+.12;
      if(f.y>H+6||f.x>W+6){fl[i]=mk(false);fl[i].x=Math.random()*W;continue}
      ctx.beginPath();ctx.arc(f.x,f.y,f.r,0,6.283);ctx.fillStyle='rgba(255,255,255,'+f.a+')';
      if(f.r>2){ctx.shadowColor='rgba(255,255,255,.8)';ctx.shadowBlur=6}else ctx.shadowBlur=0;
      ctx.fill()}
    requestAnimationFrame(tick)}
  size();addEventListener('resize',size);
  if(!(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches))tick();
})();
function addSearch(){
  const list = document.getElementById('list');
  if (!list || list.querySelector('.dir')) return;

  const dir = document.createElement('div');
  dir.className = 'dir';
  dir.innerHTML = `
    <div class="dir-sub">♡ MEMBER WANG ♡</div>
    <h1 class="dir-title">ตระกูลหวัง</h1>
    <input id="q" class="dir-search" placeholder="Search members...">
    <div class="dir-tabs">
      <button class="on" data-f="all">ALL</button>
      <button data-f="wang">WANG</button>
    </div>`;
  list.prepend(dir);

  const q = dir.querySelector('#q');
  function filter(){
    const t = q.value.toLowerCase();
    const f = dir.querySelector('.on').dataset.f;
    list.querySelectorAll('a').forEach(a=>{
      const card = a.parentElement.closest('div') || a;
      const n = card.textContent.toLowerCase();
      card.style.display = (n.includes(t) && (f==='all' || n.includes(f))) ? '' : 'none';
    });
  }
  q.addEventListener('input', filter);
  dir.querySelectorAll('button').forEach(b=>b.onclick=()=>{
    dir.querySelector('.on').classList.remove('on');
    b.classList.add('on'); filter();
  });
}

// ตรวจทุกครั้งที่ #list ถูกเขียนใหม่
new MutationObserver(addSearch)
  .observe(document.getElementById('list'), {childList:true});
addSearch();