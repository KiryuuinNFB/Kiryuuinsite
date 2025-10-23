<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import DataTable from './data-table.svelte';
	import { columns } from './columns.js';
	import { Badge } from '$lib/components/ui/badge/index.js';

	export let data;
</script>

<div
	class="min-h-screen bg-background font-sans selection:text-background selection:bg-signature !transition-all"
>
	<div
		class="mr-[5vw] ml-[5vw] md:max-xl:mr-[12] md:max-xl:ml-[12] xl:mr-[25vw] xl:ml-[25vw] mt-[30]"
	>
		<h1 class="text-4xl font-bold p-4">Commission</h1>
		<Separator />
		<div class="flex flex-row">
			<div class="p-4">
				<p>
					I can turn your draft into a finished song. I can make a vocal synth cover for you. I can
					make a remix in some genres I'm familiar with. To actually commission me please contact me
					via my Discord DM. You also name the price but mininum is 500 THB.
				</p>
			</div>
		</div>
		<div>
			{#if data.status}
				<h1 class="text-2xl font-bold p-4">
					Commission status : <Badge
						variant="default"
						class="text-base bg-opacity-25 text-emerald-500 border-emerald-500 m-4 rounded-lg"
					>
						Open
					</Badge>
				</h1>
			{:else}
				<h1 class="text-2xl font-bold p-4">
					Commission status : <Badge
						variant="default"
						class="text-base bg-opacity-25 text-rose-500 border-rose-500 m-4 rounded-lg"
					>
						Closed
					</Badge>
				</h1>
			{/if}
		</div>

		<DataTable data={data.data} {columns} />
		<h1 class="text-4xl font-bold p-4">Sample works</h1>
		<Separator />
		<div class="p-4">
			<p>i swear this is temporary</p>
		</div>

		<div class="m-4">
			<iframe
				title="tetoris"
				width="711"
				height="144"
				frameborder="0"
				src="https://mega.nz/embed/W6ZTXKrT#zK_InVQD8DsbgkTvLsuXnYMLuo1GOmfBbQjn7gZVsKM!1v1c"
				allowfullscreen
			></iframe>
		</div>
	</div>
</div>
