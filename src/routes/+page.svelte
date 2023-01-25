<script>
import Hero from "./Hero.svelte";
import EmoBar from "$lib/props/EmoBar.svelte";
</script>

<Hero />
<span class="absolute top-1/4 right-1/4">
    <input type="checkbox" id="switch" />
    <label for="switch">
        <span class="switch-txt">Edit</span>
    </label>
</span>
<EmoBar class="absolute bottom-0 right-1/4 left-1/2"/>
