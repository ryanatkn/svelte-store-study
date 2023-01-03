<script lang="ts">
	import {writable, derived} from '@amadeus-it-group/tansu';

	const counter = writable(0);
	const tripled = derived(counter, ($counter) => $counter * 3);

	const click = () => {
		$counter++;
	};
</script>

<button on:click={click}>clickme</button>
<div>counter: {$counter}</div>
<div>tripled: {$tripled}</div>
