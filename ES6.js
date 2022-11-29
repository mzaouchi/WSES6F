// Scope
// function Test(){
//     // {
//     //   var a = 5
//     //   // console.log(a)
//     // }
//     // console.log(a)
  
//     // {
//     //   let a = 7
//     //   // console.log(a)
//     // }
//     // console.log(a)
//     {
//       const a = 9
//       // console.log(a)
//     }
//     console.log(a)
//     return 'Hello ES6'
//   }
//   console.log(Test())

// Const
// const a = 6
// a = 8
// const tab =[1,2,3]
// tab.push(7)
// console.log(tab)
// const obj = {name : "Montassar",track :'FullJS'}
// console.log(obj.track)
// obj.name = "Amine"
// console.log(obj)

// Arrow
// function Somme(a,b){
//   return a+b
// }

// console.log(Somme(1,2))

// var Somme=(a,b)=>{
//   return a+b
// }

// console.log(Somme(3,4))

// var Somme = (a, b) => {
//   a=a*2
//   return a+b
// }
// console.log(Somme(2,4))
// var Somme=(a,b)=> a+b
// console.log(Somme(2,3))

// let Bonjour=()=> 'Hello Montassar'
// console.log(Bonjour())

// var Bonjour=name=> 'Hello '+name
// console.log(Bonjour('Sana'))

// Template
// var name = "Mahmoud"

// console.log('Hello'+name)
// console.log(`Hello ${name}. I am a student at ${name}`)

// Ternary
// // var age = 11


// // if(age<=18){
// //   console.log("Mineur")
// // }else if(age<=60){
// //   console.log('Adule')
// // }else{
// //   console.log("Vieux")
// // }

// // age <= 18 ? console.log("Mineur") : age <= 60 ? console.log('Adule') : console.log("Vieux")

// // var name = "Yassine"

// // name == "Yassine" ? console.log('Tfol S8ir') : console.log('Daynasour')

// var color = "Green"

// // if(color == "Red"){
// //   console.log('Alert')
// // }

// color == "Red" && console.log('Alert')

// Des
// var obj = {name :'Amine', old : 26 , add : {street : 11,cp : 2034}}

// // const Hello=(a)=> `Hello ${a.name}, I am ${a.old}, From ${a.add.street}`

// // console.log(Hello(obj))

// const Hello=(a)=>{
//   const {name,old,add} = a
//   const {street} = add
//   return `Hello ${name}, I am ${old}, From ${street}`
// }
// console.log(Hello(obj))

// Spread
// // var t = [1,2,3]
// // var tt = [8,8,9]
// // var d = t
// // console.log(d)
// // // console.log([t+tt])
// // for(let i =0;i<tt.length;i++){
// //   d.push(tt[i])
// // }
// // console.log(d)

// // console.log([...t,9999999])
// // var z = [...t, 9999999]
// // console.log(z)
// // console.log(t)

// var obj = { name: 'Amine', old: 26, add: { street: 11, cp: 2034 } }
// console.log({...obj, salle :'tunis',name:'Mahmoud'})
// console.log(obj)



// Array


// console.log(t.reduce((a,b,c,d)=> a+b*2))

// // var t = [44,66,9,1,2,7,7]
// var d = []
// // console.log(t.map((el,i,t)=>el+1))
// // var tt =  t.map((el, i, t) => el + 1)
// // console.log(tt)
// // console.log(t)
// // t.forEach((el, i, t) => d.push(el + 1))
// // console.log(d)
// // console.log(t)

// // console.log(t.find((el,i,t)=> el == 2))
// // console.log(t.findIndex((el,i,t)=>el == 7))
// // console.log(t.sort((a, b) => a - b))
// // console.log(t.sort((a,b)=> b-a))


// var t = [44, 66, 9, 1, 2, 7, 7]
// var ch = 'Montassar Amine Sana'
// // console.log(t.splice(3))
// // console.log(t.splice(1,3))
// // console.log(t.splice(2,2))
// // console.log(t.splice(0, 3))
// console.log(ch.split(' ').join(' '))
// console.log(t.join('++'))
