<script lang="ts">
	import {writable, derived} from '@amadeus-it-group/tansu';

	const counter = writable(0);
	const tripled = derived(counter, ($counter) => $counter * 3);

	const increment = () => {
		$counter++;
	};
</script>

<div>counter: {$counter}</div>
<div>tripled: {$tripled}</div>
<button on:click={increment}>increment counter</button>
