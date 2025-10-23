<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import DataTable from "./data-table.svelte";
	import { columns } from "./columns.js";

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
					You can commission me by directly contacting me in my Discord DM. More details in the contact page.
				</p>
			</div>
		</div>
		<h1 class="text-2xl font-bold p-4">Commission status : {data.status}</h1>
		<DataTable data={data.data} {columns} />
	</div>
</div>
