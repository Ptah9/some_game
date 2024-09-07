async function Get(key) {
    let username = localStorage.getItem("username")
    if (! username) {
        username = await prompt("введите ник");
        localStorage.setItem("username", username)
    }

    const response = await fetch(`get/${key}`, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            password: "pipe",
            user: username
        })
    });
    if (response.ok === true) {
        const value = await response.json();
        return value.value
    }
}




    export default Get;