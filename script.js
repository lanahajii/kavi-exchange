function convert() {
    const amount = document.getElementById('amount').value;
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;
    const resultDiv = document.getElementById('result');

    // نرخی خەملێنراو (دەتوانی بیگۆڕیت)
    const rate = 1500; 
    let finalAmount = 0;

    if (amount === "" || amount <= 0) {
        resultDiv.innerText = "تکایە بڕێکی ڕاست بنووسە";
        return;
    }

    if (from === "USD" && to === "IQD") {
        finalAmount = amount * rate;
        resultDiv.innerText = amount + " دۆلار = " + finalAmount.toLocaleString() + " دینار";
    } else if (from === "IQD" && to === "USD") {
        finalAmount = amount / rate;
        resultDiv.innerText = amount + " دینار = " + finalAmount.toFixed(2) + " دۆلار";
    } else {
        resultDiv.innerText = "تکایە دوو دراوی جیاواز هەڵبژێرە";
    }
}
// ئەمە بۆ ئەوەیە نرخەکە لە لاپەڕەی ئەدمینەوە وەربگرێت
function updatePage() {
    const savedPrice = localStorage.getItem('dollarPrice');
    if(savedPrice) {
        // ئەمە دەگەڕێت بۆ ئەو شوێنەی کە نرخی لێ نیشان دەدرێت
        const displayElem = document.getElementById('display-price');
        if(displayElem) {
            displayElem.innerText = savedPrice;
        }
    }
}

// هەر کە لاپەڕەکە کرایەوە ئەمە کار دەکات
window.onload = updatePage;