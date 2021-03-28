<script>
	import TransactionCard from "./components/TransactionCard.svelte";
	import Info from "./components/Info.svelte"

	let authorised = false;
	let buttonColour = '#f50057'

	$: transactions = [];

	const redirect_uri = 'http://localhost:5000/api/callback'
	const client_id = 'oauth2client_0000A5dpELG1M7uTWsSk2D'
	const monzoAuthUrl = 'https://auth.monzo.com';

	const link = `${monzoAuthUrl}?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`

	function addTrans(name, cost, carbon) {
		const desc = name['description'];
		const amount = cost['amount'];
		console.log(desc, amount, carbon)
		transactions = [...transactions,{"name":{desc}, "cost":{amount}, "carbon":{carbon}}];
	}

	function poll() {
			fetch(`/api/authcheck`, {
				method: "get"
			})
			.then(response => response.json())
			.then(response => {
				authorised = response.authenticated;
				console.log(authorised);
			})
        	// .then(response => console.log(response))
        	.catch(err => console.log(err));

			buttonColour = authorised ? '#119211' : '#f50057'
			console.log(authorised);

			if (authorised) {
				fetch(`/api/accounts`, {
					method: "get"
				})
				.then(accs => accs.json())
				.then(accounts => {
					console.log(accounts.accounts)
					for (const account of accounts.accounts) {
						const { id, type, description } = account;
						fetch(`/api/transactions/${id}`, {
							method: "get"
						})
						.then(tcs => tcs.json())
						.then(transactions => {
							console.log(transactions.transactions)
							for (var i = 0; i < transactions.transactions.length; i++) {
								const tsn = transactions.transactions[i];
								addTrans(tsn, tsn, 5);
							}
						})
					}
				})
				.catch(err => console.log(err));

				
			}

			console.log(transactions)
	}

	import {Router, Route, Link} from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import Stats from "./pages/Stats.svelte";

    export let url="";
</script>

<Router url="{url}">
    <Route path="stats" component="{Stats}" />
    <Route path="/"><Home /></Route>
</Router>

<div id="mainContainer">
	<div id="topDiv">
		<h1 id="decimName">decim<span class="emphasis">.</span>io</h1>
		<a class="btn" href={link}>Log In</a>
		<button on:click={poll}>Poll</button>
	</div>
	
	<hr/>
	<div class="mainCont" id="leftCont">
		<div class="transactionList">
			{#each transactions as transaction}
				<TransactionCard name={transaction.name} cost={transaction.cost} carbon={transaction.carbon}/>
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
  		background-color: var(--theme-buttonColour);
  		border: 2px solid var(--theme-buttonColour);
  		cursor: pointer;
  		width: max-content;
  		transition: 0.25s ease;
		margin: 0.6em 8%;
	}

	.btn:hover {
  		color: var(--theme-buttonColour);
  		background-color: transparent;
	}

	.emphasis {
		color: cyan;
	}
</style>
