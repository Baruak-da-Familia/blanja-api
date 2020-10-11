const formResponse = {
  success: (res, data) => {
    const formResponObj = {
      success: true,
      status: 200,
      data: data,
    };
    res.json(formResponObj);
  },

  error: (res, error) => {
    const formResponObj = {
      success: false,
      status: 500,
      error: error,
    };
    res.json(formResponObj);
  },
};

module.exports = formResponse;
