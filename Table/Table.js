let user = document.getElementsByClassName('name')[0]
let phone = document.getElementsByClassName('phone')[0]
let email = document.getElementsByClassName('email')[0]
let table = document.getElementsByClassName('table')[0]
let button = document.getElementsByClassName('btn')[0]
let tbody = document.getElementsByClassName('tbody')[0]

let obj = {
    user:"",
    phone:"",
    email:""

}

user.addEventListener('input',func1)
function func1(e){
    obj.user= e.target.value
}

phone.addEventListener('input',func2)
function func2(e){
    obj.phone= e.target.value
}

email.addEventListener('input',func3)
function func3(e){
    obj.email= e.target.value
}
let i = 1
button.addEventListener('click',create)
function create(){
    let row =document.createElement('tr')
    row.classList.add('trow')
    tbody.appendChild(row)
    
    let cell0 = document.createElement('td')
    cell0.classList.add('cell0')
    row.appendChild(cell0)
    cell0.innerText =i
    let cell1 = document.createElement('td')
    cell1.classList.add('cell1')
    row.appendChild(cell1)
    cell1.innerText =user.value

    let cell2 = document.createElement('td')
    cell2.classList.add('cell2')
    row.appendChild(cell2)
    cell2.innerText =phone.value

    let cell3 = document.createElement('td')
    cell3.classList.add('cell3')
    row.appendChild(cell3)
    cell3.innerText =email.value
    i++
}
