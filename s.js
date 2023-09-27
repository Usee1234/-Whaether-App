let hello=function(n){
    const r="happy"
    this.name=n;
    console.log(r+this.name)
    console.log(this)
// const a=new hello("vibhu");
//   console.log(a)
// 
let a1=setTimeout(function() {
    console.log(this)
}.bind(this),1000)
}
// let a1=setTimeout(()=>{
//     console.log(this)
// },1000).bind(this)}
const a=new hello("vibhu");
console.log(typeof(a))
