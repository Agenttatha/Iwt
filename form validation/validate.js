//  var nameInput=document.querySelector('.name')
// var emailInput=document.querySelector('input[type="email]')
// var mobileInput=document.querySelector('.mobile')
// var buttonInput=document.querySelector('button[type="submit"]')
// buttonInput.addEventListener('click',function(event){
// event.preventDefault();
// name_given=nameInput.value
// email=emailInput.value
// mobile=mobileInput.value
// alert('hi')
// if(!name_given || !email || !mobile){
//     alert('please fill the fields..')
// }else{
//     alert(`${name_given}\n${email}\n${mobile}`)
// }
 
const form = document.querySelector('form');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  // Reset error messages
  const errorMessages = document.querySelectorAll('.error');
  errorMessages.forEach(function(errorMessage) {
    errorMessage.style.display = 'none';
  });

  // Validate form fields
  const nameInput = document.querySelector('.name');
  const emailInput = document.querySelector('.email');
  const mobileInput = document.querySelector('.mobile');
  const genderInputs = document.querySelectorAll('input[name="radioBtn"]');
  const dobInput = document.querySelector('input[type="date"]');
  const addressInput = document.querySelector('textarea');
  const cityInput = document.querySelector('.city');
  const countryInput = document.querySelector('.country');
  const expertiseInputs = document.querySelectorAll('input[name="radioBtn2"]');
  const groupInput = document.querySelector('select[multiple="multiple"]');
  const link=document.querySelector('.link')

  let isValid = true; // Track form validity

  // Validate name
  if (nameInput.value.trim() === '') {
    showErrorMessage(nameInput, 'Please enter your name');
    isValid = false;
  } else if (nameInput.value.length < 3) {
    showErrorMessage(nameInput, 'Name should be at least 3 characters long');
    isValid = false;
  }

  // Validate email
  if (emailInput.value.trim() === '') {
    showErrorMessage(emailInput, 'Please enter your email address');
    isValid = false;
  } else if (!validateEmail(emailInput.value)) {
    showErrorMessage(emailInput, 'Please enter a valid email address');
    isValid = false;
  }

  // Validate mobile number
  if (mobileInput.value.trim() === '') {
    showErrorMessage(mobileInput, 'Please enter your mobile number');
    isValid = false;
  } else if (!validateMobileNumber(mobileInput.value)) {
    showErrorMessage(mobileInput, 'Mobile number should be numeric and 10 digits');
    isValid = false;
  }

  // Validate gender
  let genderSelected = false;
  genderInputs.forEach(function(genderInput) {
    if (genderInput.checked) {
      genderSelected = true;
    }
  });
  if (!genderSelected) {
    showErrorMessage(genderInputs[0],'Please select your gender')
    // const genderError = genderInputs[0].parentElement.querySelector('.error');
    // genderError.textContent = 'Please select your gender';
    // genderError.style.display = 'block';
    isValid = false;
  }

  // Validate date of birth
  if (dobInput.value.trim() === '') {
    showErrorMessage(dobInput, 'Please enter your date of birth');
    isValid = false;
  }

  // Validate address
  if (addressInput.value.trim() === '') {
    showErrorMessage(addressInput, 'Please enter your address');
    isValid = false;
  }

  // Validate city
  if (cityInput.value === '') {
    showErrorMessage(cityInput, 'Please select your city');
    isValid = false;
  }

  // Validate country
  if (countryInput.value.trim() === '') {
    showErrorMessage(countryInput, 'Please enter your country');
    isValid = false;
  }

  // Validate expertise
  let expertiseSelected = false;
  expertiseInputs.forEach(function(expertiseInput) {
    if (expertiseInput.checked) {
      expertiseSelected = true;
    }
  });
  if (!expertiseSelected) {
    const expertiseError = expertiseInputs[0].parentElement.querySelector('.error');
    expertiseError.textContent = 'Please select at least one expertise';
    expertiseError.style.display = 'block';
    isValid = false;
  }

  // Validate group
  if (groupInput.selectedOptions.length === 0) {
    showErrorMessage(groupInput, 'Please select at least one group');
    isValid = false;
  }

  // If form is valid, hide the form and show success message
  if (isValid) {
    form.reset();
    form.style.display = 'none';
    document.querySelector('#success').style.display = 'block';
    
  }
});

// Function to validate email address
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Function to validate mobile number
function validateMobileNumber(mobile) {
  const mobileRegex = /^\d{10}$/;
  return mobileRegex.test(mobile);
}

// Function to show error message
function showErrorMessage(input, message) {
  const errorMessage = input.parentElement.querySelector('.error');
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

