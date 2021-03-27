<script>
	export let name;
	import TransactionCard from "./components/TransactionCard.svelte";
	import Info from "./components/Info.svelte"

	$: transactions = [
		{"name":"Burger King", "cost":3, "carbon":0.4},
		{"name":"Burger King", "cost":3, "carbon":0.4},
		{"name":"Long long long name", "cost":3, "carbon":0.4}
	];

	const redirect_uri = 'http://localhost:5000/api/callback'
	const client_id = 'oauth2client_0000A5dpELG1M7uTWsSk2D'
	const monzoAuthUrl = 'https://auth.monzo.com';

	const link = `${monzoAuthUrl}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`

	function addTrans() {
		transactions = [...transactions,{"name":"KFC", "cost":3, "carbon":0.4}];
	}

	async function authorise() {
		// try {
		// 	const returnValue = await fetch(`/api/auth`);
		// 	console.log("Return:", returnValue);
		// 	const { url } = JSON.parse(returnValue)
		// 	console.log(url)
		// 	window.open(url, '_blank').focus();
		// } catch (error) {
		// 	console.error(error);
		// }
	}
</script>

<div id="mainContainer">
	<div id="topDiv">
		<h1 id="decimName">decim<span class="emphasis">.</span>io</h1>
		<a class="btn" href={link}>Log In</a>
	</div>
	
	<hr/>
	<div class="mainCont" id="leftCont">
		<div class="transactionList">
			{#each transactions as transaction}
				<TransactionCard {...transaction}/>
			{/each}
		</div>
	</div>

	<div class="mainCont" id="rightCont">
		<Info/>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Inconsolata:wght@300&display=swap');

	.transactionList {
		max-height: 84vh;
		overflow-y: auto;
	}

	.transactionList::-webkit-scrollbar {
  		display: none;
	}

	.transactionList {
  		-ms-overflow-style: none;
  		scrollbar-width: none;
	}

	.transTag {
		font-family: "roc-grotesk-wide", monospace;
		letter-spacing: 0.1em;
		padding: 0.5em 1.5em 0 1.5em;
		color: white;
		text-align: center;
	}

	#mainContainer {
		background-image: linear-gradient(10deg, rgb(35,35,70), rgb(38,27,56));
		margin-bottom: 0;
		min-height: 100vh;
		width: 100%;
		overflow: hidden;
	}

	.mainCont {
		width: 45%;
	}

	#leftCont {
		float: left;
		margin: 1em 0 1% 3%
	}

	#rightCont {
		float: right;
		margin: 1.4em 3% 1% 0%
	}

	hr {
		border-top: solid 1px white;
		margin: auto;
		width: 90%
	}

	h1 {
		margin: 0;
		padding: 0;
	}

	#decimName {
		color: white;
		font-family: 'roc-grotesk-wide', monospace;
		letter-spacing: 0.1em;
		font-size: min(2.5em, 2.5vw);
		text-align: left;
		font-weight: 300;
		font-variant: normal;
		padding: 0.6em 0 0.6em 5%;
		width: 40%;
		display: inline-block;
	}

	.btn {
		float: right;
  		padding: 10px 30px;
  		font-size: 20px;
  		color: #fff;
  		background-color: #f50057;
  		border: 2px solid #f50057;
  		cursor: pointer;
  		width: max-content;
  		transition: 0.25s ease;
		margin: 0.6em 8%;
	}

	.btn:hover {
  		color: #f50057;
  		background-color: transparent;
	}

	.emphasis {
		color: cyan;
	}

	button:focus {
		background-color: #f50057;
	}
</style>