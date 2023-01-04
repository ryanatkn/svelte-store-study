<script lang="ts">
	import {toPathPieces} from '@feltcoop/util/path-parsing.js';
	import {stripStart} from '@feltcoop/util/string.js';
	import {base} from '$app/paths';
	import {page} from '$app/stores';

	// TODO upstream the path fix to Felt - `toPathPieces(stripStart(finalPath, finalBasePath));`

	export let path: string | undefined = undefined;
	export let selectedPath: string | null | undefined = undefined; // `null` means none
	export let basePath: string | undefined = undefined;

	$: finalPath = path ?? $page.url.pathname;
	$: finalSelectedPath =
		selectedPath === null ? null : selectedPath === undefined ? finalPath : selectedPath;
	$: finalBasePath = basePath ?? base;

	$: pathPieces = toPathPieces(stripStart(finalPath, finalBasePath));

	$: rootPath = finalBasePath || '/';
</script>

<div class="breadcrumbs">
	<!-- The default/only slot is the content for the root "/" link. -->
	<a href={rootPath} class:selected={rootPath === finalSelectedPath}><slot>•</slot></a
	>{#each pathPieces as pathPiece}{#if pathPiece.type === 'piece'}<a
				href={finalBasePath + pathPiece.path}
				class:selected={pathPiece.path === finalSelectedPath}>{pathPiece.name}</a
			>{:else}<span class="separator"><slot name="separator">/</slot></span>{/if}{/each}
</div>

<style>
	.breadcrumbs {
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: stretch;
		flex-wrap: wrap;
		padding: var(--spacing_md) 0;
	}
	a {
		position: relative;
		z-index: 1;
		padding: 0 var(--spacing_sm);
		display: flex;
		align-items: center;
	}
	.separator {
		position: relative;
		z-index: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 0;
	}
</style>
