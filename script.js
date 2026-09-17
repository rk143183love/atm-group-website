const C=window.ATM_CONTENT;
const $=id=>document.getElementById(id);
function render(){
 document.title=`${C.company.name} | ${C.company.descriptor}`;
 $('heroEyebrow').textContent=C.hero.eyebrow;$('heroTitle').innerHTML=C.company.tagline.replace('. ','.<br>');$('heroDescription').textContent=C.company.description;
 $('statEstablished').textContent=C.company.established;$('statEmployees').textContent=C.company.employees;
 $('aboutKicker').textContent=C.about.kicker;$('aboutTitle').textContent=C.about.title;$('aboutText').innerHTML=C.about.paragraphs.map(p=>`<p>${p}</p>`).join('')+`<div class="mini"><b>${C.company.established}</b> established · <b>${C.company.employees}</b> employees managed across projects and operational sites.</div>`;
 $('divisionsGrid').innerHTML=C.divisions.map(x=>`<article class="division"><b>${x.number}</b><h3>${x.name}</h3><p>${x.text}</p></article>`).join('');
 $('servicesGrid').innerHTML=C.services.map((x,i)=>`<article class="service"><span>${String(i+1).padStart(2,'0')}</span><h3>${x}</h3></article>`).join('');
 $('visionText').textContent=C.vision;$('missionText').textContent=C.mission;
 $('reasonsGrid').innerHTML=C.reasons.map(x=>`<article class="reason"><b>${x[0]}</b><h3>${x[1]}</h3><p>${x[2]}</p></article>`).join('');
 $('values').innerHTML=C.values.map(v=>`<span>${v}</span>`).join('');$('clientsGrid').innerHTML=C.clients.map((x,i)=>`<div>${String(i+1).padStart(2,'0')} &nbsp; ${x}</div>`).join('');$('complianceGrid').innerHTML=C.compliance.map(x=>`<div>${x}</div>`).join('');
 const links={About:'#about',Divisions:'#divisions',Services:'#services','Vision & Mission':'#vision',Clients:'#clients',Compliance:'#compliance',Contact:'#contact'};$('nav').innerHTML=C.navigation.map(n=>`<a href="${links[n]||'#'}">${n}</a>`).join('');
 const p1=$('phone1'),p2=$('phone2'),em=$('email');p1.href=`tel:+91${C.company.phone1}`;p1.innerHTML=`<small>CALL</small><b>${C.company.phone1}</b>`;p2.href=`tel:+91${C.company.phone2}`;p2.innerHTML=`<small>CALL</small><b>${C.company.phone2}</b>`;em.href=`mailto:${C.company.email}`;em.innerHTML=`<small>EMAIL</small><b>${C.company.email}</b>`;$('address').textContent=C.company.address;$('year').textContent=new Date().getFullYear();
}
render();
$('menu').addEventListener('click',()=>document.querySelector('nav').classList.toggle('open'));
