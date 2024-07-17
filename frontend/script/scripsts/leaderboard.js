const cardsBox = document.querySelector(".cards-box");

for(let i = 10; i > 0; i--){
    cardsBox.insertAdjacentHTML("afterbegin", `
        <div class="card">
            <div class="img-and-pic">
                <p class="place">${i}</p>
                <img src="https://i.ibb.co/0jH5ZRb/image.jpg" class="avatarka">
            </div>

            <p class="name">Ptah_9</p>
            <p class="score">100</p>
        </div>`)            //тут надо будет сделать ник через textcontent, чтобы избежать html инъекций
}

