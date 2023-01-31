<script>
    import Navbar from "./Navbar.svelte";
    import coffee from "$lib/assets/icons/coffee.gif";
</script>

<div class="font-comic bg-base-200 min-h-screen box-border">
    <Navbar />
    <slot/>
    <footer class="footer footer-center p-10 text-base">
        <div>
            <img width="50" height="50" src="{coffee}" alt="logo" class="bg-base-100 dark:bg-secondary rounded">
            <p class="font-bold">
                Cofy Dev <br/>Portfolio created by Felix
            </p>
            <p>Copyright © 2023 - All right reserved</p>
        </div>
    </footer>
</div>

