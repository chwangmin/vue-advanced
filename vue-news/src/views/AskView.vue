<template>
  <div>
    <div v-for = "ask in askItems" v-bind:key="ask.id">{{ ask.title }}</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters({
      askItems : 'fetchedAsk',
    })
    // ...mapState({
    //   asks: state => state.asks
    // }),
  },
  created(){
    this.$store.dispatch('FETCH_ASKS');
  },
};
</script>

<style>

</style>