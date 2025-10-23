<script lang="ts">
	import { toggleMode } from 'mode-watcher';
	import * as ButtonGroup from '$lib/components/ui/button-group/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Sheet from '$lib/components/ui/sheet/index.js';
	import { SunMedium, Moon, Menu } from '@lucide/svelte';
	import { Separator } from '$lib/components/ui/separator/index.js';

	let { children } = $props();
</script>

<div
	class="flex flex-row justify-between p-4 space-x-2 selection:bg-signature selection:text-background pr-8 pl-8 backdrop-blur-sm sticky top-0"
>
	<div class="font-[arial] font-bold flex flex-col hover:text-signature">
		<a class="text-2xl font-stretch-condensed" href="/"> KIRYUUIN </a>
		<a class="text-sm tracking-wide" href="/"> NFB Production </a>
	</div>
	<div class="flex flex-row content-center">
		<div class="hidden md:flex">
			<ButtonGroup.Root>
				<ButtonGroup.Root>
					<Button variant="outline" href="/about">About</Button>
					<Button variant="outline" href="/commission">Commission</Button>
					<Button variant="outline" href="/music">Music</Button>
					<Button variant="outline" href="/contact">Contact</Button>
				</ButtonGroup.Root>
				<ButtonGroup.Root>
					<Button onclick={toggleMode} variant="secondary">
						<SunMedium class="rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0" />
						<Moon
							class="absolute rotate-90 scale-0 !transition-all dark:-rotate-0 dark:scale-100"
						/>
						<span class="sr-only">Toggle theme</span>
					</Button>
				</ButtonGroup.Root>
			</ButtonGroup.Root>
		</div>
	</div>
	<div class="md:hidden">
		<Sheet.Root>
			<Sheet.Trigger><Menu size={36} /></Sheet.Trigger>
			<Sheet.Content side="right">
				<div class="mt-16 m-8 flex flex-col space-y-4 justify-center">
					<div class="font-[arial] font-bold flex flex-col !transition-all hover:text-signature">
						<a class="text-2xl font-stretch-condensed" href="/"> KIRYUUIN </a>
						<a class="text-sm tracking-wide" href="/"> NFB Production </a>
					</div>
					<Separator />
					<Button variant="outline" href="/about" size="lg">About</Button>
					<Button variant="outline" href="/commission" size="lg">Commission</Button>
					<Button variant="outline" href="/music" size="lg">Music</Button>
					<Button variant="outline" href="/contact" size="lg">Contact</Button>
					<Separator />
					<Button onclick={toggleMode} variant="secondary">
						<SunMedium class="rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0" />
						<Moon
							class="absolute rotate-90 scale-0 !transition-all dark:-rotate-0 dark:scale-100"
						/>
						<span class="sr-only">Toggle theme</span>
					</Button>
				</div>
			</Sheet.Content>
		</Sheet.Root>
	</div>
</div>

{@render children?.()}
