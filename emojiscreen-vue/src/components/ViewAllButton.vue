<template>
    <button class="btn-reveal-all" title="Reveal all"><i class="fa fa-eye"></i></button>
</template>

<script>
export default {
  name: 'ViewAllButton'
}
</script>


<style scoped>

.btn-reveal-all {
  outline: none;
  cursor: pointer;
  background-color: lavender;
  border: none;
  border-radius: 100%;
  position: fixed;
  bottom: 20px;
  right: 30px;
  width: 50px;
  height: 50px;
  z-index: 9999;
}

@media screen and (max-width: 1024px){
  .btn-reveal-all {
    bottom: 5px;
    right: 5px;
  }
}

.btn-reveal-all:before {
  content: '';
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #9696D4;
  z-index: -1;
  opacity: 0;
  -webkit-transform: scale3d(0.7, 1, 1);
  transform: scale3d(0.7, 1, 1);
  -webkit-transition: -webkit-transform 0.4s, opacity 0.4s;
  transition: transform 0.4s, opacity 0.4s;
  -webkit-transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
  transition-timing-function: cubic-bezier(0.2, 1, 0.3, 1);
}

.btn-reveal-all:hover::before {
  opacity: 1;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}

.btn-reveal-all i {
  background: transparent;
  font-size: 2em;
}

</style>
