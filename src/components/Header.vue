<template>
    <div class="mt-5">
        <div class="d-flex justify-content-center d-sm-none">
            <Logo  width="335" />
        </div>
        <div class="d-none d-sm-block">
            <Logo  width="335" />
        </div>
        <Transition>
            <Btn v-if=btnIsVisible text="E-shop" class="mt-5" />
        </Transition>
    </div>
</template>

<script>
import Btn from './Btn.vue';
import Logo from './Logo.vue';
export default {
    name: "HeaderComponent",
    components: { Btn, Logo },
    props: {
        btnIsVisible: Boolean
    },
}
</script>

<style scoped>
@font-face {
  font-family: "Good Times";
  src: local("Good Times"),
   url(../fonts/good_times.otf) format("truetype");
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

h1 {
    font-size: 64px;
    margin: 0;
}

</style>