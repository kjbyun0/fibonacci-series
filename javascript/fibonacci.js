function fibonacci(num) {
  // type your code here
  if (num < 2)
    return num;

  let pn1 = 0, pn2 = 1, curNum = 1;
  while (curNum < num) {
    curNum++;
    const tmp = pn2;
    pn2 += pn1;
    pn1 = tmp;
  }

  return pn2;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(1));

  console.log("");

  console.log("Expecting: 2");
  console.log("=>", fibonacci(3));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
