<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <router-link class="navbar-brand" to="/">Store</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Products
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            Blog
                        </a>
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
