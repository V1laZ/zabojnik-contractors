<template>
    <nav class="navbar sticky-top navbar-expand navbar-bg" :class="{'nav-border': !btnIsVisible, 'nav-border-animated': btnIsVisible}" >
        <ul class="navbar-nav">
            <li class="nav-item">
            <a class="nav-link text-light d-inline" style="padding: 1px; padding-bottom: 4px; " href="#zahrady">Zahrady</a><p class="d-inline">|</p>
            </li>
            <li class="nav-item">
            <a class="nav-link text-light d-inline" style="padding: 1px; padding-bottom: 4px;" href="#travniky">Trávníky</a><p class="d-inline">|</p>
            </li>
            <li class="nav-item">
            <a class="nav-link text-light d-inline" style="padding: 1px; padding-bottom: 4px;" href="#materialy">Materiály</a><p class="d-inline">|</p>
            </li>
            <li class="nav-item">
            <a class="nav-link text-light d-inline" style="padding: 1px; padding-bottom: 4px;" href="#sluzby">Služby</a>
            <Transition>
                <p v-if="!btnIsVisible" class="d-none d-sm-inline">|</p>
            </Transition>
            </li>
            <Transition>
                <li v-if="!btnIsVisible" class="nav-item d-none d-sm-block">
                <a class="nav-link text-light d-inline" style="padding: 1px; padding-bottom: 4px;" href="#">E-Shop</a>
                </li>
            </Transition>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavbarComponent',
    props: {
        btnIsVisible: Boolean
    }
}
</script>

<style scoped>
.nav-border-animated::after {
    content: '';
    display: block;
    position: absolute;
    width: 0px;
    opacity: 0;
    bottom: 0;
    border-bottom: 3px solid #04aa6d8a;
    transition: 0.8s width ease, 0.8s opacity ease-out;
}

.nav-border::after {
    content: '';
    display: block;
    position: absolute;
    opacity: 1;
    width: 100%;
    bottom: 0;
    border-bottom: 3px solid #04aa6d8a;
    transition: 0.8s width ease, 0.3s opacity ease;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.navbar-bg {
    background-color: rgb(38,38,38);
}

a {
    margin: 7px;
    font-size: 20px;
    border-bottom: 2px solid transparent;
}

a:hover {
    border-bottom: 2px solid #04aa6d;
    transition: 0.5s border ease;
}

p {
    margin-left: 4px;
    margin-right: 4px;
    font-size: 20px;
}

@media only screen and (max-width: 576px) {
    p, a {
        font-size: 18px;
    }
}

.navbar {
    margin-left: -8px;
    padding-bottom: 16px;
    padding-top: 16px;
}

</style>