<script lang="ts">
	import MagnifyingGlass from '$lib/components/icons/MagnifyingGlass.svelte';

	const handleSubmit: EventListener = (e) => {
		e.preventDefault();
		console.log('submitted');
	};
</script>

<section class="px-4 h-[725px] flex items-center">
	<form on:submit={handleSubmit} class="mx-auto max-w-lg flex w-full">
		<input class="px-5 py-3.5 border flex-1 w-0" placeholder="Search item" type="text" />
		<button class="px-4 border">
			<MagnifyingGlass />
		</button>
	</form>
</section>
