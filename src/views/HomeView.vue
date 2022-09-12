<template>
    <div v-on:scroll="scrollHandle" id="scroller" class="parallax">
        <Header class="parallax__layer container parallax__layer--back" :btnIsVisible=btnIsVisible />
        <div class="container parallax__layer parallax__layer--base">
          <MainBody :btnIsVisible=btnIsVisible />
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import MainBody from '@/components/MainBody.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    MainBody,
  },
  methods: {
    scrollHandle() {
      if (this.scroller.scrollTop >= 200) {
        this.btnIsVisible = false
      }
      else {
        this.btnIsVisible = true
      }
      
    }
  },
  data() {
    return {
      scroller: Object(),
      btnIsVisible: true
    }
  },
  mounted() {
    this.scroller = document.getElementById('scroller')
  }
}
</script>

<style scoped>
.parallax {
  perspective: 1px;
  height: 100vh;
  overflow-x: hidden;
  scroll-behavior: smooth !important;
  overflow-y: auto;
}
.parallax__layer {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.parallax__layer--base {
  margin-top: 400px;
  background-color: rgb(38, 38, 38);
  transform: translateZ(0);
}
.parallax__layer--back {
  transform: translateZ(-2px) scale(3);
}

</style>