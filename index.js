// const arr = [{Name:'Abrar khan',Image : 'first.png',Description : 'Explain Description lorem ljam os ljmam Explain Description lorem ljam os ljmam'}]

let arr = []

let prom1 = parseInt( prompt("Enter the No how many Card you want to print") )

for(let i = 0; i < prom1; i++){

let obj = {Name:prompt("Please Enter your Name"),Image : prompt("Enter Image url"),Description :  prompt("Write Description")}

arr.push(obj)

}
