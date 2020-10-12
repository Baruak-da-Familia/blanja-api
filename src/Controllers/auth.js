const formResponse = require("../Helpers/Forms/formResponse");
const authModel = require("../Models/auth");

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
};

module.exports = authController;
