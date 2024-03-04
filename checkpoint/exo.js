function categorize(values) {
  return {
    'number': values.filter((v) => typeof v === 'number'),
    'string': values.filter((v) => typeof v === 'string'),
    'function': values.filter((v) => typeof v === 'function'),
    'boolean': values.filter((v) => typeof v === 'boolean'),
    'bigint': values.filter((v) => typeof v === 'bigint'),
  };
}
const result = categorize([
  1,
  "hello",
  function sayHi() {
    console.log("hi");
  },
  "world",
  true,
  0n,
  1000,
]);
console.log(result);