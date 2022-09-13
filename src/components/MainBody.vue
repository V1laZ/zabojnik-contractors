<template>
    <div class="ps-1 text-light main-bg">
        <Navbar class="mb-4 d-none d-sm-block" :btnIsVisible=btnIsVisible />
        <!-- Visible on mobile -->
        <Navbar class="mb-4 mt-4 d-sm-none" :btnIsVisible=False />
        <!---->
        <h1 class="text-light">Co děláme</h1>
        <div class="container" >
            <MainBodyRow id="zahrady" @visible="playTitleAnim" animation="fadeInLeft">
                <div class="col">
                    <h3 class="d-inline-block pre-animated-h" >Projekce a realizace zahrad</h3>
                    <ul>
                        <li>parků, sídlišť, městských prostranství</li>
                        <li>náměstí, vstupních areálů význačných budov a firem, školských zařízení, sportovních areálů a dětských hřišť</li>
                        <li>zakládání a rekultivace fotbalových hřišť</li>
                        <li>doprovodnou zeleň silnic a dálnic včetně protierozních vegetačních řešení, středové pásy dálnic, protihlukové clony a krycí vegetační stěny</li>
                        <li>stromořadí, liniovou zeleň a biokoridory</li>
                        <li>vegetační úpravy skládek</li>
                        <li>inventarizace a pasporty zeleně měst a obcí</li>
                        <li>prováděcí dokumentaci všech výše uvedených typů, rozpočty a propočty finančního vyjádření</li>
                        <li>nabídky pro výběrové řízení včetně jeho organizace</li>
                    </ul>
                </div>
                <div class="col d-none d-sm-block">
                    <img class="img-fluid rounded" src="@/assets/realizace_zahrad.jpg" alt="">
                </div>
            </MainBodyRow>
            <MainBodyRow id="travniky" @visible="playTitleAnim" animation="fadeInRight">
                <div class="col order-2">
                    <h3 class="d-inline-block pre-animated-h" >Trávníky</h3>
                    <ul>
                        <li>sportovní, golfové, rekreační a stabilizující trávníky</li>
                        <li>hydroosevy, speciální dosevy apod.</li>
                        <li>poradenství v oboru</li>
                    </ul>
                </div>
                <div class="col order-1 d-none d-sm-block">
                    <img class="img-fluid rounded" src="@/assets/travnik.png" alt="">
                </div>
            </MainBodyRow>
            <MainBodyRow id="materialy" @visible="playTitleAnim" animation="fadeInLeft">
                <div class="col">
                    <h3 class="d-inline-block pre-animated-h" >Rostlinný materiál</h3>
                    <ul>
                        <li>jehličnaté dřeviny</li>
                        <li>listnaté stromy a keře</li>
                        <li>dřeviny popínavé</li>
                        <li>dřeviny vřesovištní</li>
                        <li>tvarované dřeviny (buxus)</li>
                    </ul>
                </div>
                <div class="col d-none d-sm-block">
                    <img class="img-fluid rounded" src="@/assets/rost_mat.png" alt="">
                </div>
            </MainBodyRow>
            <MainBodyRow id="materialy2" @visible="playTitleAnim" animation="fadeInRight">
                <div class="col order-2">
                    <h3 class="d-inline-block pre-animated-h" >Neživé materiály a doplňky zahrad</h3>
                    <ul>
                        <li>kůly a palisády - dřevěné od průměru 5 - 10 cm, kotvící příčky ke stromům</li>
                        <li>zahradní zeminy, rašelina, kůra nedrcená, kůra drcená a tříděná - vždy volně ložená</li>
                        <li>mulčovací netkané textilie pod kůru a oblázky</li>
                        <li>kamenná drť, oblázky, valouny, individuální kameny</li>
                        <li>přírodniny různých typů a barev</li>
                        <li>geotextilie, tkaniny příze, vázací pásky, agrotextilie, motouzy, pytle, příze, kokosové rohože</li>
                    </ul>
                </div>
                <div class="col order-1 d-none d-sm-block">
                    <img class="img-fluid rounded" src="@/assets/kamennaDrt.png" alt="">
                </div>
            </MainBodyRow>
            <MainBodyRow id="sluzby" @visible="playTitleAnim" animation="fadeInLeft">
                <div class="col">
                    <h3 class="d-inline-block pre-animated-h" >Služby</h3>
                    <ul>
                        <li>frézování pařezů</li>
                        <li>kácení stromů</li>
                    </ul>
                </div>
                <div class="col d-none d-sm-block">
                    <img class="img-fluid rounded" src="@/assets/kaceni.png" alt="">
                </div>
            </MainBodyRow>
        </div>
    </div>
</template>

<script>
import MainBodyRow from './MainBodyRow.vue';
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';
export default {
    name: "MainBodyComponent",
    components: { MainBodyRow, MainBodyRow, MainBodyRow, MainBodyRow, MainBodyRow, Navbar, Footer },
    props: {
        btnIsVisible: Boolean
    },
    methods: {
        playTitleAnim(entry) {
            entry.target.children[0].children[0].children[0].classList.add('animated-h')
        }
    }

}
</script>

<style scoped>
.pre-animated-h::after {
    content: '';
    display: block;
    position: relative;
    opacity: 0;
    width: 0;
    bottom: -5px;
    border-bottom: 2px solid #04aa6d8a;
}

.animated-h::after {
    content: '';
    display: block;
    position: relative;
    opacity: 1;
    width: 101%;
    bottom: -5px;
    border-bottom: 2px solid #04aa6d8a;
    transition: 1.5s width ease, 0.5s opacity ease;
}

#zahrady {
    scroll-margin-top: 75px;
}

#travniky {
    scroll-margin-top: 100px;
}

#materialy {
    scroll-margin-top: 100px;
}

#materialy2 {
    text-decoration: none;
}

#sluzby {
    scroll-margin-top: 100px;
}

li {
    margin: 1rem;
}

.main-bg {
    background-color: rgb(38, 38, 38);
}

</style>