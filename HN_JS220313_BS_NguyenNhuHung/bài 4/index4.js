let array = [3, 25, 38, 49, 12,];




// Sử dụng Hàm sort.

array.sort(
  function(a,b){
    return b - a; 
  }
);
console.log(array);


// Không sử dụng hàm sort.

let support = 0;

for (let i = 0; i < array.length; i++) {
    for (let j = i+1; j < array.length; j++) {
      if(array[j] > array[i]){
        support = array[j]; 
        array[j] = array[i];
        array[i] = support;
      }
    }
    
}
console.log(array);