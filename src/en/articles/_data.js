const { globals, methods } = require('../_data_preparation.js');

var articles = [
    {
        "slug": "opposition",
        "name": "Opposing a trade mark application in Bulgaria",
        "date": "30 January 2017",
        "author": "Milena Kichashka",
        "author_slug": "",
        "sub_title": "Key points to keep in mind when filing opposition against a Bulgarian trade mark application",
        "description": "When you encounter a trade mark application that is identical or similar to the one you already have registered or used, the usual approach is to object to its registration by filing an opposition...",
        "social_description": "How the opposition procedure in Bulgaria work",
        "social_caption": "Objecting to the registration of a trademark application by means of an opposition in Bulgaria",
        "tags": ["trade mark", "similarity", "opposition", "Bulgarian trademark law", "proof of use", "likelihoood of confusion"],
        "image": "magnifying-opposition.webp",
        "image_alt_text": "Opposing a trade mark application in Bulgaria, intellectual property attorney register trade marks, patents in Bulgaria, Europe and USA",
		"meta": {
            "title": "Opposing a trade mark application in Bulgaria",
			"description": "Key points to keep in mind when filing opposition against a Bulgarian trade mark application",
			"keywords": "trademark, similarity, opposition, Bulgarian trademark law, proof of use, likelihoood of confusion, objection, trademark registration, filing of opposition, opposition procedure",
			"og:type": "article",
			"og:image:width": "472",
			"og:image:height": "315",
			"author": "Milena Kichashka - Distincta - Intellectual Property Agency",
		},
        "social_description": "How the opposition procedure in Bulgaria work",
        "social_caption": "Opposition procedure in Bulgaria"
    },
    {
        "slug": "unregistered-tms",
        "name": "Unregistered trade marks in Bulgaria",
        "date": "06 December 2016",
        "author": "Milena Kichashka",
        "author_slug": "",
        "sub_title": "The Bulgarian trade mark law acknowledges the rights in earlier unregistered trade marks, but the protection is rather restricted",
        "description": "The various national jurisdictions of the EU have different approach on unregistered trade marks. Some like France and Spain do not recognize them. In others like Denmark the acquisition of trade mark rights without registration is rather easy. The UK recognizes passing-off. Still others pose specific requirements for use and recognition of the mark, in order to grant protection. Bulgaria is of the latter.",
        "social_description": "Trademark protection for unregistered trademarks in Bulgaria",
        "social_caption": "How are unregistered trademarks protected in Bulgaria",
        "tags": ["unregistered trademark", "trademark protection", "bad faith", "proof of use", "opposition", "cancellation"],
        "image": "unregistered-tms.webp",
        "image_alt_text": "Unregistered trade marks in Bulgaria, intellectual property attorney register trade marks, patents in Bulgaria, Europe and USA",
		"meta": {
			"description": "The Bulgarian trade mark law acknowledges the rights in earlier unregistered trade marks, but the protection is rather restricted",
			"keywords": "unregistered trademark, trademark protection, bad faith, mark filed by an agent, opposition, cancellation",
			"og:image:width": "420",
			"og:image:height": "216",
			"og:type": "article",
			"author": "Milena Kichashka - Distincta - Intellectual Property Agency",
            "social_description": "How are unregistered trademarks protected in Bulgaria"
		}
    },
    {
        "slug": "black-friday-mark",
        "name": "Black Friday is now a registered trade mark in Bulgaria. Is it enforceable, though?",
        "date": "25 November 2016",
        "author": "Milena Kichashka",
        "author_slug": "",
        "sub_title": "The term Black Friday was successfully registered as a trade mark even for retail services. Exactly how worrisome is this registration?",
        "description": "Earlier this year the Bulgarian Patent Office registered the word mark BLACK FRIDAY and its translation into Bulgarian (ЧЕРЕН ПЕТЪК) for various services in class 35, including services such as presentation of goods...",
        "social_description": "",
        "social_caption": "Trade mark registration of the term Black Friday",
        "tags": ["trade mark", "Black Friday", "distinctive character", "goods and services", "scope of protection", "enforcement"],
        "image": "black-friday.webp",
        "image_alt_text": "Black Friday is now a registered trade mark in Bulgaria, intellectual property attorney register trade marks, patents in Bulgaria, Europe and USA",
		"meta": {
			"description": "Black Friday registered as a trade mark in Bulgaria",
			"keywords": "trade mark, Black Friday, distinctive character, goods and services, scope of protection, enforcement",
			"og:type": "article",
			"og:image:width": "800",
			"og:image:height": "421",
			"author": "Milena Kichashka - Distincta - Intellectual Property Agency",
		}
    }
];

var pages_data = {
    index: methods.prepareData({
        slug: "index",
        active_section: "articles",
        name: "Useful for you",
        description: "Useful information for your intellectual property and other interesting facts",
        keywords: "news, changes in the practice, useful and curious information from the world of intellectual properties",
        sub_title: "Useful information for your intellectual property and other interesting facts",
        content: []
    })
};

articles.forEach(e => { e.isArticle = true; e.url = methods.createUrl(e.slug, 'articles'); });
pages_data["index"].entries = articles;

// Generate each page's data
for (article of articles) {
    pages_data[article.slug] = methods.prepareData(article, 'articles');
}

module.exports = pages_data;
