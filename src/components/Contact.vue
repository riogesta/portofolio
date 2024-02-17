<script setup>
const props = defineProps({
    contact: Object,
});
</script>

<template>
    <div class="flex items-center justify-between">
        <div class="flex-1 space-y-1.5">
            <h1 class="font-bold text-3xl text-title">{{ contact.name }}</h1>
            <p class="text-pretty text-body">
                {{ contact.moto_profesional }}
            </p>
            <p class="max-w-md items-center text-sm text-body">
                {{ contact.location }}
            </p>
        </div>
        <div class="relative flex shrink-0 overflow-hidden rounded-xl size-28">
            <img
                src="https://pyxis.nymag.com/v1/imgs/654/1f1/08de774c11d89cb3f4ecf600a33e9c8283-24-keanu-reeves.rsquare.w400.jpg"
                alt="my-profile-pricture-riogesta"
                width="200px"
                class="aspect-square h-fit w-full hover:rounded-3xl ease-in-out duration-150"
            />
        </div>
    </div>
</template>

<style scoped></style>
