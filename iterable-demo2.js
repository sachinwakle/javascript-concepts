function range(start,end,interval) {
    return  {
        [Symbol.iterator]: function () {
          let count = start-interval;

          iterator = {
            next: function () {
                count += interval;
              if (count <= end) {
                  return { value: count, done: false };
                } else {
                  return { done: true };
              }
            },

            return: ()=>{
                console.log("Cleaning up...")
                return {done:true}
            }
          };
          return iterator;
        },
      };
}
  
  for (let num of range(9,20,2)) {
    console.log(num);
  }
  console.log([...range(10,20,2)])
  