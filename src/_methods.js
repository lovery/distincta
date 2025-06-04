const host_url = 'https://www.distincta.eu';

function createUrl (globals, slug, prefix) {
    return '/' + globals.lang + '/' + ( prefix ?  prefix + '/' : '' ) + slug;
};

function createPageUrl (globals, slug, prefix) {
    return createUrl(globals, slug, prefix) + '.html';
};

function prepareArticlesData(articles, methods, pages_data) {
  articles.forEach(e => {
    e.isArticle = true;
    e.url = methods.createPageUrl(e.slug, 'articles');
    e.author_url = e.author_slug ? methods.createPageUrl(e.author_slug, 'about'): '';
  });
  pages_data["index"].entries = articles;

  // Generate each page's data
  for (article of articles) {
    pages_data[article.slug] = methods.prepareData(article, 'articles');
  }
}

function prepareData (globals, p, active_section) {
    let slug = p.slug;
    var strData = JSON.stringify(globals.base_data);
    var pData = JSON.parse(strData);
    pData.host = host_url;
    pData.title = p.name;
    var pages_entries = Object.entries(p);
    for (e of pages_entries) {
        pData[e[0]] = e[1];
    }
    if (!pData.active_section) {
        pData.active_section = (active_section ? active_section : slug);
    }
    if (!pData.url) {
        pData.url = createUrl(
            globals,
            ( slug == 'index' ? '' : slug ),
            ( slug !== pData.active_section ? pData.active_section : null )
        );
    }
    if (!pData.alt_url) {
        if (slug != "index" && pData.active_section == 'articles') {
            pData.alt_url = '/' + pData.languages[0].slug + '/articles/';
        } else {
            pData.alt_url = pData.url.replace('/' + globals.lang + '/', '/' + pData.languages[0].slug + '/');
        }
    }

    let page_title = (pData.title ? pData.title + ' - ' : '') + globals.website_base_title;

    if (!pData.meta) {
        pData.meta = {};
    }

    pData.meta.title = page_title ? page_title : pData.meta.title;
    pData.meta.description = pData.hasOwnProperty('social_description') ? pData.social_description : (pData.hasOwnProperty('description') ? pData.description : pData.meta.description);
    pData.meta.keywords =  pData.hasOwnProperty('keywords') ? pData.keywords : pData.meta.keywords;
    pData.meta.og_type = pData.hasOwnProperty('type') ? pData.type : "website";
    pData.meta.author = globals.website_base_title;

    if (pData.hasOwnProperty('image')) {
        pData.meta.image = pData.image;
        pData.meta.og_image = host_url + '/img/news/' + pData.meta.image;
        pData.meta.og_image_width = pData.image_width;
        pData.meta.og_image_height = pData.image_height;
        pData.meta.og_image_alt = pData.imageAlt;
    }

    pData.meta.og_title = pData.meta.title;
    pData.meta.og_description = pData.meta.description;
    pData.meta.og_locale = globals.locale;
    pData.meta.og_locale_alternates = pData.languages.map(l => l.locale);
    pData.meta.og_url = host_url + pData.url;
    pData.meta.og_site_name = globals.website_base_title;
    pData.meta.x_card = pData.meta.og_type == "website" ? "summary" : pData.meta.og_type;
    pData.meta.x_url = pData.meta.og_url;
    pData.meta.x_site = 'DistinctaA';
    pData.meta.x_creator = 'DistinctaA';
    pData.meta.x_title = pData.meta.title;
    pData.meta.x_description = pData.meta.description;
    pData.meta.x_image = pData.meta.og_image;
    pData.meta.x_image_alt = pData.meta.og_image_alt;
    if (pData.hasOwnProperty('type') && pData.type == 'article') {
        pData.meta.article_published_time = pData.date;
        if (pData.hasOwnProperty('modified_date')) {
            pData.meta.article_modified_time = pData.modified_date;
        }
        pData.meta.article_author = (pData.hasOwnProperty('author') ? pData.author + ' - ' : '') + globals.website_base_title;
        pData.meta.article_section = "Intellectual Properties";
        pData.meta.article_tag = pData.meta.keywords; // or may be tags
    }
    return pData;
};

module.exports = { createUrl, createPageUrl, prepareArticlesData, prepareData};
