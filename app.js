const mohtaviat  =  document.querySelector(".mohtaviatslider");
const menuitem = document.querySelectorAll('.menuitem');
const pardakhtbtn= document.querySelector('.pardakht')
 const payment = document.querySelector('.payment')
 const closebtn= document.querySelector('.close')
 const back = document.querySelector('.back')
const mahsul=[
    {
        id:1,
        titel:"مردانه",
        gheymat:12000000,
        colors:[
          {  code:"black",
          img:"./img/air.png"},
          {
              code:"blue",
              img:"./img/air2.png",
          },



        ],

    },
    {
        id:2,
        titel:"زنانه",
        gheymat:14000000,
        colors:[
          {  code:"lightgray",
          img:"./img/jordan.png"},
          {
              code:"green",
              img:"./img/jordan2.png",
          },



        ],

    },
    {
        id:3,
        titel:"بچه گانه",
        gheymat:12500000,
        colors:[
          {  code:"lightgray",
          img:"./img/blazer.png"},
          {
              code:"green",
              img:"./img/blazer2.png",
          },



        ],

    },
    {
        id:4,
        titel:"ورزشی",
        gheymat:17000000,
        colors:[
          {  code:"black",
          img:"./img/crater.png"},
          {
              code:"white",
              img:"./img/crater2.png",
          },



        ],

    },
    {
        id:4,
        titel:"کژوال",
        gheymat:11000000,
        colors:[
          {  code:"gray",
          img:"./img/hippie.png"},
          {
              code:"black",
              img:"./img/hippie2.png",
          },



        ],

    },


];
let mahsulantekhabi=mahsul[0];
const axmahsulantekhabi=document.querySelector(".axmahsul");
const tozihmahsul=document.querySelector(".mahsultitel");
const gheymatmahsul=document.querySelector(".gheymatmahsul");
const rangmahsul =document.querySelectorAll(".color");
const sizemahsul =document.querySelectorAll(".siz");




menuitem.forEach((item,index)=>{
    item.addEventListener('click',function(){
       mohtaviat.style.transform=`translateX(${-100*index}vw)`
       //برای  عوض  کردن محصول  مورد نظر  در پایین  صفحه 
       mahsulantekhabi=mahsul[index]
       // عوض  کردن متن  انتخابی  محصول  
tozihmahsul.textContent=mahsulantekhabi.titel
gheymatmahsul.textContent="ریال"+mahsulantekhabi.gheymat

sizemahsul.textContent= mahsulantekhabi.gheymat
axmahsulantekhabi.src=mahsulantekhabi.colors[0].img
rangmahsul.forEach((color, index) => {
    color.style.backgroundColor = mahsulantekhabi.colors[index].code;
})


    })
})
rangmahsul.forEach((color, index) => {
    color.addEventListener('click',function(){
        axmahsulantekhabi.src=mahsulantekhabi.colors[index].img
    })
})
sizemahsul.forEach((siz,index)=>{
    siz.addEventListener('click',()=>{
        sizemahsul.forEach((siz)=>{
            siz.style.backgroundColor="white"
            siz.style.color="black"
        })
        siz.style.backgroundColor="black"
        siz.style.color="white"
    })
})
 

pardakhtbtn.addEventListener('click',()=>{
    payment.style.display="flex";
})
closebtn.addEventListener('click',()=>{
    payment.style.display="none";
})
back.addEventListener('click',()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
})
