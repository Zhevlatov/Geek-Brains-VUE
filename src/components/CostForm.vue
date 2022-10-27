<template>
    <div class="form">
        <input class="item" v-model="category" type="text" placeholder="Payment description" />
        <input class="item" v-model="value" type="text" placeholder="Payment amount" />
        <input class="item" v-model="date" type="text" placeholder="Payment date" />
        <button v-on:click="add">ADD</button>
    </div>
</template>

<script>
export default {
    name: 'TaskForm',
    data() {
        return {
            category: '',
            value: '',
            date: ''
        }
    },
    methods: {
        add() {
            this.$emit('add', this.date, this.category, this.value)
            this.category = ''
            this.value = ''
            this.date = ''
        }
    }
}
</script>
<style lang="scss">
.form {
    margin: 0 auto;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    width: 200px;

    .item {
        height: 30px;
        margin: 3px;
        border: 1px solid lightgrey;
        box-shadow: 0 0 10px 2px lightgrey;
    }
}
</style>