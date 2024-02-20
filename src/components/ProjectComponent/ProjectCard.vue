<script setup>
import { IconFolders } from "@tabler/icons-vue";
import Projects from "./Projects.vue";
</script>

<template>
    <section class="mx-2">
        <h2 class="font-bold text-pretty divider divider-start">
            <div
                class="badge dark:badge-neutral badge-ghost badge-lg py-4 -ml-2 items-center"
            >
                <i class="mr-2"><IconFolders /></i>Projects
            </div>
        </h2>
        <div
            class="-mx-2 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-2"
        >
            <Projects />
        </div>
    </section>
</template>
