
// scroll part
function scrollToSection(sectionId) {
   const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
// Seat selected color
var  countSeat=0;
document.getElementById('seatParent').addEventListener('click',function(event){
    const text = event.target.innerHTML;
    countSeat++;
    console.log(countSeat);
 const getButon = document.getElementById(text);
getButon.classList.add('bg-lime-600');
 decreaseSeat();
 tableRowAdd(text);
 priceCalculate(countSeat);
 

})
// document.getElementById('seatParent').addEventListener('dblclick',function(event){
//     const text = event.target.innerHTML;
//  const getButon = document.getElementById(text);
// //  console.log(getButon);
// getButon.classList.remove('bg-lime-600');

// increaseSeat();

// })
// Seat no handle

var seat = document.getElementById('seatDecrease');

//function for seatCount
function decreaseSeat()
{

    var seatNo= seat.innerText;
var currentSeat=seatNo-1;
seat.innerText=currentSeat;
const count=document.getElementById('selectedSeat');
count.innerText=countSeat;

}

// function increaseSeat()
// {
//     const seatNo= seat.innerText;
// const currentSeat=seatNo+1;
// seat.innerText=currentSeat;
// const count=document.getElementById('selectedSeat');
// count.innerText=countSeat-1;
    
// }
// Table append
function tableRowAdd(seatPosition)
{
    
    
    const Row= document.createElement('tbody');
    Row.innerHTML=`
   <div class="">
   <tr class="flex justify-between items-center justify-center">
   <td>${seatPosition}</td>
   <td>Economy</td>
   <td>BDT 550</td>
   </tr>
   </div>

    `
    const addingPlace=document.getElementById('rowAdd');
    addingPlace.appendChild(Row);
}

// Calculation price
function priceCalculate(price)
{
    const getPrice = document.getElementById('totalPrice');
    var updatePrice= price*550;
    getPrice.innerText=updatePrice;
    const Grand= document.getElementById('grandTotal');
    Grand.innerText=updatePrice;

}

document.getElementById('cuponButon').addEventListener('click',function(){
    const getPrice = document.getElementById('totalPrice');
    if(getPrice.innerText==2200)
    {
        cuponCalculate();
    }

})


function cuponCalculate()
{
    
        const cuponBox= document.getElementById('cuponField');
    const code= cuponBox.value;
    const cuponSection=document.getElementById('cuponLevel');
    if(code=='NEW15')
    {
        cuponSection.classList.add('hidden');
        const X= (2200*15/100);
        const getDiscount=(2200-X);
        console.log(getDiscount);
        document.getElementById('grandTotal').innerText=getDiscount;

    }
    else if(code=='Couple 20')
    {
        cuponSection.classList.add('hidden');
        const X= (2200*20/100);
        const getDiscount=(2200-X);
        console.log(getDiscount);
        document.getElementById('grandTotal').innerText=getDiscount;
    }
    
}