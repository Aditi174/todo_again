const user_input = document.getElementById("inputs")
const Button = document.getElementById("buttons")
const container = document.getElementById("item")

const array = JSON.parse(localStorage.getItem('Key')) || [];

Button.addEventListener("click",()=>{
    const inputvalue = user_input.value
    array.push(inputvalue)
    localStorage.setItem('Key', JSON.stringify(array));
    user_input.value = ""

    display()
})

function display(){

    container.innerHTML = ""

    for(const i of array){

        const listitems = document.createElement("li");
        listitems.className = "list";
        listitems.textContent = i;

        container.appendChild(listitems)
    }
}
display()