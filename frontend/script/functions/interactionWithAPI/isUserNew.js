async function IsUserNew() {
    const response = await fetch("isUserNew", {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            password: "pipe",
            user: "Ptah_9"
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