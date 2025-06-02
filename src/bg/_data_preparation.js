const m = require('../_methods.js');
const harp_data = require('../_harp.json');

var globals = {
    lang: 'bg',
    locale: 'bg_BG',
    website_base_title: 'Дистинкта - Агенция за интелектуална собственост',
    website_base_description: 'Агенция за интелектуална собственост Дистинкта, помагаме Ви да защитавате и използвате Вашите търговски марки, дизайни, художествени произведения и други творчески идеи',
    tabs: [
        { slug: "expertise", name: "Дейност" },
        { slug: "about", name: "За нас", group: true },
        { slug: "portfolio", name: "Портфолио" },
        { slug: "services", name: "Услуги" },
        { slug: "articles", name: "Полезно за Вас", group: true },
        { slug: "contact", name: "За контакт" }
    ]
};

globals.base_data = JSON.parse(JSON.stringify(harp_data.globals));
globals.base_data.title = globals.website_base_title;
globals.base_data.logo_alt_text = "Distincta - Intellectual Property Agency - Logo, лицензиран представител по индустриална собственост, регистрира търговски марки и папенти в България, Европа и САЩ";
globals.base_data.lang = globals.lang;
globals.base_data.tabs = globals.tabs;
globals.base_data.languages = [{ "name": "EN", "slug": 'en', "url": "en/", "locale": "en_US" }];
globals.base_data.meta.description = globals.website_base_description;
globals.base_data.meta.keywords = "интелектуална собственост, търговски марки, дизайни, лицензия, авторски права, патенти, географски означения, търговски тайни, регистрация, сертификати, договори, споразумения, иновация, творчество, съдебни спорове, Българско патентно ведомство, Ведомство за хармонизация на пазар, Световна организация за интелектуална собственост, Европейско патентно ведомство";
globals.base_data.meta.author = globals.website_base_title;
globals.base_data.meta.og_title = globals.website_base_title;
globals.base_data.meta.og_description = globals.website_base_description;
globals.base_data.meta.og_locale = globals.locale;
globals.base_data.meta.og_image_alt = globals.website_base_title + ' в България и Европа, регистрира търговски марки, регистрира патенти';
globals.base_data.meta.x_title = globals.website_base_title;
globals.base_data.meta.x_description = globals.website_base_description;

globals.base_data.hideCommonHeadline = false;
globals.base_data.labels = {
    "review_biography_label": "Прегледай",
    "hide_biography_label": "Скрий",
    "posted_on": "Публикувано на",
    "author": "Автор",
    "tags": "Тагове",
    "share": "Сподели",
    "button_more": "Още",
    "tag_search": "Публикации съдържащи таг",
    "tag_clear": "Покажи всички публикации",
    "fb_label": "Сподели във Facebook",
    "x_label": "Сподели в X",
    "lin_label": "Сподели в LinkedIn"
};

globals.tabs.forEach(t => { t.url = '/' + globals.lang + '/' + t.slug + ( t.group ? '/' : ''); });

const methods = {};
methods.createUrl = function(slug, prefix) {
    return m.createUrl(globals, slug, prefix);
};
methods.prepareData = function(p, active_section) {
    return m.prepareData(globals, p, active_section);
};

module.exports = { globals, methods };
