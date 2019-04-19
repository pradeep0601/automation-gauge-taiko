/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, press, text, focus, inputField, toRightOf } = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: headless })
});

afterSuite(async () => {
    await closeBrowser();
});

step("goto getgauge github page", async () => {
    await goto('https://www.github.com/getgauge');
});

step("search for <query>", async (query) => {
    await focus(inputField(toRightOf('Pricing')))
    await write(query);
    await press('Enter');
});

step("page contains <content>", async (content) => {
    assert.ok(await text(content).exists());
});
