const assert = require("assert");
function race(promises) {
  return new Promise((resolve, reject) => {
    for (const promise of promises) {
      promise.then(resolve).catch(reject);
    }
  });
}
const pSetTimeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

assert.doesNotReject(
  race([
    pSetTimeout(4000).then(() => 1),
    pSetTimeout(3000).then(() => 2),
    pSetTimeout(2000).then(() => 3),
    pSetTimeout(1000).then(() => 4),
  ]).then((winner) => {
    assert(winner === 4);

    console.log("Ok, la fonction race fonctionne comme prévu !");
  })
);
