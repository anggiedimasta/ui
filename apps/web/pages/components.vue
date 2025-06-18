<template>
  <div class="space-y-12">
    <!-- Header Section -->
    <section class="text-center py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-5xl font-bold text-foreground mb-6">
          UI Components
        </h1>
        <p class="text-xl text-muted-foreground mb-8 leading-relaxed">
          Explore and test our Vue 3 UI components. Each component is built with accessibility,
          performance, and customization in mind.
        </p>
      </div>
    </section>

    <!-- Components Section -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto">
        <!-- Button Component -->
        <div class="space-y-8">
          <div class="text-center">
            <h2 class="text-3xl font-bold text-foreground mb-4">Button Component</h2>
            <p class="text-lg text-muted-foreground">
              Versatile button component with multiple variants, sizes, and states.
            </p>
          </div>

          <!-- Button Variants -->
          <div class="cyber-card p-8">
            <h3 class="text-xl font-semibold text-foreground mb-6">Button Variants</h3>
            <div class="code-block mb-6">
              <code>
                &lt;Button variant="default"&gt;Default&lt;/Button&gt;<br>
                &lt;Button variant="secondary"&gt;Secondary&lt;/Button&gt;<br>
                &lt;Button variant="destructive"&gt;Destructive&lt;/Button&gt;<br>
                &lt;Button variant="outline"&gt;Outline&lt;/Button&gt;<br>
                &lt;Button variant="ghost"&gt;Ghost&lt;/Button&gt;<br>
                &lt;Button variant="link"&gt;Link&lt;/Button&gt;
              </code>
            </div>
            <div class="flex flex-wrap items-center gap-4">
              <button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Default</button>
              <button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors">Secondary</button>
              <button class="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors">Destructive</button>
              <button class="px-4 py-2 border border-border bg-background text-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">Outline</button>
              <button class="px-4 py-2 bg-transparent text-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">Ghost</button>
              <button class="px-4 py-2 bg-transparent text-primary underline-offset-4 hover:underline transition-colors">Link</button>
            </div>
          </div>

          <!-- Button Sizes -->
          <div class="cyber-card p-8">
            <h3 class="text-xl font-semibold text-foreground mb-6">Button Sizes</h3>
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-medium text-foreground mb-3">Default Variant</h4>
                <div class="flex flex-wrap items-center gap-4">
                  <button class="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Small</button>
                  <button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Default</button>
                  <button class="px-8 py-3 text-lg bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Large</button>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-medium text-foreground mb-3">Secondary Variant</h4>
                <div class="flex flex-wrap items-center gap-4">
                  <button class="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors">Small</button>
                  <button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors">Default</button>
                  <button class="px-8 py-3 text-lg bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors">Large</button>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-medium text-foreground mb-3">Destructive Variant</h4>
                <div class="flex flex-wrap items-center gap-4">
                  <button class="px-3 py-1.5 text-sm bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors">Small</button>
                  <button class="px-4 py-2 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors">Default</button>
                  <button class="px-8 py-3 text-lg bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors">Large</button>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-medium text-foreground mb-3">Outline Variant</h4>
                <div class="flex flex-wrap items-center gap-4">
                  <button class="px-3 py-1.5 text-sm border border-border bg-background text-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">Small</button>
                  <button class="px-4 py-2 border border-border bg-background text-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">Default</button>
                  <button class="px-8 py-3 text-lg border border-border bg-background text-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">Large</button>
                </div>
              </div>
            </div>
          </div>

          <!-- Icon Buttons -->
          <div class="cyber-card p-8">
            <h3 class="text-xl font-semibold text-foreground mb-6">Icon Buttons</h3>
            <div class="code-block mb-6">
              <code>
                &lt;Button size="icon"&gt;🔍&lt;/Button&gt;<br>
                &lt;Button variant="outline" size="icon"&gt;➕&lt;/Button&gt;<br>
                &lt;Button variant="destructive" size="icon"&gt;🗑️&lt;/Button&gt;
              </code>
            </div>
            <div class="flex flex-wrap gap-4">
              <button class="w-10 h-10 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">🔍</button>
              <button class="w-10 h-10 border border-border bg-background text-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">➕</button>
              <button class="w-10 h-10 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors">📝</button>
              <button class="w-10 h-10 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors">🗑️</button>
              <button class="w-10 h-10 bg-transparent text-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">⚙️</button>
            </div>
          </div>

          <!-- Button States -->
          <div class="cyber-card p-8">
            <h3 class="text-xl font-semibold text-foreground mb-6">Button States</h3>
            <div class="code-block mb-6">
              <code>
                &lt;Button disabled&gt;Disabled&lt;/Button&gt;<br>
                &lt;Button variant="destructive" disabled&gt;Disabled Destructive&lt;/Button&gt;
              </code>
            </div>
            <div class="flex flex-wrap gap-4">
              <button class="px-4 py-2 bg-primary text-primary-foreground rounded-md opacity-50 cursor-not-allowed" disabled>Disabled</button>
              <button class="px-4 py-2 bg-destructive text-destructive-foreground rounded-md opacity-50 cursor-not-allowed" disabled>Disabled Destructive</button>
              <button class="px-4 py-2 border border-border bg-background text-foreground rounded-md opacity-50 cursor-not-allowed" disabled>Disabled Outline</button>
              <button class="px-4 py-2 bg-secondary text-secondary-foreground rounded-md opacity-50 cursor-not-allowed" disabled>Disabled Secondary</button>
              <button class="px-4 py-2 bg-transparent text-foreground rounded-md opacity-50 cursor-not-allowed" disabled>Disabled Ghost</button>
              <button class="px-4 py-2 bg-transparent text-primary underline-offset-4 opacity-50 cursor-not-allowed" disabled>Disabled Link</button>
            </div>
          </div>

          <!-- Interactive Example -->
          <div class="cyber-card p-8">
            <h3 class="text-xl font-semibold text-foreground mb-6">Interactive Example</h3>
            <div class="code-block mb-6">
              <p class="text-sm text-muted-foreground mb-2">Click count: {{ clickCount }}</p>
              <code>
                &lt;Button @click="incrementCount" variant="default"&gt;{{ isLoading ? 'Loading...' : 'Click me!' }}&lt;/Button&gt;
              </code>
            </div>
            <div class="flex flex-wrap gap-4 items-center">
              <button
                @click="incrementCount"
                class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                {{ isLoading ? 'Loading...' : 'Click me!' }}
              </button>
              <span class="text-muted-foreground">Count: {{ clickCount }}</span>
            </div>
          </div>

          <!-- Custom Styling Example -->
          <div class="cyber-card p-8">
            <h3 class="text-xl font-semibold text-foreground mb-6">Custom Styling</h3>
            <div class="code-block mb-6">
              <code>
                &lt;Button variant="default" size="lg" class="w-full"&gt;Full Width Button&lt;/Button&gt;<br>
                &lt;Button variant="outline" class="w-full sm:w-auto"&gt;Responsive Button&lt;/Button&gt;
              </code>
            </div>
            <div class="space-y-4">
              <button class="w-full px-8 py-3 text-lg bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">Full Width Button</button>
              <button class="w-full sm:w-auto px-4 py-2 border border-border bg-background text-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">Responsive Button</button>
            </div>
          </div>

          <!-- Button as Different Elements -->
          <div class="cyber-card p-8">
            <h3 class="text-xl font-semibold text-foreground mb-6">Button as Different Elements</h3>
            <div class="code-block mb-6">
              <code>
                &lt;Button as="a" href="#"&gt;Link Button&lt;/Button&gt;<br>
                &lt;Button as="button" type="submit"&gt;Submit Button&lt;/Button&gt;
              </code>
            </div>
            <div class="flex flex-wrap gap-4">
              <a href="#" class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Link Button</a>
              <button type="submit" class="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors">Submit Button</button>
              <button type="reset" class="px-4 py-2 border border-border bg-background text-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">Reset Button</button>
            </div>
          </div>

          <!-- Use Cases Examples -->
          <div class="cyber-card p-8">
            <h3 class="text-xl font-semibold text-foreground mb-6">Common Use Cases</h3>
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-medium text-foreground mb-3">Form Actions</h4>
                <div class="flex flex-wrap gap-4">
                  <button class="px-8 py-3 text-lg bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">Save Changes</button>
                  <button class="px-4 py-2 border border-border bg-background text-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">Cancel</button>
                  <button class="px-3 py-1.5 text-sm bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors">Delete</button>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-medium text-foreground mb-3">Navigation</h4>
                <div class="flex flex-wrap gap-4">
                  <button class="px-4 py-2 bg-transparent text-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">Back</button>
                  <button class="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">Next</button>
                  <button class="px-4 py-2 bg-transparent text-primary underline-offset-4 hover:underline transition-colors">Skip</button>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-medium text-foreground mb-3">Data Actions</h4>
                <div class="flex flex-wrap gap-4">
                  <button class="w-10 h-10 border border-border bg-background text-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">➕</button>
                  <button class="w-10 h-10 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors">📝</button>
                  <button class="w-10 h-10 bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors">🗑️</button>
                  <button class="w-10 h-10 bg-transparent text-foreground rounded-md hover:bg-accent hover:text-accent-foreground transition-colors">🔍</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Planned Components -->
    <section class="py-16 neon-gradient">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-center text-foreground mb-12">
          More Components Coming Soon
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="cyber-card p-6">
            <h3 class="text-lg font-semibold text-foreground mb-2">Input</h3>
            <p class="text-muted-foreground text-sm">Form inputs with validation states</p>
          </div>
          <div class="cyber-card p-6">
            <h3 class="text-lg font-semibold text-foreground mb-2">Card</h3>
            <p class="text-muted-foreground text-sm">Content containers with headers and actions</p>
          </div>
          <div class="cyber-card p-6">
            <h3 class="text-lg font-semibold text-foreground mb-2">Modal</h3>
            <p class="text-muted-foreground text-sm">Overlay dialogs and popups</p>
          </div>
          <div class="cyber-card p-6">
            <h3 class="text-lg font-semibold text-foreground mb-2">Dropdown</h3>
            <p class="text-muted-foreground text-sm">Select menus and dropdowns</p>
          </div>
          <div class="cyber-card p-6">
            <h3 class="text-lg font-semibold text-foreground mb-2">Table</h3>
            <p class="text-muted-foreground text-sm">Data tables with sorting and pagination</p>
          </div>
          <div class="cyber-card p-6">
            <h3 class="text-lg font-semibold text-foreground mb-2">Alert</h3>
            <p class="text-muted-foreground text-sm">Notification and alert components</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// Reactive state for interactive example
const clickCount = ref(0)
const isLoading = ref(false)

const incrementCount = async () => {
  isLoading.value = true
  // Simulate async operation
  await new Promise(resolve => setTimeout(resolve, 1000))
  clickCount.value++
  isLoading.value = false
}

// Set page metadata
useHead({
  title: 'Components - @anggiedimasta/ui',
  meta: [
    { name: 'description', content: 'Explore and test Vue 3 UI components' }
  ]
})
</script>