const userInput = document.querySelector("#textareaInput")
const postData = document.querySelector("#post-data")
const postbutton = document.querySelector("#post-btn")
let userInputData;
const userInputHandler = (e) => {
    userInputData = e.target.value
}
const postclickHandler = () => {
    postData.textContent = userInputData
}
userInput.addEventListener("input",userInputHandler);
postbutton.addEventListener("click",postclickHandler);