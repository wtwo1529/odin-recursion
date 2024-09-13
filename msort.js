function msort(arr) {
  if (arr.length == 1) return arr;

  let middle = arr.length / 2;
  let left = msort(arr.slice(0, middle));
  let right = msort(arr.slice(middle));

  let i = 0;
  let j = 0;
  let tmp = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      tmp.push(left[i]);
      i++;
    } else {
      tmp.push(right[j]);
      j++;
    }
  }

  while (i < left.length) {
    tmp.push(left[i]);
    i++;
  }

  while (j < right.length) {
    tmp.push(right[j]);
    j++;
  }
  return tmp;
}

let a = [3, 2, 1, 13, 8, 5, 0, 1];

let b = [105, 79, 100, 110];

let c = msort(a);

let d = msort(b);

console.log(c);
console.log(d);
