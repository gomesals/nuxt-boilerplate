<script>
export default {
  async fetch({ store, redirect, error }) {
    try {
      await store.dispatch('logout')
      return redirect(`/login`)
    } catch (e) {
      error({
        message: e.message,
        statusCode: 500
      })
    }
  }
}
</script>
