<script>
	export let name;
	import Transactions from "../components/Transactions.svelte";
	import Info from "../components/Info.svelte"
	import Sidebar from "../components/Sidebar.svelte"
	import Login from "../components/Login.svelte"

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

	const sessionId = localStorage.getItem("sessionId");

</script>

<div id="mainContainer">
	<Sidebar/>
	<div id="contentContainer">
		<div class="mainCont" id="leftCont">
			<Transactions sessionId={sessionId}/>
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