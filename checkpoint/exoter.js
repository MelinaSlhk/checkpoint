function filterObject(obj, predicate) {
  const filteredObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && predicate(key, obj[key])) {
      filteredObj[key] = obj[key];
    }
  }
  return filteredObj;
}


const obj = {
  foo: 1,
  bar: "hello",
  baz: true,
};

const filtered = filterObject(
  obj,
  (key, value) => key === "foo" || value === "hello"
);

console.log(filtered); 

