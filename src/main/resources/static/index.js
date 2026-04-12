// let jane=true;

// function toggle(){
//     if(jane){
//         document.getElementsByClassName("card-img-john").style="display:block";
//         document.getElementsByClassName("card-img-jane").style="display:none";
//         document.getElementById("name").textContent="John Doe";
//         document.getElementById("prof").textContent="Architect & Engineer";
//         jane=false;
//     } else {
//         document.getElementsByClassName("card-img-john").style="display:none";
//         document.getElementsByClassName("card-img-jane").style="display:block";
//         document.getElementById("name").textContent="Jane Doe";
//         document.getElementById("prof").textContent="Architect & Engineer";
//         jane=true;
//     }
// }

function randomUser(){
    // https://randomuser.me/api call this api
    //show userName,Designation in HTML
    //if user is male show john_doe.png else show jane_doe.png
    //then show actual img of user in place of john_doe.png or jane_doe.png
    const url = "https://randomuser.me/api";
    fetch(url)        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            const name = `${user.name.first} ${user.name.last}`;
            const designation = user.gender === "male" ? "Software Engineer" : "Product Manager";
            const imgSrc = user.picture.large;
            const imgElement =document.getElementsByClassName("profile-img");
            imgElement[0].src = imgSrc;
            imgElement[0].alt = name;
            document.getElementById("name").textContent = name;
            document.getElementById("prof").textContent = designation;
            document.getElementById("profile-img").src = imgSrc;
        })
        .catch(error => console.error("Error fetching user data:", error));
}
randomUser();