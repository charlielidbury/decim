<script>
	export let name;
	import TransactionCard from "../components/TransactionCard.svelte";
	import Info from "../components/Info.svelte"
	import Sidebar from "../components/Sidebar.svelte"

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
		{"name":"Burger King", "cost":3, "carbon":0.4},
		{"name":"Burger King", "cost":3, "carbon":0.4},
		{"name":"Burger King", "cost":3, "carbon":0.4},
		{"name":"Burger King", "cost":3, "carbon":0.4},
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

	<Sidebar/>
	<div id="contentContainer">
		<div class="mainCont" id="leftCont">
			<div class="transactionList">
				<h1 style="color:white;font-family:roc-grotesk-wide;letter-spacing:0.1em;font-size:2em;font-weight:300;padding:1em 0 0 0">Payment history</h1>
				{#each transactions as transaction}
					<TransactionCard {...transaction}/>
				{/each}
			</div>
		</div>

		<div class="mainCont" id="rightCont">
			<Info/>
		</div>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300&family=Inconsolata:wght@300&display=swap');
	

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
		min-height: 100%;
		display:fixed;
		overflow:hidden;
	}

	.mainCont {
		width: 48%;
		min-height: 100vh;
		display:fixed;
		max-height: 100vh;
		overflow-y: auto;
		scrollbar-width: none;
	}

	.mainCont::-webkit-scrollbar {
		display: none;
		}
	#leftCont {
		float: left;
		margin: 0 0 0 3%
	}

	#rightCont {
		float: right;
		border-left: 1px solid white;
		display: fixed;
	}
</style>