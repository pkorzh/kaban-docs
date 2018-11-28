module.exports = {
	title: 'Kaban Docs',

	description: 'Kaban Project Management Tool',

	head: [
		['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }],
	],

	evergreen: true,

	themeConfig: {
		logo: '/kaban-logo.svg',

		//displayAllHeaders: true,

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
					'/core-concepts/tickets.md',
					'/core-concepts/backlogs.md',
					'/core-concepts/boards.md',
					'/core-concepts/workflow.md',
					'/core-concepts/tql.md',
					'/core-concepts/users.md',
				]
			},
			{
				title: 'Administrator guide',
				collapsable: false,
				children: [
					'/administrator-guide/bootstrap.md',
					'/administrator-guide/rebalance-rank.md',
					'/administrator-guide/add-test-data.md',
					'/administrator-guide/create-super-user.md',
					'/administrator-guide/calc-forecast.md',
					'/administrator-guide/take-status-slice.md',
				]
			},
		],
	},

	plugins: [
		'@vuepress/medium-zoom'
	],
};