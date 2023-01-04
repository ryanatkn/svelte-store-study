import {writable, type Writable, type Readable} from 'svelte/store';
import {onDestroy} from 'svelte';

export const FIRST_NAME_1 = 'Alyssa';
export const FIRST_NAME_2 = 'Ben';
export const LAST_NAME_1 = 'Apple';
export const LAST_NAME_2 = 'Banana';

export interface HistoryItem {
	valid: boolean;
	value: string;
}

// Track the `history` of each change to `fullName`.
export const createBatchExampleHistory = (fullName: Readable<string>): Writable<HistoryItem[]> => {
	const history: Writable<HistoryItem[]> = writable([]);

	// Manually `subscribe` because Svelte batches at the component update level.
	// (but not the synchronous store change level!)
	const unsubscribe = fullName.subscribe(($fullName) => {
		history.update((h) => h.concat(toHistoryItem($fullName)));
	});
	onDestroy(unsubscribe);

	return history;
};

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
