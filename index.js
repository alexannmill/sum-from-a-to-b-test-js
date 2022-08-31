
// function sum(fromN, toN) {
// //base case
// let counter = fromN
// if (fromN === toN){
//   return counter
// }else {
//   counter= counter + fromN
//   return sum(fromN + 1, toN)
// }
// };
console.log(sum( 5, 7))
// //for loop
//   let counter = 0
//   for(i = formN; i=< toN; i++){
//     counter ++
//   }

module.exports = sum;


function sum(fromN, toN) {
  //base case
    if (fromN === toN){
      return fromN
    }else {
      return fromN + sum(fromN +1, toN)
    }
  };
   sum( 5, 10)
