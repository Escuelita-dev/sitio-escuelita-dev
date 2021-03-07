<template>
    <li :class="{accordion: true, block: true, 'cursor-pointer': true, 'active-block': mostrar}" @click="mostrar = !mostrar">
        <div :class="{'acc-btn': true, 'active': mostrar}">
            <div class="icon-outer"><i class="fas fa-angle-down"></i></div>
            <h4>{{ pregunta.Pregunta }}</h4>
        </div>
        <div :class="{'acc-content': true, current: mostrar}" :style="'display: ' + (mostrar ? 'block' : 'none') + ';'">
            <div class="content">
                <div class="text" v-html="$md.render(pregunta.Respuesta)"></div>
            </div>
        </div>
    </li>
</template>


<script>
export default {
    props: {
        pregunta: {
            type: Object,
            required: true
        }
    },
    data: function() {
        return {
            mostrar: false
        }
    }
}
</script>