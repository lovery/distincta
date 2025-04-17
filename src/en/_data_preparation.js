const m = require('../_methods.js');
const harp_data = require('../_harp.json');

var globals = {
    lang: 'en',
    locale: 'en_US',
    website_base_title: "Distincta - Intellectual Property Agency",
    website_base_description: "Distincta Intellectual Property Agency, we help you identify, register, manage and protect your trade marks, designs and creative works",
    tabs: [
        { name: "Expertise", slug: "expertise" },
        { name: "About us", slug: "about", group: true },
        { name: "Portfolio", slug: "portfolio" },
        { name: "Services", slug: "services" },
        { name: "Useful for you", slug: "articles", group: true },
        { name: "Contact us", slug: "contact" }
    ]
};

globals.base_data = JSON.parse(JSON.stringify(harp_data.globals));
globals.base_data.lang = globals.lang;
globals.base_data.tabs = globals.tabs;
globals.base_data.languages = [{ "name": "BG", "url": "bg/home", "slug": "bg", "locale": "bg_BG" }]
globals.base_data.hideCommonHeadline = false;

globals.tabs.forEach(t => { t.url = '/' + globals.lang + '/' + t.slug + ( t.group ? '/' : ''); });

const methods = {};
methods.createUrl = function(slug, prefix) {
    return m.createUrl(globals, slug, prefix);
};
methods.prepareData = function(pages_data, p, active_section) {
    return m.prepareData(globals, pages_data, p, active_section);
};

module.exports = { globals, methods };
