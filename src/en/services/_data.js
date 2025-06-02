const { globals, methods } = require('../_data_preparation.js');
var services_data = {
  description: "Acquisition, enforcement, management and commercial exploitation of intellectual property (trade marks, industrial designs, copyright, trade secrets, geographical indications)",
  keywords: "Intellectual Property, Trade Marks, Designs, Copyright, Patents, Geographical Indications, Trade Secrets, Registration, Certificate, License, Agreement, Innovation, Creative, Litigation, Bulgarian Patent Office, OHIM, WIPO, EPO",
  sub_title: "We offer wide range of services connected to the intellectual proprties in Bulgaria, Europe and all over the world. We can help in acquisition, enforcement, management and commercial exploitation of intellectual property (trade marks, industrial designs, copyright, trade secrets, geographical indications and e.g.).",
  content: [],
  services: [
    {
      "name": "Intellectual Property Strategy",
      "icon": "fa-flag",
      "content": "We are here to help you spot, protect and manage in the most effective way your intellectual property."
    },
    {
      "name": "Trade Marks",
      "icon": "fa-bookmark",
      "content": "Protect your brand by filing a timely application! We will assist with trade mark clearance, drafting and filing of the application, responding to any office action or opposition until your distinctive sign is registered. Then we will make sure that it is properly maintained and protected."
    },
    {
      "name": "Designs",
      "icon": "fa-film",
      "content": "Shall you need protection of the new and original appearance of your product, we suggest that you protect it through a 3D mark, with a registered or an unregistered design.  We will provide advises on the most proper type of protection, as well as on the statutory requirements that need to be met. We will prepare your registrations and make sure that they are duly maintained and protected."
    },
    {
      "name": "Copyright",
      "icon": "fa-copyright",
      "content": "We offer advise on the best ways to protect and manage the rights you have over your literary and artistic works. We can consult you on how to use the artistic works of others in good manner and in line with the law. We offer suport in registratin, preparation and signing in contract regarding your rights."
    },
    {
      "name": "Trade Secrets",
      "icon": "fa-lock",
      "content": "Regardless of whether you have a good know-how, or you have an invention that could or should not be made publicly available or is not eligible for patent protection, you should beware of your competitive advantages and properly protect them. We can help you identify them and protect them as trade secrets."
    },
    {
      "name": "Enforcement",
      "icon": "fa-university",
      "content": "We offer consultations on various topics connected to the enforcement of your intellectual property's rights – border measures, litigation, representation in front of the BPO in Bulgaria and Europe, and in front of the CPC in Bulgaria."
    },
    {
      "name": "Geographical Indications",
      "icon": "fa-bar-chart",
      "content": "When your product has a specific geographical origin and features qualities or reputation that are due to that origin, it may be in your best interest to be enlisted as a user of an existing geographical indication, or register a new one. Contact us to learn what rights and advantages does a geographical indication provide, as well as what is the procedure for registration."
    }
  ]
};

module.exports = {
  index: methods.prepareData(Object.assign({}, globals.tabs[3], services_data))
};
