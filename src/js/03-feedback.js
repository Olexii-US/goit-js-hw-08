const fornRef = document.querySelector('.feedback-form')

fornRef.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    console.log(event.currentTarget)

}


console.log('hi')

