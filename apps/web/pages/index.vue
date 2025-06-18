<template>
  <div class="space-y-12">
    <!-- Hero Section -->
    <section class="text-center py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-bold text-foreground mb-6">
          Welcome to <span class="text-primary neon-text">@anggiedimasta/ui</span>
        </h1>
        <p class="text-xl text-muted-foreground mb-8 leading-relaxed">
          A modern Vue 3 UI component library built with TypeScript and Tailwind CSS v4.
          Create beautiful, accessible, and performant web applications with ease.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <button class="px-8 py-3 text-lg font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
            Get Started
          </button>
          <button class="px-8 py-3 text-lg font-semibold bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors">
            View Components
          </button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-foreground mb-12">
          Why Choose <span class="text-primary neon-text">@anggiedimasta/ui</span>?
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="feature-card">
            <div class="feature-icon primary">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-4">Fast & Lightweight</h3>
            <p class="text-muted-foreground leading-relaxed">
              Built with modern web technologies for optimal performance. Tree-shakeable components ensure minimal bundle size.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon secondary">
              <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-4">TypeScript Ready</h3>
            <p class="text-muted-foreground leading-relaxed">
              Full TypeScript support with excellent developer experience. Get autocomplete, type checking, and better IDE integration.
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon accent">
              <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 7l3-3m0 0h-3m3 0v3" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-4">Highly Customizable</h3>
            <p class="text-muted-foreground leading-relaxed">
              Easy to customize with Tailwind CSS v4 and CSS variables. Design system that adapts to your brand.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Start Section -->
    <section class="py-16 cyber-card border-y border-border">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-foreground mb-8">
          Quick Start
        </h2>
        <div class="bg-muted/50 rounded-xl p-8">
          <h3 class="text-lg font-semibold text-foreground mb-4">Installation</h3>
          <div class="code-block mb-6">
            <code>npm install @anggiedimasta/ui</code>
          </div>

          <h3 class="text-lg font-semibold text-foreground mb-4">Usage</h3>
          <div class="code-block">
            <pre><code>import { Button } from '@anggiedimasta/ui'

&lt;Button variant="primary"&gt;Click me&lt;/Button&gt;</code></pre>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 text-center">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-3xl font-bold text-foreground mb-6">
          Ready to get started?
        </h2>
        <p class="text-lg text-muted-foreground mb-8">
          Explore our components and start building amazing user interfaces today.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4">
          <NuxtLink
            to="/components"
            class="inline-block"
          >
            <button class="px-8 py-3 text-lg font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
              Explore Components
            </button>
          </NuxtLink>
          <a
            href="https://github.com/anggiedimasta/ui"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-block"
          >
            <button class="px-8 py-3 text-lg font-semibold bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors">
              View on GitHub
            </button>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Set page metadata
useHead({
  title: '@anggiedimasta/ui - Vue 3 UI Component Library',
  meta: [
    { name: 'description', content: 'A modern Vue 3 UI component library built with TypeScript and Tailwind CSS' }
  ]
})
</script>