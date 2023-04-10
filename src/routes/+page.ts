import { browser } from '$app/environment';
import { currentNavigationFetch, currentNavigationController } from '$lib/navigation';

export async function load({ url, fetch }) {
    let apiValue = '';
    if (browser) {
        const controller = new AbortController();
	    const signal = controller.signal;

        let apiFetch = fetch(`/api/echo?q=${url.searchParams.get('q') || ''}`, { signal });
        
        currentNavigationFetch.set(apiFetch);
        currentNavigationController.set(controller);

        apiValue = await (await apiFetch).json();
        console.log('Api value:', apiValue);
    }

    return {
        q: apiValue
    };
}