// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'InnnerCore',
	tagline: 'InnnerCore is Cool',
	url: 'https://docs.mineprogramming.org',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'throw',
	favicon: 'img/favicon.ico',
	organizationName: 'mineprogramming', // Usually your GitHub org/user name.
	projectName: 'innnercore-docs', // Usually your repo name.
	i18n: {
		defaultLocale: 'en',
		locales: ['en', 'ru'],
		localeConfigs: {
			en: {
				label: 'English',
				direction: 'ltr',
				htmlLang: 'en-US',
			},
			ru: {
				label: 'Русский',
				direction: 'ltr',
				htmlLang: 'ru-RU',
			},
		},
	},
	plugins: [
		[
			'docusaurus-plugin-typedoc',
			{
				entryPoints: ['documentation/core-engine/headers/core-engine.d.ts'],
				tsconfig: 'documentation/core-engine/tsconfig.json',
				out: 'api',
				watch: process.env.TYPEDOC_WATCH,
				sidebar: {
					categoryLabel: 'API',
					position: 0,
					fullNames: true,
				},
			},
		],
	],
	presets: [[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					path: 'docs',
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
		})],
	],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'InnerCore',
				logo: {
					alt: 'InnerCore Logo',
					src: 'img/coreengine_animated.svg',
				},
				items: [
					{
						type: 'doc',
						docId: 'intro',
						position: 'left',
						label: 'Docs',
					},
					{
						to: 'docs/api/',  // 'api' is the 'out' directory
						activeBasePath: 'docs',
						label: 'API',
						position: 'left',
					},
					{
						type: 'localeDropdown',
						position: 'right',
					},
					{ to: '/blog', label: 'Blog', position: 'left' },
					{
						href: 'https://github.com/facebook/docusaurus',
						label: 'GitHub',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'Getting Started',
								to: '/docs/intro',
							},
						],
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/docusaurus',
							},
							{
								label: 'Discord',
								href: 'https://discordapp.com/invite/docusaurus',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/docusaurus',
							},
						],
					},
					{
						title: 'More',
						items: [
							{
								label: 'Blog',
								to: '/blog',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/facebook/docusaurus',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
}

module.exports = config
