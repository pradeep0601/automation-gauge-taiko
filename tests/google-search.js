/* globals gauge*/
"use strict";
const { openBrowser,write, closeBrowser, goto, click } = require('taiko');
const assert = require("assert");

step("Open google.com", async () => {
    await goto("https://google.com");
});

step("Do Search for <query>", async (query) => {
    await write(query);
});

step("Click on <query>", async (query) => {
     click(query);
});