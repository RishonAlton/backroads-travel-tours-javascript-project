const date = document.getElementById("date")
const navbar = document.querySelector(".navbar")
const hamburgerButton = document.querySelector(".hamburger-button")
const linksContainer = document.querySelector(".links-container")
const navLinks = document.querySelector(".nav-links")
const scrollLinks = document.querySelectorAll(".scroll-link")


date.textContent = new Date().getFullYear()


hamburgerButton.addEventListener("click", () => {

    const linksHeight = navLinks.getBoundingClientRect().height
    const containerHeight = linksContainer.getBoundingClientRect().height

    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px` 
    }
    
    else {
        linksContainer.style.height = 0
    }

})


scrollLinks.forEach(link => {

    link.addEventListener("click", (e) => {
        e.preventDefault()
        const id = link.getAttribute("href").slice(1)
        const element = document.getElementById(id)
        let position = element.offsetTop
        const navHeight = navbar.getBoundingClientRect().height
        const containerHeight = linksContainer.getBoundingClientRect().height
        if(navHeight > 75) {
            position = element.offsetTop + containerHeight
        }
        scrollTo({
            top: position - navHeight,
            left: 0
        })
        linksContainer.style.height = 0
    })

})
