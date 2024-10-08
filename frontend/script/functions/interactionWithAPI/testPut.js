async function Put(key, value) {
    let username = localStorage.getItem("username")
    if (! username) {
        username = await prompt("введите ник");
        localStorage.setItem("username", username)
    }

    const response = await fetch(`/set/${key}`, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            password: "pipe",
            user: username,
            value: value
        })
    });
    if (response.ok === true) {
        return "ok"
    }
}



export default Put;