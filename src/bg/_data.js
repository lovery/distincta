const { globals, methods } = require('./_data_preparation.js');
var meta_data = {
    expertise: {
        description: "Агенция за интелектуална собственост защитете вашите търговски марки, дизайни, авторски права, географски означения, търговски тайни представители по интелектуална собственост Българско патентно ведомство, Ведомство за хармонизация на вътрешния пазар, Световна организация за интелектуална собственост, Европейско патентно ведомство",
        keywords: "интелектуална собственост, търговски марки, дизайни, лицензия, авторски права, патенти, географски означения, търговски тайни, регистрация, сертификат, договори, споразумения, иновация, творчество, съдебни спорове, Българско патентно ведомство, Ведомство за хармонизация на вътрешния пазар, Световна организация за интелектуална собственост, Европейско патентно ведомство",
        sub_title: "",
        content: [
            "Distincta е консултантска агенция специализирана в областта на интелектуалната собственост.",
            "Ние сме лицензирани представители и консултираме по широк спектър въпроси, свързани с интелектуалната собственост. Помагаме Ви в процеса на откриването, регистрацията, управлението и ефикасната защита на Вашите търговски марки, дизайни и творчески произведения. Предлагаме представителство пред Българското патентно ведомство (БПВ), Службата на Европейския съюз за интелектуална собственост (EUIPO), Световната организация по интелектуална собственост (WIPO), Българските митнически власти, Комисията за защита на конкуренцията, Българския съд и Съда на Европейския съюз. ",
            "Работим в партньорство с колеги от различни държави, за да осигурим най-доброто международно покритие за Вашите бизнес интереси.",
            "Вярваме, че доброто управление на интелектуалната собственост помага на Вашия бизнес да е по-ефективен и печеливш и сме тук, за да Ви спестим време, пари и енергия."
        ]
    },
    portfolio: {
        description: "С удоволствие и гордост работим за нашите клиенти, които идват от най-различни сектори.",
        keywords: "интелектуална собственост, търговски марки, дизайни, патенти, иновации, право, новости, клиенти, България",
        sub_title: "С удоволствие и гордост работим за нашите клиенти, които идват от най-различни сектори и краища на света.",
        content: [
            "Успешно се грижим за интересите им на територията на България, Европа, САЩ и по цял свят.",
            "Тук може да разгледате някои от търговските марки, за които се грижим:"
        ]
    },
    services: {
        sub_title: "",
        description: "Придобиване, защита, управление и използване на интелектуална собственост (търговски марки, дизайни, авторски права, търговски тайни, географски означения)",
        keywords: "интелектуална собственост, търговски марки, дизайни, лицензия, авторски права, патенти, географски означения, търговски тайни, регистрация, сертификат, договори, споразумения, иновация, творчество, съдебни спорове, Българско патентно ведомство, Ведомство за хармонизация на вътрешния пазар, Световна организация за интелектуална собственост, Европейско патентно ведомство",
        content: [
            "Предоставяваме широка гама от услуги в сферата на интелектуалната собственост на територията на България, Европа и по цял свят. Указваме съдействие при придобиване, защитa, управление и използване на Вашата интелектуална собственост (търговски марки, дизайни, авторски права, търговски тайни, географски означения и др.):"
        ]
    },
    contact: {
        description: "Дистинкта, office@distincta.eu, +359 2 885 2222, България, София, интелектуална собственост.",
        keywords: "интелектуална собственост, търговски марки, дизайни, лицензия, авторски права, патенти, географски означения, търговски тайни, регистрация, сертификат, договори, споразумения, иновация, творчество, съдебни спорове, Българско патентно ведомство, Ведомство за хармонизация на вътрешния пазар, Световна организация за интелектуална собственост, Европейско патентно ведомство",
        sub_title: "",
        content: [
            "При нужда от консултация, съвет или помощ по въпрос, свързан с интелектуалната собственост,",
            "ние сме на Ваше разположение:"
        ]
    }
};

var pages_data = {};
pages_data["home"] = methods.prepareData({ slug: 'home', active_section: 'home' });
//
// Generate each page's data
for (page of globals.tabs) {
    if (page.group) continue;
    pages_data[page.slug] = methods.prepareData(Object.assign({}, page, meta_data[page.slug]));
}

pages_data["home"].slogan = "Бъдете отличителни!";
pages_data["home"].home_slide = [
    "Ние Ви помагаме ефективно да защитавате",
    "и използвате Вашите търговски марки,",
    "дизайни и творчески произведения"
];
pages_data["home"].home_slide_img_alt_text = "мозайка на Гауди интелектуална собственост, лицензиран представител по индустриална собственост, регистрира търговски марки и папенти в България, Европа и САЩ";

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
        "type": "horizontal position-left",
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

pages_data["services"].services = [
    {
        "name": "Стратегии",
        "icon": "fa-flag",
        "content": "Предлагаме консултации при изготвянето на план как да идентифицирате, защитите и управлявате по най-ефикасния начин Вашата интелектуална собственост."
    },
    {
        "name": "Търговски марки",
        "icon": "fa-bookmark",
        "content": "Защитете своя бранд, като подадете навреме заявка за търговска марка! Ние ще помогнем с проучване за предходни права, подготвяне и внасяне на заявката, както и отговор на възможни възражения срещу марката до момента на нейната регистрация, след което ще се погрижим тя да бъде поддържана и защитена."
    },
    {
        "name": "Авторски права",
        "icon": "fa-copyright",
        "content": "Предлагаме консултации за най-ефективната защита на правата Ви върху литературни и артистични произведения, както и при придобиване и използване на чужди авторски права. Указваме съдействие при регистрирането, изготвянето и подписването на договори касаещи правата Ви."
    },
    {
        "name": "Дизайни",
        "icon": "fa-image",
        "content": "При нужда от защита на новия и оригинален външен вид на Вашите продукти, Ви препоръчваме да изберете 3D марка, с регистриран или нерегистриран дизайн. Ще Ви изготвим предложения за най-подходящия вид защита, както и ще Ви разясним законовите изисквания. Ще подготвим регистрацията и ще се погрижим за нейната защита и поддръжка."
    },
    {
        "name": "Търговски тайни",
        "icon": "fa-lock",
        "content": "Независимо дали имате ценно ноу-хау, или имате изобретение, което не може или не трябва да е публично разгласено, трябва да сте наясно с Вашите конкурентни предимства и адекватно да ги защитите. Ще Ви помогнем да ги идентифицирате и да ги защитите като търговска тайна."
    },
    {
        "name": "Налагане на права",
        "icon": "fa-university",
        "content": "Предлагаме консултации относно различните варианти за налагане на права върху интелектуална собственост – граничен контрол, съдебни спорове, процедури пред Патентно ведомство в България и Европа, и пред Комисията за защита на конкуренцията в България."
    },
    {
        "name": "Географски означения",
        "icon": "fa-globe",
        "content": "Когато продуктът Ви има специфичен географски произход и качествата му се дължат на него, във Ваш интерес може да е вписването Ви като ползвател на регистрирано географско означение или да регистрирате ново такова. Свържете се с нас, за да научите повече за предимствата, които дава географското означение, както и за процедурата по регистрация."
    }
];

pages_data["contact"].address = "България, 1799 София, П.К. 21";
pages_data["contact"].phone = "+359 2 885 2222";
pages_data["contact"].fax = "+359 2 885 2222";
pages_data["contact"].mobile = "+359 88993 8522";
pages_data["contact"].email = "office@distincta.eu";

module.exports = pages_data;
