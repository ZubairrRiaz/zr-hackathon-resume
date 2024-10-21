"use strict";
////////////// Getting All ids of Elements to Manipulate
let school_name = document.querySelector('#school-name');
let education = document.querySelector('#education');
let city_name = document.querySelector('#city-name');
let phone_number = document.querySelector('#phone-number');
let email = document.querySelector('#email');
let linkedin = document.querySelector('#linkedin');
let Name = document.querySelectorAll('#NAME');
let fathername = document.querySelector('#fathername');
let profession = document.querySelector('#profession');
let about = document.querySelector('#about');
let age = document.querySelector('#age');
let country = document.querySelector('#country');
let address = document.querySelector('#address');
let skills = document.querySelector('#skills');
let acheivement = document.querySelector('#acheivements');
let img = document.getElementById('img');
////////////////    Changing Values Of Elements with Input Values 
function changeText1(event) {
    Name[0].textContent = event.target.value;
    Name[1].textContent = event.target.value;
}
function changeText2(event) {
    fathername.textContent = event.target.value;
}
function changeText3(event) {
    profession.textContent = event.target.value;
}
function changeText4(event) {
    about.textContent = event.target.value;
}
function changeText5(event) {
    img.src = URL.createObjectURL(event.target.files[0]);
}
function changeText6(event) {
    education.textContent = event.target.value;
}
function changeText7(event) {
    school_name.textContent = event.target.value;
}
function changeText8(event) {
    address.textContent = event.target.value;
}
function changeText9(event) {
    country.textContent = event.target.value;
}
function changeText10(event) {
    city_name.textContent = event.target.value;
}
function changeText11(event) {
    age.textContent = event.target.value;
}
function changeText12(event) {
    phone_number.textContent = event.target.value;
}
function changeText13(event) {
    email.textContent = event.target.value;
}
function changeText14(event) {
    linkedin.textContent = event.target.value;
}
function changeText15(event) {
    skills.textContent = event.target.value;
}
function changeText16(event) {
    acheivement.textContent = event.target.value;
}
//////   Adding Click Events on Buttons So We can Create And Edit Resume.
const showResume = document.querySelector('.resume-box');
const hideForm = document.querySelector('form');
let button = document.querySelector('#button');
button.addEventListener('click', (e) => {
    e.preventDefault();
    if (Name[0].textContent == '' && Name[1].textContent == '') {
        alert('Name Section is missing');
    }
    else if (fathername.textContent == '') {
        alert('Father name section is missing');
    }
    else if (profession.textContent == '') {
        alert('Profession section is missing');
    }
    else if (about.textContent == '') {
        alert('About section is missing');
    }
    else if (education.textContent == '') {
        alert('Education section is missing');
    }
    else if (school_name.textContent == '') {
        alert('School section is missing');
    }
    else if (address.textContent == '') {
        alert('Address section is missing');
    }
    else if (country.textContent == '') {
        alert('Country section is missing');
    }
    else if (city_name.textContent == '') {
        alert('City section is missing');
    }
    else if (age.textContent == '') {
        alert('Age section is missing');
    }
    else if (phone_number.textContent == '') {
        alert('Phone section is missing');
    }
    else if (phone_number.innerHTML.length > 11 || phone_number.innerHTML.length < 11) {
        alert('Phone Number Length Must be 11');
    }
    else if (email.textContent == '') {
        alert(`Email section is missing`);
    }
    else if (!email.innerHTML.includes('@')) {
        alert(`'@' Must be included in Email Section`);
    }
    else if (linkedin.textContent == '') {
        alert('Linkedin section is missing');
    }
    else if (skills.textContent == '') {
        alert('Skills section is missing');
    }
    else if (acheivement.textContent == '') {
        alert('Acheivement section is missing');
    }
    else {
        showResume.style.visibility = 'visible';
        hideForm.style.display = 'none';
    }
});
let editbutton = document.getElementById('Edit');
editbutton.addEventListener('click', (e) => {
    e.preventDefault();
    const showResume = document.querySelector('.resume-box');
    showResume.style.visibility = 'hidden';
    const hideForm = document.querySelector('form');
    hideForm.style.display = 'block';
});
/////////////////    Download Button 
const download = document.querySelector('#download');
download === null || download === void 0 ? void 0 : download.addEventListener('click', () => {
    window.print();
});
//////////////////   Shareable Link 
const generateUrl = Math.random() + 20 * 30000;
const baseUrl = 'http://127.0.0.1:5500/resume.html?about=&acheive=' + generateUrl;
const share = document.querySelector('#share');
share === null || share === void 0 ? void 0 : share.addEventListener('click', () => {
    navigator.clipboard.writeText(baseUrl).then(() => {
        alert('Link Copied.');
    });
});
// const showResume = document.querySelector('.resume-box') as HTMLElement;
// showResume.style.visibility = 'visible';
// const hideForm = document.querySelector('form') as HTMLElement;
// hideForm.style.display = 'none';
