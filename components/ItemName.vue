<template>
    <span class="item-name">{{ itemName }}</span>
</template>

<script>
import {DATA} from '../src/SatisfactoryDataAccess';

export default {
    name: 'ItemName',

    props: {
        itemId: String
    },

    computed: {
        itemName() {
            return DATA.items.get(this.itemId).name;
        }
    }
}
</script>
