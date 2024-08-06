const userBtn = document.querySelector('#user-btn'),
userArea = document.querySelector(".user-area"),
exitUserBtn = document.querySelector(".exit-user-btn"),
titles = document.querySelectorAll(".title"),
referralBtn = document.querySelector(".referral-btn"),
copiedMessageArea = document.querySelector(".copied-message-area");

userBtn.addEventListener("click", function(){
    userArea.style.display = "block";
    localStorage.userClosed = false;
    titles[0].style.color = "var(--user-area-color)";
    titles[1].style.color = "rgba(0, 0, 0, 0)";
    titles[2].style.color = "rgba(0, 0, 0, 0)";

});
exitUserBtn.addEventListener("click", function(){
    userArea.style.display = "none";
    localStorage.userClosed = true;
    titles[0].style.color = "var(--main-purple)";
    titles[1].style.color = "var(--main-purple)";
    titles[2].style.color = "var(--main-purple)";
});

referralBtn.addEventListener("click", function(){
    copiedMessageArea.style.display = "block";
    setTimeout(() => {  copiedMessageArea.style.display = "none"; }, 1000);
})
