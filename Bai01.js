
function validateForm() {
    // Get values from input fields
    const mssv = document.getElementById("maSV").value;
    const hoTen = document.getElementById("hoTen").value;
    const email = document.getElementById("email").value;
    const dienThoai = document.getElementById("dienThoai").value;
    const lop = document.getElementById("lop").value;
  
    // Validate MSSV (Student ID)
    if (!validateMSSV(mssv)) {
      alert("Mã SV không hợp lệ. Vui lòng nhập mã SV bắt đầu bằng 21 và có 10 ký tự số.");
      document.getElementById("maSV").focus();
      return false;
    }
  
    // Validate Họ Tên (Full Name)
    if (hoTen.trim() === "") {
      alert("Họ Tên không được để trống.");
      document.getElementById("hoTen").focus();
      return false;
    }
  
    // Validate Email
    if (!validateEmail(email)) {
      alert("Email không hợp lệ. Vui lòng nhập địa chỉ email hợp lệ.");
      document.getElementById("email").focus();
      return false;
    }
  
    // Validate Điện Thoại (Phone Number)
    if (!validatePhone(dienThoai)) {
      alert("Số điện thoại không hợp lệ. Vui lòng nhập số điện thoại Việt Nam gồm 10 số.");
      document.getElementById("dienThoai").focus();
      return false;
    }
  
    // Validate Lớp (Class)
    if (!validateLop(lop)) {
      alert("Lớp học không hợp lệ. Vui lòng nhập mã lớp bắt đầu bằng CCQ, có 8 hoặc 9 ký tự và kết thúc bằng 1 hoặc 2 ký tự.");
      document.getElementById("lop").focus();
      return false;
    }
  
    // All validations passed, allow form submission
    return true;
  }
  
  // Function to validate MSSV format
  function validateMSSV(mssv) {
    const mssvRegex = /^21\d{9}$/;
    return mssvRegex.test(mssv);
  }
  
  // Function to validate email format
  function validateEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z\-0-9]+))$ /;
    return emailRegex.test(email);
  }
  
  // Function to validate Vietnamese phone number format
  function validatePhone(dienThoai) {
    const phoneRegex = /^(\+84|0)\d{9}$/;
    return phoneRegex.test(dienThoai);
  }
  
  // Function to validate class code format
  function validateLop(lop) {
    const lopRegex = /^CCQ\d{1,2}$/;
    return lopRegex.test(lop);
  }
  