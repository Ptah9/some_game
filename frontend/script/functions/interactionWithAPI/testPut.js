async function Put(key, value) {
    const response = await fetch(`/${key}`, {
        method: "POST",
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({"value": value})
    });
}

export default Put;