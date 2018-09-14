module.exports = {
    base: '/front-end-developer-interview-guide/',
    title: "Hello VuePress",
    description: "Just playing around",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            ['/', 'Home'],
            ['/questions/', 'Questions'],
            ['/references/', 'References']
        ]
    }
}