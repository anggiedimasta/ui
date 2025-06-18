<template>
  <div class="space-y-12">
    <!-- Header -->
    <section class="text-center py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-bold text-foreground mb-6">Components</h1>
        <p class="text-xl text-muted-foreground">
          Explore and test our Vue 3 UI components
        </p>
      </div>
    </section>

    <!-- Button Component Section -->
    <section class="py-16">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-3xl font-bold text-foreground mb-12 text-center">Button Component</h2>

        <div class="space-y-12">
          <!-- Basic Usage -->
          <div class="cyber-card p-8">
            <h3 class="text-xl font-semibold text-foreground mb-6">Basic Usage</h3>
            <div class="code-block mb-6">
              <code>
                &lt;Button&gt;Default Button&lt;/Button&gt;
              </code>
            </div>
            <div class="flex flex-wrap gap-4">
              <Button>Default Button</Button>
              <Button variant="default">Default Variant</Button>
            </div>
          </div>

          <!-- All Button Variants -->
          <div class="cyber-card p-8">
            <h3 class="text-xl font-semibold text-foreground mb-6">All Button Variants</h3>
            <div class="code-block mb-6">
              <code>
                &lt;Button variant="default"&gt;Default&lt;/Button&gt;<br>
                &lt;Button variant="destructive"&gt;Destructive&lt;/Button&gt;<br>
                &lt;Button variant="outline"&gt;Outline&lt;/Button&gt;<br>
                &lt;Button variant="secondary"&gt;Secondary&lt;/Button&gt;<br>
                &lt;Button variant="ghost"&gt;Ghost&lt;/Button&gt;<br>
                &lt;Button variant="link"&gt;Link&lt;/Button&gt;
              </code>
            </div>
            <div class="flex flex-wrap gap-4">
              <Button variant="default">Default</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <!-- All Button Sizes -->
          <div class="cyber-card p-8">
            <h3 class="text-xl font-semibold text-foreground mb-6">All Button Sizes</h3>
            <div class="code-block mb-6">
              <code>
                &lt;Button size="default"&gt;Default&lt;/Button&gt;<br>
                &lt;Button size="sm"&gt;Small&lt;/Button&gt;<br>
                &lt;Button size="lg"&gt;Large&lt;/Button&gt;<br>
                &lt;Button size="icon"&gt;🔍&lt;/Button&gt;
              </code>
            </div>
            <div class="flex flex-wrap items-center gap-4">
              <Button size="default">Default</Button>
              <Button size="sm">Small</Button>
              <Button size="lg">Large</Button>
              <Button size="icon">🔍</Button>
            </div>
          </div>

          <!-- Variants with Different Sizes -->
          <div class="cyber-card p-8">
            <h3 class="text-xl font-semibold text-foreground mb-6">Variants with Different Sizes</h3>
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-medium text-foreground mb-3">Default Variant</h4>
                <div class="flex flex-wrap items-center gap-4">
                  <Button variant="default" size="sm">Small</Button>
                  <Button variant="default" size="default">Default</Button>
                  <Button variant="default" size="lg">Large</Button>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-medium text-foreground mb-3">Destructive Variant</h4>
                <div class="flex flex-wrap items-center gap-4">
                  <Button variant="destructive" size="sm">Small</Button>
                  <Button variant="destructive" size="default">Default</Button>
                  <Button variant="destructive" size="lg">Large</Button>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-medium text-foreground mb-3">Outline Variant</h4>
                <div class="flex flex-wrap items-center gap-4">
                  <Button variant="outline" size="sm">Small</Button>
                  <Button variant="outline" size="default">Default</Button>
                  <Button variant="outline" size="lg">Large</Button>
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
              <Button size="icon">🔍</Button>
              <Button variant="outline" size="icon">➕</Button>
              <Button variant="secondary" size="icon">📝</Button>
              <Button variant="destructive" size="icon">🗑️</Button>
              <Button variant="ghost" size="icon">⚙️</Button>
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
              <Button disabled>Disabled</Button>
              <Button variant="destructive" disabled>Disabled Destructive</Button>
              <Button variant="outline" disabled>Disabled Outline</Button>
              <Button variant="secondary" disabled>Disabled Secondary</Button>
              <Button variant="ghost" disabled>Disabled Ghost</Button>
              <Button variant="link" disabled>Disabled Link</Button>
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
              <Button
                @click="incrementCount"
                variant="default"
              >
                {{ isLoading ? 'Loading...' : 'Click me!' }}
              </Button>
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
              <Button variant="default" size="lg" class="w-full">Full Width Button</Button>
              <Button variant="outline" class="w-full sm:w-auto">Responsive Button</Button>
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
              <Button as="a" href="#" variant="default">Link Button</Button>
              <Button as="button" type="submit" variant="secondary">Submit Button</Button>
              <Button as="button" type="reset" variant="outline">Reset Button</Button>
            </div>
          </div>

          <!-- Use Cases Examples -->
          <div class="cyber-card p-8">
            <h3 class="text-xl font-semibold text-foreground mb-6">Common Use Cases</h3>
            <div class="space-y-6">
              <div>
                <h4 class="text-lg font-medium text-foreground mb-3">Form Actions</h4>
                <div class="flex flex-wrap gap-4">
                  <Button variant="default" size="lg">Save Changes</Button>
                  <Button variant="outline">Cancel</Button>
                  <Button variant="destructive" size="sm">Delete</Button>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-medium text-foreground mb-3">Navigation</h4>
                <div class="flex flex-wrap gap-4">
                  <Button variant="ghost">Back</Button>
                  <Button variant="default">Next</Button>
                  <Button variant="link">Skip</Button>
                </div>
              </div>
              <div>
                <h4 class="text-lg font-medium text-foreground mb-3">Data Actions</h4>
                <div class="flex flex-wrap gap-4">
                  <Button variant="outline" size="icon">➕</Button>
                  <Button variant="secondary" size="icon">📝</Button>
                  <Button variant="destructive" size="icon">🗑️</Button>
                  <Button variant="ghost" size="icon">🔍</Button>
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
import { Button } from '@anggiedimasta/ui'

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