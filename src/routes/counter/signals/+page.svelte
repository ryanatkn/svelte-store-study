<script lang="ts">
	import {signal, computed} from '@preact/signals-core';

	const counter = signal(0);
	const tripled = computed(() => counter.value * 3);

	const increment = () => {
		counter.value++;
	};
</script>

<div>counter: {$counter}</div>
<div>tripled: {$tripled}</div>
<button on:click={increment}>increment counter</button>
