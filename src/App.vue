<template>
  <ProductList/>
  <AddProduct/>
   <EditProduct/>
</template>

<script>
import ProductList from './components/ProductList.vue';
import AddProduct from './components/AddProduct.vue';
import EditProduct from './components/EditProduct.vue';

export default {
  name: 'App',
  components: {
    ProductList,
    AddProduct,
    EditProduct
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>




