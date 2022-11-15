<template>
    <div class="form">
        <select class="item" v-model="newline.category">
            <option value="">Payment description</option>
            <option v-for="category of categories" :key="category.id">{{ category.name
            }}</option>
        </select>
        <input class="item" v-model="newline.value" type="number" />
        <input class="item" v-model="newline.date" type="date" />
        <div class="buttons">
            <button v-on:click="() => this.$emit('toggle')" class="close">CANCEL</button>
            <button v-on:click="add">ADD</button>
        </div>

    </div>
</template>

<script>

export default {
    name: 'TaskForm',
    computed: {
        categories() {
            return this.$store.getters.getCategories
        }
    },
    data() {
        return {
            newline: {
                number: 0,
                date: new Date(),
                category: '',
                value: 0
            }
        }
    },
    methods: {

        add() {
            this.$emit('toggle')
            this.newline.date = this.formatDate(this.newline.date)
            this.newline.category = this.checkCategory(this.newline.category)

            this.$store.commit('setList', this.newline)

            this.toReset()
        },
        formatDate(date) {
            date = new Date(date)
            date = [date.getDate(), date.getMonth(), date.getFullYear()]
            date = date.join('.')
            return date
        },
        toReset() {
            this.newline.category = ''
            this.newline.value = 0
            this.newline.date = ''
        },
        checkCategory(category) {
            if (category == '') {
                return 'Other'
            } else {
                return category
            }
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

    input,
    select,
    textarea {
        color: #000;
    }

    .item {
        height: 30px;
        margin: 3px;
        border: 1px solid lightgrey;
        box-shadow: 0 0 10px 2px lightgrey;
    }

    .buttons {
        display: flex;
        align-content: space-between;

        .close {
            background-color: white;
            color: rgb(18, 149, 147);
            border: 1px solid rgb(18, 149, 147);
        }

        button {
            width: 93px;
        }
    }
}
</style>