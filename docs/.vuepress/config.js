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
	title: "zhang bao wen's blog",
	// meta 中的描述文字，意义不大，SEO用
	description: "叫我欧文就好 - 个人博客",
	// 注入到当前页面的 HTML <head> 中的标签
	head: [
		// 增加一个自定义的 favicon(网页标签的图标)
		["link", { rel: "icon", href: "/img/favicon.ico" }],
		// 移动栏优化
		["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }],
		// 引用css样式
		["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" }],
		// 引入jquery
		[
			"script",
			{
				language: "javascript",
				type: "text/javascript",
				src: "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
			}
		],
		// 引入鼠标点击脚本
		[
			"script",
			{
				language: "javascript",
				type: "text/javascript",
				src: "/js/MouseClickEffect.js"
			}
		]
	],
	// 这是部署到github相关的配置
	base: "/kyriewen-blog/",
	markdown: {
		// 代码块显示行号
		lineNumbers: true
	},
	// 主题
	theme: "reco",
	plugins: [
		// 标签加强
		["vuepress-plugin-boxx"],
		// 动态标题
		[
			"dynamic-title",
			[
				"dynamic-title",
				{
					showIcon: "/favicon.ico",
					showText: "(/≧▽≦/)咦！又好了！",
					hideIcon: "/failure.ico",
					hideText: "(●—●)喔哟，崩溃啦！",
					recoverTime: 2000
				}
			]
		],
		// 更新刷新插件
		[
			"@vuepress/pwa",
			{
				serviceWorker: true,
				updatePopup: {
					message: "发现新文章",
					buttonText: "立即刷新"
				}
			}
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
		]
	],
	themeConfig: {
		smoothScroll: true,
		// 文档更新时间：每个文件git最后提交的时间,
		lastUpdated: "Last Updated",
		// 顶部导航栏
		nav: [
			// 单项 text：显示文字，link：指向链接
			{
				text: "个人文章",
				items: [
					{ text: "js", link: "/my-articles/js/Array-methods" },
					{ text: "css", link: "/my-articles/css/common-css" },
					{ text: "vue", link: "/my-articles/vue/vue3(1)" },
					{ text: "react", link: "/my-articles/react/react-hooks" },
					{ text: "移动端", link: "/my-articles/h5/wetchat" }
				]
			},
			{ text: "面试题", link: "/interview-questions/" },
			{ text: "常用库", link: "/common-libs/" },
			{ text: "书籍收集", link: "/books/" },
			{
				text: "学习源码",
				items: [
					{ text: "vue2", link: "/source-code/vue2" },
					{ text: "vue3", link: "/source-code/vue3" },
					{ text: "react", link: "/source-code/react" }
				]
			},

			{
				text: "关于作者",
				items: [
					{ text: "掘金", link: "https://juejin.cn/user/1239904848718135" },
					{ text: "思否", link: "https://segmentfault.com/u/jiaowoouwenjiuhao" },
					{ text: "CSDN", link: "https://blog.csdn.net/weixin_47352287?spm=1010.2135.3001.5343" },
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
						["/my-articles/js/Math.round()", "Math.round()、floor()、ceil()"]
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
		}
	}
};
