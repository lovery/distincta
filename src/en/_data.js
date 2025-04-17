const { globals, methods } = require('./_data_preparation.js');

var meta_data = {
    expertise: {
        description: "Intellectual Property agency protect your trade marks, designs, copyright, geographical indications, trade secrets Intellectual Property attorneys BPO, OHIM, WIPO customs authorities the Court",
        keywords: "Intellectual Property, Trade Marks, Designs, Copyright, Patents, Geographical Indications, Trade Secrets, Registration, Certificate, License, Agreement, Innovation, Creative, Litigation, Bulgarian Patent Office, OHIM, WIPO, EPO",
        sub_title: "",
        content: [
            "Distincta is a consultancy agency in the field of intellectual property. We provide guidance and advice on a broad range of intellectual property issues. We help you identify, properly register, manage and protect your trade marks, designs and creative works from the moment they are conceived to their maturity.",
            "We are intellectual property attorneys, licensed and experienced in the representation before the Bulgarian Patent Office, the European Union Intellectual Property Office and the World Intellectual Property Organization. We work with the Bulgarian customs authorities, the Commission for Protection of the Competition, the Bulgarian Court, as well as the Court of Justice of the EU.",
            "We cooperate with colleagues in various jurisdictions to provide you with the best options for expanding your business markets throughout the world.",
            "We believe that the good intellectual property strategy helps your business be more efficient and more lucrative. We are here to save you time, money and energy."
        ]
    },
    portfolio: {
        description: "We take pride in looking after a diverse client portfolio. Our esteemed clients come from wide variety of industries.",
        keywords: "We take pride in looking after a diverse client portfolio. Our esteemed clients come from wide variety of industries.",
        sub_title: "We take pride in looking after a diverse client portfolio. Our esteemed clients come from wide variety of industries from all over the world.",
        content: [
            "We take good care of our customers` intellectual properties in Bulgaria, Europe, USA (United States of America) and other countries as well.",
            "Here are some of the trade marks entrusted to us:"
        ]
    },
    services: {
        description: "Acquisition, enforcement, management and commercial exploitation of intellectual property (trade marks, industrial designs, copyright, trade secrets, geographical indications)",
        keywords: "Intellectual Property, Trade Marks, Designs, Copyright, Patents, Geographical Indications, Trade Secrets, Registration, Certificate, License, Agreement, Innovation, Creative, Litigation, Bulgarian Patent Office, OHIM, WIPO, EPO",
        sub_title: "We offer wide range of services connected to the intellectual proprties in Bulgaria, Europe and all over the world. We can help in acquisition, enforcement, management and commercial exploitation of intellectual property (trade marks, industrial designs, copyright, trade secrets, geographical indications and e.g.).",
        content: []
    },
    contact: {
        description: "Distincta office@distincta.eu +359 2 885 2222",
        keywords: "Intellectual Property, Trade Marks, Designs, Copyright, Patents, Geographical Indications, Trade Secrets, Registration, Certificate, License, Agreement, Innovation, Creative, Litigation, Bulgarian Patent Office, OHIM, WIPO, EPO",
        sub_title: "Should you need a consultation, advice or assistance in intellectual property matters,<br/>call us or drop us a line and we will gladly respond.",
        content: []
    }
};

var pages_data = {
    home: methods.prepareData({ slug: 'home', active_section: 'home' })
};
//
// Generate each page's data
for (page of globals.tabs) {
    if (page.group) continue;
    pages_data[page.slug] = methods.prepareData(Object.assign({}, page, meta_data[page.slug]));
}

pages_data["home"].slogan = "BE DISTINCTIVE!";
pages_data["home"].home_slide = [
    "We help you identify, register,",
    "manage and protect your trade marks,",
    "designs and creative works"
];
pages_data["home"].home_slide_img_alt_text = "Gaudi Mosaics Intellectual Property";

pages_data["services"].services = [
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
];

