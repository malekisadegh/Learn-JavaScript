function extractingArgs(...args){
    return args[1];
  }
  
  // extractingArgs(8,9,1); // Returns 9
  
  function addAllArgs(...args){
    let sumOfArgs = 0;
    let i = 0;
    while(i < args.length){
      sumOfArgs += args[i];
      i++;
    }
    return sumOfArgs;
  }
  
 console.log(addAllArgs(6, 5, 7, 99)); // Returns 117
 console.log(addAllArgs(1, 3, 4)); // Returns 8


   // Incorrect way to use rest parameter
//    function randomFunc(a,...args,c){
//     console.log('a:',a,'\n','args[0]:',args[0],'\n','c:',c)
//     }
    
    // Correct way to use rest parameter
    function randomFunc2(a,b,...args){
        console.log('a:',a,'\n','arg[0]:',args[0])
    }

   // randomFunc(6, 5, 7, 99);
    randomFunc2(6, 5, 7, 99);