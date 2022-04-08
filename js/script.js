function book(){
    var name = document.getElementById('name').value;
    var location = document.getElementById('location').value;
    var process = document.getElementById('process').value;
    var contact = document.getElementById('from').value;
    var msg = `Name:${name}\nLocation:${location}\nProcess:${process}\nContact:${contact}`
    window.open(`mailto:balayageinsta@gmail.com?subject=Appointment&body=${msg}`);

}