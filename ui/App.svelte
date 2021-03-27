<script>
	export let name;
	import TransactionCard from "./components/TransactionCard.svelte";

	$: transactions = [
		{"name":"Burger King", "cost":3, "carbon":0.4},
		{"name":"Burger King", "cost":3, "carbon":0.4},
		{"name":"Burger King", "cost":3, "carbon":0.4},
		{"name":"Burger King", "cost":3, "carbon":0.4},
		{"name":"Burger King", "cost":3, "carbon":0.4},
		{"name":"Burger King", "cost":3, "carbon":0.4},
		{"name":"Burger King", "cost":3, "carbon":0.4},
		{"name":"Burger King", "cost":3, "carbon":0.4},
		{"name":"Burger King", "cost":3, "carbon":0.4},
		{"name":"Burger King", "cost":3, "carbon":0.4},
	];

	function addTrans() {
		transactions = [...transactions,{"name":"KFC", "cost":3, "carbon":0.4}];
		console.log("H");
	}
</script>

<div id="mainContainer">
	
	<div id="sidebar">
		<h1 id="decimName">decim<span class="emphasis">.</span>io</h1>
	</div>
	<div id="contentContainer">
		<div class="row headline">
			<div class="headStat col-md-4">

			</div>
			<div class="col-md-4">
				
			</div>
			<div class="headStat col-md-4">
				
			</div>
		</div>
		<div class="transactionList">
			<h1 class="transTag">Transactions</h1>
			<button on:click={addTrans}></button>
		{#each transactions as transaction}
			<TransactionCard {...transaction}/>
		{/each}
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Inconsolata:wght@300&display=swap');

	.headline {
		height: 30vh;
		border-bottom: 1px solid white;
	}
	.transactionList {
		max-height: 70vh;
		overflow-y: auto;
	}
	.transTag {
		font-family: "roc-grotesk-wide", monospace;
		letter-spacing: 0.1em;
		padding: 0.5em 1.5em 0 1.5em;
		color: white;
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
		font-variant: normal;
		padding: 0.6em 0 0.6em 0;
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