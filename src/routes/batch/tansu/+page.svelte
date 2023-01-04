<script lang="ts">
	import {writable, derived, batch} from '@amadeus-it-group/tansu';
	import {
		createBatchExampleHistory,
		FIRST_NAME_1,
		FIRST_NAME_2,
		LAST_NAME_1,
		LAST_NAME_2,
	} from '../helpers';
	import BatchExampleHistory from '../BatchExampleHistory.svelte';

	const firstName = writable(FIRST_NAME_1);
	const lastName = writable(LAST_NAME_1);
	const fullName = derived(
		[firstName, lastName],
		([$firstName, $lastName]) => $firstName + ' ' + $lastName,
	);

	let swapped = false;

	const swap = () => {
		swapped = !swapped;
		if (swapped) {
			$firstName = FIRST_NAME_2;
			$lastName = LAST_NAME_2;
		} else {
			$firstName = FIRST_NAME_1;
			$lastName = LAST_NAME_1;
		}
	};

	const history = createBatchExampleHistory(fullName);
</script>

<div>firstName: {$firstName}</div>
<div>lastName: {$lastName}</div>
<div>fullName: {$fullName}</div>
<button on:click={() => batch(swap)}>swap with <code>batch</code></button>
<button on:click={swap}>swap without <code>batch</code></button>
<BatchExampleHistory {history} />
