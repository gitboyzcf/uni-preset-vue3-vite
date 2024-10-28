<template>
  <nut-tabs v-model="state.tab11value" type="smile">
    <nut-tab-pane title="Tab 1"> Tab 1 </nut-tab-pane>
    <nut-tab-pane title="Tab 2"> Tab 2 </nut-tab-pane>
    <nut-tab-pane title="Tab 3"> Tab 3 </nut-tab-pane>
  </nut-tabs>
</template>
<script setup lang="ts">
  const state = reactive({
    tab11value: '0'
  })
</script>
