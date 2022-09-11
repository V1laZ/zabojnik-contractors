<template>
    <div class="body-row animated" v-observe-visibility="{
                    callback: (isVisible, entry) => visibilityChanged(isVisible, entry, animation),
                    throttle: 200,
                    intersection: {
                        threshold: 0.3,
                    },
                }">
        <div class="row mt-4" >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainBodyRowComponent',
    props: {
        animation: String,
    },
    emits: ['visible'],
    methods: {
        visibilityChanged(isVisible, entry, animation) {
            if (isVisible) {
                entry.target.classList.add(animation)
                this.$emit('visible', entry)
            }
        }
    },
}
</script>

<style scoped>
.body-row {
    margin-bottom: 2rem;
    background-color: rgba(255, 255, 255, 0.035);
    border-radius: 0.75rem;
    padding: 20px;
    padding-top: 1px;
}

.animated {
    opacity: 0;
}

.fadeInLeft {
    -webkit-animation: fadeInLeft 1.2s both;
    -moz-animation: fadeInLeft 1.2s both;
    -o-animation: fadeInLeft 1.2s both;
    animation: fadeInLeft 1.2s both;
}

@-webkit-keyframes fadeInLeft {
    0% {
        opacity: 0;
        -webkit-transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateX(0);
    }
}
@-moz-keyframes fadeInLeft {
    0% {
        opacity: 0;
        -moz-transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        -moz-transform: translateX(0);
    }
}
@-o-keyframes fadeInLeft {
    0% {
        opacity: 0;
        -o-transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        -o-transform: translateX(0);
    }
}
@keyframes fadeInLeft {
    0% {
        opacity: 0;
        transform: translateX(-50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}

.fadeInRight {
    -webkit-animation: fadeInRight 1.2s both;
    -moz-animation: fadeInRight 1.2s both;
    -o-animation: fadeInRight 1.2s both;
    animation: fadeInRight 1.2s both;
}

@-webkit-keyframes fadeInRight {
    0% {
        opacity: 0;
        -webkit-transform: translateX(50px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateX(0);
    }
}
@-moz-keyframes fadeInRight {
    0% {
        opacity: 0;
        -moz-transform: translateX(50px);
    }
    100% {
        opacity: 1;
        -moz-transform: translateX(0);
    }
}
@-o-keyframes fadeInRight {
    0% {
        opacity: 0;
        -o-transform: translateX(50px);
    }
    100% {
        opacity: 1;
        -o-transform: translateX(0);
    }
}
@keyframes fadeInRight {
    0% {
        opacity: 0;
        transform: translateX(50px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}


</style>