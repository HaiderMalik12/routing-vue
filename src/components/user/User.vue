<template>
    <div class="row">
        <!-- List group -->
        <div class="list-group col-4" role="tablist">
            <router-link class="list-group-item list-group-item-action" role="tab" :to="`/user/${$route.params.id}/profile`">Profile</router-link>
            <router-link class="list-group-item list-group-item-action" role="tab" :to="`/user/${$route.params.id}/messages`">Messages</router-link>
            <router-link class="list-group-item list-group-item-action" role="tab" :to="`/user/${$route.params.id}/posts`">Posts</router-link>
        </div>

        <!-- Tab panes -->
        <div class="tab-content col-8">
            <div class="tab-pane fade show active" role="tabpanel">
                <router-view></router-view>
            </div>

        </div>
    </div>
</template>

<script>
export default {
 name: 'User'
}
</script>

<style>
</style>
