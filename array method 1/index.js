let masoud =["ali","haji","alii","sajjad"]


let city = ["tabriz","tehran","mashhad"]


let x = masoud.concat(city)
console.log(x);



let y = masoud.copyWithin(0,2)
console.log(y);

let z = masoud.entries();
console.log(z.next().value);
console.log(z.next().value);
console.log(z.next().value);
console.log(z.next().value);


let num=[3,45,32,12,6,98];

function myfunc(age){
    return age > 18;
}
let h = num.every(myfunc)
console.log(h);