module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Murphy \'s bookstore',
    description: '这是我的第一个 VuePress 站点',
    base: '/bookstore_press/',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/images/logo2.png',
        lastUpdated: '上次更新',
        sidebar: false,
    },
    head: [
        ['link', { rel: 'icon', href: '/images/logo2.png' }]
    ]
}