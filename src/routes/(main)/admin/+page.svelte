<script lang="ts">
	import { Separator } from '$lib/components/ui/separator/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Button } from "$lib/components/ui/button/index.js";
	import { goto } from "$app/navigation";

	let username: string;
	let password: string;

	const login = async () => {
		const res = await fetch("/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				username: username,
				password: password
			})
		})
		const fetched = await res.json()
		return res.json()
	}


</script>

<div
	class="min-h-screen bg-background font-sans selection:text-background selection:bg-signature !transition-all"
>
	<div
		class="mr-[5vw] ml-[5vw] md:max-xl:mr-[12] md:max-xl:ml-[12] xl:mr-[25vw] xl:ml-[25vw] mt-[30]"
	>
		<h1 class="text-4xl font-bold p-4">Admin Login</h1>
		<Separator />
		<div class="flex flex-row">
			<div class="p-4 space-y-4">
				<label for="text" class="text-muted-foreground">Username</label>
				<Input id="text" type="text" bind:value={username} />
				<label for="password" class="text-muted-foreground">Password</label>
				<Input id="password" type="password" bind:value={password}/>
				
				<Button onclick={login}>
					Login
				</Button>
			</div>
		</div>
	</div>
</div>
