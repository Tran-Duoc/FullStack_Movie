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

// Xóa mã OTP tạm thời
const remoteOTP = (email) => {
  return otpStorage.delete(email);
};

module.exports = {
  generateOTP,
  storgaeTemp,
  remoteOTP,
};
