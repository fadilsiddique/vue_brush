<template>
  <div class="flex flex-row justify-between mr-2 ml-2 mt-4">
    <div class="">
      <img :src="logo" />
    </div>
    <div class="flex flex-no-shrink items-stretch h-12">
      <a class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark" href="">Home</a>
      <a class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark" href="">About</a>
      <a class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark" href="">Calender</a>
      <a class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark" href="">Trainings</a>
      <a class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark" href="">Trainers</a>
      <a class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark" href="">Gallery</a>
      <a class="flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-black no-underline flex items-center hover:bg-grey-dark" href="">Testimonials</a>
    </div>
    <div class="justify-end">
      <v-btn color="#BF1E2E" style="color: white;"> Contact Us </v-btn>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",

  data() {
    return {
      logo: require("@/assets/UMAILogo.png"),
    };
  },
};
</script>
