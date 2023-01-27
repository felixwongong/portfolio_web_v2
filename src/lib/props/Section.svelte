<script>
    export let isFullScreen
</script>

<section
        class="{isFullScreen ? 'max-w-screen': 'max-w-screen-md' } md:h-auto h-screen md:mx-auto mx-3 py-10 {$$props.class}"
>
    <slot/>
</section>