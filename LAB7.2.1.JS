function scrambleWord(word) {
  let length = word.length;
  let scrambledWord = "";
  
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * length);
    scrambledWord += word.charAt(index);
    word = word.substring(0, index) + word.substring(index + 1);
    
    console.log("Original word: " + word);
    console.log("Scrambled word: " + scrambledWord);
  }
  
  console.log("Final result: " + scrambledWord);
  return scrambledWord;
}

let word = "example";
scrambleWord(word);
