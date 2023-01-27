<script>
    import Section from "./Section.svelte";
</script>

<Section class="md:aspect-video md:py-0 md:my-10">
    <div class="mockup-window border bg-base-200 h-full">
        <div class="bg-base-100 dark:bg-primary h-full  {$$props.class}">
            <slot/>
        </div>
    </div>
</Section>
