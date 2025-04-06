<script lang="ts" setup>
const count = ref(1);

const increaseCount = () => {
    count.value++
}

const decreaseCount = () => {
    count.value > 1 ? count.value-- : null
}
</script>

<template>
    <div class="flex items-center gap-8">
        <UButton icon="i-lucide-plus" color="neutral" variant="subtle" @click="increaseCount" />
        <p class="text-base font-medium">{{ count }}</p>
        <UButton icon="i-lucide-minus" color="neutral" variant="subtle" @click="decreaseCount" />
    </div>
</template>