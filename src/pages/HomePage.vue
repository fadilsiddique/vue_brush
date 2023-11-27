<template>
  <div class="ml-8">
    <NavBar />
    <MainBanner />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import MainBanner from "@/components/MainBanner.vue";
export default {
  name: "HomePage",
  components: {
    NavBar,
    MainBanner,
  },
};
</script>
