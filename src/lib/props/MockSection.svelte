<script>
    import Section from "./Section.svelte";
</script>

<Section class="md:aspect-video md:py-0">
    <div class="mockup-window border bg-base-200 h-full">
        <div class="bg-primary h-full">
            <slot/>
        </div>
    </div>
</Section>
