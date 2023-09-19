
// ......................................Dark mood.....................................


const b= document.querySelector('body')
const dark=document.querySelector('#Dark')
const main =document.querySelector('.main')
const bttn=document.querySelector('.show-botton')

dark.addEventListener("click",function(){

    this.classList.toggle('bi-moon')
     if(this.classList.toggle('bi-brightness-high-fill')){
        b.style.backgroundColor="white";
        b.style.color="black"
        b.style.transition='2s'
        main.style.background="rgba(0,0,0,0.2)"
        main.style.boxShadow="8px 8px 40px black"
        
     }
     else{
        b.style.backgroundColor="black";
        b.style.color="white"
        b.style.transition='2s'
        main.style.background="rgba(255, 255, 255, 0.2)"
        main.style.boxShadow="6px 6px 30px #bab9b9"    
     }
})


const showbtn= document.querySelector('.show-botton')
const horizontal= document.querySelector('#horizontal')
const vertical= document.querySelector('#vertical')
const toasttype= document.querySelector('#toast-type')
const toastmsg= document.querySelector('.text-msg')
const maintoast = document.querySelector('.main-toast')
const durationtime =document.querySelector('#range')


showbtn.addEventListener("click",function(){

    // ....................................content....................................................

    if(horizontal.value==='right'){
        maintoast.classList.add('right'); 
     }
     else{
         maintoast.classList.remove('right');
     }
     if(vertical.value==='bottom'){
         maintoast.classList.add('bottom'); 
      }
      else{
          maintoast.classList.remove('bottom');
      }

 //..................................NEW-Toast.................................

    const newtoast= document.createElement('div');
    newtoast.classList.add('toast');
    newtoast.classList.add(toasttype.value);
    newtoast.innerText= ` ${toastmsg.value} `;

    maintoast.append(newtoast);

// ..................................Close-Icon....................................................

    const closeIcon= document.createElement('span');
    closeIcon.innerText='✕';

    newtoast.append(closeIcon);

    function removetoast() {
        if(maintoast.classList.contains('right')){
          newtoast.classList.add('goRight');
        }
        else{
            newtoast.classList.add('goLeft');
        }
        setTimeout(() => {
         newtoast.remove();
        }, 200);
    }

    closeIcon.addEventListener("click",function () {
     removetoast() ;      
    })

    setTimeout(() => {
     removetoast() ;
    }, parseInt(durationtime.value)*1000);




})