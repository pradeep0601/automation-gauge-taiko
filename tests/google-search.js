/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, click } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

// beforeSuite(async () => {
//     await openBrowser({ headless: headless })
// });

// afterSuite(async () => {
//     await closeBrowser();
// });

step("Open google.com", async () => {
    await goto("https://google.com");
});

step("Do Search for <query>", async (query) => {
    await write(query);
});

step("Click on <query>", async (query) => {
     click(query);
});