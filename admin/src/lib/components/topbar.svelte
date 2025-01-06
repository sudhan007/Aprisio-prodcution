<script lang="ts">
	import { goto } from '$app/navigation';
	import { _axios } from '$lib/_axios';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import * as Popover from '$lib/components/ui/popover';
	import { imgUrl } from '$lib/config';
	import { writableGlobalStore } from '$lib/stores/global-store';
	import Icon from '@iconify/svelte';
	import { createInfiniteQuery, createMutation } from '@tanstack/svelte-query';
	import * as Avatar from './ui/avatar';

	function formatDate(dateString: string | number | Date) {
		const date = new Date(dateString);
		const day = date.getDate();
		const month = date.getMonth() + 1;
		const year = date.getFullYear();
		const hours = date.getHours() % 12 || 12;
		const minutes = date.getMinutes().toString().padStart(2, '0');
		const ampm = date.getHours() >= 12 ? 'pm' : 'am';
		return `${day}/${month}/${year}, ${hours}:${minutes}${ampm}`;
	}

	// Logout mutation
	const logoutMutation = createMutation({
		mutationFn: () => _axios.post('/auth/logout'),
		onSuccess() {
			localStorage.removeItem('restaurent');
			goto('/hidden-admin-base-007');
		}
	});

	function logout() {
		$logoutMutation.mutate();
	}
</script>

<div
	class="bg-primary flex items-center justify-start min-h-[65px] border-[#9faf8e] border-l-[1px]"
>
	<div class="ml-auto pr-5 flex text-white gap-2 items-center">
	Hello to Dashboard
	</div>
</div>
