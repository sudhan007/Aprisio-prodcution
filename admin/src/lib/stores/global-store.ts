import { writable } from 'svelte/store';

type adminDetails = {
	profileImage: string;
	Name: string;
};

export type GlobalStore = {
	adminDetails: adminDetails;
};

export const writableGlobalStore = writable<GlobalStore>({
	adminDetails: {
		profileImage: '',
		Name: ''
	}
});
