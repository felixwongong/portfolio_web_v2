<script>
    import {Mode, EMode} from "./Setting.ts";
</script>

<span class="absolute" style="top: 10%; left: 10%">
        <select bind:value={$Mode} class="indicator-top indicator-center select select-bordered select-sm w-full max-w-xs">
            <option>{EMode.VIEW}</option>
            <option>{EMode.OBJECT}</option>
        </select>
</span>

