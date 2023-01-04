# Svelte store study

> comparing several Svelte stores 🧡
> [ryanatkn.github.io/svelte-store-study](https://ryanatkn.github.io/svelte-store-study)

**status**: basic proof of concept - includes a couple examples for a couple store libraries

## intro

[The Svelte store](https://svelte.dev/docs#run-time-svelte-store) has a contract
that anyone can implement, and the community
has created a number of compatible implementations with various features.
This project aims to demonstrate these differences.

The current demos:

- [counter](https://ryanatkn.github.io/svelte-store-study/counter) -
  compares the basic syntax of readable, writable, and derived/computed
- [batch](https://ryanatkn.github.io/svelte-store-study/batch) -
  compares batching strategies for the libraries that support it, and show why batching is useful

...are implemented for the following stores (when supported):

- [`svelte/store`](https://github.com/sveltejs/svelte)
- [`@preact/signals-core`](https://github.com/preactjs/signals)
- [`@amadeus-it-group/tansu`](https://github.com/AmadeusItGroup/tansu)

## develop

> [Windows is not yet supported](https://github.com/feltcoop/gro/issues/319)
> (we recommend [WSL](https://docs.microsoft.com/en-us/windows/wsl/about))

```bash
gro dev # npm i -g @feltcoop/gro
```

See [SvelteKit](https://github.com/sveltejs/kit),
[Vite](https://github.com/vitejs/vite),
[Svelte](https://github.com/sveltejs/svelte),
[Gro](https://github.com/feltcoop/gro),
and [Felt](https://github.com/feltcoop/felt) for more.

## build

```bash
gro build
```

See [Gro's build docs](https://github.com/feltcoop/gro/blob/main/src/docs/build.md) for more.

## test

```bash
gro test
```

See [`uvu`](https://github.com/lukeed/uvu)
and [Gro's test docs](https://github.com/feltcoop/gro/blob/main/src/docs/test.md).

## deploy

[Deploy](https://github.com/feltcoop/gro/blob/main/src/docs/deploy.md)
(build, commit, and push) to the `deploy` branch, e.g. for GitHub Pages:

```bash
gro deploy
```

To configure GitHub pages (which this repo uses) or another static host,
customize or delete [src/static/CNAME](/src/static/CNAME).

## credits 🐢<sub>🐢</sub><sub><sub>🐢</sub></sub>

[Svelte](https://github.com/sveltejs/svelte) ∙
[Signals](https://github.com/preactjs/signals)
[Tansu](https://github.com/AmadeusItGroup/tansu)
[SvelteKit](https://github.com/sveltejs/kit) ∙
[Vite](https://github.com/vitejs/vite) ∙
[esbuild](https://github.com/evanw/esbuild) ∙
[uvu](https://github.com/lukeed/uvu) ∙
[TypeScript](https://github.com/microsoft/TypeScript) ∙
[ESLint](https://github.com/eslint/eslint) ∙
[Prettier](https://github.com/prettier/prettier) ∙
[Felt](https://github.com/feltcoop/felt) ∙
[@feltcoop/util](https://github.com/feltcoop/util) ∙
[Gro](https://github.com/feltcoop/gro)
& [more](package.json)

## license [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)

public domain ⚘ [The Unlicense](license)
