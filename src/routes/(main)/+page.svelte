<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import { BsDiscord, BsGithub, BsYoutube } from 'svelte-icons-pack/bs';
	import { SiRoblox } from 'svelte-icons-pack/si';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<div
	class="min-h-screen bg-background font-sans selection:text-background selection:bg-signature !transition-all"
>
	<div class="mr-[25vw] ml-[25vw] mt-[30] flex flex-col">
		<h1 class="text-5xl font-bold p-4">Kiryuuin</h1>
		<Separator />
		<div class="justify-items-center">
			<img src="kiryuuin.png" alt="my mascot" width="300" class="rounded-full" />
		</div>
		<div class="p-4">
			<p>
				Hi I'm Kiryuuin from NFB Production. I do remixes of songs from video games, anime and
				movies that I like. Turned into genres you and me can enjoy. I also have an interest in web
				dev, 3D modeling and animation too. I just didn't post them on my channel as much as music.
			</p>
			<p class="pt-8">
				Other than that. I just do stuff in my free time. Like playing video games, building
				Gunplas, balisong flipping or just talking to people on discord.
			</p>
		</div>
		<div class="p-4">
			<h1 class="text-5xl font-bold p-4">Socials</h1>
			<Separator />
			<div class="flex flex-row space-x-4 justify-items-center p-4">
				<Alert.Root class="max-w-96">
					<Icon src={BsYoutube} />
					<Alert.Title>Youtube</Alert.Title>
					<Alert.Description>Kiryuuin / NFB Production</Alert.Description>
				</Alert.Root>

				<Alert.Root class="max-w-96">
					<Icon src={BsDiscord} />
					<Alert.Title>Discord</Alert.Title>
					<Alert.Description>kiryuuinnfb</Alert.Description>
				</Alert.Root>

				<Alert.Root class="max-w-96">
					<Icon src={BsGithub} />
					<Alert.Title>Github</Alert.Title>
					<Alert.Description>KiryuuinNFB</Alert.Description>
				</Alert.Root>
				
			</div>
			<p class="text-muted-foreground">
				More details in the Contact tab.
			</p>
		</div>
	</div>
</div>
