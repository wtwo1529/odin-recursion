function fib(n, arr = [0, 1]) {
  console.log("This was printed recursively");
  if (n == 2 || n == 1) {
    return arr;
  }
  arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  return fib(n - 1, arr);
}

console.log(fib(8));
