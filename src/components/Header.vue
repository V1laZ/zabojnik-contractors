<template>
    <div class="text-light mt-5">
        <div>
            <h1>Zábojník</h1>
            <h1>Contractors</h1>
            <h1>s.r.o.</h1>
        </div>
        <Transition>
            <Btn v-if=btnIsVisible text="E-shop" class="mt-4" />
        </Transition>
    </div>
</template>

<script>
import Btn from './Btn.vue';
    export default {
    name: "HeaderComponent",
    components: { Btn },
    props: {
        btnIsVisible: Boolean
    },
}
</script>

<style scoped>
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