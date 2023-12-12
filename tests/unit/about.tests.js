const assert = require('assert');
const fetch = require('node-fetch');

suite('About page', function() {
  test('Page title', async function() {
    let res = await fetch("https://suat17s.onrender.com");
    let body = await res.text();
    assert.ok(body.includes("<title>About</title>"));
    assert.ok(body.includes("<h1>About</h1>"));
  });
});