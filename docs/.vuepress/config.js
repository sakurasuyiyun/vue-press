module.exports = {
    host: 'localhost',
    title: 'Hello VuePress',
    description: '我的个人网站',
    head: [ // 注入到当前页面的 HTML <head> 中的标签
        ['link', {rel: 'icon', href: '/logo.png'}], // 增加一个自定义的 favicon(网页标签的图标)
    ],
    base: '/', // 这是部署到github相关的配置
    markdown: {
        lineNumbers: false,// 代码块显示行号,
    },
    themeConfig: {
        logo: '/user.jpg',
        nav: [ // 导航栏配置
            {text: '主页', link: '/'},
            {text: '基础', link: '/accumulate.html'},
            {text: '编码问题', link: '/algorithm/'},
            {text: 'vuePress', link: 'http://caibaojian.com/vuepress/'},
            // 可指定链接跳转模式：默认target: '_blank'新窗口打开，_self当前窗口打开
            {text: 'CSDN', link: 'https://blog.csdn.net', target: '_blank'},
            {text: '豆瓣', link: 'https://movie.douban.com', target: '_self', rel: ''},
            {
                text: '语言',
                ariaLabel: 'Language Menu',
                items: [
                    {text: '中文', link: '/language/chinese/'},
                    {text: '英文', link: '/language/english/'}
                ]
            }
        ],
        search: false, // 设置是否使用导航栏上的搜索框。false为禁用，默认为true
        searchMaxSuggestions: 10,  // 搜索框显示的搜索结果数量
        sidebar: 'auto', // 自动生成侧边栏,禁用false
        sidebarDepth: 2, // 侧边栏显示2级  0,1,2
    }
}