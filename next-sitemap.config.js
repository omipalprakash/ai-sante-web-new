/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://aisante.in', // 👉 अपना असली domain डालें
    generateRobotsTxt: true,       // robots.txt भी अपने आप बनेगा
    changefreq: 'weekly',          // हर पेज का अपडेट टाइम
    priority: 0.7,                 // SEO priority
    sitemapSize: 5000,

    // किन पेजों को sitemap से हटाना है (अगर कोई admin/private पेज हैं)
    exclude: ['/privacy-policy', '/admin'],

    // Robots.txt customization
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/privacy-policy', '/admin'],
            },
        ],
    },
};
