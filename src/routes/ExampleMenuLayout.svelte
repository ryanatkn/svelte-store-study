<script lang="ts">
	import Breadcrumbs from '@feltcoop/felt/Breadcrumbs.svelte';

	// TODO rename/move this module?
</script>

<main class="column">
	<section>
		<Breadcrumbs>🧡</Breadcrumbs>
	</section>
	<section>
		<slot />
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	section {
		margin-bottom: var(--spacing_xl3);
	}
	section:first-child {
		font-size: var(--font_size_xl);
		margin-top: var(--spacing_xl);
	}
</style>
