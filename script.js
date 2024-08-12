function home(){
    document.getElementById("homes").style.color="rgb(20,251,20)";
    document.getElementById("programs").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contacts").style.color="white";
}
function program(){
    document.getElementById("homes").style.color="white";
    document.getElementById("programs").style.color="rgb(20,251,20)";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contacts").style.color="white";
}
function plan(){
    document.getElementById("homes").style.color="white";
    document.getElementById("programs").style.color="white";
    document.getElementById("plans").style.color="rgb(20,251,20)";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contacts").style.color="white";
}

function blog(){
    document.getElementById("homes").style.color="white";
    document.getElementById("programs").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="rgb(20,251,20)";
    document.getElementById("contacts").style.color="white";
}
function contact(){
    document.getElementById("homes").style.color="white";
    document.getElementById("programs").style.color="white";
    document.getElementById("plans").style.color="white";
    document.getElementById("blogs").style.color="white";
    document.getElementById("contacts").style.color="rgb(20,251,20)";
}

function submit(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");

    if(name.value == ""){
        alert('Please enter your Name');
    }
    else if(number.value == "")
    {
        alert('Please Enter Your Number')
    }
    else{
        alert(`Hello ${name.value}, We have received your message and will get back to you soon`);
    }
}

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-210px";
}