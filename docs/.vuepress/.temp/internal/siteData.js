export const siteData = {
  "base": "/",
  "lang": "zh-CN",
  "title": "Murphy 's bookstore",
  "description": "这是我的第一个 VuePress 站点",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/images/logo2.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
