/* globals gauge*/
"use strict";
const { write, goto, click } = require('taiko');

step("open google.com", async () => {
    await goto("https://www.google.com/");
});

step("do Search for <query>", async (query) => {
    await write(query);
});

step("click on element having text: <text>", async (text) => {
     click(text);
});