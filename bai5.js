const arrNumber=[9,3,5,8,1,4,3,2];
const arrStr = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];

console.log(arrNumber);
console.log(arrStr);

//them so 10 vao dau va cuoi
    arrNumber.unshift(10);
    arrNumber.push(10);
    console.log(arrNumber);

    arrStr.unshift(10);
    arrStr.push(10);
    console.log(arrStr);

//Xóa số đầu và số cuối
    arrNumber.shift();
    arrNumber.pop();
    console.log(arrNumber);

    arrStr.shift();
    arrStr.pop();
    console.log(arrStr);

//Sắp xếp tăng dần mảng  arrNumber và arrStr
    arrNumber.sort();
    console.log(arrNumber);

    arrStr.sort();
    console.log(arrStr);

//Lấy ra mảng con từ vị trị 3 đến 5 từ mảng arrNumber
    const SapXep=arrNumber.slice(3,5);
    console.log(SapXep);

//Xóa 1 phần tử tại vị trí 3 và thêm 3 phần tử bất kỳ trong mảng arrNumber 
    arrNumber.splice(3,1,'6','7','10');
    console.log(arrNumber);

//Tìm vị trí đầu tiên phần tử có giá trị 3 trong mảng arrNumber (indexOf)
    let index1=arrNumber.indexOf(3);
    console.log('Vi tri dau tien phan tu co gia tri 3 la '+ index1);

//Tìm vị trí cuối cùng phần tử có giá trị 3 trong mảng arrNumber (lastIndexOf)
    let index=arrNumber.lastIndexOf(3);
    console.log('Vi tri cuoi cung phan tu co gia tri 3 la '+ index);

//Kiểm tra phân tử có ghí tri 3 có trong mảng arrNumber không (includes)
    const three= arrNumber.includes(3);
    console.log(three);

// Duyệt mảng forEach
        arrNumber.forEach((a) =>console.log(a))
        arrStr.forEach((a) =>console.log(a))
// Duyệt mảng map
        const map1=arrNumber.map((x) => x*2);
        console.log(map1);

// Lọc những phần tử có giá trị lớn hơn 5 trong mảng arrNumber (filter)
    function phanTu(arrNumber)
    {
        return arrNumber >5;
    }
    const result = arrNumber.filter(phanTu);
    console.log(result);

// Tính tổng các phần tử mảng arrNumber (reduce)
    const init=0; //Giá trị ban đầu
    const sum=arrNumber.reduce((acc,currenValue) => acc +currenValue,init);
    console.log(sum);

// Nối 2 mảng arrNumber và arrStr lại thành 1 mảng (concat)
    const arr3=arrNumber.concat(arrStr);
    console.log(arr3);

//Nối các phần tử mảng arrStr các nhau bởi dấu "-" (join)
        console.log(arrStr.join('-'));

//Gán tất cả các phần tử mảng arrNumber bằng 0 (fill)
        console.log(arrNumber.fill(0));

//Sao chép một hoặc nhóm phần tử từ vị trí này sang vị trí khác cùng mảng (copyWithin)
        let copyNumber=arrNumber.copyWithin(2,0);
        console.log(copyNumber);

        let copyStr=arrStr.copyWithin(3,4);
        console.log(copyStr);

// Tìm kiếm phần tử trong mảng thõa mãn điều kiện
    function check(num){
        return num >5;
    }
    // find, findIndex,
        const found=arrNumber.find(check);
        const foundIndex=arrNumber.findIndex(check);
        
        console.log('Phan tu dau tien: '+found+' va '+'Vi tri dau tien:'+foundIndex);
    
    // findLast, findLastIndex
    const foundLast=arrNumber.findLast(check);
    const foundLastIndex=arrNumber.findLastIndex(check);
    
    console.log('Phan tu cuoi cung: '+foundLast+' va '+'Vi tri cuoi cung:'+foundLastIndex);

//Kiểm tra tất cả các phần tử thõa mãn điều kiện (every)
        console.log('tat ca ptu tren 5?' + arrNumber.every(check));
//Kiểm tra ít nhất một phần tử thõa mãn điều kiện (some)
        console.log('co phan tu nao tren 5?' + arrNumber.some(check));
