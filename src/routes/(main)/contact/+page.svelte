<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { BsDiscord, BsGithub, BsYoutube } from 'svelte-icons-pack/bs';
	import * as Alert from '$lib/components/ui/alert/index.js';
</script>

<div
	class="min-h-screen bg-background font-sans selection:text-background selection:bg-signature !transition-all"
>
	<div class="mr-[5vw] ml-[5vw] md:max-xl:mr-[12] md:max-xl:ml-[12] xl:mr-[25vw] xl:ml-[25vw] mt-[30]">
		<h1 class="text-4xl font-bold p-4">Contacts</h1>
		<Separator />
		<div class="flex flex-row">
			<div class="p-4">
				<div class="justify-center flex md:flex-row flex-col">
					<img src="contact.png" alt="kiryuuinnfb" class="rounded-xl m-4" />
					<div class="flex flex-col md:flex-col md:space-x-4 space-y-4 justify-items-center p-4">
						<Alert.Root class="max-w-96 h-20">
							<Icon src={BsYoutube} />
							<a href="https://www.youtube.com/@KiryuuinNFB" target="_blank">
								<Alert.Title>Youtube</Alert.Title>
								<Alert.Description>Kiryuuin / NFB Production</Alert.Description>
							</a>
						</Alert.Root>

						<Alert.Root class="max-w-96 h-20">
							<Icon src={BsDiscord} />
							<a href="https://discord.gg/B6EXwc8t2X" target="_blank">
								<Alert.Title>Discord</Alert.Title>
								<Alert.Description>kiryuuinnfb</Alert.Description>
							</a>
						</Alert.Root>

						<Alert.Root class="max-w-96 h-20">
							<Icon src={BsGithub} />
							<a href="https://github.com/KiryuuinNFB" target="_blank">
								<Alert.Title>Github</Alert.Title>
								<Alert.Description>KiryuuinNFB</Alert.Description>
							</a>
						</Alert.Root>
					</div>
				</div>
				<p class="pt-4">
					If you wanna contact me. For commission or just wanna talk. You can directly DM me on
					Discord. I'm this person in <a
						href="https://discord.gg/B6EXwc8t2X"
						target="_blank"
						class="hover:text-signature">this server.</a
					>
					Feel free to DM me. I'll usually read and reply to your message within 24 hours. If not please DM me again.
				</p>
			</div>
		</div>
	</div>
</div>
