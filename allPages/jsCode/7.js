var mobileNames = [
  "iPhone",
  "iPad",
  "iPod",
  "Android",
  "BlackBerry",
  "Windows Phone",
  "Nokia",
  "LG",
  "Moto",
  "Samsung",
  "Sony",
  "HTC",
  "Nexus",
  "Motorola",
  "Other",
];
/* 
for (var i = 0; i < mobileNames.length; i++) {
  var mobileName = mobileNames[i];
  console.log(mobileName);
}
 */
// var mobileCount = 1;
var mobileCount = mobileNames.length;
console.log(mobileCount);
// console.log("Mobile Count: " + mobileCount);
// console.log(mobileNames.length);
/* for (var i = 0; i < mobileNames.length; i++) {
  mobileCount++;
  console.log("Mobile Count: " + mobileCount);
}
 */
// while (mobileCount > 0 && mobileCount <= mobileNames.length) {
var i = 1;
while (i <= mobileCount) {
  //   console.log("Mobile Count: " + i);
  mobile = mobileNames[i - 1];
  console.log(mobile);
  i++;
  if (i > mobileCount) {
    break;
  }
}
