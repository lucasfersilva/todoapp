/* VARIABLES */
var listElement= document.querySelector("#app ul")
var inputElement = document.querySelector("#app input")
var buttonElement = document.querySelector("#app button")


/* TO DO`S ARRAY */
var todos=JSON.parse(localStorage.getItem("list_todos")) || []

/* FUNCTION THAT RENDER THE TO DO`S AND THE EXCLUDE BUTTON */
function renderTodos(){
    listElement.innerHTML="";
    for (todo of todos){
       var todoElement = document.createElement("li");
       var todoText= document.createTextNode(todo);
       var linkElement=document.createElement("a");
      
       linkElement.setAttribute("href", "#");
      
       var pos= todos.indexOf(todo);
      
       linkElement.setAttribute("onclick","deleteTodo("+ pos +")")
      
       var linkText= document.createTextNode("   -Excluir");        
       
       linkElement.appendChild(linkText); 
       todoElement.appendChild(todoText);
       todoElement.appendChild(linkElement);
       listElement.appendChild(todoElement)
    }
}
renderTodos()

/* FUNCTION TO ADD TO DO`S  */
function addTodo(){
    var todoText= inputElement.value;

    todos.push(todoText);
    inputElement.value=" ";
    renderTodos();
    saveToStorage()
}
buttonElement.onclick=addTodo;

/* Function To delete by position */
function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage()
}

function saveToStorage(){
    localStorage.setItem("list_todos", JSON.stringify(todos));
}