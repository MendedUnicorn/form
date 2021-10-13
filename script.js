

const form = document.querySelector("form")
const email = document.querySelector("#email")
const list = document.querySelector("input[list]")
const listOptions = document.querySelectorAll("option")
const zip = document.querySelector("#zip")
const password = document.querySelector("#password")
const passwordConfirm = document.querySelector("#password-confirm")


function validateDataListEntry(listId) {
    let optionFound = false
    for (let i = 0; i < listOptions.length; i++) {
        if (listOptions[i].value !== list.value) {
            optionFound = false
        } else {
            optionFound = true
            break;
        }
    }
    return optionFound
}
email.addEventListener("change", ()=> {
    if(!email.validity.valid) {
        email.setCustomValidity("Please enter your email address in the proper format")
        email.reportValidity()
    } else {
        email.setCustomValidity("")
    }
})

list.addEventListener("change", () => {
    if(!validateDataListEntry()) {
        list.setCustomValidity("Please enter an existing country.")
        list.reportValidity()
    } else {
        list.setCustomValidity("")
    }
})
password.addEventListener("change", () => {
     if(password.validity.tooShort) {
        password.setCustomValidity("Your password is too short. Please use 8 or more characters")
        password.reportValidity()
    } else {
        password.setCustomValidity("")
    }
})

passwordConfirm.addEventListener("change", ()=> {
  if(passwordConfirm.value !== password.value) {
    passwordConfirm.setCustomValidity("The Passwords dont match.")
    passwordConfirm.reportValidity()
  } 
  else {
    passwordConfirm.setCustomValidity("")
  }  
})


form.addEventListener("submit", () => {
    console.log("tried to submuit")
})