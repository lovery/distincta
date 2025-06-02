const { globals, methods } = require('../_data_preparation.js');

var contact_data = {
  description: "Distincta office@distincta.eu +359 2 885 2222",
  keywords: "Intellectual Property, Trade Marks, Designs, Copyright, Patents, Geographical Indications, Trade Secrets, Registration, Certificate, License, Agreement, Innovation, Creative, Litigation, Bulgarian Patent Office, OHIM, WIPO, EPO",
  sub_title: "Should you need a consultation, advice or assistance in intellectual property matters,<br/>call us or drop us a line and we will gladly respond.",
  content: [],
  address: "Bulgaria, 1799 Sofia, P.O. Box 21",
  phone: "+359 2 885 2222",
  phone_label: "Get in touch with " + globals.title + " by calling us on ",
  fax: "+359 2 885 2222",
  fax_label: "Get in touch with " + globals.title + " by sending us a fax message on ",
  mobile: "+359 88993 8522",
  mobile_label: "Get in touch with " + globals.title + " by calling us on ",
  email: "office@distincta.eu",
  email_label: "Get in touch with " + globals.title + " by sending us an e-mailon ",
};

module.exports = {
  index: methods.prepareData(Object.assign({}, globals.tabs[5], contact_data))
};
