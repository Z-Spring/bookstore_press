export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "home",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "title": "home",
    "heroImage": "/images/logo.svg",
    "actions": [
      {
        "text": "Get Started",
        "link": "/guide/"
      }
    ],
    "features": [
      {
        "title": "🌈Elasticsearch",
        "details": "支持Elasticsearch相关功能，图表化显示"
      },
      {
        "title": "🚀Redis",
        "details": "支持Redis缓存，提高访问速度"
      },
      {
        "title": "🐳Docker",
        "details": "支持Docker,一键化部署"
      },
      {
        "title": "🚩RabbitMQ",
        "details": "支持主流消息队列"
      },
      {
        "title": "💾Mybatis-Plus",
        "details": "支持MybatisPlus,抛去编写SQL的烦恼"
      },
      {
        "title": "🐸JWT",
        "details": "支持JWT认证，安全性更高"
      }
    ],
    "footer": "MIT Licensed | Copyright © 2022-murphy"
  },
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 1647533953000,
    "contributors": [
      {
        "name": "murphy",
        "email": "murphyqq1@gmail.com",
        "commits": 5
      }
    ]
  },
  "filePathRelative": "README.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
