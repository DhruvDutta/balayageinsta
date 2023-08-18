function book(){
    var name = document.getElementById('name').value;
    var location = document.getElementById('location').value;
    var process = document.getElementById('process').value;
    var contact = document.getElementById('from').value;
    var date = document.getElementById('date').value;
    var msg = `Name:${name}\nAddress:${location}\nService:${process}\nContact:${contact}\nDate:${date}`
    msg= encodeURIComponent(msg)
    window.open(`mailto:balayageinsta@gmail.com?subject=Appointment&body=${msg}`);
}
function book1(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var msg = `Name:${name}\nEmail:${email}\nMessage:${message}`
    msg= encodeURIComponent(msg)
    window.open(`mailto:balayageinsta@gmail.com?subject=Customer Contact&body=${msg}`);
}