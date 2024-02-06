<script>
    export let form
    
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<form method="post">
    <input type="text" name="name" placeholder="Your name" />
    <button type="submit">Submit</button>
</form>

{#if form}
    <p id="greeting">Hello, {form.name}!</p>
{/if}

