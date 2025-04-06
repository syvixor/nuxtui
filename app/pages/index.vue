<script lang="ts" setup>
import type { ILink } from "~/types";

const links: ILink[] = [
    {
        to: "https://ui.nuxt.com",
        icon: "i-lucide-book",
        label: "Documentation",
        color: "primary",
        variant: "subtle"
    },
    {
        to: "https://github.com/syvixor/nuxt-ui-starter",
        icon: "i-lucide-github",
        label: "Github Repo",
        color: "neutral",
        variant: "ghost"
    }
];
</script>

<template>
    <Head>
        <Title>Nuxt + Nuxt UI v3 - Starter Template</Title>
    </Head>
    <div class="flex flex-col justify-center items-center gap-8 h-screen">
        <div class="flex flex-col items-center gap-2">
            <div class="flex items-baseline gap-2">
                <Nuxt />
                <p class="text-base font-normal">+</p>
                <h1 class="text-2xl font-bold">Nuxt UI v3</h1>
            </div>
            <p class="text-base font-normal uppercase underline">Starter Template</p>
        </div>
        <Counter />
        <div class="flex items-center gap-2">
            <UButton :to="link.to" target="_blank" :icon="link.icon" :label="link.label" :color="link.color"
                :variant="link.variant" :key="index" v-for="(link, index) in links" />
        </div>
    </div>
</template>