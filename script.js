const startButton = document.getElementById('startButton');
const modalContainer = document.getElementById('stepsContainer');
const closeButton = document.getElementById('closeButton');
const nextButton = document.getElementById('nextButton');
const logIn = document.getElementById('logIn');
const userAccount = document.getElementById('userAccount');

const locationForm = document.getElementById('step2Location');
const locationButton = document.getElementById('LocationButton');
const close2LocationButton = document.getElementById('closeLocationButton');
const address = document.getElementById('address');
const city = document.getElementById('city');

const google_api = 'AIzaSyBSp4mexNgCx7oNs54AWDxpGPyFB2g476Y';

const name = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');

startButton.addEventListener('click', () => {
    modalContainer.classList.add('active');
});
logIn.addEventListener('click', () => {
    modalContainer.classList.add('active');
});

closeButton.addEventListener('click', () => {
    modalContainer.classList.remove('active');
    name.value = '';
    email.value = '';
    password.value = '';
});

nextButton.onclick = function() {
    if (name.value === '' || email.value === '' || password.value === '') {
        alert('Please fill in all fields.');
    } else {
        alert('Form submitted successfully!');
        modalContainer.classList.remove('active');
        startButton.style.display = 'none';
        userAccount.innerText = name.value;
        userAccount.style.background = '#4CAF50';

        console.log('Form submitted:', {
            name: name.value,
            email: email.value,
            password: password.value
        });
        locationForm.classList.add('active');
        // window.open('location.html', '_blank');  // Open location.html in a new tab
    }
}

var registr = false;
locationButton.addEventListener('click', () => {
    if(address.value === '' || city.value === '') {
        alert('Please fill in all location fields.');
    }
    else {
        alert('Location selected successfully!');
        console.log('Location selected:', {
            address: address.value,
            city: city.value
        });
        locationForm.classList.remove('active');
    }
    registr = true;
    document.createElement('div').innerHTML = `<div class="basket" id="basket">
  <span>Basket value:</span>
  <label class="basket-value" id="basket-value"><b>0.00</b></label>
</div>`;
    document.getElementById('stepsContainer').appendChild(document.createElement('div'));  

});

close2LocationButton.addEventListener('click', () => {
    locationForm.classList.remove('active');
    document.getElementById('address').value = '';
    document.getElementById('city').value = '';

});

if (registr){
    console.log('wwwwttt')
    
}
