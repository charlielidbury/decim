
<script>

    export let sessionId;

    const transactionsPromise = new Promise((resolve, reject) => {
        // checks every 1s
        const interval = setInterval(async () => {
            const res = await fetch(`/api/transactions/${sessionId}`);

            // CHECK: status != 401
            if (res.status == 401) return;

            // CHECK: status != 500
            if (res.status == 500) {
                clearInterval(interval);
                localStorage.removeItem("sessionId");
                reject();
                return;
            }

            const transactions = await res.json();
            
            console.log(transactions);

            resolve(transactions);
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