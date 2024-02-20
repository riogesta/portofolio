<script setup>
const props = defineProps(["tech"]);
</script>

<template>
    <div
        class="badge badge-primary inline-flex items-center text-nowrap cursor-default"
    >
        {{ tech }}
    </div>
    <!-- <div
        class="inline-flex items-center text-nowrap rounded-md border px-1.5 py-0.5 text-slate-100 bg-gray-400 hover:bg-slate-300 hover:text-gray-800 cursor-default text-xs font-mono font-semibold"
    >
        {{ tech }}
    </div> -->
</template>
