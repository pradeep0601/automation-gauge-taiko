/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, click } = require('taiko');

beforeSuite(async () => {
    await openBrowser({ headless: true })
});

afterSuite(async () => {
    await closeBrowser();
});

step("Open google.com", async () => {
    await goto("https://google.com");
});

step("Do Search for <query>", async (query) => {
    await write(query);
});

step("Click on <query>", async (query) => {
     click(query);
});