    const navbar = document.getElementById("navbar");

    async function loadNavbar(){
    const res = await fetch("Component/navbar.html")
    const result = await res.text()
    navbar.innerHTML = result
    }

    loadNavbar()

    