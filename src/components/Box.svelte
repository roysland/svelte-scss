<script>
export let depth = ''
export let hoverDepth = ''
export let size = ''
</script>
<div class="box { depth } { hoverDepth} { size }"><slot></slot></div>

<style lang="scss">
@import "src/sass/bds/bds_vars.scss";
@import "src/sass/bds/bds/box.scss";
</style>