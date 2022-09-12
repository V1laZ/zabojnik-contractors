<template>
    <!-- Visible on wider than mobile -->
    <div class="bg-dark container brdr d-none d-sm-block">
        <h1 class="text-center text-light pt-2 mb-3">Máte zájem?</h1>
        <div class="row">
            <div class="col">
                <div class="ms-5">
                    <h2 class="text-light">Kontaktujte nás</h2>
                    <p class="text-light mb-1 ms-1">Jmeno Prijmeni</p>
                    <p class="text-light mb-1 ms-1">email</p>
                    <p class="text-light mb-1 ms-1">tel</p>
                </div>
            </div>
            <div class="col d-flex justify-content-center">
                <Logo width="200"/>
            </div>
            <div class="col d-flex justify-content-center">
                <div>
                    <h2 class="text-light">Náš e-shop</h2>
                    <div class="d-flex justify-content-center">
                        <Btn class="mt-2" text="E-shop" />
                    </div>
                </div>
            </div>
        </div>
        <p class="text-center text-light">© Zábojník Contractors s.r.o.</p>
    </div>

    <!-- Visible on mobile -->
    <div class="bg-dark container brdr d-sm-none">


                <div class="d-flex justify-content-center pt-3">
                    <div>
                        <h2 class="text-light">Kontaktujte nás</h2>
                        <p class="text-light text-center m-1">Jmeno Prijmeni</p>
                        <p class="text-light text-center m-1">email</p>
                        <p class="text-light text-center m-1">tel</p>
                    </div>
                </div>

                <div class="col d-flex justify-content-center mt-4">
                    <div>
                        <h2 class="text-light">Náš e-shop</h2>
                        <div class="d-flex justify-content-center">
                            <Btn class="mt-2" text="E-shop" />
                        </div>
                    </div>
                </div>
                
                <div class="col d-flex justify-content-center mt-4">
                    <Logo width="200"/>
                </div>
        <p class="text-center text-light">© Zábojník Contractors s.r.o.</p>
    </div>


</template>

<script>
import Logo from './Logo.vue';
import Btn from './Btn.vue';
export default {
    name: "FooterComponent",
    components: { Logo, Btn }
}
</script>

<style>
.brdr {
    border-radius: 0.75rem;
}

</style>