const form = document.querySelector('form');

form.addEventListener('submit',onSubmit);

async function onSubmit(e){
    e.preventDefault();

    const myObj = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    try{        
        const response = await axios.post('http://13.51.159.115:3000/user/add-user',myObj);
        console.log(response);
        alert('User registration successfull');

        // redirect...
        window.location.href = '../login/login.html';

    } catch(err){
        console.log(err);
    }

    form.reset();
}