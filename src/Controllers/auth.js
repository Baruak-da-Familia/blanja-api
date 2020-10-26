const formResponse = require("../Helpers/Forms/formResponse");
const authModel = require("../Models/auth");
const nodemailer = require("nodemailer");

const authController = {
  customerRegister: (req, res) => {
    authModel
      .customerRegister(req.body)
      .then((data) => {
        formResponse.success(res, data, 200);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
      });
  },
  sellerRegister: (req, res) => {
    authModel
      .sellerRegister(req.body)
      .then((data) => {
        formResponse.success(res, data, 200);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
      });
  },
  customerLogin: (req, res) => {
    authModel
      .customerLogin(req.body)
      .then((data) => {
        formResponse.success(res, data, 200);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
      });
  },
  sellerLogin: (req, res) => {
    authModel
      .sellerLogin(req.body)
      .then((data) => {
        formResponse.success(res, data, 200);
      })
      .catch((err) => {
        formResponse.error(res, err, 500);
      });
  },
  customerReset: (req, res) => {
    authModel
      .resetPasswordCustomer(req.body)
      .then((data) => {
        formResponse.success(res, data, 200);
      })
      .catch((err) => {
        console.log(err)
        formResponse.error(res, err, 500);
      });
  },
  sellerReset: (req, res) => {
    authModel
      .resetPasswordSeller(req.body)
      .then((data) => {
        formResponse.success(res, data, 200);
      })
      .catch((err) => {
        console.log(err)
        formResponse.error(res, err, 500);
      });
  },
  sendEmailCustomer: (req, res) => {
    authModel
      .sendEmailCustomer(req.body)
      .then((data) => {
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "blanjaarkademy@gmail.com",
            pass: "Blanja2020",
          },
        });

        var mailOptions = {
          from: "blanjaarkademy@gmail.com",
          to: data.email,
          subject: "Reset Password",
          text: `Link to reset password : ${data.link}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
        formResponse.success(res, data);
      })
      .catch((err) => {
        console.log(err)
        formResponse.error(res, err);
      });
  },
  sendEmailSeller: (req, res) => {
    authModel
      .sendEmailSeller(req.body)
      .then((data) => {
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "blanjaarkademy@gmail.com",
            pass: "Blanja2020",
          },
        });

        var mailOptions = {
          from: "blanjaarkademy@gmail.com",
          to: data.email,
          subject: "Reset Password",
          text: `Link to reset password : ${data.link}`,
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
        formResponse.success(res, data);
      })
      .catch((err) => {
        console.log(err)
        formResponse.error(res, err);
      });
  },
};

module.exports = authController;
