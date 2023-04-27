const btn = document.getElementById("btnTop")
const html = document.querySelector('html')
const chk = document.getElementById('chk')

const burger = document.querySelector(".burger")
const navLink = document.querySelector(".links")

burger.addEventListener("click", () =>{
    burger.classList.toggle("active")
    navLink.classList.toggle("active")
})

chk.addEventListener('change', () => {
    html.classList.toggle('dark-mode')
}) 


btn.addEventListener("click", () => {
    window.scrollTo(0, 0)
    document.removeEventListener("scroll", ocult)
})

const ocult = () => {
    if (window.scrollY > 10) {
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

document.addEventListener("scroll", () => {
    ocult()
    document.removeEventListener("scroll", ocult)
})

ocult()

