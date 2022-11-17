const boxImg = document.querySelectorAll(".img-box")
const text = document.querySelectorAll(".text")
console.log(text)


boxImg.forEach( (element, index) => {
    let addText = text[index]
    console.log(addText)
    element.onclick = () => {

        document.querySelector(".img-box.active").classList.remove("active")
        document.querySelector(".text.active").classList.remove("active")

        element.classList.add("active") 
        addText.classList.add("active") 
    }
})