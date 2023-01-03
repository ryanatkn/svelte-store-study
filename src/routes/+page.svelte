<script lang="ts">
	import {signal, computed} from '@preact/signals-core';

	const counter = signal(0);
	const doubled = computed(() => counter.value * 2);

	const click = () => {
		counter.value++;
	};
</script>

<main class="markup column">
	<section>
		<header>
			<h1>Svelte store study</h1>
			<div><a href="https://github.com/ryanatkn/svelte-store-study">source</a></div>
		</header>
	</section>
	<section>
		<button on:click={click}>clickme</button>
		<div>counter: {$counter}</div>
		<div>doubled: {$doubled}</div>
	</section>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	header {
		text-align: center;
	}
</style>
