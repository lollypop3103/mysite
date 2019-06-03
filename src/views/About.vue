<template>
  <div class="about">
    <introduction />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Introduction from "@/components/Introduction.vue"; // @ is an alias to /src

@Component({
  components: { Introduction }
})
export default class About extends Vue {}
</script>
