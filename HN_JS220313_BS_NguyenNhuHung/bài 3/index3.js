let a = +prompt('Nhập Tháng');
let b = +prompt('Số năm')
switch(a){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log('Tháng' + a +' có 31 ngày');
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log('tháng' + a +' có 30 ngày');
        break;
    case 2:    
        if (b % 400 == 0 || (b % 4 == 0 && b % 100 != 0))
            console.log('tháng' + a +' co 29 ngày');
        else 
            console.log('tháng' + a +' co 28 ngày');
        break;               
}