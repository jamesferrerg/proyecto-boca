function sendUser() {
    var resultado = window.confirm('Are you sure to create a new user?');
    if (resultado === true) {
        window.alert('User created');
    } else {
        window.alert('No, canceled');
    }
}

function cancelUser() {
    alert('User did not create');
}