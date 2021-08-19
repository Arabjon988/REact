// const search = document.querySelector(".search")
// const searchBtn = document.querySelector(".btn")
// const closed = document.querySelector(".close")


// searchBtn.addEventListener("click", () =>
// {
//   search.classList.add("searchOpen")
//   closed.classList.add("closeBar")
// })

// closed.addEventListener("click", () => {
//   search.classList.remove("searchOpen")
//   closed.classList.remove("closeBar")
// })





const arr = [
  {
    id: 1, name: "Gaffor", hobby: "football"
  },
  {
    id: 2, name: "Gaffor", hobby: "football"
  },
  {
    id: 3, name: "Gaffor", hobby: "football"
  },
  {
    id: 4, name: "Gaffor", hobby: "football"
  },
  {
    id: 5, name: "Gaffor", hobby: "football"
  },
  {
    id: 6, name: "Gaffor", hobby: "football"
  },
  {
    id: 7, name: "Gaffor", hobby: "football"
  }
]


const getFilter = (key) =>{
  const newArr = arr.filter((val) => {
    console.log(val.name !== "Vali")
  })
}

















































// const num = [27,10,3,8]

// if(num < 2) return false;
//  else if(num < 3) return false;
// else if(num < 4) return false;
// else if(num < 5) return false;
  

//   for (let k = 2; k < num; k++){
//     if( num % k == 0){
//       return false;
//     }
//   }
//   return true;
//  const number = [1,5,6565,4465,1,564,87,97,,98,79,79,79,46,564]  
 
//     if(number < 2) 
//     {return false;}
  
//     for (let k = 2; k < number; k++){
//       if( number % k == 0){
//         return false;
//       }
//     }
    
//      return true