export const excerpt =function(text,limit=100){
    if(text.length > limit){
        return text.substring(0,limit)+ "....";
    }
    return text;
}


// //obj destructuring
// let myself={
//   name:"anm",
//   age:22
// }
// console.log(myself.name,myself.age);
// let {name,age}=myself;
// console.log(name,age);