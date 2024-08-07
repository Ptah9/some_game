async function getGeneration(entranceSide) {
    const response = await fetch(`generateNewLevelPlease/${entranceSide}`, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
            password: "pipe",
            user: "Ptah_9"
        })
    });
    if (response.ok === true) {
        const value = await response.json();
        return value
    }
}




    export default getGeneration;
    // http://localhost:3000/generateNewLevelPlease/1
