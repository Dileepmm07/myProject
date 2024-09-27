// const redDiv=document.getElementById("red");
// const greenDiv=document.getElementById("green");
// const blueDiv=document.getElementById("blue");
// redDiv.addEventListener("contextmenu",(event)=>{
//     event.preventDefault();
//     alert("red clicked");
// },true)
// greenDiv.addEventListener("click",()=>{
//     alert("green clicked");
// },true)
// blueDiv.addEventListener("click",(event)=>{
//    // event.stopPropagation();
//     alert("bl/ue clicked");
// },true)
// function x(){
//     var a=7;
//     function y(){
//         console.log(a);
//     }
//     return y;
// }
// let z=x();
// console.log(z);
// z();
// function creatorder(callback){
//     setTimeout(()=>{
//         console.log("order is created");
//         callback();
//     },3000)
//     creatorder(function(){
//         procedtopayment(function(){
//             showordersummery();
//         })
//     })
//     function  procedtopayment(callback){
//         setTimeout(()=>{
//             console.log("make a payment");
//             callback();
//         },3000)
//     }
//         function showordersummery(){
//             console.log("show summery");
//         }

// }
const cart =["pants","kurtha","shoes"];
function showordersummery(){
               console.log("show summery");
       }

function  proceedtopayment(callback){
             setTimeout(()=>{
                 console.log("make a payment");
                 callback();
            },3000)
         }
function creatOrder(callback){
    setTimeout(()=>{
           console.log("order is created");
                 callback();
                 

},3000)
}
creatOrder(function()
{
    proceedtopayment(function(){
        showordersummery();
    });
})
