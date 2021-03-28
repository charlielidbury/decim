<script>
    import {Router,Link} from "svelte-routing";
    import { links } from "svelte-routing";
    export let url="";
</script>

<div id="sidebar" use:links>
    <h1 id="decimName">decim<span class="emphasis">.</span>io</h1>
    <Router url="{url}">
        <h2 class="sidebarLink"><a class="sidebarInner" href="/">dashboard</a></h2>
        <h2 class="sidebarLink"><a class="sidebarInner" href="stats">stats</a></h2>
        <h2 class="sidebarLink"><a class="sidebarInner" href="/">me</a></h2>
    </Router>
    <div class="spacer" style="height:38vh"></div>
    <h2 class="sidebarLinkVariant"><a class="sidebarInner sidebarInnerVariant" href="/">offset me!</a></h2>
    <div class="headlineStat">
        <p>this month's carbon</p>
        <p style="color: red; font-size: 1.5em;">3kg</p>
    </div>
    <div class="headlineStat">
        <p>this month's decim</p>
        <p style="color: limegreen; font-size: 1.5em;">£2.00</p>
    </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Inconsolata:wght@300&display=swap');
    #sidebar {
		height: 100vh;
		position: fixed;
		float: left;
		width: 20%;
		border-right: 1px solid white;
		background-image: linear-gradient(100deg, rgb(35,35,70), rgb(38,27,56));
		padding: 0;

		z-index: 10000;
	}
	#decimName {
		color: white;
		font-family: 'roc-grotesk-wide', monospace;
		letter-spacing: 0.1em;
		font-size: min(2.5em, 2.5vw);
		border-bottom: 1px solid white;
		padding-bottom: 0.5em;
		text-align: center;
		font-weight: 300;
		max-height: 20vh;
		font-variant: normal;
		padding: 0.6em 0 0.6em 0;
	}

    .sidebarInner {
        color: white;
        display: inline-block;
        position:relative;
        transition:.3s ease;
    }
    .sidebarInnerVariant {
        color: limegreen;
    }
    .sidebarInnerVariant:after {
        background: limegreen !important;
    }
    .sidebarInner:after {
        content: '';
        height: 2px;

        display:inline-block;
        top: calc(100% - 4px);
        left: 0;
		  width: 0%;
		  background: white;
          position: absolute;
	
        transition:.3s ease;
    }
    .sidebarInner:hover {
        text-decoration: none;
        transform: translateY(-0.1em);
    }
    .sidebarInner:hover::after {
        width: 98%;
    }

	.sidebarLink {
		color: white !important;
		font-family: 'roc-grotesk-wide', monospace;
		letter-spacing: 0.1em;
		font-size: min(1.5em, 1.5vw);
		border-bottom: 1px solid white;
		padding-bottom: 0.5em;
		text-align: left;
		font-weight: 300;
		max-height: 20vh;
		font-variant: normal;
		padding: 0.6em 0 0.6em 1em;
        
	}
    .sidebarLinkVariant {
		color: limegreen !important;
		font-family: 'roc-grotesk-wide', monospace;
		letter-spacing: 0.1em;
		font-size: min(1.5em, 1.5vw);
		border-top: 1px solid white;
		margin:0;
		text-align: left;
		font-weight: 300;
		max-height: 20vh;
		font-variant: normal;
		padding: 0.8em 0 0.8em 1em;
	}
    .emphasis {
        color: cyan;
    }
	.headlineStat {
		color: white;
		font-family: 'roc-grotesk-wide', monospace;
		letter-spacing: 0.1em;
		border-top: 1px solid white;
		padding-bottom: 0.5em;
		text-align: center;
		font-weight: 300;
		font-variant: normal;
		padding: 0.6em 0 0.6em 1em;
		
	}
    @media (max-width: 1080px) {
		#sidebar {
			display: none;
		}
	}
</style>