<script>
	export let name;
</script>
<div id="mainContainer">
	<div id="sidebar">
		<h1 id="decimName">decim<span class="emphasis">.</span>io</h1>
	</div>
	
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Inconsolata:wght@300&display=swap');
	

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	#mainContainer {
		background-image: linear-gradient(10deg, rgb(35,35,70), rgb(38,27,56));
		margin: none;
		min-height: 100vh;
		width: 100vw;
	}

	#sidebar {
		width: 16vw;
		height: 100vh;
		position: fixed;
		border-right: 1px solid white;
		background-image: linear-gradient(100deg, rgb(35,35,70), rgb(38,27,56));
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
		font-variant: normal;
	}

	.emphasis {
		color: cyan;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
	@media (max-width: 1080px) {
		#sidebar {
			display: none;
		}
	}
</style>