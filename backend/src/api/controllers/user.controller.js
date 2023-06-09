const jwt = require("jsonwebtoken");

const user = require("../models/user.model");
const responseHandler = require("../utils/response.util");
const { hashPassword, verifyPassword } = require("../utils/password.util");

const {
  mailOptions,
  transporterMailer,
} = require("../../configs/mailer.config");
const {
  generateOTP,
  remoteOTP,
  compareOTP,
  storgaeTemp,
} = require("../../configs/otp.config");
const userModel = require("../models/user.model");

const userController = {
  //! register user
  registerUser: async (req, res) => {
    try {
      const { name, email, password, age } = req.body;
      const checkUser = await user.findOne({ email });
      if (checkUser)
        return responseHandler.badRequest(res, "Người dùng đã tồn tại!");
      const hash = await hashPassword(password);
      const newUser = new user({
        name: name,
        email: email,
        password: hash,
        age: age,
      });

      await newUser.save();

      return responseHandler.success(res, "Đăng ký thành công", newUser);
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  //? login user
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;

      const checkUser = await user.findOne({ email });

      if (!checkUser) {
        return responseHandler.badRequest(res, "Người dùng chưa được đăng ký!");
      } else {
        const checkPassword = await verifyPassword(
          checkUser.password,
          password
        );
        if (!checkPassword) {
          const message = "Mật khẩu không đúng vui lòng nhập lại!";
          return responseHandler.badRequest(res, message);
        }

        const secret_key = process.env.TOKEN_SECRET_KEY;
        const { _id } = checkUser._doc;
        const access_token = jwt.sign({ _id }, secret_key);
        return responseHandler.success(res, "Đăng nhập thành công", {
          user: checkUser._doc,
          access_token,
        });
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  //* update info user
  updateInfoUser: async (req, res) => {
    try {
      const { id } = req.params;
      const { name, email, age } = req.body;
      const { filename } = req.file;
      const checkUser = await user.findOne({ _id: id });
      if (!checkUser)
        return responseHandler.badRequest(res, "Nguời dùng không hợp lệ");

      const updateInfo = {
        ...checkUser._doc,
        name: name,
        email: email,
        age: age,
        imageAvatar: filename,
      };

      await user.findByIdAndUpdate({ _id: id }, updateInfo, {
        new: true,
      });
      return responseHandler.success(res, "Cập nhật thành công", updateInfo);
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  //! delete user
  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const checkUser = await user.findOne({ _id: id });
      if (!checkUser)
        return responseHandler.badRequest(res, "Người dùng không tồn tại!");

      // await user.findByIdAndDelete({ _id: id });
      return responseHandler.success(
        res,
        "Xóa người dùng thành công!",
        checkUser._doc
      );
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  //? get info user
  getUser: async (req, res) => {
    try {
      const { _id } = req.user;
      const checkUser = await user.findOne({ _id });
      if (!checkUser)
        return responseHandler.badRequest(res, "Người dùng không tồn tại");

      const { password, ...order } = checkUser._doc;

      return responseHandler.success(
        res,
        "Lấy thông tin user thành công",
        order
      );
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  //? forgot password
  forgotPassword: async (req, res) => {
    try {
      const { email } = req.body;
      const checkUser = await user.findOne({ email });
      const mailProcess = process.env.EMAIL;
      const passwordProcess = process.env.PASSWORD;

      if (checkUser) {
        const timeOtpOutdate = 60;

        //! Tạo mã otp ngẫu nhiên
        const OTP = generateOTP(timeOtpOutdate);

        //! lưu mã OTP tạm thời
        storgaeTemp(email, OTP);

        const transporter = transporterMailer(mailProcess, passwordProcess);

        const options = mailOptions({
          from: mailProcess,
          to: email,
          subject: "OTP for Password Reset",
          text: `Your OTP for password reset is: ${OTP}`,
        });

        await transporter.sendMail(options, (error, info) => {
          if (error) {
            console.log(error);
            return responseHandler.error(res, "Error sending email");
          }
          return responseHandler.success(res, info.response);
        });
      } else {
        return responseHandler.badRequest(res, "Người dùng chưa được đăng ký");
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  //? checking password
  checkingPassword: async (req, res) => {
    try {
      //explain:  email được đăng ký lúc đầu
      const { otp, email } = req.body;
      const isValidOTP = await compareOTP(email, otp);
      if (isValidOTP) {
        return responseHandler.success(res, "OTP hợp lệ,", email);
      } else {
        return responseHandler.badRequest(res, "OTP không hợp lệ");
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
  resetPassword: async (req, res) => {
    try {
      const { email, newPassword } = req.body;
      const new_password = await hashPassword(newPassword);
      const resetPassword = await userModel.findOneAndUpdate(
        { email: email },
        {
          password: new_password,
        },
        {
          new: true,
        }
      );
      if (resetPassword) {
        return responseHandler.success(res, "Cập nhật mật khẩu thành công");
      } else {
        return responseHandler.badRequest(
          res,
          "Cập nhật mật khẩu không thành công"
        );
      }
    } catch (error) {
      return responseHandler.error(res, error.message);
    }
  },
};

module.exports = userController;
