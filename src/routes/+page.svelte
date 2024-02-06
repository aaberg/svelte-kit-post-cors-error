<script>
    export let form
</script>

<form method="post">
    <input type="text" name="name" placeholder="Your name" />
    <button type="submit">Submit</button>
</form>

{#if form}
    <p id="greeting">Hello, {form.name}!</p>
{/if}

