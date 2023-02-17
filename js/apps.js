// Memory
const buttonFor8GBMemory =document.getElementById('8GB');
const buttonFor16GBMemory =document.getElementById('16GB');

// Storage
const buttonFor256GB =document.getElementById('256GB');
const buttonFor512GB =document.getElementById('512GB');
const buttonFor1TB =document.getElementById('1TB');

// Delivery
const freeDelivery = document.getElementById('Aug-25');
const expensiveDelivery = document.getElementById('Aug-21');

// promo code
const promoCode = document.getElementById('promo-value');
const promoButton = document.getElementById('promo-button');
// // Notify msg
const notify = document.getElementById('notify-msg');


// Update price function
function priceAdding(product,price){
    const proudValue = document.getElementById(product +'-cost');
    proudValue.innerText = Number(price);
    totalValue();
}

// total price function
function totalValue(){
    const bestPrice = document.getElementById('defult-cost');
    const subTotalPrice = document.getElementById('sub-total');
    const memoryPrice = document.getElementById('memory-cost');
    const storagePrice = document.getElementById('storage-cost');
    const deliveryPrice = document.getElementById('delivery-cost');
    const totalprice = document.getElementById('total');
    const bestPriceValue = Number(bestPrice.innerText);    
    const memoryPriceValue = Number(memoryPrice.innerText);
    const storagePriceValue = Number(storagePrice.innerText);
    const deliveryPriceValue = Number(deliveryPrice.innerText);
    const total = bestPriceValue + memoryPriceValue + storagePriceValue + deliveryPriceValue;
    subTotalPrice.innerText = total;
    totalprice.innerText = total;
}
// promo code function
function promValue(){
    const promoCodeInput = promoCode;
    const promoCodeInputValue = promoCodeInput.value;
    const matchCode = 'rafi';
    if(promoCodeInputValue == matchCode){
          const previousTotalPrice = document.getElementById('total');
          const previousTotalPriceValue = Number(previousTotalPrice.innerText)
          const discountAmount  = previousTotalPriceValue * 0.2;
          const newTotalPrice = previousTotalPriceValue - discountAmount;
          previousTotalPrice.innerText = newTotalPrice;
          notify.style.display = 'none';
          promoButton.disabled = true;

    }
    else{
        notify.style.display = 'block';
    }
    promoCodeInput.value = '';
}
// For selected function
function isContain(elem){
    return elem.classlist.contains('selected');
}
// For Memory 

buttonFor8GBMemory.addEventListener('click',function(){
    if(isContain != true){
        buttonFor8GBMemory.classList.add('selected');
        buttonFor16GBMemory.classList.remove('selected');
    }
    priceAdding('memory',0);
})
buttonFor16GBMemory.addEventListener('click',function(){
    if(isContain != true){
        buttonFor8GBMemory.classList.remove('selected');
        buttonFor16GBMemory.classList.add('selected');
    }
    priceAdding('memory',180);
})

// For SSD 

buttonFor256GB.addEventListener('click',function(){
    if(isContain != true){
        buttonFor256GB.classList.add('selected');
        buttonFor512GB.classList.remove('selected');
        buttonFor1TB.classList.remove('selected');
    }
    priceAdding('storage',0);
})
buttonFor512GB.addEventListener('click',function(){
    if(isContain != true){
        buttonFor256GB.classList.remove('selected');
        buttonFor512GB.classList.add('selected');
        buttonFor1TB.classList.remove('selected');
    }
    priceAdding('storage',100);
})
buttonFor1TB.addEventListener('click',function(){
    if(isContain != true){
        buttonFor256GB.classList.remove('selected');
        buttonFor512GB.classList.remove('selected');
        buttonFor1TB.classList.add('selected');
    }
    priceAdding('storage',180);
})

// for Delivery 
freeDelivery.addEventListener('click',function(){
    if(isContain != true){
        freeDelivery.classList.add('selected');
        expensiveDelivery.classList.remove('selected');
    }
    priceAdding('delivery',0);
})
expensiveDelivery.addEventListener('click',function(){
    if(isContain != true){
        freeDelivery.classList.remove('selected');
        expensiveDelivery.classList.add('selected');
    }
    priceAdding('delivery',20);
})


// For promo code

promoButton.addEventListener('click',function(){
    if(isContain != true){
        promoCode.classList.add('selected');
        promoButton.classList.remove('selected');
    }
})
promoButton.addEventListener('click',function(){
    if(isContain != true){
        promoCode.classList.remove('selected');
        promoButton.classList.add('selected');
    }
    promValue();
})