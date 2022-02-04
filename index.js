Start();

function Start() {
    if (document.readyState === "loading")
        document.addEventListener("DOMContentLoaded", ProcessStart);
    else ProcessStart(); // `DOMContentLoaded` already fired
}

function ProcessStart() {
    console.log("ProcessStart");
    let pageUrl = window.location.href;
    if (pageUrl.indexOf("code=") !== -1) processCode(pageUrl);
    else showNoCode();
}

function showNoCode() {
    document.getElementById("no_code").classList.remove("hidden");
}

function processCode(pageUrl) {
    console.log("processCode");
    code = pageUrl.match(/code=(\w+)/);
    console.log(code);
    if (code) {
        code = code[1];
        document.getElementById("code").classList.remove("hidden");
        document.getElementById("code").innerHTML = code;
        
    } else {
        showNoCode();
    }
}