pages_data["portfolio"].marks = [
    {
        "name": "Areon",
        "type": "horizontal",
        "image": "areon.svg",
        "src": "http://areon-fresh.com"
    },
    {
        "name": "Teo bebe",
        "type": "horizontal",
        "image": "teo-bebe.svg",
        "width": "150px",
        "src": "http://www.teobebe.eu"
    },
    {
        "name": "Mon",
        "type": "horizontal",
        "image": "mon.svg",
        "src": "http://areon-fresh.com/products/wet-wipes/"
    },
    {
        "name": "Rose Rio",
        "type": "horizontal",
        "image": "rose-rio.svg",
        "src": "http://stscosmetics.bg/brands/rose-rio-beauty-program"
    },
    {
        "name": "Teo",
        "type": "horizontal",
        "image": "teo.svg",
        "width": "115px",
        "src": "http://teobeauty.eu/"
    },
    {
        "name": "amara",
        "type": "horizontal",
        "image": "amara.svg",
        "src": "http://rawganicpassion.com"
    },
    {
        "name": "Izida - Old Time",
        "type": "horizontal",
        "image": "old-time-izida.png",
        "src": "http://izida.bg/icecream_izida.htm"
    },
    {
        "name": "Areon Mon",
        "type": "horizontal",
        "image": "areon-mon.svg",
        "src": "http://areon-fresh.com"
    },
    {
        "name": "RAWGANIC Passion",
        "type": "horizontal",
        "image": "rawganic-passion.svg",
        "src": "http://rawganicpassion.com"
    },
    {
        "name": "Coffee Ness",
        "type": "horizontal",
        "image": "coffee-ness.svg",
        "src": "http://www.alcoholtabakoff.com/en/"
    },
    {
        "name": "Fox Laser",
        "type": "horizontal",
        "image": "fox-laser.svg",
        "src": "http://foxlaser.com/en"
    },
    {
        "name": "Max Dent",
        "type": "horizontal",
        "image": "max-dent.svg",
        "src": "http://stscosmetics.bg/categories/oral-care"
    },
    {
        "name": "Digital KidZ",
        "size": 3,
        "type": "horizontal",
        "image": "digital-kidz.svg",
        "src": "http://digitalkidz.eu/"
    },
    {
        "name": "Dynamics Mobile",
        "size": 3,
        "type": "horizontal",
        "image": "dynamics-mobile.svg",
        "src": "http://www.dynamicsmobile.com/index.html"
    },
    {
        "name": "BAMBOOCUP",
        "size": 3,
        "type": "horizontal",
        "image": "bamboo-cup.svg",
        "width": "250px",
        "src": "http://www.balevbiomarket.com/nehranitelni-produkti/chashi.html?___store=en&___from_store=bg"
    },
    {
        "name": "Balev Bio",
        "size": 3,
        "type": "horizontal",
        "image": "balev-bio-en.svg",
        "src": "http://www.balevbiomarket.com/"
    },
    {
        "name": "Intelligent Systems",
        "size": 3,
        "type": "horizontal",
        "image": "intelligent-systems.svg",
        "width": "220px",
        "src": "http://www.isystems.bg/"
    },
    {
        "name": "Balev Corporation",
        "size": 3,
        "type": "horizontal",
        "image": "balev.svg",
        "width": "240px",
        "src": "http://www.promotionalfresheners.com/"
    },
    {
        "name": "Feya",
        "type": "horizontal",
        "image": "feya.svg",
        "width": "130px",
        "src": "http://www.ficosota.com/brands/feya"
    },
    {
        "name": "Areon Nature",
        "type": "vertical",
        "image": "areon-nature.svg",
        "src": "http://areon-fresh.com"
    },
    {
        "name": "I/Tems",
        "type": "horizontal",
        "image": "i-tems.svg",
        "src": "http://www.i-tems.eu/"
    },
    {
        "name": "StudioCarbon",
        "type": "horizontal",
        "image": "studio-carbon.svg",
        "src": "http://studiocarbon.bg/"
    },
    {
        "name": "Beep Beep",
        "type": "horizontal",
        "image": "beep-beep.svg",
        "src": "http://areon-fresh.com"
    },
    {
        "name": "Drop IN",
        "type": "horizontal",
        "image": "drop-in.svg",
        "src": "http://dropin-shop.com/"
    },
    {
        "name": "MyClinic",
        "type": "horizontal",
        "image": "myclinic.svg"
    },
    {
        "name": "Alcohol & Tabakoff",
        "type": "horizontal",
        "image": "alcohol-tabakoff.svg",
        "src": "http://www.alcoholtabakoff.com/en/"
    },
    {
        "name": "Ruvex",
        "type": "horizontal",
        "image": "ruvex.svg",
        "src": "http://ruvex.bg/bg"
    }
];

pages_data["contact"].address = "Bulgaria, 1799 Sofia, P.O. Box 21";
pages_data["contact"].phone = "+359 2 885 2222";
pages_data["contact"].fax = "+359 2 885 2222";
pages_data["contact"].mobile = "+359 88993 8522";
pages_data["contact"].email = "office@distincta.eu";

module.exports = pages_data;
