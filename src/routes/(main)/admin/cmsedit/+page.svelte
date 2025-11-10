<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import DataTable from './data-table.svelte';
	import { columns } from './columns.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Dialog from '$lib/components/ui/dialog/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import * as AlertDialog from '$lib/components/ui/alert-dialog/index.js';
	import { Trash2, Plus, Shredder } from '@lucide/svelte';

	import StatusSelect from './StatusSelect.svelte';

	export let data;

	let cmsdata: any;
	cmsdata = data.data;

	let selectedCms: number;
	let indiviCms: any = {};

	let editWindow: boolean = false;
	let createWindow: boolean = false;
	let alertWindow: boolean = false;
	let alertWindow1: boolean = false;

	const getAllCms = async () => {
		const res = await fetch('/api/commissions', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'authorization': data.token
			}
		});
		
		cmsdata = await res.json();
	};

	const getIndividualCms = async (num: number) => {
		const res = await fetch(`/api/cms/${num}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'authorization': data.token
			}
		});

		return res.json();
	};

	const updateCms = async () => {
		const res = await fetch('/api/cms', {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
				'authorization': data.token
			},
			body: JSON.stringify({
				id: selectedCms,
				status: createStatus,
				notes: createNotes
			})
		});
		editWindow = false;
		getAllCms();
		return res.json();
	};

	const createCms = async () => {
		const res = await fetch('/api/cms', {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				'authorization': data.token
			},
			body: JSON.stringify({
				status: createStatus,
				notes: createNotes
			})
		});
		createWindow = false;
		getAllCms();
		return res.json();
	};

	const deleteCms = async () => {
		const res = await fetch('/api/cms', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'authorization': data.token
			},
			body: JSON.stringify({
				id: selectedCms
			})
		});
		alertWindow = false;
		editWindow = false;
		getAllCms();
		return res.json();
	};

	let createStatus: string;
	let createNotes: string;

	const handleRowClick = async (row: any) => {
		selectedCms = row.id;
		const cms = await getIndividualCms(selectedCms);
		indiviCms = cms;
		editWindow = true;

		createStatus = indiviCms.status;
		createNotes = indiviCms.notes;
	};

	const handleCreateClick = async () => {
		createNotes = "-"
		createWindow = true;
	};

	const purgeDB = async () => {
		const res = await fetch('/api/cms/purge', {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				'authorization': data.token
			}
		});
		alertWindow1 = false;
		getAllCms();
		return res.json();
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
			<div class="p-4 space-y-4">
				<div class="justify-between flex flex-row">
					<Button variant="secondary" onclick={handleCreateClick}><Plus />Add</Button>

					<AlertDialog.Root bind:open={alertWindow1}>
						<AlertDialog.Trigger
							><Button variant="destructive"><Shredder />Purge Database</Button
							></AlertDialog.Trigger
						>
						<AlertDialog.Content>
							<AlertDialog.Header>
								<AlertDialog.Title
									>Are you absolutely sure you want to completely delete the database and reset the
									count?</AlertDialog.Title
								>
							</AlertDialog.Header>
							<AlertDialog.Footer>
								<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
								<AlertDialog.Action onclick={purgeDB}>Continue</AlertDialog.Action>
							</AlertDialog.Footer>
						</AlertDialog.Content>
					</AlertDialog.Root>
				</div>

				<DataTable data={cmsdata} {columns} onRowClick={handleRowClick} />
			</div>
		</div>
	</div>

	<Dialog.Root bind:open={editWindow}>
		<Dialog.Content class="font-sans selection:text-background selection:bg-signature">
			<Dialog.Title>Commission edit</Dialog.Title>
			<div class="justify-between flex flex-row">
				<div class="grid gap-2">
					<Label for="prefix" class="text-muted-foreground">Work Status</Label>
					<StatusSelect bind:value={createStatus} />
				</div>
				<div class="grid gap-2">
					<Label for="prefix" class="text-background">f</Label>
					<AlertDialog.Root bind:open={alertWindow}>
						<AlertDialog.Trigger
							><Button variant="destructive"><Trash2 /></Button></AlertDialog.Trigger
						>
						<AlertDialog.Content>
							<AlertDialog.Header>
								<AlertDialog.Title
									>Are you absolutely sure you want to delete commission id {selectedCms}?</AlertDialog.Title
								>
							</AlertDialog.Header>
							<AlertDialog.Footer>
								<AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
								<AlertDialog.Action onclick={deleteCms}>Continue</AlertDialog.Action>
							</AlertDialog.Footer>
						</AlertDialog.Content>
					</AlertDialog.Root>
				</div>
			</div>

			<div class="grid gap-2">
				<Label for="text" class="text-muted-foreground">Notes</Label>
				<Input id="text" type="text" bind:value={createNotes} />
			</div>

			<Dialog.Footer>
				<Button onclick={updateCms}>Save changes</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>

	<Dialog.Root bind:open={createWindow}>
		<Dialog.Content class="font-sans selection:text-background selection:bg-signature">
			<Dialog.Title>Add commission</Dialog.Title>
			<div class="justify-between flex flex-row">
				<div class="grid gap-2">
					<Label for="prefix" class="text-muted-foreground">Work Status</Label>
					<StatusSelect bind:value={createStatus} />
				</div>
			</div>

			<div class="grid gap-2">
				<Label for="text" class="text-muted-foreground">Notes</Label>
				<Input id="text" type="text" bind:value={createNotes} />
			</div>

			<Dialog.Footer>
				<Button onclick={createCms}>Done</Button>
			</Dialog.Footer>
		</Dialog.Content>
	</Dialog.Root>
</div>
