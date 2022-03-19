module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Murphy \'s bookstore',
    description: 'Spring Boot项目实战',
    base: '/bookstore_press/',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo2.png',
        lastUpdated: '上次更新',
        // sidebar: false,
    },
    head: [
        ['link', { rel: 'icon', href: '/images/logo2.png' }]
    ]
}
