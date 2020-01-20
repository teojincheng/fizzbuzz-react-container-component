import React from "react";

function checkFizzBuzz(number) {
  const isDivisibleByThree = number % 3 === 0;
  const isDivisibleByFive = number % 5 === 0;
  const isDivisibleByFiveteen = isDivisibleByThree && isDivisibleByFive;
  const isZero = number === 0;

  if (isZero) {
    return 0;
  } else if (isDivisibleByFiveteen) {
    return "FizzBuzz";
  } else if (isDivisibleByThree) {
    return "Fizz";
  } else if (isDivisibleByFive) {
    return "Buzz";
  } else {
    return number;
  }
}

const FizzBuzzDisplay = ({ number }) => {
  return <div>FizzBuzz Value: {checkFizzBuzz(number)}</div>;
};

export default FizzBuzzDisplay;
