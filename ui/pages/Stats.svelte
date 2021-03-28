
<script>
  
</script>

<div id="mainContainer">
	
	<div id="sidebar">
		<h1 id="decimName">decim<span class="emphasis">.</span>io</h1>
		<h2 class="sidebarLink">dashboard</h2>
		<h2 class="sidebarLink">stats</h2>
		<h2 class="sidebarLink">me</h2>
		<div class="spacer" style="height:45vh"></div>
		<div class="headlineStat">
			<p>this month's carbon</p>
			<p style="color: red; font-size: 1.5em;">3kg</p>
		</div>
		<div class="headlineStat">
			<p>this month's decim</p>
			<p style="color: limegreen; font-size: 1.5em;">£2.00</p>
		</div>
	</div>
	<div id="contentContainer">
        <div id="frost-chart"></div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Inconsolata:wght@300&display=swap');

	#headStatOne {
		float: left;
		padding-left: 3em;
	}
	#headStatTwo {
		float: right;
		padding-right: 3em;
	}
	.headStat {
		margin-top: 3vh;
		margin-bottom: 3vh;
		height: 80%;
		background-image: linear-gradient(100deg, rgb(35,35,70), rgb(38,27,56));
		border: 1px solid white;
		border-radius: 4px;
		font-family: "Fira Code", monospace;
	}

	.headline {
		height: 30vh;
	}
	.transactionList {
		max-height: 88vh;
		overflow-y: auto;
	}
	.transTag {
		font-family: "roc-grotesk-wide", monospace;
		letter-spacing: 0.1em;
		padding: 0.5em 1.5em 0 1.5em;
		color: white;
		padding-top: 4vh;
	}
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
		width: 100%;
		overflow-x: hidden;
	}

	#contentContainer {
		width: 80%;
		float: right;
		margin: auto;
	}

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

	.sidebarLink {
		color: white;
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