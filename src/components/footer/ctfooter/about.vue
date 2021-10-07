<template>
  <div class="about">
        <aside>
            <header><h4>About Universo</h4></header>
            <p>Aliquam feugiat turpis quis felis adipiscing, non pulvinar odio lacinia.
                Aliquam elementum pharetra fringilla. Duis blandit, sapien in semper vehicula,
                tellus elit gravida odio, ac tincidunt nisl mi at ante. Vivamus tincidunt nunc nibh.
            </p>
            <div>
                <a href="" class="read-more">All News</a>
            </div>
        </aside>
  </div>
</template>

<script>
export default {

}
</script>

<style>
    .about {
        color: white;
    }
    .about a {
        color: white;
    }
    .about a:hover {
        color: #ea6645;
    }
    .read-more::after {
        text-shadow: none;
        -webkit-font-smoothing: antialiased;
        font-family: 'fontawesome';
        speak: none;
        font-weight: normal;
        font-variant: normal;
        line-height: 1;
        text-transform: none;
        -moz-transition: 0.4s;
        -o-transition: 0.4s;
        -webkit-transition: 0.4s;
        transition: 0.4s;
        color: #ea6645;
        content: "\f18e";
        display: inline-block;
        font-size: 16px;
        margin-left: 5px;
        position: relative;
        top: 2px;
    }
</style>