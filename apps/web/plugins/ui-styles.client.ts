// Import UI package styles on client side
export default defineNuxtPlugin(() => {
  // This will only run on the client side
  if (process.client) {
    import('@anggiedimasta/ui/styles.css')
  }
})