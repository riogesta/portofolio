<script setup>
import { inject } from "vue";

import TechnologiesLabel from "./TechnologiesLabel.vue";

const projects = inject("projects");
</script>

<template>
    <div
        class="-mx-3 grid grid-cols-1 gap-3 print:grid-cols-3 print:gap-2 md:grid-cols-2 lg:grid-cols-3"
    >
        <!-- card -->
        <div
            class="rounded-lg flex flex-col overflow-hidden border border-slate-200 p-3"
            v-for="project in projects"
            :key="project.id"
        >
            <div class="flex flex-col space-y-1.5">
                <div class="space-y-1">
                    <h3 class="font-semibold text-base text-title">
                        <a
                            :href="project.repo"
                            target="_blank"
                            class="inline-flex items-center gap-1 hover:underline"
                        >
                            {{ project.project_name }}
                        </a>
                    </h3>
                    <p class="text-base text-body">
                        {{ project.deskripsi }}
                    </p>
                </div>
            </div>
            <div class="text-pretty mt-auto flex">
                <div class="mt-2 -mx-0.5 flex flex-wrap gap-1">
                    <TechnologiesLabel
                        v-for="tech in project.technologies"
                        :tech="tech"
                    />
                </div>
            </div>
        </div>
        <!-- /card -->
    </div>
</template>
