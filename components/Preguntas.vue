<template>
    <ul class="accordion-box">
        <PreguntaRespuesta v-for="(pregunta, index) in preguntas" :pregunta="pregunta" :key="index"/>
    </ul>
</template>

<script>
export default {
    props: {
        preguntas: {
            type: Array,
            required: true
        }
    }
}
</script>