<script lang="ts">
    import { toggleMode } from 'mode-watcher';
	import * as ButtonGroup from "$lib/components/ui/button-group/index.js";
    import { Button } from "$lib/components/ui/button/index.js";

    import { SunMedium, Moon } from '@lucide/svelte';

    let { children } = $props();
</script>

<div class="flex flex-row justify-between p-4 space-x-2">
    <div class="font-[arial] font-stretch-condensed font-bold flex flex-col">
        <h1 class="text-5xl">
            KIRYUUIN
        </h1>
        <p class="text-3xl">
            NFB Production
        </p>

    </div>
<ButtonGroup.Root>
    <ButtonGroup.Root>
        <Button variant="outline">About</Button>
        <Button variant="outline">Commission</Button>
        <Button variant="outline">Music</Button>
        <Button variant="outline">Contact</Button>
    </ButtonGroup.Root>
    <ButtonGroup.Root>
       <Button onclick={toggleMode} variant="outline">
            <SunMedium class="rotate-0 scale-100 !transition-all dark:-rotate-90 dark:scale-0" />
            <Moon class="absolute rotate-90 scale-0 !transition-all dark:-rotate-0 dark:scale-100"/>
            <span class="sr-only">Toggle theme</span>
       </Button>
    </ButtonGroup.Root>
</ButtonGroup.Root>
    
</div>

{@render children?.()}
