const userModel = require("../Models/user");
const formResponse = require("../Helpers/Forms/formResponse");

const userController = {
//   showAllUser: (req, res) => {
//     userModel
//       .showAllUser(req.query)
//       .then((data) => {
//         formResponse.success(req, res, data);
//       })
//       .catch((err) => {
//         formResponse.error(res, err);
//       });
//   },
  showDetailUser: (req, res) => {
    userModel
      .showDetailUser(req.params.id)
      .then((data) => {
        formResponse.success(res, data);
      })
      .catch((err) => {
        formResponse.error(res, err);
      });
  },
  updateUser: (req, res) => {
    userModel
      .updateUser(req.params.id, req.body)
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
