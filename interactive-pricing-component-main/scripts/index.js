const DOM = (function() {
    const viewsAmount = document.getElementById("views-amount");
    const moneyAmount = document.getElementById("money-amount");
    const range = document.getElementById("views");

    const viewRange = {
        "1": "10K",
        "2": "50K", 
        "3": "100K",
        "4": "500K",
        "5": "1M"
    }

    const updatePageViews = function(range) {
        viewsAmount.innerText = `${viewRange[parseInt(range)]}`;
    }

    return {
        range,
        updatePageViews
    }
})();



DOM.range.onchange = function() {
    DOM.updatePageViews(DOM.range.value);
}
