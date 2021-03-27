<script>
    export let name = "KFC", cost = 0, carbon = 0;
</script>

<div class="transactionCard row">
	<button class="transDisable transText">X</button>
    <p class="col-md-6 transText transName">{name}</p>
    <div class="colSpacer col-md-1"></div>
    <p class="col-md-2 transText transCarb">{carbon}kg</p>
    <p class="col-md-2 transText transOff">£{cost}</p>
</div>

<style>
    .transactionCard {
		background-image: linear-gradient(100deg, rgb(35,35,70), rgb(38,27,56));
		width: 100%;
		
		margin: 1em auto 2em;

		border: 1px solid white;
		cursor:pointer;
		transition: ease transform 0.3s,
			ease box-shadow 0.3s,
			ease border-radius 0.3s;
		border-radius: 2px;

		overflow: hidden;
	}

	.transactionCard:hover {
		transform: translate(0,-0.3em);
		-webkit-box-shadow: 11px 10px 31px -4px rgba(0,0,0,0.49);
		-moz-box-shadow: 11px 10px 31px -4px rgba(0,0,0,0.49);
		box-shadow: 11px 10px 31px -4px rgba(0,0,0,0.49);
		border-radius: 7px;
	}

    .transText {
        font-family: "Fira Code", monospace;
		font-weight: 300;
		font-size: 1.4em;
		margin:0;
		padding: 0.5em;
    }

    .transName {
		color:rgba(255,255,255,0.9);
		border-left: solid 1px rgba(255,255,255,0.9);
	}

	.transCarb {
		color:greenyellow;
		text-align: center;
		margin: auto;
	}

	.transOff {
		color:indianred;
		text-align: center;
		margin: auto;
	}

	.transDisable {
		color:rgba(255,255,255,0.9);
		background-color: #f50057;
	}
</style>