<script setup>
import { inject } from "vue";

const works = inject("works_experience");
</script>

<template>
    <div v-for="item in works" :key="item.id">
        <div class="flex flex-col space-y-1">
            <!-- nama tempat dan tahun -->
            <div class="flex items-center justify-between gap-x-2 text-base">
                <h3>
                    <a class="hover:underline font-bold text-title" href="#">
                        {{ item.perusahaan }}
                    </a>
                </h3>
                <div class="tabular-nums text-gray-500">
                    {{ item.lama }}
                </div>
            </div>
            <!-- stack -->
            <h4 class="text-sm font-semibold leading-none text-gray-600">
                {{ item.stack }}
            </h4>
        </div>
        <!-- deskripsi -->
        <div class="text-pretty mt-2 text-body">
            {{ item.deskripsi }}
        </div>
    </div>
</template>
