const speakeasy = require("speakeasy");

// Lưu trữ mã OTP tạm thời
const otpStorage = new Map();

// Tạo mã OTP ngẫu nhiên
const generateOTP = (timeout) => {
  const otp = speakeasy.totp({
    secret: speakeasy.generateSecret().base32,
    digits: 6,
    window: timeout,
  });
  return otp;
};

// Lưu trữ mã OTP tạm thời
const storgaeTemp = (email, otp) => {
  return otpStorage.set(email, otp);
};
// hàm lấy ma opt từ storage
const getOTP = (email) => {
  return otpStorage.get(email);
};

// Xóa mã OTP tạm thời
const remoteOTP = (email) => {
  return otpStorage.delete(email);
};

const compareOTP = (email, enteredOTP) => {
  const storedOTP = getOTP(email);
  if (storedOTP === enteredOTP) {
    console.log("Mã OTP hợp lệ");
    return true;
  } else {
    console.log("Mã OTP không hợp lệ");
    return false;
  }
};

module.exports = {
  generateOTP,
  storgaeTemp,
  remoteOTP,
  getOTP,
  compareOTP,
};
