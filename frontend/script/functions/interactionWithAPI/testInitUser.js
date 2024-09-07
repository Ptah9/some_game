async function initUser(code) {
    let username = localStorage.getItem("username")
    if (! username) {
        username = await prompt("введите ник");
        localStorage.setItem("username", username)
    }

    const response = await fetch("initUserPlease", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            password: "pipe",
            user: username,
            code: code
        })
    });
    if (response.ok === true) {
        return "ok"
    }
}




    export default initUser;