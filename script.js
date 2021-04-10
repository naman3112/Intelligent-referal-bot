const pup = require("puppeteer");
let tab;
let brow;
let id = "chaynika.arora6@gmail.com";
let pass = "chaynikaa1854";
// let challenges = require("./data");
var fs = require('fs');
var setCookies=[];
 setCookies = require('./foo');

async function type(selector, input, tab) {
  for (let i = 0; i < input.length; i++) {
    let rando = Math.floor(Math.random() * 1000 + 200);
    await tab.type(selector, input[i], { delay: rando });
  }
}
async function letsWait() {
  let rando = Math.floor(Math.random() * 1700 + 200);

  return new Promise((res, rej) => {
    setTimeout(() => {
      res();
    }, rando);
  });
}

async function main() {
  let browser = await pup.launch({
    headless: false,
    defaultViewport: false,
    args: ["--start-maximized"],
  });

  let pages = await browser.pages();

  let tab = pages[0];
for(let i=0;i<setCookies.length;i++){
    await tab.setCookie(setCookies[i]);

}
  

await tab.goto("https://www.linkedin.com/feed/");

  //await tab.goto("https://www.linkedin.com/login");

//   await type("#username", id, tab);
//   await letsWait();
//   await type("#password", pass, tab);
//   await letsWait();
// await tab.click(".btn__primary--large.from__button--floating")
// await tab.waitForNavigation({waitUntil: "networkidle2"});
// let cookiePage = await tab.cookies();
// console.log('these are the cookies of the current page ' ,cookiePage);

// await letsWait();
// fs.writeFileSync("foo.js", JSON.stringify(cookiePage));
await letsWait();
await tab.waitForSelector(".search-global-typeahead__input.always-show-placeholder",{visible:true});
await letsWait();
await type(".search-global-typeahead__input.always-show-placeholder", "cisco",tab);
await letsWait();
//searching the required organisation 
await tab.keyboard.press("Enter");


//9 tab clicks are needed to get to the people tab 
for(let i=0;i<10;i++){
    await tab.keyboard.press("Tab");
    await letsWait();
}
//selecting using "enter" 
await tab.keyboard.press("Enter");
await letsWait();
await tab.waitForSelector(".pb2.t-black--light.t-14",{visible: true});
await letsWait();
await tab.keyboard.press("Tab");
await tab.keyboard.press("Tab");
await letsWait();
await tab.keyboard.press("Enter");
await letsWait();
await tab.waitForSelector("#network-F",{visible: true});
await tab.click("#network-F");
for(let i=0;i<6;i++){
    await tab.keyboard.press("Tab");
    await letsWait();
}
await tab.waitForSelector (".artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view",{visible:true});
let allMessageButtons = await tab.$$(".artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view")
await letsWait();
for(let i=0;i<allMessageButtons.length;i++ ){
    await tab.click(".artdeco-button.artdeco-button--2.artdeco-button--secondary.ember-view")
    await letsWait();
}



//**************************Awaiting cokies******************************* */



// work neede for logged in things
  // await tab.type("#input-1", id);

  // for(let i=0;i<id.length;i++){
  //      let rando =

  // }

  // await tab.type("#input-2", pass);
  // await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
  // await tab.waitForNavigation({waitUntil: "networkidle2"});
  // await tab.click(".dropdown-handle.nav_link.toggle-wrap");
  // await tab.click("a[data-analytics='NavBarProfileDropDownAdministration']");
  // await tab.waitForSelector(".nav-tabs.nav.admin-tabbed-nav li", {visible: true});
  // let linkLists = await tab.$$(".nav-tabs.nav.admin-tabbed-nav li");
  // await linkLists[1].click();
  // await tab.waitForSelector(".btn.btn-green.backbone.pull-right", {visible: true});
  // let createChallengeButton = await tab.$(".btn.btn-green.backbone.pull-right");
  // let createChallengeUrl = await tab.evaluate(function(ele){
  //     return ele.getAttribute("href");
  // },createChallengeButton);
  // for(let i = 0; i < challenges.length; i++) {
  //     await createChallenge("https://www.hackerrank.com" + createChallengeUrl,challenges[i],await browser.newPage() );
  // }
}

async function createChallenge(url, challenge, tab) {
  await tab.goto(url);
  await tab.waitForSelector("#name", { visible: true });
  await tab.type("#name", challenge["Challenge Name"]);
  await tab.type("#preview", challenge["Description"]);
  await tab.waitForSelector(
    "#problem_statement-container .CodeMirror textarea",
    { visible: true }
  );
  await tab.type(
    "#problem_statement-container .CodeMirror textarea",
    challenge["Problem Statement"]
  );
  await tab.type(
    "#input_format-container .CodeMirror textarea",
    challenge["Input Format"]
  );
  await tab.type(
    "#constraints-container .CodeMirror textarea",
    challenge["Constraints"]
  );
  await tab.type(
    "#output_format-container .CodeMirror textarea",
    challenge["Output Format"]
  );
  await tab.type("#tags_tag", challenge["Tags"]);
  await tab.keyboard.press("Enter");
  await tab.click(".save-challenge.btn.btn-green");
}
main();
