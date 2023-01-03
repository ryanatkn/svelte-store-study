<script lang="ts">
	import {signal, computed} from '@preact/signals-core';

	const counter = signal(0);
	const tripled = computed(() => counter.value * 3);

	const click = () => {
		counter.value++;
	};
</script>

<button on:click={click}>clickme</button>
<div>counter: {$counter}</div>
<div>tripled: {$tripled}</div>
