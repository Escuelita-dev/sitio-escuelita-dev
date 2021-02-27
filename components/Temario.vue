<template>
<div>
    <h3>Temario del curso</h3>
    <div class="bold-text">
        <p>El curso se divide en {{temario.Modulo.length }} módulos</p>
    </div>
    <ul class="accordion-box active-block">
        <TemarioModulo v-for="(modulo, index) in temario.Modulo" :key="index" :modulo="modulo"/>
    </ul>
</div>
</template>

<script>
export default {
    props: {
        temario: {
            type: Object,
            required: true
        }
    }
}

</script>