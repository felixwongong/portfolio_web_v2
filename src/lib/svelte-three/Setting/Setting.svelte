<script>
    import {Mode, EMode} from "./Setting.ts";

    let selected;
    function SelectMode() {
        Mode.set(selected);
    }
</script>

<span class="absolute" style="top: 10%; left: 10%">
        <select bind:value={selected} class="indicator-top indicator-center select select-bordered select-sm w-full max-w-xs" on:change={SelectMode}>
            <option>{EMode.VIEW}</option>
            <option>{EMode.OBJECT}</option>
        </select>
</span>

