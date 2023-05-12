// function swap (string) {
//     if (string.length == 0){
//       return string
//       }
//     let splitString = string.split('');
//     console.log(splitString)
//     splitString.map(x => {
//       if (x.match(/[aeiou]/ig)){
//         console.log(x.toUpperCase())
//         return x.toUpperCase()
        
//       }
//       else {
//         console.log(x)
//         return x  
        
//       }
    
//     })}

function swap (string) {
    if (string.length == 0){
      return string
      }
    let splitString = string.split('');
    let answer = splitString.map(x => {
      if (x.match(/[aeiou]/ig)){
        return x.toUpperCase()
      }
      else {
        return x  
      }
    }); console.log(answer.join(''))}

    string = "   @@@"
    swap(string)