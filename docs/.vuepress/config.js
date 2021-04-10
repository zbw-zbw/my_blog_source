/*
 * @Author: Kyrie Wen
 * @Date: 2021-03-09 09:51:16
 * @LastEditTime: 2021-03-09 13:19:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my_blog\docs\.vuepress\public\config.js
 */
module.exports = {
	// 页签标题
	title: "Kyrie wen",
	// meta 中的描述文字，SEO用
	description: "欢迎来到 zbw - 个人博客",
	base: "/",
	// 主题
	theme: "reco",
	// 注入到当前页面的 HTML <head> 中的标签
	head: [
		// 增加一个自定义的 favicon(网页标签的图标)
		["link", { rel: "icon", href: "/img/favicon.ico" }],
		// 移动栏优化
		["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
		// 引用css样式
		["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" }]
	],
	markdown: {
		// 代码块显示行号
		lineNumbers: true
	},
	plugins: [
		// 标签加强
		["vuepress-plugin-boxx"],
		// 右下角宠物
		[
			"@vuepress-reco/vuepress-plugin-kan-ban-niang",
			{
				theme: [
					"wanko",
					"blackCat",
					"whiteCat",
					"haru1",
					"haru2",
					"haruto",
					"koharu",
					"izumi",
					"shizuku",
					"miku",
					"z16"
				],
				clean: true,
				width: 240,
				height: 352
			}
		],
		// 音乐播放器
		[
			"meting",
			{
				metingApi: "https://api.i-meto.com/meting/api",
				meting: {
					server: "netease",
					type: "playlist",
					mid: "621465725"
				},
				aplayer: {
					lrcType: 3
				}
			}
		],
		[
			//鼠标点击特效
			"cursor-effects",
			{
				size: 3,
				shape: ["star"], // circle
				zIndex: 9999
			}
		],
		// 动态标题
		[
			"dynamic-title",
			{
				showIcon: "/img/favicon.ico",
				showText: "(/≧▽≦/)咦！又好了！",
				hideIcon: "/img/favicon.ico",
				hideText: "(●—●)喔哟，崩溃啦！",
				recoverTime: 2000
			}
		],
		// 流程图
		["flowchart"],
		[
			// 更新刷新插件
			("@vuepress/pwa",
			{
				serviceWorker: true,
				updatePopup: {
					message: "发现新文章",
					buttonText: "立即刷新"
				}
			})
		],
		// 代码复制弹窗插件
		[
			"vuepress-plugin-nuggets-style-copy",
			{
				copyText: "复制代码",
				tip: {
					content: "复制成功！"
				}
			}
		],
		[
			//图片放大插件
			"@vuepress/plugin-medium-zoom",
			{
				selector: ".page img",
				delay: 1000,
				options: {
					margin: 24,
					background: "rgba(25,18,25,0.9)",
					scrollOffset: 40
				}
			}
		],
		[
			//插件广场的sitemap插件
			"sitemap",
			{
				hostname: "https://www.glassysky.site"
			}
		],
		//vuepress公告插件
		[
			"@vuepress-yard/vuepress-plugin-window",
			{
				title: "博客公告",
				contentInfo: {
					title: "欢迎进来的朋友(✪ω✪)",
					needImg: true,
					imgUrl: "https://static01.imgkr.com/temp/6d1e565860bd4cfea0bb5c00305cdd15.jfif",
					content: "感兴趣的话添加博主微信学习交流"
				},
				bottomInfo: {
					btnText: "GitHub",
					linkTo: "https://github.com/zbw-zbw"
				},
				closeOnce: false,
				delayMount: 1000
			}
		]
	],
	themeConfig: {
		// 顶部导航栏
		nav: [
			// 单项 text：显示文字，link：指向链接
			{
				text: "文章",
				icon: "reco-coding",
				items: [
					{ text: "js", link: "/my-articles/js/Array-methods" },
					{ text: "css", link: "/my-articles/css/common-css" },
					{ text: "vue", link: "/my-articles/vue/vue3(1)" },
					{ text: "react", link: "/my-articles/react/react-hooks" },
					{ text: "移动端", link: "/my-articles/h5/wetchat" }
				]
			},
			{ text: "面试题", icon: "reco-message", link: "/interview-questions/" },
			{
				text: "源码",
				icon: "reco-message",
				items: [
					{ text: "vue2", link: "/source-code/vue2" },
					{ text: "vue3", link: "/source-code/vue3" },
					{ text: "react", link: "/source-code/react" }
				]
			},
			{ text: "常用库", icon: "reco-message", link: "/common-libs/" },
			{ text: "书籍", icon: "reco-message", link: "/books/" },
			{
				text: "关于作者",
				icon: "reco-github",
				items: [
					{ text: "掘金", link: "https://juejin.cn/user/1239904848718135" },
					{ text: "思否", link: "https://segmentfault.com/u/jiaowoouwenjiuhao" },
					{ text: "GitHub", link: "https://github.com/zbw-zbw" }
				]
			}
		],
		// 侧边导航栏
		sidebar: {
			"/my-articles/": [
				{
					title: "js",
					collabsable: true,
					children: [
						["/my-articles/js/Array-methods", "15个常用操作数组的方法"],
						["/my-articles/js/my-format", "封装一个日期格式化函数"],
						["/my-articles/js/Math.round()", "Math.round()、floor()、ceil()"],
						["/my-articles/js/scope", "彻底搞懂JS中的作用域和闭包"],
						["/my-articles/js/this", "彻底搞懂JS中的this关键字"]
					]
				},
				{
					title: "css",
					collabsable: true,
					children: [["/my-articles/css/common-css", "20个常用的CSS知识点"]]
				},
				{
					title: "vue",
					collabsable: true,
					children: [
						["/my-articles/vue/vue3(1)", "vue3正确的打开方式（上）"],
						["/my-articles/vue/vue3(2)", "vue3正确的打开方式（下）"]
					]
				},
				{
					title: "react",
					collabsable: true,
					children: [
						["/my-articles/react/react-hooks", "手把手教你react hooks"],
						["/my-articles/react/useEffect(1)", "useEffect进阶指南（上）"],
						["/my-articles/react/useEffect(2)", "useEffect进阶指南（下）"]
					]
				},
				{
					title: "移动端",
					collabsable: true,
					children: [["/my-articles/h5/wetchat", "你一定踩过的微信H5的坑"]]
				}
			],
			"/source-code/": [
				["/source-code/vue2", "Vue2源码"],
				["/source-code/vue3", "Vue3源码"],
				["/source-code/react", "react源码"]
			]
		},
		// 平滑滚动条
		smoothScroll: true,
		// 作者
		author: "叫我欧文就好",
		// 作者头像
		// authorAvatar: "/img/logo.png",
		// 开始时间
		startYear: "2021",
		// 文档更新时间：每个文件git最后提交的时间
		lastUpdated: "最后更新时间"
		// 博客设置
		// type: "blog"
		// logo: "/img/logo.png"
	}
};
