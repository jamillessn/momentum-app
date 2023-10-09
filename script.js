//----------------USERNAME script----------------------

const nameInputHolder = document.querySelector('.user-input-container')

const nameInput = document.querySelector('.user-input')
nameInput.addEventListener('keypress', greetUser)

const enteredName = document.createElement('span')
enteredName.classList.add('entered-name')


function greetUser(e){
    if(e.key === 'Enter'){
        let username = nameInput.value
        enteredName.textContent = username
        enteredName.style.display = 'initial'
        nameInputHolder.appendChild(enteredName)
        nameInput.style.display = 'none'

        let usernameDisplay = document.querySelector('.username')
        usernameDisplay.textContent = ", " + username + "."
    }

//edit USERNAME
enteredName.addEventListener('click', editName)

function editName(){
    enteredName.remove();
    nameInput.focus();
    nameInput.style.display = 'initial';
    nameInput.value = "";
    nameInput.setAttribute('placeholder', "")
}
}


//----------------CLOCK & GREETING script----------------------

let hrs = document.getElementById("hrs")
let min = document.getElementById("mins")

let currentTime = new Date();
let hh = currentTime.getHours()
let mm = currentTime.getMinutes()
let greetexp = document.querySelector('.greet')
let morninggreet = "Good morning"
let aftgreet = "Good afternoon"
let evegreet = "Good evening"

//Select body
let main = document.querySelector('body')

setInterval(()=>{

    hrs.innerHTML = (hh<10?"0":"")+ hh;
    min.innerHTML = (mm<10?"0":"")+ mm;

}, 1000)

  if(hh < 12){
        greetexp.textContent = morninggreet 
        main.classList.add('morningbg')  
    }
    else if (hh > 12 && hh < 18){
        greetexp.textContent = aftgreet 
        main.classList.add('afternoonbg')      
    }
    else {
        greetexp.textContent = evegreet
        main.classList.add('eveningbg')
    }   


//----------------FOCUS script----------------------
const focusInput = document.querySelector('.focus-input')
const focusOutput = document.querySelector('.focus-output')


focusInput.addEventListener('keypress', e => {

    let focusIn = focusInput.value
    

    //add the edit icon
    let editIconfocus = document.createElement('i')
    editIconfocus.classList.add('fa-solid', 'fa-pen-to-square')

    if (e.key === 'Enter'){
        
        focusOutput.textContent = focusIn
        
        focusInput.style.display = 'none'
        focusOutput.style.display = 'block'
        focusOutput.append(editIconfocus)

        //add event listener to edit icon on focus
        editIconfocus.addEventListener('click', editFocus)
        
    }

    
    //edit icon function
    function editFocus(){
        focusInput.style.display = 'initial'
        focusInput.setAttribute('placeholder', "")
        focusOutput.innerHTML = ""
        focusOutput.style.display = 'none'

    }

})


//----------------Quotes SCRIPT----------------------
const quoteHolder = document.querySelector('.quote');
let quotes = [
    "Success is not final, failure is not fatal: It is the courage to continue that counts.", 
    "Believe you can and you're halfway there.", 
    "The only way to do great work is to love what you do.",
    "Don't watch the clock; do what it does. Keep going.",
    "The future belongs to those who believe in the beauty of their dreams."]

    function getRandomQuotes() {
            let randomIndex = Math.floor(Math.random() * quotes.length);
            return quotes[randomIndex];
            
        }

    setInterval(()=>{
        quoteHolder.innerText = `"` + getRandomQuotes() + `"`
            
    }, 5000)


//When Quote is clicked
quoteHolder.addEventListener('click', addQuote)


//Add Quote
function addQuote(){
    quoteHolder.style.display = 'none'
    let quoteInput = document.createElement('input')
    let quoteDiv = document.querySelector('.quote-div')

    quoteInput.classList.add('quote-input')
    quoteInput.setAttribute('placeholder', 'Add your quote here!')
    quoteDiv.append(quoteInput)

    quoteInput.addEventListener('keypress', function (e){
        if(e.key === 'Enter'){
            let newQuote = quoteInput.value
            if(!quoteInput.value){
                quoteHolder.style.display = 'block'
                quoteInput.style.display = 'none'
            }
            else{
                quoteHolder.innerText = `"` + newQuote + `"`
                quotes.push(newQuote)
                console.log(quotes)
                quoteInput.style.display = 'none'
                quoteHolder.style.display = 'block'
                
            }
        }

    })
}

//----------------To-do list ----------------------
const todoInput = document.querySelector('.todo-input')
const todoText = document.querySelector('.todo-text')
const todoModal = document.querySelector('.todo-modal')
const todoContainer = document.querySelector('.todo-container')

todoText.addEventListener('click', opencloseModal)
todoInput.addEventListener('keypress', addToDo)


function addToDo(e) {

    if (e.key === "Enter"){

        if(todoInput.value === ""){
            
        } else {
            
            //create to-do DIV with toDo class
            const divToDo = document.createElement('div')
            divToDo.classList.add('todo-li')

            //toDo Span
            let toDoSpan = document.createElement('span')
            toDoSpan.innerHTML = todoInput.value

            //add the delete icon and check icon
            let checkIconTodo = document.createElement('i')
            checkIconTodo.classList.add('fa-solid', 'fa-square-check')
            let trashIconTodo = document.createElement('i')
            trashIconTodo.classList.add('fa-solid', 'fa-delete-left')
            
            todoModal.append(divToDo)
            divToDo.append(toDoSpan)
            divToDo.append(checkIconTodo)
            divToDo.append(trashIconTodo)
            
            todoInput.value = ""
            
            //add eventlistener click to delete and check icon
            trashIconTodo.addEventListener('click', removeToDo)
            checkIconTodo.addEventListener('click', checkToDo)

            function removeToDo(){
                divToDo.remove()
            }

            function checkToDo(){
                toDoSpan.classList.add('checktodo')
            }

        }

    }
    
}


function opencloseModal(){
    if(todoModal.style.display === 'block'){
        todoModal.style.display = 'none'
    } else
    {
        todoModal.style.display = 'block'
    }
}