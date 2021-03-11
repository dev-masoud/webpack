let input1 = document.getElementsByClassName("put1")[0]
let input2 = document.getElementsByClassName("put2")[0]
let res = document.getElementsByClassName("res")[0]

input1.addEventListener("input",func)
input2.addEventListener("input",func)


function func(){
    let x =parseFloat(input1.value) || 0 ;
    let y =parseFloat(input2.value) || 0 ;
    res.innerHTML = x + y
}

let bob = document.getElementsByClassName("bob")[0]
let pat = document.getElementsByClassName("pat")[0]
let okh = document.getElementsByClassName("okh")[0]
let bobpic = document.getElementsByClassName("bobpic")[0]
let patpic = document.getElementsByClassName("patpic")[0]
let okhpic = document.getElementsByClassName("okhpic")[0]

bob.addEventListener("click",myfunc)
pat.addEventListener("click",myfunc1)
okh.addEventListener("click",myfunc2)


function myfunc(){

if (bobpic.className === 'hide'){
    bobpic.className = 'pic';
  } else {
    bobpic.className = 'hide';
  }
}

function myfunc1(){

    if (patpic.className === 'hide'){
        patpic.className = 'pic';
      } else {
        patpic.className = 'hide';
      }
    }

    function myfunc2(){

        if (okhpic.className === 'hide'){
            okhpic.className = 'pic';
          } else {
            okhpic.className = 'hide';
          }
        }