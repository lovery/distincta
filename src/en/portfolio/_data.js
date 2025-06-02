const { globals, methods } = require('../_data_preparation.js');
var portfolio_data = {
  description: "We take pride in looking after a diverse client portfolio. Our esteemed clients come from wide variety of industries.",
  keywords: "We take pride in looking after a diverse client portfolio. Our esteemed clients come from wide variety of industries.",
  sub_title: "We take pride in looking after a diverse client portfolio. Our esteemed clients come from wide variety of industries from all over the world.",
  content: [
    "We take good care of our customers` intellectual properties in Bulgaria, Europe, USA (United States of America) and other countries as well.",
    "Here are some of the trade marks entrusted to us:"
  ],
  marks: [
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
  ]
};

module.exports = {
  index: methods.prepareData(Object.assign({}, globals.tabs[2], portfolio_data))
};
