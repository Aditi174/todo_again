const user_input = document.getElementById("inputs")
const Button = document.getElementById("buttons")
const container = document.getElementById("item")

let array = JSON.parse(localStorage.getItem('Key')) || [];

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

        let deleteicon = document.createElement("i");
        deleteicon.className = "fa-solid fa-trash";
        listitems.appendChild(deleteicon);

        let editicon = document.createElement("span")
        editicon.className = "material-symbols-outlined"; 
        editicon.textContent = "edit";
        listitems.appendChild(editicon);

        
        deleteicon.addEventListener('click', () => {
            deleteitems(i);
        });

        editicon.addEventListener('click',()=>{
            update(i)
        })

        container.appendChild(listitems)
    }


    
}

function deleteitems(i){
    array = array.filter(ele => ele !==i)

    localStorage.setItem('Key', JSON.stringify(array));
    display()

}

function update(i){
    const index = array.indexOf(i)

    const model = document.createElement("div");
    model.className = "overlay";
    document.body.appendChild(model);

    const main = document.createElement("div")
    main.className = "Main"
    document.body.appendChild(main)

    const nextinput = document.createElement("input")
    nextinput.className = "N_input"
    nextinput.type = "text"
    nextinput.value = i

    main.appendChild(nextinput)

    const savebutton = document.createElement("button");
    savebutton.type = "submit";
    savebutton.className = "save"
    savebutton.textContent = "save";

    main.appendChild(savebutton)

    savebutton.addEventListener('click', ()=>{
        const updatedvalue = nextinput.value
        array[index] = updatedvalue

        localStorage.setItem("keys", JSON.stringify(array));
        display();

        model.style.opacity = 0
        main.style.display = "none"
        model.style.display = "none"
    })


}
display()