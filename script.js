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


// 1. 咒文書寫
tl.to(
"#spellPath path",
{

strokeDashoffset:0,

duration:1.5,

stagger:.06,

ease:"power1.out"

})



// 2. 藍→金
.to(
"#spellPath path",
{

stroke:"#ffd86b",

fill:"#ffd86b",

duration:1.2,

stagger:.015

})



// 3. 金霧醒來
.to(
".gold-mist",
{

opacity:.5,

duration:1.5

},"<")




// 4. 咒文第一次發亮

.to(
"#spellPath",
{

filter:`

drop-shadow(0 0 15px #ffd86b)
drop-shadow(0 0 35px #ffd86b)
drop-shadow(0 0 80px #ffe89a)

`,

duration:1.5

})




// 5. 開始過載

.to(
"#spellPath",
{

scale:1.02,

filter:`

drop-shadow(0 0 30px #ffd86b)
drop-shadow(0 0 80px #ffe89a)
drop-shadow(0 0 150px rgba(255,245,200,.55))
drop-shadow(0 0 240px rgba(255,255,220,.35))

`,

duration:2

},"<")




// 金霧同步變強

.to(
".gold-mist",
{

opacity:.9,

filter:`
blur(100px)
brightness(1.2)
`,

duration:2

},"<")




// 整個空間被照亮

.to(
".portal-flash",
{

opacity:.45,

duration:2

},"<")




// 最終爆發（維持，不收回）

.to(
"#spellPath",
{

scale:1.04,

filter:`

drop-shadow(0 0 50px #ffd86b)
drop-shadow(0 0 120px #ffe89a)
drop-shadow(0 0 220px rgba(255,245,220,.8))
drop-shadow(0 0 420px rgba(255,255,255,.5))

`,

duration:2

})



.to(
".portal-flash",
{

opacity:.85,

duration:2

},"<")




// 門完全打開

.to(
".portal-flash",
{

opacity:1,

duration:1.5

},"<")



// 空間被金光吞掉

.to(
"body",
{

background:`

radial-gradient(

circle,

#fffbe8 0%,

#ffe9a5 25%,

#ffd66d 55%,

#d49d1d 100%

)

`,

duration:2

},"<")




// 展開瞬間：符文被光吞掉

.to(
"#spellPath",
{

scale:1.08,

opacity:0,

filter:`

drop-shadow(0 0 80px #ffd86b)
drop-shadow(0 0 180px #fff1b0)
drop-shadow(0 0 350px rgba(255,255,255,.95))

`,

duration:.9,

ease:"power2.out"

},"-=2")