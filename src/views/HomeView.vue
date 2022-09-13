<template>
    <div v-on:scroll="scrollHandle" id="scroller" :class="{'parallax': !isMobile, '': isMobile}" >
        <Header class="container" :class="{'parallax__layer parallax__layer--back': !isMobile, '': isMobile}" :btnIsVisible=btnIsVisible />
        <div class="container" :class="{'parallax__layer parallax__layer--base': !isMobile, '': isMobile}" >
          <MainBody :btnIsVisible=btnIsVisible />
          <Footer class="d-none d-sm-block" jmeno="Vítězslav Zábojník" email="v.zabojnik@centrum.cz" tel="602 781 751" />
        </div>
    </div>
</template>

<script>
import Header from '@/components/Header.vue';
import MainBody from '@/components/MainBody.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'HomeView',
  components: {
    Header,
    MainBody,
    Footer,
},
  methods: {
    scrollHandle() {
      if (this.scroller.scrollTop >= 200) {
        this.btnIsVisible = false
      }
      else {
        this.btnIsVisible = true
      }
    },
    getWidth() {
      if (window.innerWidth <= 576) {
        this.isMobile = true
      }
      else {
        this.isMobile = false
      }
    }
  },
  data() {
    return {
      scroller: Object(),
      btnIsVisible: true,
      isMobile: false
    }
  },
  mounted() {
    this.scroller = document.getElementById('scroller')
    this.getWidth()
    window.addEventListener('resize', this.getWidth)
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