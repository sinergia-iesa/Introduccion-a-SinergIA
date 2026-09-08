<template>
  <footer
    class="prep-page-number"
    :class="{ 'prep-page-number--light': $nav.currentPage === 1 }"
  >
    {{ $nav.currentPage }} / {{ $nav.total }}
  </footer>
</template>

<style scoped>
.prep-page-number {
  position: absolute;
  right: 14px;
  bottom: 10px;
  z-index: 20;
  font-family: 'Inter', sans-serif;
  font-size: 0.72rem;
  color: rgba(0, 0, 0, 0.38);
  pointer-events: none;
  user-select: none;
}

/* En la portada el fondo es oscuro, así que el número debe ser claro */
.prep-page-number--light {
  color: rgba(255, 255, 255, 0.55);
}
</style>
