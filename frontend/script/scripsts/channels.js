const channelsBtn = document.querySelector(".channels-button"),
    exitChannelsBtn = document.querySelector(".exit-channels-btn "),
    channelsArea = document.querySelector(".channels-area ");

channelsBtn.addEventListener("click", ()=>{
    channelsArea.style.display = "block";
})
exitChannelsBtn.addEventListener("click", ()=>{
    channelsArea.style.display = "none";
})
