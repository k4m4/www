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

export const KeybaseIcon: FC<IconProps> = createIcon({
	displayName: 'KeybaseIcon',
	path: (
		<g fill="currentColor">
			<path d="M10.446 21.371a.953.953 0 1 1-.955-.954c.524 0 .951.431.951.955m5.922-.001a.953.953 0 1 1-.958-.954c.526 0 .954.431.954.955m4.544-9.159l-.156-.204c-.046-.06-.096-.116-.143-.175c-.045-.061-.094-.113-.141-.169c-.104-.12-.209-.239-.319-.359l-.076-.08l-.091-.099l-.135-.131c-.015-.018-.032-.034-.05-.053a10.87 10.87 0 0 0-3.955-2.504l-.23-.078l.035-.083a4.108 4.108 0 0 0-.12-3.255a4.11 4.11 0 0 0-2.438-2.16c-.656-.216-1.23-.319-1.711-.305c-.033-.105-.1-.577.496-1.848L10.663 0l-.287.399c-.33.455-.648.895-.945 1.328a1.857 1.857 0 0 0-1.245-.58L6.79 1.061h-.012c-.033-.003-.07-.003-.104-.003c-.99 0-1.81.771-1.87 1.755l-.088 1.402v.003a1.876 1.876 0 0 0 1.755 1.979l1.002.061c-.065.84.073 1.62.405 2.306a11.279 11.279 0 0 0-3.66 2.484C.913 14.391.913 18.051.913 20.994v1.775l1.305-1.387c.266.93.652 1.807 1.145 2.615H5.06a9.197 9.197 0 0 1-1.68-3.848l1.913-2.03l-.985 3.091l1.74-1.268c3.075-2.234 6.744-2.75 10.91-1.529c1.805.532 3.56.039 4.473-1.257l.104-.165c.091.498.141.998.141 1.496c0 1.563-.255 3.687-1.38 5.512h1.611c.776-1.563 1.181-3.432 1.181-5.512c-.001-2.199-.786-4.421-2.184-6.274zM8.894 6.191c.123-1.002.578-1.949 1.23-2.97a1.36 1.36 0 0 0 1.283.749c.217-.008.605.025 1.233.232c.714.236 1.286.744 1.608 1.425s.349 1.442.079 2.149c-.173.445-.454.82-.806 1.109l-.408-.502l-.002-.003a1.468 1.468 0 0 0-2.059-.205c-.334.27-.514.66-.534 1.058c-1.2-.541-1.8-1.643-1.628-3.041l.004-.001zm4.304 5.11l-.519.425a.228.228 0 0 1-.323-.032l-.111-.135a.238.238 0 0 1 .034-.334l.51-.42l-1.055-1.299a.307.307 0 0 1 .044-.436a.303.303 0 0 1 .434.041l2.963 3.645a.309.309 0 0 1-.168.499a.315.315 0 0 1-.31-.104l-.295-.365l-1.045.854a.244.244 0 0 1-.154.055a.237.237 0 0 1-.186-.09l-.477-.579a.24.24 0 0 1 .035-.336l1.051-.857l-.426-.533l-.002.001zM7.753 4.866l-1.196-.075a.463.463 0 0 1-.435-.488l.09-1.401a.462.462 0 0 1 .461-.436h.024l1.401.091a.459.459 0 0 1 .433.488l-.007.101a9.269 9.269 0 0 0-.773 1.72h.002zm12.524 11.481c-.565.805-1.687 1.081-2.924.718c-3.886-1.141-7.396-.903-10.468.701l1.636-5.123l-5.291 5.609c.099-3.762 2.453-6.966 5.758-8.311c.471.373 1.034.66 1.673.841c.16.044.322.074.48.102a1.41 1.41 0 0 0 .21 1.407l.075.09c-.172.45-.105.975.221 1.374l.475.582a1.39 1.39 0 0 0 1.079.513c.321 0 .635-.111.886-.314l.285-.232c.174.074.367.113.566.113a1.45 1.45 0 0 0 .928-.326c.623-.51.72-1.435.209-2.06l-1.67-2.056c.145-.117.281-.244.408-.381c.135.037.271.078.4.12c.266.097.533.198.795.315a9.55 9.55 0 0 1 2.771 1.897c.029.03.059.055.085.083l.17.175a9.168 9.168 0 0 1 .35.387l.126.15c.045.053.086.104.13.16l.114.15c.04.051.079.102.117.154c.838 1.149.987 2.329.404 3.157v.005zM7.719 4.115l-.835-.051l.053-.835l.834.051l-.052.835z" />
		</g>
	),
});

export const ArrowUpRightIcon: FC<IconProps> = createIcon({
	displayName: 'ArrowUpRight',
	path: (
		<g
			fill="none"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		>
			<line
				x1="7"
				x2="17"
				y1="17"
				y2="7"
			/>
			<polyline points="7 7 17 7 17 17" />
		</g>
	),
});
