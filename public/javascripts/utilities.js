var elem = document.querySelector('.tabs');
var options = {}
var instance = M.Tabs.init(elem, options);
var url = 'http://localhost:3000/sendMail'
function login() {

    var email_inline = document.getElementById("email_inline").value;

    var subject = "Login Notification";
    var body = '<h1 style="text-align:center">Alibaba Cloud DM Demo</h1><p>Dear '+email_inline+',</p><p>This is to inform that your account is successfully logged in</p><p>Regards,</p><p><b>Admin</b></p>';
    var options = {
        email_inline: email_inline,
        subject : subject,
        body : body
    };

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(options), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        M.toast({ html: 'You have successfully Logged In' });
    });
}

function forgotPassword() {
    var email_inline = document.getElementById("email_inline").value;
    var subject = "Password Reset";
    var body = '<h1 style="text-align:center">Alibaba Cloud DM Demo</h1><p>Dear '+email_inline+',</p><p>Please find the instructions below for resetting the password</p><p>Regards,</p><p><b>Admin</b></p>';
    var options = {
        email_inline: email_inline,
        subject : subject,
        body : body
    };

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(options), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        M.toast({ html: 'Email Triggered to your Registered Email ID' });
    });
}

function register() {
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var phnNumber = document.getElementById("phnNumber").value;
    var email_reg = document.getElementById("email_reg").value;
    var subject = "Registration Notification";
    var body = '<h1 style="text-align:center">Alibaba Cloud DM Demo</h1><p>Dear '+first_name+',</p><p>Congratulations!! You are successfully registered</p><p>Regards,</p><p><b>Admin</b></p>';
    var options = {
        first_name: first_name,
        last_name: last_name,
        phnNumber: phnNumber,
        email_inline: email_reg,
        subject : subject,
        body : body
    };

    fetch(url, {
        method: 'POST',
        body: JSON.stringify(options), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(function (res) {
        M.toast({ html: 'You have sucessfully Registered' });
    });
}