
async function Get(key) {
    // отправляет запрос и получаем ответ
        const response = await fetch(`/${key}`, {
            method: "GET",
            headers: { "Accept": "application/json" }
        });
        // если запрос прошел нормально
        if (response.ok === true) {
        // получаем данные
        const value = await response.json(); 
        return value.value
        }
    }

    export default Get;