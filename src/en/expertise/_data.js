const { globals, methods } = require('../_data_preparation.js');
var expertise_data = {
  description: "Intellectual Property agency protect your trade marks, designs, copyright, geographical indications, trade secrets Intellectual Property attorneys BPO, OHIM, WIPO customs authorities the Court",
  keywords: "Intellectual Property, Trade Marks, Designs, Copyright, Patents, Geographical Indications, Trade Secrets, Registration, Certificate, License, Agreement, Innovation, Creative, Litigation, Bulgarian Patent Office, OHIM, WIPO, EPO",
  sub_title: "",
  content: [
    "Distincta is a consultancy agency in the field of intellectual property. We provide guidance and advice on a broad range of intellectual property issues. We help you identify, properly register, manage and protect your trade marks, designs and creative works from the moment they are conceived to their maturity.",
    "We are intellectual property attorneys, licensed and experienced in the representation before the Bulgarian Patent Office, the European Union Intellectual Property Office and the World Intellectual Property Organization. We work with the Bulgarian customs authorities, the Commission for Protection of the Competition, the Bulgarian Court, as well as the Court of Justice of the EU.",
    "We cooperate with colleagues in various jurisdictions to provide you with the best options for expanding your business markets throughout the world.",
    "We believe that the good intellectual property strategy helps your business be more efficient and more lucrative. We are here to save you time, money and energy."
  ]
};

module.exports = {
  index: methods.prepareData(Object.assign({}, globals.tabs[0], expertise_data))
};
