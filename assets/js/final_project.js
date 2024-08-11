let pricing = [];

function renderPricing(price) {
    headerText.innerText = pricing.heading;
    subheadingText.innerText = pricing.subheading;
    productNameText.innerText = pricing.productName;
    monthlyBillingText.innerText = pricing.billingCycle.monthly.name;
    yearlyBillingText.innerHTML = `${pricing.billingCycle.yearly.name}&nbsp;&nbsp;&nbsp;&nbsp;<span>-25%</span>`;
    unlimitedText.innerHTML = `<img src="./assets/img/features_tick_logo.png" alt=""> ${pricing.features[0]}`;
    dataText.innerHTML = `<img src="./assets/img/features_tick_logo.png" alt=""> ${pricing.features[1]}`;
    EmailText.innerHTML = `<img src="./assets/img/features_tick_logo.png" alt=""> ${pricing.features[2]}`;
}

console.log(finalPrice);

function finalPricing() {
    if(checkbox.checked) {
        finalPrice.innerText = `$${((((200000 / Number(rangeAmount.value)) * 3.2) / 100)*75).toFixed(2)}`;
        monthOrYear.innerText = `/ year`;
    } else {
        finalPrice.innerText = `$ ${(((200000 / Number(rangeAmount.value)) * 3.2).toFixed(2))} `;
        monthOrYear.innerText = `/ month`;
    }
    console.log(rangeAmount.value);
    console.log(200000 / Number(rangeAmount.value));
    console.log(((200000/ Number(rangeAmount.value)) * 3.2));
}

myTrial.addEventListener('click', finalPricing);

function init() {
    fetch("https://dummyjson.czaylabs.com.tr/api/exam/interactive-pricing")
    .then((res) => res.json())
    .then((res) => {
        pricing = res;
        renderPricing();
    })
}

init();