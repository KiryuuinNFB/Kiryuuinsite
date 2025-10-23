<script lang="ts">
    import { page } from "$app/state";
</script>

<div
	class="min-h-screen bg-background font-sans selection:text-background selection:bg-signature !transition-all"
>
	<div
		class="mr-[5vw] ml-[5vw] md:max-xl:mr-[12] md:max-xl:ml-[12] xl:mr-[25vw] xl:ml-[25vw] mt-[30]"
	>
	<div class="flex flex-col justify-center content-center mt-16 space-y-8">
		<h1 class="text-4xl font-bold">{page.status}</h1>
		<h1 class="text-4xl font-bold">{page.error?.message}</h1>
        <a href="/">Return to home page</a>
	</div>
		
	</div>
</div>