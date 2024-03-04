let btnAdd = document.getElementById('btnAdd');
let input = document.querySelector('input');
let container = document.querySelector('.container');
let data = []
let mood = 'Add Task';
let indexUdapte;
// charge data[] from localStorage
if (localStorage.Data) {
    data = JSON.parse(localStorage.Data)
}
// add to localStorage
btnAdd.addEventListener('click',()=>{
    if (mood === 'Add Task') {
        if (input.value) {
            data.push(input.value)
            localStorage.Data = JSON.stringify(data)
            input.value = ''
            input.focus()
        }else{
            confirm('Vide input')
        }
    } else {
        data[indexUdapte] = input.value
        localStorage.Data = JSON.stringify(data)
        mood = 'Add Task';
        btnAdd.innerText = mood
        input.value = ''
    }
    readTask()
})
// add Task to container Dev
function readTask() {
    let tasks = ''
    for (let i = 0; i < data.length; i++) {
        tasks += `
        <div class="task">
           <p>${data[i]}</p>
           <div>
             <button type="button" onclick="UdapteTask(${i})" >Udapte</button>
             <button type="button" onclick="DeleteTask(${i})" >Delete</button>
           </div>
        </div>
        `
    }
    container.innerHTML = tasks
    if (tasks === '') {
        container.innerHTML = `<h1>No Task</h1>`
    }
}
readTask()
// udapte task
function UdapteTask(index) {
    mood = 'Udapte'
    btnAdd.innerText = mood
    input.value = data[index]
    input.focus()
    indexUdapte = index
}
// delete task
function DeleteTask(index) {
    data.splice(index,1)
    localStorage.Data = JSON.stringify(data)
    readTask()
}