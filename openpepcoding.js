const puppeteer = require("puppeteer");
console.log("before");
let page;
const browseropenpromise = puppeteer.launch({
    headless :false,
    slowMo : true,
    defaultViewport : null,
    args:["--start-maximized"]

});
browseropenpromise.then(function(browser){
    const pageArrpromise = browser.pages();
    return pageArrpromise;
}).then(function(browserpages){
    page = browserpages[0];
    let gotopromise = page.goto("https://www.google.com/");
    return gotopromise;
}).then(function(){
    let elementwait = page.waitForSelector("input[type = 'text']",{visible : true});
    return elementwait;

}).then(function(){
    // console.log("reached google home page")
    let keyswillbesendpromise = page.type("input[type = 'text']","pepcoding");
    return keyswillbesendpromise;
}).then(function(){
    let enterwillbepressed = page.keyboard.press("Enter");
    return enterwillbepressed;
}).then(function(){
    let elementwaitpromise = page.waitForSelector("h3.LC20lb.DKV0Md",{ visible: true});
    return elementwaitpromise;

}).then(function(){
    let keyswillbesendpromise = page.click("h3.LC20lb.DKV0Md");
    return keyswillbesendpromise;

}).catch(function(err){
    console.log(err);

})
console.log("after");

