
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/members" | "/projects" | "/sponsors";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/members": Record<string, never>;
			"/projects": Record<string, never>;
			"/sponsors": Record<string, never>
		};
		Pathname(): "/" | "/members" | "/members/" | "/projects" | "/projects/" | "/sponsors" | "/sponsors/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/.DS_Store" | "/fonts/bronzier/Bronzier-Medium.woff" | "/logo/untLogo.png" | "/logo/untLogoEagle.png" | "/robots.txt" | "/splat/animation.html" | "/splat/saecar.html" | string & {};
	}
}