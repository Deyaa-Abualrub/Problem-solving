let arr = [20, 12, 35, 60, 5];
let count = 0;

function Summition() {
  if (count === arr.length) return 0;

  let currentValue = arr[count];
  count++;

  return currentValue + Summition();
}

console.log(Summition());
