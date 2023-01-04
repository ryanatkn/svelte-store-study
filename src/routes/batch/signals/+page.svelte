<script lang="ts">
	import {signal, computed, batch} from '@preact/signals-core';
	import {
		createBatchExampleHistory,
		FIRST_NAME_1,
		FIRST_NAME_2,
		LAST_NAME_1,
		LAST_NAME_2,
	} from '../helpers';
	import BatchExampleHistory from '../BatchExampleHistory.svelte';

	const firstName = signal(FIRST_NAME_1);
	const lastName = signal(LAST_NAME_1);
	const fullName = computed(() => firstName.value + ' ' + lastName.value); // note: $ syntax doesn't work in here

	let swapped = false;

	const swap = () => {
		swapped = !swapped;
		if (swapped) {
			firstName.value = FIRST_NAME_2;
			lastName.value = LAST_NAME_2;
		} else {
			firstName.value = FIRST_NAME_1;
			lastName.value = LAST_NAME_1;
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
