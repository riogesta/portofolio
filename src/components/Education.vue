<script setup>
import { IconSchool } from "@tabler/icons-vue";

const props = defineProps({
    education: Object,
});
</script>

<template>
    <section class="mx-2">
        <h2 class="font-bold text-pretty divider divider-start">
            <div class="badge badge-neutral badge-lg py-4 -ml-2 items-center">
                <i class="mr-2"><IconSchool /></i>Education
            </div>
        </h2>
        <div class="flex flex-col space-y-1.5">
            <div class="flex items-center justify-between gap-x-2 text-base">
                <!-- {{ education }} -->
                <h3 class="font-semibold">{{ education.universitas }}</h3>
                <div class="tex-sm tabular-nums text-gray-500">
                    {{ education.tahun }}
                </div>
            </div>
        </div>
        <p>
            {{ education.jurusan }}
        </p>
    </section>
</template>
