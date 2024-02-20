<script setup>
import ContactButton from "./ContactButton.vue";

const props = defineProps({
    contact: Object,
});
</script>

<template>
    <div class="card card-compact dark:bg-neutral bg-base-200 shadow-md">
        <div class="card-body">
            <div class="flex items-center justify-between">
                <div class="flex-1">
                    <h2 class="card-title">{{ contact.name }}</h2>
                    <p>{{ contact.moto_profesional }}</p>
                    <p class="text-sm text-gray-400">{{ contact.location }}</p>
                    <div class="mt-3 flex gap-1">
                        <ContactButton :links="contact.links" />
                    </div>
                </div>
                <span
                    class="relative overflow-hidden shrink-0 rounded-2xl size-28"
                >
                    <img
                        src="https://media.licdn.com/dms/image/D5603AQEObO5PENOavA/profile-displayphoto-shrink_800_800/0/1694936368738?e=2147483647&v=beta&t=lr1lJPlLetWbm6WWfRsehQ-QPZPjMPx9CobO5_TH1vI"
                        alt=""
                    />
                </span>
            </div>
        </div>
    </div>
</template>
