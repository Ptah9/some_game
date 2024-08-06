async function Put(key, value) {
    const response = await fetch(`/set/${key}`, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            password: "pipe",
            user: "Ptah_9",
            value: value
        })
    });
    if (response.ok === true) {
        return "ok"
    }
}



export default Put;