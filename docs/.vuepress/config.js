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

		lastUpdated: 'Last Updated',

		repo: 'pkorzh/kaban',
		docsRepo: 'pkorzh/kaban-docs',
		docsDir: 'docs',
		editLinks: true,

		sidebar: [
			'/',
			'/installing-on-premises.md',
			{
				title: 'Core Concepts',
				collapsable: false,
				children: [
					'/tickets.md',
					'/backlogs.md',
					'/boards.md',
					'/workflow.md',
					'/tql.md',
				]
			},
		],
	},

	plugins: [
		'@vuepress/medium-zoom'
	],
};