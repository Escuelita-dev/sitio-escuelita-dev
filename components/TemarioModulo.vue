<template>
    <li :class="{accordion: true, block: true, 'active-block': activo}" @click="activo = !activo">
        <div :class="{'acc-btn': true, active: activo}">
            <div class="icon-outer"><i class="fas fa-angle-down"></i></div>
            <h4>{{ modulo.Titulo }}</h4>
        </div>
        <div class="acc-content current" :style="{display: activo ? 'block' : 'none'}">
            <div class="content">
                <div class="text">{{ modulo.Contenido }}</div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        modulo: {
            type: Object,
            required: true
        },
        activar: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data: function () {
        return {
            activo: false
        }
    },
    mounted: function() {
        this.activo = this.activar
    }
}
</script>