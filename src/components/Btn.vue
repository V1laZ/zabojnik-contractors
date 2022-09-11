<template>
    <button type="button" class="btn btn-secondary btn-lg">
        {{ text }}
    </button>
</template>

<script>
    export default {
        name: 'BtnComponetn',
        props: {
            text: String
        }
    }
</script>

<style scoped>
.btn {
    border-radius: 5rem;
    color: white;
}

.btn:hover {
    background-color: #04AA6D;
}

.btn-secondary {
    background-color: rgb(83, 83, 83);
    border: none;
}


</style>