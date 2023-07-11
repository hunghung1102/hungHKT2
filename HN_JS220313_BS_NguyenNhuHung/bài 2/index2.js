const str = '  heLlo riKkei      academy  ';

// đưa string về mảng
const arr = str.trim().split(/\s+/);

for(let i = 0; i < arr.length; i++) {

	// lấy ra từng string trong mảng
	let strI = arr[i];
  
  // uppper case kí tự đầu của từ
  let strIUpperCase = strI.charAt(0).toUpperCase() + strI.slice(1);
  arr[i] = strIUpperCase;
  
}

let result = arr.join(' ');
console.log(result);