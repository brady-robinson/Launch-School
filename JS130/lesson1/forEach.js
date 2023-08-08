class Foo {
  constructor(prefix) {
    this.prefix = prefix;
  }

  showItem(item) {
    console.log(this.prefix, item);
  }
}


function forEach(array, callback, thisArg) {
  for (let i = 0; i < array.length; ++i) {
    callback.call(thisArg, array[i], i, array);
  }
}

forEach(["a", "b", "c"], function(value, index, arr) {
  console.log(`After ${value} comes ${arr[index + 1]}`);
});