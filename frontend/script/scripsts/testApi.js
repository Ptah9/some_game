// // Получение всех пользователей
// async function GetUsers() {
// // отправляет запрос и получаем ответ
//     const response = await fetch("/api/users", {
//         method: "GET",
//         headers: { "Accept": "application/json" }
//     });
//     // если запрос прошел нормально
//     if (response.ok === true) {
//     // получаем данные
//     const users = await response.json(); 
//         users.forEach(user => {
//             // добавляем полученные элементы в таблицу
//             tbody.append(row(user));
//         });
//     }
// }
// // Получение одного пользователя
// async function GetUser(id) {
//     const response = await fetch("/api/users/" + id, {
//         method: "GET",
//         headers: { "Accept": "application/json" }
//     });
//     if (response.ok === true) {
//         const user = await response.json();
//         const form = document.forms["userForm"];
//         form.elements["id"].value = user.id;
//         form.elements["name"].value = user.name;
//         form.elements["age"].value = user.age;
//     }
// }
// // Добавление пользователя
// async function CreateUser(userName, userAge) {
//     const response = await fetch("api/users", {
//         method: "POST",
//         headers: { "Accept": "application/json", "Content-Type": "application/json" },
//         body: JSON.stringify({
//             name: userName,
//             age: parseInt(userAge, 10)
//         })
//     });
//     if (response.ok === true) {
//         const user = await response.json();
//         reset();
//         tbody.append(row(user));
//     }
// }
// // Изменение пользователя
// async function EditUser(userId, userName, userAge) {
//     const response = await fetch("api/users", {
//         method: "PUT",
//         headers: { "Accept": "application/json", "Content-Type": "application/json" },
//         body: JSON.stringify({
//             id: userId,
//             name: userName,
//             age: parseInt(userAge, 10)
//         })
//     });
//     if (response.ok === true) {
//         const user = await response.json();
//         reset();
//         document.querySelector(`tr[data-rowid="${user.id}"]`).replaceWith(row(user));
//     }
// }
// // Удаление пользователя
// async function DeleteUser(id) {
//     const response = await fetch("/api/users/" + id, {
//         method: "DELETE",
//         headers: { "Accept": "application/json" }
//     });
//     if (response.ok === true) {
//         const user = await response.json();
//         document.querySelector(`tr[data-rowid="${user.id}"]`).remove();
//     }
// }


import Get from "../functions/interactionWithAPI/testGet.js";
import Put from "../functions/interactionWithAPI/testPut.js";

Put("lol", "lul");
alert(Get("lol"));