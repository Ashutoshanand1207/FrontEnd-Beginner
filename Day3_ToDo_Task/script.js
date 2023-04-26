 const todoInput = document.getElementById('todoInput');
 const addBtn = document.getElementById('addBtn');
 const todoList = document.getElementById('todoList');
 const clearBtn = document.getElementById('clearBtn');


 addBtn.addEventListener('click', addTodo);

 function addTodo() {
    const todoText = todoInput.value;
    if(todoText === ""){
      return;
    }
    const listItem = document.createElement('li');
    listItem.innerHTML = todoText;

    todoList.appendChild(listItem);
    todoInput.value = "";
 }

 clearBtn.addEventListener('click', clearTodo);

 function clearTodo() {
   // for single line remove

   listItem = document.querySelector("li");
   console.log(listItem)
   listItem.remove()

   // for all clear

   // listItems = document.querySelectorAll("li");
   // console.log(listItems)
   // listItems.forEach(el => {
   //    el.remove()
   // });
 }