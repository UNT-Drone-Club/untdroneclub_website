
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```sh
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const ACSETUPSVCPORT: string;
	export const ADSK_3DSMAX_X64_2025: string;
	export const ALLUSERSPROFILE: string;
	export const AMDRMPATH: string;
	export const AMDRMSDKPATH: string;
	export const APPDATA: string;
	export const CHOCOLATEYINSTALL: string;
	export const CHOCOLATEYLASTPATHUPDATE: string;
	export const COMMONPROGRAMFILES: string;
	export const COMMONPROGRAMW6432: string;
	export const COMPUTERNAME: string;
	export const COMSPEC: string;
	export const CUDA_PATH: string;
	export const CUDA_PATH_V11_8: string;
	export const DRIVERDATA: string;
	export const HOMEDRIVE: string;
	export const HOMEPATH: string;
	export const INTEL_DEV_REDIST: string;
	export const JD2_HOME: string;
	export const LOCALAPPDATA: string;
	export const LOGONSERVER: string;
	export const MASON: string;
	export const MIC_LD_LIBRARY_PATH: string;
	export const MYVIMRC: string;
	export const NODE_ENV: string;
	export const NUMBER_OF_PROCESSORS: string;
	export const NVIM: string;
	export const NVIM_LOG_FILE: string;
	export const NVTOOLSEXT_PATH: string;
	export const OMP_NUM_THREADS: string;
	export const ONEDRIVE: string;
	export const OS: string;
	export const PATH: string;
	export const PATHEXT: string;
	export const PROCESSOR_ARCHITECTURE: string;
	export const PROCESSOR_IDENTIFIER: string;
	export const PROCESSOR_LEVEL: string;
	export const PROCESSOR_REVISION: string;
	export const PROGRAMDATA: string;
	export const PROGRAMFILES: string;
	export const PROGRAMW6432: string;
	export const PROMPT: string;
	export const PSMODULEPATH: string;
	export const PUBLIC: string;
	export const RLSSVCPORT: string;
	export const SESSIONNAME: string;
	export const SYSTEMDRIVE: string;
	export const SYSTEMROOT: string;
	export const TEMP: string;
	export const TMP: string;
	export const USERDOMAIN: string;
	export const USERDOMAIN_ROAMINGPROFILE: string;
	export const USERNAME: string;
	export const USERPROFILE: string;
	export const VBOX_MSI_INSTALL_PATH: string;
	export const VIM: string;
	export const VIMRUNTIME: string;
	export const VIPSHOME: string;
	export const WINDIR: string;
	export const WSLENV: string;
	export const WT_PROFILE_ID: string;
	export const WT_SESSION: string;
}

/**
 * Similar to [`$env/static/private`](https://svelte.dev/docs/kit/$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://svelte.dev/docs/kit/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://svelte.dev/docs/kit/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > [!NOTE] In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		ACSETUPSVCPORT: string;
		ADSK_3DSMAX_X64_2025: string;
		ALLUSERSPROFILE: string;
		AMDRMPATH: string;
		AMDRMSDKPATH: string;
		APPDATA: string;
		CHOCOLATEYINSTALL: string;
		CHOCOLATEYLASTPATHUPDATE: string;
		COMMONPROGRAMFILES: string;
		COMMONPROGRAMW6432: string;
		COMPUTERNAME: string;
		COMSPEC: string;
		CUDA_PATH: string;
		CUDA_PATH_V11_8: string;
		DRIVERDATA: string;
		HOMEDRIVE: string;
		HOMEPATH: string;
		INTEL_DEV_REDIST: string;
		JD2_HOME: string;
		LOCALAPPDATA: string;
		LOGONSERVER: string;
		MASON: string;
		MIC_LD_LIBRARY_PATH: string;
		MYVIMRC: string;
		NODE_ENV: string;
		NUMBER_OF_PROCESSORS: string;
		NVIM: string;
		NVIM_LOG_FILE: string;
		NVTOOLSEXT_PATH: string;
		OMP_NUM_THREADS: string;
		ONEDRIVE: string;
		OS: string;
		PATH: string;
		PATHEXT: string;
		PROCESSOR_ARCHITECTURE: string;
		PROCESSOR_IDENTIFIER: string;
		PROCESSOR_LEVEL: string;
		PROCESSOR_REVISION: string;
		PROGRAMDATA: string;
		PROGRAMFILES: string;
		PROGRAMW6432: string;
		PROMPT: string;
		PSMODULEPATH: string;
		PUBLIC: string;
		RLSSVCPORT: string;
		SESSIONNAME: string;
		SYSTEMDRIVE: string;
		SYSTEMROOT: string;
		TEMP: string;
		TMP: string;
		USERDOMAIN: string;
		USERDOMAIN_ROAMINGPROFILE: string;
		USERNAME: string;
		USERPROFILE: string;
		VBOX_MSI_INSTALL_PATH: string;
		VIM: string;
		VIMRUNTIME: string;
		VIPSHOME: string;
		WINDIR: string;
		WSLENV: string;
		WT_PROFILE_ID: string;
		WT_SESSION: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://svelte.dev/docs/kit/$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://svelte.dev/docs/kit/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
