<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <router-link class="navbar-brand" to="/">Nested Routing</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/user/1">
                            User
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/products">
                            Products
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
name: 'Navbar'
}
</script>

<style>
</style>
