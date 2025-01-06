<script lang="ts">
	import '../app.css';
	let { children } = $props();

	import { goto } from '$app/navigation';
	import { Toaster } from '$lib/components/ui/sonner';
	import { baseUrl } from '$lib/config';
	import { queryClient } from '$lib/query-client';
	import { writableGlobalStore } from '$lib/stores/global-store';
	import { QueryClientProvider } from '@tanstack/svelte-query';
	import { onMount } from 'svelte';

	const ws = new WebSocket(`${baseUrl}/ws`);

	ws.onmessage = (event) => {
		const data = JSON.parse(event.data);

		if (data.type === 'order') {
			navigator.serviceWorker
				.register('../service-worker.js')
				.then((registration) => {
					console.log('Service Worker registered with scope:', registration.scope);
					return Notification.requestPermission();
				})
				.then((permission) => {
					if (permission === 'granted') {
						navigator.serviceWorker.ready.then((registration) => {
							registration.showNotification(data.message, {
								body: data.body
							});
						});
					} else {
						alert('Notification permission not granted! you dont get notifications');
					}
				})
				.catch((error) => console.error('Service Worker registration failed:', error));
		}
	};

	onMount(() => {
		const token = localStorage.getItem('token');
	// If no token, navigate to login page
	if (!token) {
		goto('/admin');
	}
	});
</script>

<Toaster position="top-right" />
<QueryClientProvider client={queryClient}>
	{@render children()}
</QueryClientProvider>
