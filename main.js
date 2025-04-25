function Hvac(){
    document.getElementById("Hvac").style.visibility='visible';
    document.getElementById("el-wo").style.visibility='hidden';
    document.getElementById("ssw").style.visibility='hidden';
    document.getElementById("plump").style.visibility='hidden';
}

function el_wo(){
    document.getElementById("Hvac").style.visibility='hidden';
    document.getElementById("el-wo").style.visibility='visible';
    document.getElementById("ssw").style.visibility='hidden';
    document.getElementById("plump").style.visibility='hidden';   
}


function ssw(){
    document.getElementById("Hvac").style.visibility='hidden';
    document.getElementById("el-wo").style.visibility='hidden';
    document.getElementById("ssw").style.visibility='visible';
    document.getElementById("plump").style.visibility='hidden';   
}


function plump(){
    document.getElementById("Hvac").style.visibility='hidden';
    document.getElementById("el-wo").style.visibility='hidden';
    document.getElementById("ssw").style.visibility='hidden';
    document.getElementById("plump").style.visibility='visible';   
}

function consulting(){
    window.open("consulting.html","_self")

}

function elctro(){
    window.open("Electromechanical.html","_self")

}

function constraction(){
    window.open("constractio.html","_self")

}

function home(){
    window.open("home.html","_self");
}
function client(){
    window.open("our-client.html","_self")
}

function about(){
    window.open("about-us.html","_self")
}

function updateDateTime() {
    const now = new Date();

    const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
    };

    const formattedDate = now.toLocaleString('EG', options);
    document.getElementById("Date").innerText = formattedDate;
}

 
setInterval(updateDateTime, 1000);


updateDateTime();
