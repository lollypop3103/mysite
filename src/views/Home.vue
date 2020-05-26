<template>
  <div class="home">
    <hello />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Hello from '@/components/Hello.vue';

@Component({
  components: {
    Hello,
  },
})
export default class Home extends Vue {}
</script>
