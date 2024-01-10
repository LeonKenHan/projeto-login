const form = document.querySelector("form");



function sendEmail() {


Email.send({
    Host : "smtp.elasticemail.com",
    Username : "leonszyal@gmail.com",
    Password : "B97EC8042A2E54FE3E048C0C485C142A0022",
    To : 'leonszyal@gmail.com',
    From : "leonszyal@gmail.comv",
    Subject : "This is the subject",
    Body : "And this is the body"
}).then(
  message => alert(message)
);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail ();
});