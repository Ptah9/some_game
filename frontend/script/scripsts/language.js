localStorage.setItem("language", "russian")

if (localStorage.getItem("language") == "russian"){
    document.querySelector(".igreks-green").textContent = "Игреки:";

    document.querySelector(".backpack-title-up").textContent = "Магазин";
    document.querySelector(".backpack-title-up").style.fontSize = "5vh";
    document.querySelector(".backpack-title-up").style.right = "0.7vw";
    document.querySelector(".backpack-title-up").style.top = "0.7vh";
    document.querySelector(".backpack-title").textContent = "Стамина";
    document.querySelector(".backpack-title").style.fontSize = "6.5vh";
    document.querySelector(".backpack-desc").textContent = "Если у тебя есть много стамины, ты можешь долго ходить";
    document.querySelector(".your-backpack-p").textContent = "макс. стамина:";
    document.querySelector(".buy-1-p").textContent = "1 стамина за";
    document.querySelector(".buy-10-p").textContent = "10 стамин за";
    document.querySelector(".buy-100-p").textContent = "100 стамин за";

    document.querySelector(".exit-user-btn").textContent = "назад";
    document.querySelector(".referral-btn").textContent = "реферал. ссылка";
    document.querySelector(".referral-btn").style.fontSize = "2.8vh";
    document.querySelector(".referrals-button").textContent = "рефералы";
    document.querySelector(".tasks-button").textContent = "задания";
    document.querySelector(".tasks-button").style.fontSize = "2.8vh";
    document.querySelector(".channels-button").textContent = "каналы";
    document.querySelector(".byPtah-card-p").textContent = "от Ptah Industries";

    document.querySelector(".user-max-stamina-p").textContent = "макс. стамина:";
    document.querySelector(".user-lucky-p").textContent = "удача:";
    document.querySelector(".user-referrals-invited-p").textContent = "людей приглашено:";
    document.querySelector(".user-referral-reward-p").textContent = "реферал. награда";
    document.querySelector(".user-Igreks-p").textContent = "Игреки:";
    document.querySelector(".user-Igrek-top-p").textContent = "место в топе:";
    document.querySelector(".user-score-p").textContent = "комнат найдено:";
    document.querySelector(".user-score-top-p").textContent = "уровней пройдено:";
    
    document.querySelector(".referrals-title").textContent = "Рефералы";
    document.querySelector(".claim-ref-reward").textContent = "забрать";
    
    document.querySelector(".tasks-title").textContent = "Задания";
    document.querySelector(".tasks-completed-p").textContent = "выполнено: ";

    document.querySelector(".channels-title").textContent = "Наши каналы";

    document.querySelector(".map-title").textContent = "Карта";
    document.querySelector(".map-title").style.fontSize = "5vh";
    document.querySelector(".map-title").style.top = "0.7vh";
    document.querySelector(".room-counter-text").textContent = "комнаты:";
    document.querySelector(".room-counter-text").style.fontSize = "3vh";
    document.querySelector(".room-counter-div-small").style.marginTop = "-1vh";

    document.querySelector(".leaderboard-title").textContent = "Доска почёта";





    
}