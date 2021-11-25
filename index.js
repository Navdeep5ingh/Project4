function clock() {

    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var second=document.getElementById("seconds");
    var am=document.getElementById("AM");

    var time=new Date();
    var a=time.getHours() > 12 ? time.getHours() - 12 : time.getHours();
    // var a=time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    var b=time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    var c=time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    var d=time.getHours() >= 12 ? "PM" : "AM";

    hours.innerHTML=a;
    minutes.innerHTML=b;
    second.innerHTML=c;
    am.innerHTML=d;
}

setInterval(clock,1000)

function settime() {
    var i= document.getElementById('option1').value;
    var hour=new Date().getHours();


    if(i== hour){

        document.getElementById('pictures').style.backgroundImage="url(./images/wakeup_image.png)";
        document.getElementById('update').innerHTML="Wake Up !!";
        document.getElementById('greetings').innerHTML="Good Morning!!"
    }

    var i= document.getElementById('option2').value;
    var hour=new Date().getHours();

    if(i== hour){

        document.getElementById('pictures').style.backgroundImage="url(./images/lunch_image.png)";
        document.getElementById('update').innerHTML="Let's Have Some Lunch !!";
        document.getElementById('greetings').innerHTML="Good Afternoon!!"
    }

    var i= document.getElementById('option3').value;
    var hour=new Date().getHours();


    if(i== hour){

        document.getElementById('pictures').style.backgroundImage="url(./images/goodnight_image.png)";
        document.getElementById('update').innerHTML="Good Night !!";
        document.getElementById('greetings').innerHTML="Good Night!!"
    }
}