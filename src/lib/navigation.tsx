import { useTheme } from 'next-themes';

import { Status } from '~/components';
import { usePersistantState, useStatus } from '~/lib';

import { NavigationItemType, Theme } from '~/types';

import type { NavigationItem, NavigationItems } from '~/types';

const staticMenuItems: Array<Array<NavigationItem>> = [
	[
		{
			type: NavigationItemType.LINK,
			icon: 'feather:heart',
			text: 'Home',
			href: '/',
		},
                {
			type: NavigationItemType.LINK,
			icon: 'feather:edit-3',
			text: '笔记',
			href: '/blog',
		},
                {
			type: NavigationItemType.LINK,
			icon: 'feather:gift',
			text: '赞助',
			href: 'https://nicedaytooyou.github.io/Button/1.html',
		},
                {
			type: NavigationItemType.LINK,
			icon: 'feather:headphones',
			text: '歌单',
			href: 'https://music.liyong.online',
		},
                {
			type: NavigationItemType.LINK,
			icon: 'feather:circle',
			text: '检测',
			href: 'https://time.liyong.online',
		},
                {
			type: NavigationItemType.LINK,
			icon: 'feather:tv',
			text: 'Two',
			href: 'https://like.liyong.online',
		},
                {
			type: NavigationItemType.LINK,
			icon: 'feather:smile',
			text: 'One',
			href: 'https://one.liyong.online',
		},
                {
			type: NavigationItemType.LINK,
			icon: 'feather:at-sign',
			text: 'Me',
			href: 'https://series.liyong.online',
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:clock',
			text: '时间线',
			href: '/timeline',
		},
	],
	[
		{
			type: NavigationItemType.LINK,
			icon: 'feather:twitter',
			text: 'Twitter',
			href: 'https://twitter.com/NiceDayTooYou',
			external: true,
		},
		{
			type: NavigationItemType.LINK,
			icon: 'feather:star',
			text: 'Connect',
			href: 'https://kee.so/liyong',
			external: true,
		},
	],
];

export function useNavigation(): {
	menu: NavigationItems;
	settings: NavigationItems;
} {
	const state = usePersistantState();
	const { animations: background, sound } = state.get();
	const { color, loading, status } = useStatus();
	const { theme, setTheme } = useTheme();

	const menuItems: NavigationItems = [
		...staticMenuItems,
		...(!loading && status.discord_status !== 'offline'
			? [
					[
						{
							type: NavigationItemType.LINK,
							icon: <Status.Indicator color={color} pulse />,
							text: 'Status',
							href: '/status',
						} as NavigationItem,
					],
			  ]
			: []),
	];

	const settingsItems: NavigationItems = [
		[
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:image',
				endIcon: background ? 'feather:check-circle' : 'feather:circle',
				text: `Animations ${background ? 'On' : 'Off'}`,
				onClick: () =>
					state.set((settings) => ({
						...settings,
						animations: !settings.animations,
					})),
			},
			{
				type: NavigationItemType.ACTION,
				icon: sound ? 'feather:volume-2' : 'feather:volume-x',
				endIcon: sound ? 'feather:check-circle' : 'feather:circle',
				text: `Sounds ${sound ? 'On' : 'Off'}`,
				onClick: () =>
					state.set((settings) => ({
						...settings,
						sound: !settings.sound,
					})),
			},
			{
				type: NavigationItemType.DIVIDER,
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:monitor',
				endIcon: theme === Theme.SYSTEM ? 'feather:check-circle' : undefined,
				text: 'System Theme',
				onClick: () => setTheme(Theme.SYSTEM),
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:sun',
				endIcon: theme === Theme.LIGHT ? 'feather:check-circle' : undefined,
				text: 'Light Theme',
				onClick: () => setTheme(Theme.LIGHT),
			},
			{
				type: NavigationItemType.ACTION,
				icon: 'feather:moon',
				endIcon: theme === Theme.DARK ? 'feather:check-circle' : undefined,
				text: 'Dark Theme',
				onClick: () => setTheme(Theme.DARK),
			},
		],
	];

	return {
		menu: menuItems,
		settings: settingsItems,
	};
}
