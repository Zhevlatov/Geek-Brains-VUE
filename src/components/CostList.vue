<template>
    <div class="list">
        <div :class="{ item: true, header: item.number == '#' }" v-for="item of data" v-bind:key="item.id">
            <span class="number">{{ item.number }}</span>
            <span class="data">{{ item.date }}</span>
            <span class="data">{{ item.category }}</span>
            <span class="data">{{ item.value }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CostList',
    props: {
        data: {
            type: Array,
            default: []
        },
    },
    methods: {

    }
}
</script>

<style lang="scss">
.list {
    width: 500px;
    margin: 0 auto;

    .header {
        font-weight: 700;
    }

    .item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid lightgray;

        .number {
            width: 40px;
        }

        .data {
            width: 150px;
        }
    }
}
</style>