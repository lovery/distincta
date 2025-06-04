const { globals, methods } = require('../_data_preparation.js');

var people = [
  {
    "slug": "ralitsa-dimova",
    "name": "Ralitsa Dimova",
    "position": "",
    "hideCommonHeadline": true,
    "photo": "ralitsa_235px.webp",
    "alt_text": "Ralitsa Dimova Photo intellectual property attorney register trade marks, patents in Bulgaria, Europe and USA",
    "bg_trade_number": "Bulgarian Trade Mark and Design Attorney <span class=\"nowrap\">No. 301</span>",
    "en_trade_number": "European Trade Mark and Design Attorney <span class=\"nowrap\">No. 39624</span>",
    "meta": {
      "description": "Ralitsa Dimova intellectual property attorney, representation before BPO, OHIM, WIPO, customs authorities, the Court",
      "keywords": "Intellectual Property, Trade Marks, Designs, Copyright, Patents, Geographical Indications, Trade Secrets, Registration, Certificate, License, Agreement, Innovation, Creative, Litigation, Bulgarian Patent Office, OHIM, WIPO, EPO"
    },
    "content": [],
    "bio": [
      "Ralitsa holds a Master’s Degree in Intellectual Property.",
      "She has been working in the field of intellectual proprties since 2001.",
      "Since 2007 she has been a licensed trade mark and design attorney, representing clients before the Bulgarian Patent Office, the European Union Intellectual Property Office and the World Intellectual Property Organization, consulting them on the most time and cost-efficient way to register intellectual property's rights in Bulgaria and abroad.",
      "She has plenty of experience handling large intellectual property portfolios strategizing on the most effective protection and enforcement, negotiating and concluding contracts and coexistence agreements. She is an active participant in national and international forums on any subject that concerns the development of the intellectual property legislative framework and practice."
    ]
  }
];

var pages_data = {
    index: methods.prepareData({
        slug: "index",
        active_section: "about",
        name: "About Us",
        description: "Ralitsa Dimova intellectual property attorney, representation before BPO, OHIM, WIPO, customs authorities, the Court",
        keywords: "Intellectual Property, Trade Marks, Designs, Copyright, Patents, Geographical Indications, Trade Secrets, Registration, Certificate, License, Agreement, Innovation, Creative, Litigation, Bulgarian Patent Office, OHIM, WIPO, EPO",
        sub_title: "",
        content: [],
        left_content: [
            "We employ all our knowledge, experience and energy to be distinctive in our approach, our problem-solving methods and our attitude towards your intellectual property.",
            "We know that the best strategy is always determined on a case-by-case basis, so we focus first on understanding our clients, their business interests and priorities. We work close with them and cherish the strong and lasting relationships we build."
        ]
    })
};

// Generate each page's data
for (p of people) {
    p.url = methods.createUrl(p.slug, 'about');
    pages_data[p.slug] = methods.prepareData(p, 'about');
}

pages_data["index"].biographies = people;

module.exports = pages_data;
