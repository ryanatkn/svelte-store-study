<script lang="ts">
	import type {Writable} from 'svelte/store';
	import type {HistoryItem} from './helpers';

	export let history: Writable<HistoryItem[]>;
</script>

<section class="markup">
	<h2>history</h2>
	<ul>
		{#each $history as item}
			<li>
				{item.value}
				{#if !item.valid}⚠️{/if}
			</li>
		{/each}
	</ul>
</section>

<style>
	section {
		margin-top: var(--spacing_xl3);
	}
</style>
