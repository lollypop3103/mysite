<template>
  <div class="skills">
    <skills />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Skills from '@/components/Skills.vue';

@Component({
  components: { Skills },
})
export default class About extends Vue {}
</script>
<style lang="stylus" scoped>
@import '../../node_modules/bulma.styl/bulma.styl';

.font-awesome-icon {
  margin-right: 8px;
}

a {
  color: #4a4a4a;
}
</style>
