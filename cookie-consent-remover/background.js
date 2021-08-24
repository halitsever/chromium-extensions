let button = document.querySelector(".button_f_onetrust");
if (button) button.addEventListener("click", activeOrDisable);

chrome.storage.sync.get(['status'], function(result) {
let button = document.querySelector(".button_f_onetrust");
if (button) button.innerHTML = (result.status === "active") ? "🤬 Enabled": "😐 Disabled";
if (result.status === "active") setTimeout(removeOnetrust, 3000);
})


function removeOnetrust() {
    let onetrust_banner_sdk = document.querySelector("#onetrust-banner-sdk");
    if (onetrust_banner_sdk) onetrust_banner_sdk.style.display = "none";
    let onetrust_dark_filter = document.querySelector(".onetrust-pc-dark-filter");
    if (onetrust_dark_filter) onetrust_dark_filter.style.display = "none";
}

function activeOrDisable() {
    chrome.storage.sync.get(['status'], function(result) {
    let button = document.querySelector(".button_f_onetrust");
    if (result.status === undefined || result.status === null || result.status === "disable") {
        chrome.storage.sync.set({status: "active"});
        button.innerHTML = "🤬 Enabled";
    }
    else {
        chrome.storage.sync.set({status: "disable"});
        button.innerHTML = "😐 Disabled";
    }
});
}