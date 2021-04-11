const pup = require("puppeteer");
let tab;
let brow;
// let id = "chaynika.arora6@gmail.com";
// let pass = "chaynikaa1854";

// let challenges = require("./data");
let id = "namanarora311@gmail.com";
let pass = "HARICHAND@123";

var fs = require("fs");
var setCookies = [];
setCookies = require("./fooNaman");

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
async function letsWaitLong() {
    let rando = Math.floor(Math.random() * 1700 + 700);
  
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, rando);
    });
  }
  

async function messageType(text, tab, elementSelector) {
  await elementSelector.click();

  await tab.waitForSelector(
    ".msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate"
  );
  await type(
    ".msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate",
    text,
    tab
  );
  let sendButton = await tab.$(
    ".msg-form__send-button.artdeco-button.artdeco-button--1"
  );
  await sendButton.click();
  await tab.waitForSelector(".msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view",{visible: true})
//   let closeButton = await tab.$(".msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view");
// let k = await tab.$(".msg-overlay-bubble-header__controls.display-flex.align-items-center .msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view");
// await k.click();
// await tab.waitForSelector(".msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view")
// let nextK = await tab.$(".msg-overlay-bubble-header__control.artdeco-button.artdeco-button--circle.artdeco-button--muted.artdeco-button--1.artdeco-button--tertiary.ember-view")

await letsWait()

await tab.mouse.click(1500,550,{button : 'left'});
await letsWait();
await letsWaitLong();


//   await closeButton.click();
}

async function main() {
  let browser = await pup.launch({
    headless: false,
    defaultViewport: false,
    args: ["--start-maximized"],
  });

  let pages = await browser.pages();

  let tab = pages[0];
  for (let i = 0; i < setCookies.length; i++) {
    await tab.setCookie(setCookies[i]);
  }

  await tab.goto("https://www.linkedin.com/feed/");
  // first time login page for new user

  //   await tab.goto("https://www.linkedin.com/login");

  //   await type("#username", id, tab);
  //   await letsWait();
  //   await type("#password", pass, tab);
  //   await letsWait();
  // await tab.click(".btn__primary--large.from__button--floating")
  // await tab.waitForNavigation({waitUntil: "networkidle2"});
  // let cookiePage = await tab.cookies();
  // console.log('these are the cookies of the current page ' ,cookiePage);

  // await letsWait();
  // fs.writeFileSync("fooNaman.js", JSON.stringify(cookiePage));
  await letsWait();
  await tab.waitForSelector(
    ".search-global-typeahead__input.always-show-placeholder",
    { visible: true }
  );
  await letsWait();
  await type(
    ".search-global-typeahead__input.always-show-placeholder",
    "pepcoding",
    tab
  );
  await letsWait();
  //searching the required organisation
  await tab.keyboard.press("Enter");

  await letsWait();
  //9 tab clicks are needed to get to the people tab
  for (let i = 0; i < 9; i++) {
    await tab.keyboard.press("Tab");
    await letsWait();
  }
  //selecting using "enter"
  await tab.keyboard.press("Enter");
  await letsWait();
  await tab.waitForSelector(".pb2.t-black--light.t-14", { visible: true });
  await letsWait();
  await tab.keyboard.press("Tab");
  await tab.keyboard.press("Tab");
  await letsWait();
  await tab.keyboard.press("Enter");
  await letsWait();
  await tab.waitForSelector("#network-F", { visible: true });
  await tab.click("#network-F");
  for (let i = 0; i < 6; i++) {
    await tab.keyboard.press("Tab");
    await letsWait();
  }
  // now sending messages to the recruiters
  let text = "Sorry to bother you(Bot checking)";
  await tab.waitForSelector(
    ".entity-result__actions.entity-result__divider button",
    { visible: true }
  );
  let allMessageButtons = await tab.$$(
    ".entity-result__actions.entity-result__divider button"
  );
  await letsWait();
  for (let i = 0; i < allMessageButtons.length; i++) {
    await messageType(text, tab, allMessageButtons[i]);
    await letsWait();
  }
}

//**************************Awaiting cokies******************************* */

main();
