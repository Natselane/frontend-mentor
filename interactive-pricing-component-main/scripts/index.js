const DOM = (function() {
    const viewsAmount = document.getElementById("views-amount");
    const moneyAmount = document.getElementById("money-amount");
    const range = document.getElementById("views");

    const viewRange = {
        "1": ["10K", "$8"],
        "2": ["50K", "$12"], 
        "3": ["100K", "$16"],
        "4": ["500K", "$24"],
        "5": ["1M", "$36"]
    }

    const updatePageViews = function(range) {
        viewsAmount.innerText = `${viewRange[parseInt(range)][0]}`;
    }

    const updateMoneyAmount = function(range) {
        moneyAmount.innerText = `${viewRange[parseInt(range)][1]}`;
    }

    return {
        range,
        updatePageViews,
        updateMoneyAmount
    }
})();

DOM.range.onchange = function() {
    DOM.updatePageViews(DOM.range.value);
    DOM.updateMoneyAmount(DOM.range.value);
}
