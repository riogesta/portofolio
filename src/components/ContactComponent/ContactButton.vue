<script setup>
import {
    IconMail,
    IconBrandGithub,
    IconBrandLinkedin,
} from "@tabler/icons-vue";

const props = defineProps(["links"]);
</script>

<template>
    <a
        v-for="(link, index) in links"
        :key="index"
        :href="Object.values(link)"
        target="_blank"
        class="btn btn-outline btn-square btn-sm"
    >
        <i v-if="Object.keys(link) == 'email'">
            <IconMail />
        </i>
        <i v-if="Object.keys(link) == 'github'">
            <IconBrandGithub />
        </i>
        <i v-if="Object.keys(link) == 'linkedin'">
            <IconBrandLinkedin />
        </i>
    </a>
</template>
