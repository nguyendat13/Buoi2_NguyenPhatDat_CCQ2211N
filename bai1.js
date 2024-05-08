function removeSpace(str){
    str=str.replace(/<[^>]*>/g,"");
    //trim xoa ky tu trang dau ,cuoi
    str=str.trim();
    //tim kiem 2 khoang trang
    str=str.replace(/\s+/g," ");
    //chuyen chuoi ve in hoa
    str=str.toLowerCase();
    //chuyen ky tu dau ve in hoa
    const arr=str.split(" ");
    for(let i=0;i<arr.length;i++){
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].slice(1);
    }
    str=arr.join(" ");
    return str;
}
let str=`  AHsms mklq sa`
console.log(str.length);

str=removeSpace(str);
console.log(str);