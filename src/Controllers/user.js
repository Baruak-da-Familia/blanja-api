const userModel = require("../Models/user");
const formResponse = require("../Helpers/Forms/formResponse");

const userController = {
  showDetailCustomer: (req, res) => {
    userModel
      .showDetailCustomer(req.params.id)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  showDetailSeller: (req, res) => {
    userModel
      .showDetailSeller(req.params.id)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  updateCustomer: (req, res) => {
    userModel
      .updateCustomer(req.params.id, req.body)
      .then((data) => {
        const responData = {
          ...req.body,
          msg: "Update Sucessfull",
        };
        formResponse.success(res, responData);
      })
      .catch((err) => {
        console.log(err);
        formResponse.error(res, err);
      });
  },
  updateSeller: (req, res) => {
    userModel
      .updateSeller(req.params.id, req.body)
      .then((data) => {
        const responData = {
          ...req.body,
          msg: "Update Sucessfull",
        };
        formResponse.success(res, responData);
      })
      .catch((err) => {
        console.log(err);
        formResponse.error(res, err);
      });
  },
};

module.exports = userController;
