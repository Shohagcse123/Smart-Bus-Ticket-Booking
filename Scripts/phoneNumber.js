function validatePhoneNumber(phoneNumber) {
    // Regular expression for Bangladeshi phone numbers
    const bdPhoneNumberRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
    return bdPhoneNumberRegex.test(phoneNumber);
}


alert('Next button will be active for valid phone number');
// Event listener for the input box
document.getElementById('getPhoneNumber').addEventListener('keyup', function(event) {
    
   
    const phoneNumber = event.target.value;
    
    // Validate the phone number
    if (validatePhoneNumber(phoneNumber)) {
        // If valid, clear any previous error message
        const submitButon=document.getElementById('nextButon');
        submitButon.removeAttribute('disabled');
      
    } 
    else{
        const submitButon=document.getElementById('nextButon');
        submitButon.setAttribute('disabled',true);
    }
});