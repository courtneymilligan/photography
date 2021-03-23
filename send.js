let send = document.getElementById('send');
let nameInput = document.getElementById('name');
let emailInput = document.getElementById('mail');
let commentInput = document.getElementById('comment');
let thanks = document.getElementById('thanks');

let sendEmail = function () {
    let body = "Name: " + nameInput.value + "\nFrom: " + emailInput.value + "\nMessage: " + commentInput.value;
    Email.send({
        SecureToken : "3bb6791e-706b-426c-bee3-28cc7531f889",
        To : 'mynewtestemail587@gmail.com',
        From : "mynewtestemail587@gmail.com",
        Subject : "Comment on Photography Website",
        Body : body,
    })
    nameInput.value = "";
    emailInput.value = "";
    commentInput.value = "";
    thanks.style.display = "block";
}

send.onclick = sendEmail;
