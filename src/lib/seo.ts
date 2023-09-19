import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Li Yong';
	const description = "你好 😶 Hello, I'm Li Yong";

	return {
		title,
		description,
		canonical: `https://link.liyong.online/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'nuro',
			url: `https://link.liyong.online/${router.asPath}`,
			type: 'website',
			images: [
				{
					url: 'https://s1.imagehub.cc/images/2023/09/19/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@nurodev',
			site: '@nurodev',
		},
		...props,
	};
}
