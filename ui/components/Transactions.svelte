
<script>

    export let sessionId;

    const transactions = new Promise((resolve, reject) => {
        // checks every 1s
        setInterval(() => {
            fetch()
        }, 1000);
    });

    import TransactionCard from "../components/TransactionCard.svelte";
</script>

<div class="transactionList">
    <h1 style="color:white;font-family:roc-grotesk-wide;letter-spacing:0.1em;font-size:2em;font-weight:300;padding:1em 0 0 0">Payment history</h1>
    {#await transactionsPromise}
        <i>Waiting for oauth flow...</i>
    {:then transactions}
        {#each transactions as transaction}
            <TransactionCard {...transaction}/>
        {/each}
    {/await}
</div>

<style>

</style>