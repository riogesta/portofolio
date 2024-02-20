<script setup>
import { IconUser } from "@tabler/icons-vue";

defineProps({
    about: String,
});
</script>

<template>
    <section class="mx-2">
        <h2 class="font-bold text-pretty divider divider-start">
            <div
                class="badge dark:badge-neutral badge-ghost badge-lg py-4 -ml-2 items-center"
            >
                <i class="mr-2"><IconUser /></i>About
            </div>
        </h2>
        <p>{{ about }}</p>
    </section>
</template>
