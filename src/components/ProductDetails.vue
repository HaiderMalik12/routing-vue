<template>
    <div>
        <h1>Product Details</h1>
        <div class="card">
            <div class="card-body">
                <p>Product Id {{$route.params.id}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'ProductDetails'
    }
</script>