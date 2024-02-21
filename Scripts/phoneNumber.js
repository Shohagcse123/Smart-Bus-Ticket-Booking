function validatePhoneNumber(phoneNumber) {
    // Regular expression for Bangladeshi phone numbers
    const bdPhoneNumberRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
    return bdPhoneNumberRegex.test(phoneNumber);
}
var seatCount=0;
document.getElementById('seatParent').addEventListener('click',function(event){
    
    seatCount++;
 
//  minimumSeat(seatCount);
})

alert(seatCount);
// Event listener for the input box
document.getElementById('getPhoneNumber').addEventListener('keyup', function(event) {
    
   
    const phoneNumber = event.target.value;
    
    // Validate the phone number
    if (validatePhoneNumber(phoneNumber)) {
        // If valid, clear any previous error message
        
            // console.log('Seat count',seatCnt);
         
            console.log('boss paisi');
            const submitButon=document.getElementById('nextButon');
            submitButon.removeAttribute('disabled');
        
    
       
      
    } 
    else{
        const submitButon=document.getElementById('nextButon');
        submitButon.setAttribute('disabled',true);
    }
});
// Modal open
document.getElementById('nextButon').addEventListener('click',function(){
    const hideBody=document.getElementById('mainBody');
    hideBody.classList.add('hidden');
    const openModal=document.getElementById('successModal');
    openModal.classList.remove('hidden');
})
// backto main page
document.getElementById('continueButton').addEventListener('click',function(){
    const homePage=document.getElementById('mainBody');
    homePage.classList.remove('hidden');
    const openModal=document.getElementById('successModal');
    openModal.classList.add('hidden');
    window.location.reload();
})