<script setup>
import { inject } from "vue";

import TechnologiesLabel from "./TechnologiesLabel.vue";

const projects = inject("projects");
</script>

<template>
    <div
        v-for="project in projects"
        :key="project.id"
        class="card bg-neutral shadow-md flex flex-col overflow-hidden"
    >
        <div class="card-body">
            <div class="flex flex-col space-y-1.5">
                <a :href="project.repo" class="card-title hover:underline">
                    {{ project.project_name }}
                </a>
                <p>{{ project.deskripsi }}</p>
            </div>
            <div class="mt-auto flex">
                <div class="mt-2 -mx-1 flex flex-wrap gap-1">
                    <TechnologiesLabel
                        v-for="tech in project.technologies"
                        :tech="tech"
                    />
                </div>
            </div>
        </div>
    </div>
</template>
