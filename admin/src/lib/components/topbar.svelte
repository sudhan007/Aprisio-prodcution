<script lang="ts">
	import { onMount } from 'svelte';
	import { writableGlobalStore, loadAdminData } from '$lib/stores/global-store'; // Import store
	import { imgUrl } from '$lib/config';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Avatar from './ui/avatar';
	import { goto } from '$app/navigation';
	import { createMutation } from '@tanstack/svelte-query';
	import { _axios } from '$lib/_axios';
	// Load the admin data from localStorage when the component mounts
	onMount(() => {
	  loadAdminData(); // Populate the store with the initial admin data
	});
	const logoutMutation = createMutation({
		mutationFn: () => _axios.post('/auth/logout'),
		onSuccess() {
			localStorage.removeItem('admin');
			localStorage.removeItem('token');
			goto('/admin');
		}
	});

	function logout() {
		$logoutMutation.mutate();
	}
  </script>
  
<!-- In the template, use $writableGlobalStore to subscribe to the store value -->
<div class="bg-primary flex items-center justify-start min-h-[65px] border-[#9faf8e] border-l-[1px]">
	<div class="ml-auto pr-5 flex text-white gap-2 items-center">
		<DropdownMenu.Root>
			<DropdownMenu.Trigger>
				<Avatar.Root class="mx-4 cursor-pointer">
					<Avatar.Image
					src="{imgUrl}{$writableGlobalStore.adminDetails.profileImage}"
						alt="Profile"
						class="object-cover"
					></Avatar.Image>
					<Avatar.Fallback class="text-white">KC</Avatar.Fallback>
				</Avatar.Root>
			</DropdownMenu.Trigger>
			<DropdownMenu.Content>
				<DropdownMenu.Group>
					<DropdownMenu.GroupHeading>Account</DropdownMenu.GroupHeading>
					<DropdownMenu.Separator></DropdownMenu.Separator>
					<DropdownMenu.Item
						onclick={() => {
							goto('/admin/dashboard/settings');
						}}>Settings</DropdownMenu.Item
					>
					<DropdownMenu.Item onclick={() => logout()}>Logout</DropdownMenu.Item>
				</DropdownMenu.Group>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	</div>
  </div>
  
  