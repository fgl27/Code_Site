Start();

function Start() {
    if (document.readyState === 'loading')
        document.addEventListener('DOMContentLoaded', ProcessStart);
    else ProcessStart(); // `DOMContentLoaded` already fired
}

function ProcessStart() {
    console.log('ProcessStart');
    let pageUrl = window.location.href;
    if (pageUrl.indexOf('code=') !== -1) processCode(pageUrl);
    else showNoCode();
}

function showNoCode() {
    document.getElementById('no_code').classList.remove('hidden');
}

function processCode(pageUrl) {
    console.log('processCode');
    const code = pageUrl.split('code=');
    console.log(code);
    if (code) {
        const final_code = decodeURIComponent(code[1]);
        console.log(final_code);
        document.getElementById('code').classList.remove('hidden');
        document.getElementById('code').innerHTML = final_code;

    } else {
        showNoCode();
    }
}

// https://login.salesforce.com/services/oauth2/authorize?
// client_id=Consumer Key&
// redirect_uri=Callback URL&
// response_type=code

