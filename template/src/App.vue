<template>
  <div id="app">
    <div id="nav">
      {{#router}}
      <router-link to="/">Home</router-link>
      {{/router}}
    </div>
    {{#router}}
    <router-view/>
    {{/router}}
  </div>
</template>

<style {{#if_eq cssPreprocessor "Do not use"}}{{else}} lang="{{cssPreprocessor}}" {{/if_eq}}>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
