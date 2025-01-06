<script lang="ts">
	import { goto } from '$app/navigation';
	import { _axios } from '$lib/_axios';
	import { Button } from '$lib/components/ui/button/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Input } from '$lib/components/ui/input/index.js';
	import { Label } from '$lib/components/ui/label/index.js';
	import { writableGlobalStore } from '$lib/stores/global-store';
	import Icon from '@iconify/svelte';
	import { createMutation } from '@tanstack/svelte-query';
	import { toast } from 'svelte-sonner';
	import { z } from 'zod';

	const schema = z.object({
		email: z.string().email(),
		password: z.string().min(4)
	});

	type LoginData = z.infer<typeof schema>;

	let email = $state('');
	let password = $state('');

	let passwordShown = $state(false);

	let loginMutation = createMutation({
	mutationFn: (data: LoginData) => _axios.post('/auth/login', data),
	onSuccess({ data }) {
		// Save the token in localStorage
		localStorage.setItem('token', data.token);

		// Optionally, store other details in localStorage or a global store
		localStorage.setItem('admin', JSON.stringify(data.admin));

		// Navigate to the dashboard after login
		toast(data.message, {});
		goto('/admin/dashboard');
	},
	onError(error, variables, context) {
		console.error('onError', error, variables, context);
	}
});


	function login(e: Event) {
		e.preventDefault();
		try {
			const data = schema.parse({
				email,
				password
			});

			$loginMutation.mutate(data);
		} catch (error) {
			console.error(error);
			toast('Invalid email or password');
		}
	}
</script>

<svelte:head>
	<title>Admin Login | Aprisio</title>
</svelte:head>
<div class="flex h-screen w-full items-center bg-primary justify-center px-4 ">
	<Card.Root
		class="mx-auto min-w-[400px] font-pt font-bold shadow-md border-2"
	>
		<Card.Header>
			<Card.Title class="text-3xl">Login</Card.Title>
		</Card.Header>
		<Card.Content class="text-base">
			<form onsubmit={login}>
				<div class="grid gap-4">
					<div class="grid gap-2">
						<Label for="email">Email</Label>
						<Input
							id="email"
							type="email"
							placeholder="name@example.com"
							required
							bind:value={email}
						/>
					</div>
					<div class="grid gap-2 relative">
						<div class="flex items-center">
							<Label for="password">Password</Label>
							<!-- <a href="##" class="ml-auto inline-block text-sm underline">Forgot your password?</a> -->
						</div>
						<Input
							id="password"
							placeholder="Password"
							type={passwordShown ? 'text' : 'password'}
							required
							bind:value={password}
							class="pr-10"
						/>
						<Icon
							onclick={() => {
								passwordShown = !passwordShown;
							}}
							icon={!passwordShown ? 'mdi:eye-off-outline' : 'mdi:eye-outline'}
							class="absolute right-2 bottom-2.5 cursor-pointer text-black text-xl"
						/>
					</div>

					<Button type="submit" class="w-full text-white bg-primary">Login</Button>
				</div>
			</form>
		</Card.Content>
	</Card.Root>
</div>
