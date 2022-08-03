/* 
9.
Write the price of the books that you have. 
Display the prices if the prices is lower than 200 
*/

/* var bookPrice = [
  20, 40, 60, 80, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
]; */
var bookPrice = [
  2000, 40000, 160, 80, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
];

/* for (var i = 0; i < bookPrice.length; i++) {
  if (bookPrice[i] < 200) {
    console.log(bookPrice[i]);
  }
}
 */
console.log(bookPrice.length);

for (var i = 0; i < bookPrice.length; i++) {
  if (bookPrice[i] > 200) {
    continue;
  }
  console.log(bookPrice[i]);
}
