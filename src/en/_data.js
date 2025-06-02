const { globals, methods } = require('./_data_preparation.js');
var home_data = {
  slug: 'home',
  active_section: 'home',
  slogan: "BE DISTINCTIVE!",
  home_slide: [
    "We help you identify, register,",
    "manage and protect your trade marks,",
    "designs and creative works"
  ],
  home_slide_img_alt_text: "Gaudi Mosaics Intellectual Property"
};

module.exports = {
  index: methods.prepareData(Object.assign({}, home_data))
};
