<script lang="ts">
	import {base} from '$app/paths';
</script>

<main class="column">
	<section>
		<header class="markup">
			<h1>Svelte store study</h1>
			<p>
				assessing several <a href="https://svelte.dev/docs#run-time-svelte-store">Svelte stores</a>
			</p>
			<div><a href="https://github.com/ryanatkn/svelte-store-study">source</a></div>
		</header>
	</section>
	<section>
		<menu class="link-menu">
			<li><a href="{base}/counter">counter</a></li>
			<li><a href="{base}/batch">batch</a></li>
		</menu>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
		text-align: center;
	}
	header {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: var(--spacing_xl) 0 var(--spacing_xl5);
	}
</style>
