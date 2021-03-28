<script>
  import Sidebar from "../components/Sidebar.svelte"
</script>

<div id="mainContainer">
	
	<Sidebar/>
	<div id="contentContainer">
        <div id="frost-chart"></div>
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
	}
</style>