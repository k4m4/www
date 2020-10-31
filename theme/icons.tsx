import { createIcon, IconProps } from '@chakra-ui/icon';
import { FC } from 'react';

export const GitHubIcon: FC<IconProps> = createIcon({
	displayName: 'GitHubIcon',
	path: (
		<g
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		>
			<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
		</g>
	),
});

export const TwitterIcon: FC<IconProps> = createIcon({
	displayName: 'TwitterIcon',
	path: (
		<g
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		>
			<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
		</g>
	),
});

export const EmailIcon: FC<IconProps> = createIcon({
	displayName: 'EmailIcon',
	path: (
		<g
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		>
			<circle
				cx="12"
				cy="12"
				r="4"
			/>
			<path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94" />
		</g>
	),
});

export const AnchorIcon: FC<IconProps> = createIcon({
	displayName: 'AnchorIcon',
	path: (
		<g
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		>
			<circle
				cx="12"
				cy="5"
				r="3"
			/>
			<line
				x1="12"
				x2="12"
				y1="22"
				y2="8"
			/>
			<path d="M5 12H2a10 10 0 0 0 20 0h-3" />
		</g>
	),
});
