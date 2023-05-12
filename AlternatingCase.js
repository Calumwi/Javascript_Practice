function toAlternatingCase (myString) {
    let alternateCase = "";
    for (i = 0 ; i < myString.length ; i++) {
    //   console.log(myString.charAt(i));
      let myOriginalChar = myString.charAt(i);
        if (myOriginalChar.toUpperCase() === myOriginalChar) {
          alternateCase = alternateCase + myOriginalChar.toLowerCase();
        }
        else if (myOriginalChar.toLowerCase() === myOriginalChar) {
          alternateCase = alternateCase + myOriginalChar.toUpperCase();
        }
        else 
          alternateCase = alternateCase + myOriginalChar;
    }
    return alternateCase
}

let alternateCase = toAlternatingCase("Hello Wor1d");
console.log(alternateCase)