<script lang="ts">
    import { goto } from '$app/navigation';
    import { currentNavigationController } from '$lib/navigation';

    export let data;
    
    let text = data.q;

    const onChange = async () => {
        if($currentNavigationController?.abort) {
            console.log('Aborting previous request if it is still running');
            $currentNavigationController?.abort('There is a newer request');
        }

        await goto(`/?q=${text}`, { keepFocus: true });
    }
</script>

<h1>Search</h1>

<input type="text" bind:value={text} on:input={onChange} />

<br/><br/>

From client: {text}<br/>
From server (with delay): {data?.q}