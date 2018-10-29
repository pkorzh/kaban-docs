module.exports = {
	title: 'Kaban Docs',

	description: 'Kaban Project Management Tool',

	head: [
		['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }],
	],

	evergreen: true,

	themeConfig: {
		logo: '/kaban-logo.svg',

		displayAllHeaders: true,

		sidebar: [
			'/',
			{
				title: 'Core Concepts',
				collapsable: false,
				children: [
					'/tickets/',
					'/backlogs/',
					'/boards/',
					'/workflow/',
					'/tql/',
				]
			},
		],
	},

	plugins: [
		'@vuepress/medium-zoom'
	],
};