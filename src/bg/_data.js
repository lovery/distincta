const { globals, methods } = require('./_data_preparation.js');
var home_data = {
  slug: 'home',
  active_section: 'home',
  slogan: "Бъдете отличителни!",
  home_slide: [
    "Ние Ви помагаме ефективно да защитавате",
    "и използвате Вашите търговски марки,",
    "дизайни и творчески произведения"
  ],
  home_slide_img_alt_text: "мозайка на Гауди интелектуална собственост, лицензиран представител по индустриална собственост, регистрира търговски марки и папенти в България, Европа и САЩ"
};

module.exports = {
  index: methods.prepareData(Object.assign({}, home_data))
};
