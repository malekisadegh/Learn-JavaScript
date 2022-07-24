// Traditional Function Expression
var add = function(a,b){
    return a + b;
  }
  
  // Arrow Function Expression
  var arrowAdd = (a,b) => a + b;

   // document.getElementById("output1").innerHTML=arrowAdd(2,3);

   console.log('arrowAdd =>', arrowAdd(2,3))

  var obj1 = {
    valueOfThis: function(){
      return this;
    }
  }
  const obj2 = {
    valueOfThis: ()=>{
      return this;
    }
  }
  
  obj1.valueOfThis(); // Will return the object obj1
  obj2.valueOfThis(); // Will return window/global object

  console.log('obj1 =>', obj1.valueOfThis(),'\n','obj2 =>',obj2.valueOfThis())