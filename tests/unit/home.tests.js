const assert = require('assert');
const fetch = require('node-fetch');

suite('Home page', function() {
  test('Page title', async function() {
    let res = await fetch("https://suat17s.onrender.com/");
    let body = await res.text();
    assert.ok(body.includes("<h1>Boardgames Collection</h1>"));
  });
  
  test('Boardgames count', async function() {
    let res = await fetch("https://suat17s.onrender.com/");
    let body = await res.text();
    assert.ok(body.includes("Added boardgames: <b>3</b>"));
  });
});
