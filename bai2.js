function str_limit(str,limit=10){
    //xoa tag HTML
    str=str.replace(/<[^>]*>/g,"")
    //trim xoa ky tu trang dau ,cuoi
    str=str.trim();
    //tim kiem 2 khoang trang
    str=str.replace(/\s+/g," ");
    //chuyen chuoi ve in hoa
    str=str.toLowerCase();
    //chuyen ky tu dau ve in hoa
    const mang =str.split(" ");
    const mangmoi=mang.slice(0,limit);
    str=mangmoi.join(" ");
    return str;
}

let str=`Welcome to the website. If you're here, you're likely looking to find random words. Random Word Generator is the perfect tool to help you do this. While this tool isn't a word creator, it is a word generator that will generate random words for a variety of activities or uses. Even better, it allows you to adjust the parameters of the random words to best fit your needs.`
console.log(str.length);

str=str_limit(str);
console.log(str);