gsap.set(
"#spellPath path",
{
stroke:"#72dfff",
fill:"transparent",

strokeWidth:1.5,

strokeDasharray:1200,
strokeDashoffset:1200
}
);

gsap.set(".gold-mist",{
opacity:0
});

gsap.set(".portal-flash",{
opacity:0
});

const tl=gsap.timeline();




// 1 藍色刻印

tl.to(
"#spellPath path",
{

strokeDashoffset:0,

duration:1.2,

stagger:.035,

ease:"power1.out"

})




// 2 突然染血

.to(
"#spellPath path",
{

stroke:"#c00000",

fill:"#c00000",

duration:.08,

stagger:0

})




// 3 本體開始不對勁

.to(
"#spellPath",
{

scale:1.05,

filter:`

drop-shadow(0 0 20px red)
drop-shadow(0 0 60px #900)
drop-shadow(0 0 120px rgba(255,0,0,.8))

`,

duration:.25

})




// 4 感染開始

.call(()=>{

function spawnRunes(
count,
delay,
sizeMin,
sizeMax
){

for(let i=0;i<count;i++){

const rune=
document.createElement("div");

rune.className=
"rune-copy";

rune.innerText=
"Ἐκ τοῦ αἵματος ἀνοίγω";

document.body.appendChild(
rune
);




// 完全隨機世界座標

gsap.set(
rune,
{

left:
gsap.utils.random(
-40,
130
)+"vw",

top:
gsap.utils.random(
-40,
130
)+"vh",

scale:
gsap.utils.random(
sizeMin,
sizeMax
),

rotation:
gsap.utils.random(
-100,
100
)

});




// 出現

gsap.fromTo(
rune,

{

opacity:0,

scale:.1

},

{

opacity:
gsap.utils.random(
.45,
1
),

scale:
gsap.utils.random(
2,
15
),

duration:.25,

delay:i*delay,

ease:"power2.out"

});

}

}



// 慢

spawnRunes(
1,
0,
1,
2
);

setTimeout(()=>{

spawnRunes(
2,
.2,
1,
2
)

},600);


setTimeout(()=>{

spawnRunes(
5,
.08,
1,
3
)

},1200);


setTimeout(()=>{

spawnRunes(
15,
.03,
1,
4
)

},1700);




// 爆

setTimeout(()=>{

spawnRunes(
120,
.001,
1,
10
)

},2200);

})




// 故障開始

.to(
".rune-copy",
{

x:"random(-150,150)",

y:"random(-150,150)",

rotation:"random(-60,60)",

duration:.05,

repeat:12,

yoyo:true

})




// 開始巨大化

.to(
".rune-copy",
{

scale:
()=>gsap.utils.random(
100,
260
),

duration:2,

stagger:.0005,

ease:"expo.in"

},"-=1")




// 整個世界開始被紅色覆蓋

.to(
".portal-flash",
{

opacity:1,

background:"#990000",

duration:1

},"<")



.to(
".gold-mist",
{

opacity:1,

filter:`

blur(300px)

brightness(.3)

`,

duration:1.2

},"<")




// 所有文字衝出畫面

.to(
".rune-copy",
{

scale:500,

rotation:
"random(-360,360)",

x:
"random(-10000,10000)",

y:
"random(-10000,10000)",

opacity:0,

duration:.4,

stagger:.0005

})




// 主咒文一起被撕裂

.to(
"#spellPath",
{

scale:30,

opacity:0,

duration:.2

},"<")




// 啪

.to(
"body",
{

background:"black",

duration:.08

})




// 清場

.call(()=>{

document
.querySelectorAll(
".rune-copy"
)

.forEach(
e=>e.remove()
)

})



.to(
".gold-mist,.portal-flash",
{

opacity:0,

duration:.1

},"<")