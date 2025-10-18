<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import * as ButtonGroup from '$lib/components/ui/button-group/index.js';
	import { Button } from '$lib/components/ui/button/index.js';

	import { SunMedium, Moon } from '@lucide/svelte';

	let { children } = $props();
</script>

<div
	class="flex flex-row justify-between p-4 space-x-2 selection:bg-signature selection:text-background pr-8 pl-8 backdrop-blur-sm sticky top-0"
>
	<div class="font-[arial] font-bold flex flex-col !transition-all hover:text-signature">
		<a class="text-2xl font-stretch-condensed" href="/"> KIRYUUIN </a>
		<a class="text-sm tracking-wide" href="/"> NFB Production </a>
	</div>
    <div class="flex flex-row content-center">
        <ButtonGroup.Root>
		<ButtonGroup.Root>
			<Button variant="outline" href="/about">About</Button>
			<Button variant="outline">Commission</Button>
			<Button variant="outline">Music</Button>
			<Button variant="outline">Contact</Button>
		</ButtonGroup.Root>
		<ButtonGroup.Root>
			<Button onclick={toggleMode} variant="secondary">
				<SunMedium class="rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0" />
				<Moon class="absolute rotate-90 scale-0 !transition-all dark:-rotate-0 dark:scale-100" />
				<span class="sr-only">Toggle theme</span>
			</Button>
		</ButtonGroup.Root>
	</ButtonGroup.Root>
    </div>
	
</div>

{@render children?.()}
