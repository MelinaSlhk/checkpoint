const assert = require("assert");
function all(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let count = promises.length;
    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((result) => {
          results[i] = result;
          count--;
          if (count === 0) {
            resolve(results);
          }
        })
        .catch(reject);
    }
  });
}
assert.doesNotReject(
  all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]).then(
    ([x, y, z]) => {
      assert(x === 1);
      assert(y === 2);
      assert(z === 3);
      console.log("Ok, la fonction all fonctionne comme prévu !");
    }
  )
);
