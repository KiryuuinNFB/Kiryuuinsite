<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import DataTable from './data-table.svelte';
	import { columns } from './columns.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';

	import StatusSelect from "./StatusSelect.svelte";

	export let data;

	let selectedCms: number;
	let indiviCms: any = {};

	let editWindow: boolean = false;

	const getIndividualCms = async (num: number) => {
		const res = await fetch(`/api/cms/${num}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		return res.json();
	};

	let createStatus: string;
	let createNotes: string;

	const handleRowClick = async (row: any) => {
		selectedCms = row.id;
		const cms = await getIndividualCms(selectedCms);
		indiviCms = cms;
		editWindow = true;
		
		createStatus = indiviCms.status
		createNotes = indiviCms.notes
	};

	
</script>

<div
	class="min-h-screen bg-background font-sans selection:text-background selection:bg-signature !transition-all"
>
	<div
		class="mr-[5vw] ml-[5vw] md:max-xl:mr-[12] md:max-xl:ml-[12] xl:mr-[25vw] xl:ml-[25vw] mt-[30]"
	>
		<h1 class="text-4xl font-bold p-4">Edit Commission Table</h1>
		<Separator />
		<div class="flex flex-row">
			<div class="p-4">
				<DataTable data={data.data} {columns} onRowClick={handleRowClick} />
			</div>
		</div>
	</div>
</div>

<Dialog.Root bind:open={editWindow}>
	<Dialog.Content>
		<Dialog.Title>Commission edit</Dialog.Title>
		<Dialog.Description>lorem ipsum</Dialog.Description>
		<div>
			<StatusSelect bind:value={createStatus} />
		</div>
		
		<Dialog.Footer>
			<Button
				onclick={() => {
					editWindow = false;
				}}>Save changes</Button
			>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
