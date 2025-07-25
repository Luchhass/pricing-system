let pricing = {
  heading: "Simple, traffic-based pricing",
  subheading: "Sign-up for our 30-day trial. No credit card required.",
  billingCycle: {
    monthly: {
      name: "Monthly Billing",
    },
    yearly: {
      name: "Yearly Billing",
    },
  },
  features: ["Unlimited websites", "100% data ownership", "Email reports"],
};

function renderPricing() {
  headerText.innerText = pricing.heading;
  subheadingText.innerText = pricing.subheading;
  monthlyBillingText.innerText = pricing.billingCycle.monthly.name;
  yearlyBillingText.innerHTML = `${pricing.billingCycle.yearly.name}&nbsp;&nbsp;&nbsp;&nbsp;<span>-25%</span>`;
  unlimitedText.innerHTML = `<img src="./assets/img/features_tick_logo.png" alt=""> ${pricing.features[0]}`;
  dataText.innerHTML = `<img src="./assets/img/features_tick_logo.png" alt=""> ${pricing.features[1]}`;
  EmailText.innerHTML = `<img src="./assets/img/features_tick_logo.png" alt=""> ${pricing.features[2]}`;
}

// Sayfa görüntüleme metnini güncelle (örnek: 100K PAGEVIEWS)
function updatePageViews(value) {
  let displayText;
  if (value >= 1000 && value < 1000000) {
    displayText = `${value / 1000}K PAGEVIEWS`;
  } else if (value >= 1000000) {
    displayText = `${value / 1000000}M PAGEVIEWS`;
  } else {
    displayText = `${value} PAGEVIEWS`;
  }
  productNameText.innerText = displayText;
}

// Fiyatı hesapla
function updatePrice(value) {
  const basePrice = ((value / 1000) * 2).toFixed(2); // örnek hesap: 100K = 200.00$
  if (checkbox.checked) {
    finalPrice.innerText = `$${(basePrice * 0.75).toFixed(2)}`;
    monthOrYear.innerText = "/ year";
  } else {
    finalPrice.innerText = `$${basePrice}`;
    monthOrYear.innerText = "/ month";
  }
}

// Hem pageview hem fiyatı güncelle
function handleSliderChange() {
  const value = parseInt(rangeAmount.value);
  updatePageViews(value);
  updatePrice(value);
}

// Başlangıçta çalıştır
function init() {
  renderPricing();
  handleSliderChange(); // İlk değer için çalıştır
}

// Event listener’lar
rangeAmount.addEventListener("input", handleSliderChange);
checkbox.addEventListener("change", () =>
  updatePrice(parseInt(rangeAmount.value))
);
myTrial.addEventListener("click", handleSliderChange);

init();
