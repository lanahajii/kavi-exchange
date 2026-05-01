function savePrice() {
    // وەرگرتنی نرخە نوێیەکە لە خانەی نووسینەکە
    const newPrice = document.getElementById('dollar-price-input').value;
    
    if(newPrice !== "") {
        // خەزنکردنی نرخەکە لەژێر ناوی "dollarPrice"
        localStorage.setItem('dollarPrice', newPrice);
        alert("نرخەکە بە سەرکەوتوویی گۆڕدرا بۆ: " + newPrice);
    } else {
        alert("تکایە نرخێک بنووسە!");
    }
}