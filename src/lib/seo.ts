import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Li Yong';
        const description = "Hello 😶 i's my name Li Yong";

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
		},
		// 删除twitter对象
		...props,
	};
}
