<template>
    <button type="button" class="my-btn">
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
.my-btn {
    border-radius: 5rem;
    color: white;
    background-color: grey;
    font-size: 1.25rem;
    padding: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border: none;
    background-color: rgb(83, 83, 83);
    transition: 0.2s background-color ease;
}

.my-btn:hover {
    background-color: #04AA6D;
    transition: 0.2s background-color ease;
}

</style>