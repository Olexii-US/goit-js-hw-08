import throttle from 'lodash.throttle'

const STORAGE_KEY = "feedback-form-state"

const formRef = document.querySelector('.feedback-form')
const emailRef = document.querySelector("input[name = email]");
const messageRef = document.querySelector("textarea[name = message]");

savedStorageMessage();

formRef.addEventListener("input", throttle(onFormInput, 500));
formRef.addEventListener("submit", onFormSubmit);

const formData = {};
const formDataSend = {};


function onFormInput(event) {
    formData[event.target.name] = event.target.value
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
    // console.log(formData)
}

function onFormSubmit(evt) {
    evt.preventDefault();

        if (!emailRef.value || !messageRef.value) {
        return alert('Please, fill in all fields')
    }
    
    const submitFormData = new FormData(evt.currentTarget)
    
    submitFormData.forEach((value, name) => {
        formDataSend[name] = value;        
      });    
    console.log(formDataSend)

    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);    
} 

function savedStorageMessage() {
    let savedObj = localStorage.getItem(STORAGE_KEY)

    if (savedObj) {
        savedObj = JSON.parse(savedObj)

        Object.entries(savedObj).forEach(([name, value]) => {
            formRef.elements[name].value = value;
        })
        console.log(Object.entries(savedObj))
    }    
}

// function savedStorageMessage() {
//     const savedObj = localStorage.getItem(STORAGE_KEY)

//     if (savedObj) {
//         const parsedData = JSON.parse(savedObj)

//         emailRef.value = parsedData.email
//         messageRef.value = parsedData.message
//     }    
// }
