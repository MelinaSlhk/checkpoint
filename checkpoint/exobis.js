Array.prototype.dedup = function () {
  return this.filter((value, index, self) => self.indexOf(value) === index);
};


const array = [1, 1, 6, 2, 3, 2, 2, 4, 6, 6, 1];
const dedupArray = array.dedup();

console.log(dedupArray); 



