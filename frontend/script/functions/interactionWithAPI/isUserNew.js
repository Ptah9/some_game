async function IsUserNew() {
    let username = localStorage.getItem("username")
    if (! username) {
        username = await prompt("введите ник");
        localStorage.setItem("username", username)
    }
    const response = await fetch("isUserNew", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            password: "pipe",
            user: username
        })
    });
    if (response.ok === true) {
        const value = await response.json();
        if (value.value == "true"){
            return true
        }
        else {
            return false
        }
    }
}



    export default IsUserNew;




