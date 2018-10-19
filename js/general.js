
$(document).ready(
    () => {
        $('#header').load('siteparts/header.html');
        $('#footer').load('siteparts/footer.html');
        $('#main').load('siteparts/main.html');
    }
);

function login() {
    if(confirm("Вход???")) 
        alert("Уху-ху-ху!!!");
    else 
        alert('Фу-фу...');
};

function getContent(src){
    $('#main').load(src);
};