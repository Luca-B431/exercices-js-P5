//votre code ici
function printNumbers(n) {
  let number = "";
  for (let i = 1; i <= n; i++) {
    number += i + " ";
  }
  return number.trim();
}

export default printNumbers;
