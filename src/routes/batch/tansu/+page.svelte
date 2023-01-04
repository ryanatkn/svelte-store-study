<script lang="ts">
	import {writable, derived, batch} from '@amadeus-it-group/tansu';
	import {onDestroy} from 'svelte';

	const FIRST_NAME_1 = 'Alyssa';
	const FIRST_NAME_2 = 'Ben';
	const LAST_NAME_1 = 'Apple';
	const LAST_NAME_2 = 'Banana';

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

	// Track the `history` of each change to `fullName`.
	// We manually `subscribe` because Svelte batches at the component update level.
	// (but not the synchronous store change level!)
	// $: history = history.concat($fullName); // this would hide the problem!
	interface HistoryItem {
		valid: boolean;
		value: string;
	}
	const toHistoryItem = ($fullName: string): HistoryItem => ({
		valid: isValid($fullName),
		value: $fullName,
	});
	const isValid = ($fullName: string): boolean => {
		const [$firstName, $lastName] = $fullName.split(' ');
		return (
			($firstName === FIRST_NAME_1 && $lastName === LAST_NAME_1) ||
			($firstName === FIRST_NAME_2 && $lastName === LAST_NAME_2)
		);
	};
	let history: HistoryItem[] = [];
	const unsubscribe = fullName.subscribe(($fullName) => {
		history = history.concat(toHistoryItem($fullName));
	});
	onDestroy(unsubscribe);
</script>

<div>firstName: {$firstName}</div>
<div>lastName: {$lastName}</div>
<div>fullName: {$fullName}</div>
<button on:click={() => batch(swap)}>swap with <code>batch</code></button>
<button on:click={swap}>swap without <code>batch</code></button>
<section class="markup">
	<h2>history</h2>
	<ul>
		{#each history as item}
			<li>
				{item.value}
				{#if !item.valid}⚠️{/if}
			</li>
		{/each}
	</ul>
</section>
