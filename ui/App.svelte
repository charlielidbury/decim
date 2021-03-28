<script>
    import {Router, Route, Link} from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import Stats from "./pages/Stats.svelte";

    export let url="";
</script>

<Router url="{url}">
    <Route path="stats" component="{Stats}" />
    <Route path="/"><Home /></Route>
</Router>