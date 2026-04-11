let jane=true;

function toggle(){
    if(jane){
        document.getElementsByClassName("card-img-john").style="display:block";
        document.getElementsByClassName("card-img-jane").style="display:none";
        document.getElementById("name").textContent="John Doe";
        document.getElementById("prof").textContent="Architect & Engineer";
        jane=false;
    } else {
        document.getElementsByClassName("card-img-john").style="display:none";
        document.getElementsByClassName("card-img-jane").style="display:block";
        document.getElementById("name").textContent="Jane Doe";
        document.getElementById("prof").textContent="Architect & Engineer";
        jane=true;
    }
}

function randomUser(){
    // https://randomuser.me/api call this api
    //show userName,Designation in HTML
    //if user is male show john_doe.png else show jane_doe.png
    //then show actual img of user in place of john_doe.png or jane_doe.png
    
}