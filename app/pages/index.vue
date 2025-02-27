<template>
    <Head>
        <Title>Nuxt UI v3 - Starter Template</Title>
    </Head>
    <div class="flex flex-col justify-center items-center gap-8 h-screen">
        <div class="flex flex-col items-center">
            <h1 class="text-4xl font-bold text-(--ui-primary)">Nuxt UI v3</h1>
            <p class="text-sm font-normal">Starter Template</p>
        </div>
        <div class="flex items-center gap-2">
            <UButton to="https://ui3.nuxt.dev/getting-started/installation/nuxt" icon="i-heroicons-book-open"
                label="Documentation" color="primary" variant="subtle" />
            <UButton to="https://github.com/syvixor/nuxtui" icon="i-heroicons-link" label="GitHub" color="neutral"
                variant="ghost" />
        </div>
    </div>
</template>