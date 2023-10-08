import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();

	const title = 'Deng You';
        const description = "Hello 😶 i's my name Deng You";

	return {
		title,
		description,
		canonical: `https://www.dengyou.online/${router.asPath}`,
		openGraph: {
			title,
			description,
			site_name: 'nuro',
			url: `https://www.dengyou.online/${router.asPath}`,
			type: 'website',
		},
		// 删除twitter对象
		...props,
	};
}
