<template>
    <div class="country-select">
        <div class="placeholder">{{ currentCountry ? currentCountry : placeholder }}</div>
        <vue-country-code @onSelect="onSelect" :dropdownOptions="{disabledDialCode:true}"></vue-country-code>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false,
            default: "País"
        }
    },
    data: function() {
        return {
            currentCountry: false,
        }
    },
    methods: {
        onSelect({name, iso2, dialCode}) {
            this.$emit('input', name)
            this.currentCountry = name
        },
    },
}
</script>

<style>
.vue-country-select .current {
    width: 100%!important;
}
.vue-country-select .current .dropdown-arrow {
    position: absolute;
    right: 5px;
}
.country-select .placeholder {
    position: absolute;
    width: 100%;
    left: 50%;
    margin-left: -50px;
}
.country-select {
  position: relative;
  display: block;
  height: 60px;
  width: 100%;
  background: #fff;
  border: 3px solid #fff;
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 15px;
  color: #2b3c6b;
  transition: all 500ms ease;
}
.vue-country-select {
  position: absolute;
  width: 90%;
}
</style>