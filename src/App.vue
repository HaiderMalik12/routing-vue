<template>
    <div>
        <navbar />
        <main role="main" class="container">
            <!-- render router content here  -->
        </main>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
export default {
    name: 'app',
    components:{
        Navbar
    }
};
</script>
