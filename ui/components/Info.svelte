<script>
    import TransactionCard from "./TransactionCard.svelte";

    const transaction = { "name": "Burger King", "cost": 13, "carbon": 31.5 }

    const category = { name: "Restaurant", efficiency: 100 };

    const tags = [
        { name: "Fast food", multiplier: 1.5 },
        { name: "Vegan", multiplier: 0.7 },
    ]
</script>

<div class="info_box">
    <TransactionCard {...transaction}/>

    <div class="mainBox">
        {category.name} (£{category.efficiency}/kg)
        <ul>
            {#each tags as tag}
                <li>
                    {tag.name} (x{tag.multiplier})
                    <button>x</button>
                </li>
            {/each}
            <li>
                <button>Add Tag</button>
            </li>
        </ul>

        <p>Adjust the carbon impact</p>
        <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
    </div>

</div>

<style>


    .slider {
    -webkit-appearance: none;
    width: 100%;
    height: 25px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
    }

    .slider:hover {
    opacity: 1;
    }

    .slider::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    background: #4CAF50;
    cursor: pointer;
    }

    .slider::-moz-range-thumb {
    width: 25px;
    height: 25px;
    background: #4CAF50;
    cursor: pointer;
    }

    .mainBox {
        margin: 40px 40px;
    }

    .info_box {
        width: 100%;
        color: white;
        font-family: 'roc-grotesk-wide';
    }
</style>