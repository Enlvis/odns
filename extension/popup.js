
const toggle = document.getElementById("toggle")

chrome.storage.local.get(["odns_enabled"], (data)=>{

if(data.odns_enabled){
toggle.checked = true
}

})

toggle.addEventListener("change", ()=>{

chrome.storage.local.set({
odns_enabled: toggle.checked
})

})

document.getElementById("openSettings").onclick = () => {

    chrome.tabs.create({
        url: "settings/main.html"
    })

}

document.getElementById("openWeb").onclick = () => {

    chrome.tabs.create({
        url: ""
    })

}

document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');
    const statusText = document.querySelector('.status');
    const dot = document.querySelector('.dot');

    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            statusText.textContent = 'system aktywny';
            dot.classList.add('red');
        } else {
            statusText.textContent = 'system wyłączony';
            dot.classList.remove('red');
        }
    });
});
