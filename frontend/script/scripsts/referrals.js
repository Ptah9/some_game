const referralsArea = document.querySelector(".referrals-area"),
exitReferralsBtn = document.querySelector(".exit-referrals-btn"),
referralsButton = document.querySelector(".referrals-button"),
refsBox = document.querySelector(".refs-box"),
refRewardCount = document.querySelector(".ref-reward-count"),
claimRefReward = document.querySelector(".claim-ref-reward");

exitReferralsBtn.addEventListener("click", ()=>{
    referralsArea.style.display = "none";
});

import getRefs from "../functions/interactionWithAPI/testGetRefs.js";

referralsButton.addEventListener("click", async()=>{
    refsBox.innerHTML = '';

    let refStat = await getRefs();
    let refs = refStat.refs

    let refReward = 0;
    for (let refName in refs){
        refReward += Number(refs[refName].reward)
    }
    if (refReward) refRewardCount.textContent = refReward.toFixed(1)
    else refRewardCount.textContent = 0

    for (let refName in refs){
            refsBox.insertAdjacentHTML("beforeEnd", `
            <div class="ref-card">
                <p class="ref-name">${refName}</p>
                <p class="reward">${Number(refs[refName]["reward"]).toFixed(1)} Y</p>
            </div>
                `)
    }

    referralsArea.style.display = "block";
});

import takeReward from "../functions/interactionWithAPI/takeReward.js";
claimRefReward.addEventListener("click", async ()=>{
    await takeReward();

    refsBox.innerHTML = '';

    let refStat = await getRefs();
    let refs = refStat.refs
    refRewardCount.textContent = 0;

    for (let refName in refs){
            refsBox.insertAdjacentHTML("beforeEnd", `
            <div class="ref-card">
                <p class="ref-name">${refName}</p>
                <p class="reward">${Number(refs[refName]["reward"]).toFixed(1)} Y</p>
            </div>
                `)
    }
    
})