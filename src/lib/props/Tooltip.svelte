<script>
    export let title = "I am a header";
    export let href = "#";
    export let active;

    $: console.log(`active is now: ${active}`)
</script>

<div class="bg-white absolute w-36 h-auto text-center" style="top: {-100}%; left: {-60}%">
    <div>{title}</div>
    <a href="{href}">Some redirect link</a>
</div>
