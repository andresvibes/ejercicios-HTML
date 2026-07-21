document.getElementById('register').addEventListener('click', function() {
    

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rol = document.getElementById('rol').options[document.getElementById('rol').selectedIndex].text;


    if (name === "" || email === "" || document.getElementById('rol').value === "") {
        alert("por favor, ingresa caracteres validos");
        return;
    }

    
    document.getElementById('Name').innerText = "Nombre: " + name;
    document.getElementById('Email').innerText = "Correo: " + email;
    document.getElementById('Rol').innerText = "Rol: " + rol;


    document.querySelector('.container').innerHTML = document.getElementById('result').innerHTML;
    document.querySelector('.container').style.display = 'block';

setTimeout(function() {
        location.reload();
    }, 50000);

});
