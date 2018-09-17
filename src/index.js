// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var exit = {};
    
    while (currency > 0){
    
    if (currency >10000) {exit ["error"] = "You are rich, my friend! We don't have so much coins for exchange"; break};
    
    
    var h = currency/50;
    
    if (h === Math.round(h)) {exit ["H"] = h; break;};
    
    if (h > 1) {exit ["H"] = Math.floor(h); currency -=  50*Math.floor(h)};
    
    var q = currency/25;
    
    if (q === Math.round(q)) {exit ["Q"] = q; break;};
    
    if (q > 1) {exit ["Q"] = Math.floor(q); currency -=  25*Math.floor(q)};
    
    var d = currency/10;
    
    if (d === Math.round(d)) {exit ["D"] = d; break; };
    
    if (d > 1) {exit ["D"] = Math.floor(d); currency -=  10*Math.floor(d)};
    
    var n = currency/5;
    
    if (n === Math.round(n)) {exit ["N"] = n; break; };
    
    if (n > 1) {exit ["N"] = Math.floor(n); currency -=  5*Math.floor(n)};
    
    exit ["P"] = currency;
    
    break;
    
    };
    
    return exit;
}
