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

* {
  box-sizing: border-box;
  outline: 0;
  padding: 0;
  margin: 0;
  border: 0;
}

body {
  margin: 0 auto;
  max-width: 750px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  {{#if_eq cssPreprocessor "Do not use"}}{{else}}
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
  {{/if_eq}}
}
{{#if_eq cssPreprocessor "Do not use"}}
  a {
    font-weight: bold;
    color: #2c3e50;
  }
  a .router-link-exact-active {
    color: #42b983;
  }
{{/if_eq}}
</style>
