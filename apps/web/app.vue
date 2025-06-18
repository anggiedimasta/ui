<template>
  <div class="min-h-screen cyber-gradient dark">
    <!-- Header -->
    <header class="cyber-header sticky top-0 z-50">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-4">
            <h1 class="text-xl font-bold text-primary neon-text">@anggiedimasta/ui</h1>
            <span class="text-sm text-muted-foreground">Vue 3 UI Library</span>
          </div>
          <nav class="flex items-center space-x-6">
            <NuxtLink
              to="/"
              class="text-muted-foreground hover:text-primary transition-colors duration-200"
              active-class="text-primary neon-text"
            >
              Home
            </NuxtLink>
            <NuxtLink
              to="/components"
              class="text-muted-foreground hover:text-primary transition-colors duration-200"
              active-class="text-primary neon-text"
            >
              Components
            </NuxtLink>
            <a
              href="https://github.com/anggiedimasta/ui"
              target="_blank"
              rel="noopener noreferrer"
              class="text-muted-foreground hover:text-secondary transition-colors duration-200"
            >
              GitHub
            </a>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="cyber-header border-t border-border mt-auto">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div class="text-sm text-muted-foreground">
            © 2024 @anggiedimasta/ui. Built with Vue 3 and Tailwind CSS.
          </div>
          <div class="flex items-center space-x-4 text-sm text-muted-foreground">
            <span>Made with <span class="text-destructive neon-text">❤️</span> by anggiedimasta</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Import UI components - we'll handle this in the Nuxt config instead
</script>