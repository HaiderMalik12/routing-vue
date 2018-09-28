<template>
    <div>
        <navbar />
        <main role="main" class="container">
            <!-- content  -->
            <router-view></router-view>
        </main>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
export default {
    name: 'app',
    components:{
        Navbar
    }
};
</script>
