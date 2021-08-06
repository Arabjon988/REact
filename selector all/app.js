const items = document.querySelectorAll(".collection__item")

items.forEach((li)=>
li.addEventListener("click", ()=>{
items.forEach(li=>li.classList.remove('border'))
li.classList.add("border")


})
)
const IbrohimTeacher= false
const AbbocTeacher= false
if(IbrohimTeacher=== true){
    console.log("ure nfjkshfkjhskj")
}
else{
    console.log(
        "djfkjdhfkjhsdkjfhsdjk"
    )
}

{IbrohimTeacher? alert("hfkjhgkjfgkjsfjk") : alert("2g12h13g1h31g3df")}

if(
    IbrohimTeacher&&AbbocTeacher
){
    alert("hfkjhgkjfgkjsfjk")
}

else if(IbrohimTeacher===true  || AbbosTeacher===false){
    alert("2g12h13g1h31g3df")
}








const items = document.querySelectorAll(".collection__item")

items.forEach((li) =>
    li.addEventListener("click", () => {
        items.forEach(li => li.classList.remove("border"))
        // li.innerHTML= items.value
        li.classList.add('border')



    })
)



console.log(items)



// items.addEventListener("click",{
//     items.style.border="5px solid black"
// })
// li.addEventListener("click", 
// ()=>{
//     console.log("hello world")
// })