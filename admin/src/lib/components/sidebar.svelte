<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Icon from '@iconify/svelte';
	import { toast } from 'svelte-sonner';

	const routes = $state([
		{
			type: 'heading',
			name: 'Analytics'
		},
		{
			name: 'Dashboard',
			href: '/admin/dashboard/',
			icon: 'uil:analysis',
			subRoutes: '-'
		},
		{
			type: 'heading',
			name: 'Dashboard'
		},
		{
			name: 'Master',
			href: '/hidden-admin-base-007/dashboard/master/',
			icon: 'material-symbols-light:dashboard',
			subRoutes: '-'
		},
		{
			name: 'Users',
			href: '/admin/dashboard/users/',
			icon: 'meteor-icons:user',
			subRoutes: '-'
		},
		{
			type: 'heading',
			name: 'Utils'
		},
		{
			name: 'Privacy Policy',
			href: '/hidden-admin-base-007/dashboard/privacy-policy/',
			icon: 'ic:sharp-privacy-tip',
			subRoutes: '-'
		}
	]);

	function logout() {
		sessionStorage.clear();
		toast('You have been logged out successfully');
		goto('/');
	}
</script>

<div
	class="hidden bg-[#6F7E5F] min-w-[300px] max-w-[300px] border-r border-r-[#6F7E5F] md:block h-screen text-white font-pt hidescrollbarthumb"
>
	<div
		class="flex flex-col justify-between h-[calc(100vh)] overflow-y-auto gap-2 hidescrollbarthumb"
	>
		<button onclick={() => goto('/admin/dashboard')}>
			<div
				class="border-b-[1px] border-b-[#9faf8e] min-h-[50px] cursor-pointer flex gap-2 justify-center items-center"
			>
				
				<h1 class="text-2xl font-lato font-bold p-4 text-center">APRISIO</h1>
			</div>
		</button>

		<nav class="flex flex-col items-start text-sm px-4 h-full">
			{#each routes as route}
				{#if route.type === 'heading'}
					<h2 class="text-md text-white font-bold mt-2 mb-2">{route.name}</h2>
				{:else}
					<div class="w-full rounded-md">
						<button
							class="w-full py-1"
							onclick={() => {
								if (!route.href) return;
								goto(route.href);
							}}
						>
							<div
								class={`flex cursor-pointer items-center ${
									$page.url.pathname === route.href ||
									(route.href !== '/admin/dashboard/' &&
										$page.url.pathname.startsWith(route.href ?? ''))
										? 'bg-gradient-to-r from-[#4c573f] to-[#5e6852] text-white font-bold'
										: 'text-white'
								} justify-start rounded-md p-2`}
							>
								<Icon icon={route.icon ?? ''} class="mr-2 h-6 w-6" />
								<p class="text-md flex items-center gap-3 rounded-lg px-3 font-normal">
									{route.name}
								</p>
								<Icon icon={'ep:arrow-right-bold'} class="ml-auto h-4 w-4 text-zinc-300 " />
							</div>
						</button>
					</div>
				{/if}
			{/each}

			<button
				class="w-full py-1 mt-auto"
				onclick={() => goto('/admin/dashboard/settings')}
			>
				<div
					class={`flex cursor-pointer items-center my-2 bg-gradient-to-r from-[#4c573f] to-[#5e6852] text-white font-bold justify-start rounded-md p-2`}
				>
					<Icon icon={'uil:setting'} class="mr-2 h-6 w-6 text-zinc-300" />
					<p class="text-md flex text-zinc-300 items-center gap-3 rounded-lg px-3 font-normal">
						Settings
					</p>
					<Icon icon={'ep:arrow-right-bold'} class="ml-auto h-4 w-4 text-zinc-300 " />
				</div>
			</button>
		</nav>
	</div>
</div>
