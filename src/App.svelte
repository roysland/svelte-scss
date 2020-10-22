<script>
	import Box from './components/Box.svelte'
	export let name;
</script>

<main>
	<h1>Hello {name}!</h1>
	<Box depth="is-raised" hoverDepth="hover-to-popping">
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<button class="button">Button</button>
	</Box>
</main>

<style lang="scss" global>
@import "sass/app.scss";
</style>
