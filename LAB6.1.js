function fromNumber(number) {
  if (number > 10) {
    return; // exit the function if number is greater than 10
  }

  console.log(number);
  fromNumber(number + 1); // call the function recursively with the next number
}

fromNumber(2);
