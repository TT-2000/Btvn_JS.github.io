const ask = document.querySelectorAll(".ask")


ask.forEach(each => {
    const down = each.querySelector(".down")
    const close = each.querySelector(".close")
    const node = each.querySelector(".node")
    let toggle = true

    down.onclick = () => {
        toggle = down.classList.toggle("bx-x")

        if (toggle === true) {
            console.log("true")
            node.style.display = "block"
            each.classList.add("img")
        } else {
            node.style.display = "none"
            each.classList.remove("img")

        }
        
    }

    
    
})