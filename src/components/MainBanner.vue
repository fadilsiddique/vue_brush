<template>
  <div class="flex flex-row mt-8">
    <div class="my-16 w-3/6">
      <h1 class="text-8xl font-extrabold">Discover the <br />warrior in you</h1>
      <p class="text-2xl mt-12 font-normal">
        We give you the tools and expertise for you to <br />
        grow you Martial Arts business.
      </p>
      <v-btn color="#BF1E2E" style="color: white" size="x-large" class="rounded-2xl mt-14 h-20 w-96"
        >Book Now</v-btn
      >
    </div>
    <div class="w-[1700px]">
      <img :src="image" />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainBanner",
  data() {
    return {
      image: require("@/assets/karate.png"),
    };
  },
};
</script>
