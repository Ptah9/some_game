async function Get(key) {
    const response = await fetch(`get/${key}`, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            password: "pipe",
            user: "Ptah_9"
        })
    });
    if (response.ok === true) {
        const value = await response.json();
        return value.value
    }
}




    export default Get;