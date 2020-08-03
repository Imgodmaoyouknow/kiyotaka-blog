module.exports = {
  title: '清隆',
  tagline: '深藏不露是一种卓越的才能',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '清隆的博客',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   to: 'docs/',
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },
        {to: '/blog', label: '博客', position: 'right'},
        {
          href: 'https://github.com/Imgodmaoyouknow',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: '博客',
              to: 'https://waface7.cn',
            },
            {
              label: 'GitHub',
              to: 'https://github.com/Imgodmaoyouknow',
            },
            {
              label: 'BiliBili 哔哩哔哩',
              to: 'https://space.bilibili.com/172970431',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'QQ',
              href: 'https://wpa.qq.com/msgrd?v=3&uin=1565063862&site=oicqzone.com&menu=yes',
            },
            {
              label: '微博',
              href: 'https://weibo.com/5865958861',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'CSDN',
              to: 'https://blog.csdn.net/Gmaomua',
            },
            {
              label: '简书',
              href: 'https://www.jianshu.com/u/92650a7f2e38',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 清隆. Built with Docusaurus.<br/>冀ICP备18039036号-1`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // docs: {
        //   // It is recommended to set document id as docs home page (`docs/` path).
        //   homePageId: 'doc1',
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/edit/master/website/',
        // },
        blog: {
          // path: './blog',
          // routeBasePath: '/',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
