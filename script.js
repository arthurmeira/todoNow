let input = document.getElementById('input');
let task = document.getElementById('task');
let add = document.getElementById('add');
let total = document.getElementById('total');
let cAll = document.getElementById('cAll');
   
function newTask (taskString) {
    if (input.value.length == 0) {
        alert('Please enter a task!');
    } else {
        document.getElementsByClassName('content').innerHTML += `
        <div class="content">
            <ul id="list">
                <li id="li">
                    <input id="cBox" type="checkbox">
                    <label id="task">
                        ${document.getElementById('input').value}
                    </label>
                    <div class="btns">
                        <img id="remove" src="images/remover.png">
                    </div><!--btns-->
                </li>
            </ul>
        </div><!--content--> 
        `;
    }
}

add.addEventListener("click", newTask); 

/*
let input = document.getElementById('input').value, 
        listNode = document.getElementById('list'),
        liNode = document.createElement('li'),
        txtNode = document.createTextNode(input);
*/