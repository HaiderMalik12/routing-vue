<template>
    <form @submit="saveProduct">
        <div class="form-group">
            <input class="form-control" type="text" placeholder="Enter product name" v-model="name"/>
            <button class="btn btn-primary btn-block">Save</button>
        </div>
    </form>
</template>

<script>
export default {
name: 'ProductForm',
data(){
    return{
        name: ''
    }
},
methods:{
    saveProduct(e){
        e.preventDefault();
        //navigate programtically to /products
    }
}
}
</script>

<style>
</style>
