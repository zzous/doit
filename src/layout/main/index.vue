<template>
  <section id="wrap">
    <Navbar />
    <AppMain />
    <Footer />
  </section>
</template>

<script>
import AppMain from "./components/AppMain.vue"
import Navbar from "./components/Navbar.vue"
import Footer  from "./components/Footer.vue"
export default {
  components:{
    AppMain,
    Navbar,
    Footer
  },
}
</script>

