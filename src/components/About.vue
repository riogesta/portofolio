<script setup>
defineProps({
    about: String,
});
</script>

<template>
    <section class="relative flex shrink-0 overflow-hidden flex-col gap-y-3">
        <h2 class="text-xl font-bold text-title">About</h2>
        <p class="text-pretty text-body">{{ about }}</p>
    </section>
</template>
