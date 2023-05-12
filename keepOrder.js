function keepOrder(ary, val) {
    for (let i = 0; i < ary.length; i++){
        
      if (val <= ary[i]){
        console.log(val)
        console.log(i)
        console.log(ary[i])
        return i
        
    }
      else{ 
        continue
      }
    }
  }

  keepOrder([1, 2, 3, 4, 7], 5)