const argon2 = require("argon2");

const hashPassword = async (password) => {
  try {
    const hashedPassword = await argon2.hash(password);
    return hashedPassword;
  } catch (error) {
    console.error("Lỗi khi hash mật khẩu:", error);
    throw error;
  }
};

const verifyPassword = async (hashedPassword, password) => {
  try {
    const passwordMatch = await argon2.verify(hashedPassword, password);
    return passwordMatch;
  } catch (error) {
    console.error("Lỗi khi xác minh mật khẩu:", error);
    throw error;
  }
};

module.exports = {
  hashPassword,
  verifyPassword,
};
