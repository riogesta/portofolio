<script setup>
const props = defineProps(["tech"]);
</script>

<template>
    <div
        class="badge dark:bg-base-100 bg-base-100 inline-flex items-center text-nowrap cursor-default"
    >
        {{ tech }}
    </div>
</template>
