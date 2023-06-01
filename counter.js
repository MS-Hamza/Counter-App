const counterElement = document.querySelector("h2");
// print(counterElement);
// console.log(counterElement.innerText);

const decrease = document.querySelector("#Decrease")
const increase = document.querySelector("#Increase")
const reset = document.querySelector("#Reset")

// console.log(reset)

counterElement.textContent = 0;
reset.addEventListener("click",function(){
    counterElement.textContent = 0;
})

increase.addEventListener("click",function(){
    +(counterElement.textContent)++;
})

decrease.addEventListener("click",function(){
    if(+(counterElement.textContent) == 0){
        alert("counter is already zero.");
    }else{
        +(counterElement.textContent)--; 
    }
})