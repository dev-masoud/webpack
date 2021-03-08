let opt1 =document.getElementsByClassName('opt1')[0]
let opt2 =document.getElementsByClassName('opt2')[0]
let opt3 =document.getElementsByClassName('opt3')[0]
let drop =document.getElementsByClassName('select')[0]
let btn =document.getElementsByClassName('btn')[0]
let input=document.getElementsByClassName('put')[0]

btn.addEventListener('click',myfunc)

function myfunc(){
    if(drop.value==="1"){
        window.location.assign(window.location.href)
    }
    else if(drop.value==="2"){
        if(input.value.length == 0){

            alert("empty")
        }
        else{
            window.location.assign(input.value)
        }
    }
    else{
            const url =window.location.href
            const domain=window.location.hostname
            const path=window.location.pathname
            const protocol=window.location.protocol
            
            window.localStorage.setItem('url',url)
            window.localStorage.setItem('domain name',domain)
            window.localStorage.setItem('file path',path)
            window.localStorage.setItem('protocol type',protocol)



    }
}








