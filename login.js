function login() {
    const p1name = document.getElementById("p1name").value
    const p2name = document.getElementById("p2name").value
 if (p1name && p2name) {
    localStorage.setItem("p1name", p1name);
    localStorage.setItem("p2name", p2name);
    location = "game.html";
}
}