<template>
    <div class="row">
        <!-- List group -->
        <div class="list-group col-4" role="tablist">
            <a class="list-group-item list-group-item-action" role="tab" href="#">Profile</a>
            <a class="list-group-item list-group-item-action" role="tab" href="#">Messages</a>
            <a class="list-group-item list-group-item-action" role="tab" href="#">Posts</a>
        </div>

        <!-- Tab panes -->
        <div class="tab-content col-8">
            <div class="tab-pane fade show active" role="tabpanel">
                <!-- render user nested content -->
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
