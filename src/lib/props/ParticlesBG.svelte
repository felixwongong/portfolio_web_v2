<script>
    import Particles from "svelte-particles";
    import { loadFull } from "tsparticles";
    import particlesJson from "$lib/assets/particles/amongus.json";
    import character from "$lib/assets/icons/amongus_character.png";
    import {onMount} from "svelte";

    particlesJson.emitters.particles.shape.options.images.src = character;

    let particlesConfig = {
        autoPlay: particlesJson.autoPlay,
        absorbers: particlesJson.absorbers,
        background: particlesJson.background,
        backgroundMask: particlesJson.backgroundMask,
        defaultThemes: particlesJson.defaultThemes,
        delay: particlesJson.delay,
        detectRetina: particlesJson.detectRetina,
        particles: particlesJson.particles,
        emitters: particlesJson.emitters,
        fpsLimit: particlesJson.fpsLimit,
        fullScreen: particlesJson.fullScreen,
        pauseOnBlur: particlesJson.pauseOnBlur,
        pauseOnOutsideViewport: particlesJson.pauseOnOutsideViewport,
        //responsive: particlesJson.responsive,
        smooth: particlesJson.smooth,
        style: particlesJson.style,
        ///themes: particlesJson.themes,
        //interactivity: particlesJson.interactivity,
        zLayers: particlesJson.zLayers
    };

    let onParticlesLoaded = event => {
        const particlesContainer = event.detail.particles;

        // you can use particlesContainer to call all the Container class
        // (from the core library) methods like play, pause, refresh, start, stop
    };

    let particlesInit = async engine => {
        // you can use main to customize the tsParticles instance adding presets or custom shapes
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    };

    onMount(() => {
        document.getElementById("tsparticles").style.height = "100%";
    })
</script>

<Particles
        id="tsparticles"
        options="{particlesConfig}"
        on:particlesLoaded="{onParticlesLoaded}"
        particlesInit="{particlesInit}"
/>

