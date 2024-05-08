function createFriendlyUrl(str, replaceSpace = "-") {
  // Loại bỏ khoảng trắng
  str = str.replace(/\s+/g, replaceSpace);

  // Loại bỏ thẻ (tag)
  str = str.replace(/<[^>]*>/g, "");

  // Loại bỏ các ký tự đặc biệt
  str = str.replace(/[^\w\s-]/g,"");

  // Chuyển đổi chữ hoa thành chữ thường
  str = str.toLowerCase();
  return str;
}

// Ví dụ sử dụng
const inputStr = "Đây là một ví dụ về chuỗi cần chuyển đổi";
console.log(inputStr);
const friendlyUrl = createFriendlyUrl(inputStr);
console.log(friendlyUrl); // Output: day-la-mot-vi-du-ve-chuoi-can-chuyen-doi
