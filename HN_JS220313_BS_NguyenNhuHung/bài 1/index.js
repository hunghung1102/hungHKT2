// đề bài: Cho 1 mảng các phần tử in ra phần tử lớn nhất trong mảng 

let array = [-3,5,88,99,76,8,4,5,85,63];
let max = array [0];
for (let i = 1; i < array .length; i++) {
    if(array [i] > max){
        max = array [i]
    }
}
console.log('giá trị cao nhất ' + max);