function curryedFn(fn) {
   function a1(a) {
    res = a1(b)
    return res;
  };

  return a1;
}

function add(num1,num2,num3){
    console.log("Sum: ",num1+num2+num3);
}

const curryedSum = curryedFn(add);
// curryedSum(2)(3)(4);
curryedSum(2,3)(5)(1);