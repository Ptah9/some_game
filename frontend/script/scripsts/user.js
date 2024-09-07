const userBtn = document.querySelector('#user-btn'),
userArea = document.querySelector(".user-area"),
exitUserBtn = document.querySelector(".exit-user-btn"),
titles = document.querySelectorAll(".title"),
referralBtn = document.querySelector(".referral-btn"),
copiedMessageArea = document.querySelector(".copied-message-area"),
userMaxStamina = document.querySelector(".user-max-stamina"),
userLucky = document.querySelector(".user-lucky"),
userReferralsInvited = document.querySelector(".user-referrals-invited"),
userReferralReward = document.querySelector(".user-referral-reward"),
userIgreks = document.querySelector(".user-Igreks"),
userIgrekTop = document.querySelector(".user-Igrek-top"),
userScore = document.querySelector(".user-score"),
userScoreTop = document.querySelector(".user-score-top"),
referralsArea = document.querySelector(".referrals-area")


import Get from "../functions/interactionWithAPI/testGet.js";
import getRefs from "../functions/interactionWithAPI/testGetRefs.js";


async function bootInfo() {
    userMaxStamina.textContent = await Get("maxStamina");
    userLucky.textContent = await Get("lucky");
    let refs = await getRefs();
    userReferralsInvited.textContent = refs.refsCount;
    let refReward = 0;
    for (let refName in refs.refs){
        refReward += Number(refs.refs[refName].reward)
    }
    userReferralReward.textContent = refReward.toFixed(1)
    userIgreks.textContent = await Get("igreks");
    userIgrekTop.textContent = 0
    userScore.textContent = await Get("score");
    userScoreTop.textContent = 0
}


userBtn.addEventListener("click", function(){
    bootInfo();
    userArea.style.display = "block";
    localStorage.userClosed = false;
    titles[0].style.color = "var(--user-area-color)";
    document.querySelector(".igreks-green").style.color = "rgba(0, 0, 0, 0)";
    document.querySelector(".igreks-yellow").style.color = "rgba(0, 0, 0, 0)";
    document.querySelector(".igreks").style.color = "rgba(0, 0, 0, 0)";
    document.querySelector(".igreks-blue").style.color = "rgba(0, 0, 0, 0)";

});
exitUserBtn.addEventListener("click", function(){
    userArea.style.display = "none";
    localStorage.userClosed = true;
    titles[0].style.color = "var(--main-purple)";
    document.querySelector(".igreks-green").style.color = "rgb(151, 217, 49)";
    document.querySelector(".igreks-yellow").style.color = "rgb(227, 223, 33)";
    document.querySelector(".igreks").style.color = "rgb(227, 223, 33)";
    document.querySelector(".igreks-blue").style.color = "rgb(47, 80, 123)";
});

referralBtn.addEventListener("click", function(){
    copiedMessageArea.style.display = "block";
    setTimeout(() => {  copiedMessageArea.style.display = "none"; }, 1000);
})