<script setup>
const props = defineProps(["tech"]);
</script>

<template>
    <div
        class="badge badge-primary inline-flex items-center text-nowrap cursor-default"
    >
        {{ tech }}
    </div>
</template>
