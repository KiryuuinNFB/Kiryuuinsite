<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Icon } from 'svelte-icons-pack';
	import { SiMega } from 'svelte-icons-pack/si';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<div
	class="min-h-screen bg-background font-sans selection:text-background selection:bg-signature !transition-all"
>
	<div
		class="mr-[5vw] ml-[5vw] md:max-xl:mr-[12] md:max-xl:ml-[12] xl:mr-[25vw] xl:ml-[25vw] mt-[30]"
	>
		<h1 class="text-4xl font-bold p-4">Music</h1>
		<Separator />
		<div class="flex flex-row">
			<div class="p-4">
				<p>
					This is where you can download my songs. Keep in mind that some of the file name aren't
					really self-explanatory. All files are in 192kbps, unless followed by 320 which means it's
					320kbps. If you see some songs missing or want me to put something there, Feel free to
					contact me about it.
				</p>
			</div>
		</div>
		<div class="flex justify-center">
			<Alert.Root class="max-w-96 h-20">
				<Icon src={SiMega} />
				<a href="https://mega.nz/folder/W7Qk2RDA#dkeGjIjNu778XVif1iaBDA" target="_blank">
					<Alert.Title>MEGA</Alert.Title>
					<Alert.Description>Song folder link</Alert.Description>
				</a>
			</Alert.Root>
		</div>
	</div>
</div>
