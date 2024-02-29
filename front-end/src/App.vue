<template>
  <div id="app">
    <!----------------
    -   Navigation   -
    ----------------->

    <nav class="local">
      <ul id="real_list" class="flexbox_container">
        <li>
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Experience</a></li>
        <li>
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <!-- Note: this is a pseudo container, for design only -->
      <ul id="pseudo_list" class="flexbox_container">
        <li class="pseudo_element"></li>
        <li class="pseudo_element"></li>
        <li class="pseudo_element"></li>
        <li class="pseudo_element"></li>
        <li class="pseudo_element"></li>
      </ul>
    </nav>

    <!-----------------
    -   Router View   -
    ------------------>

    <router-view />

    <!------------
    -   Footer   -
    ------------->

    <footer id="contact" class="section flexbox_container">
      <h2>Contact</h2>
      <nav class="footer_nav">
        <ul>
          <li>
            <a href="https://www.facebook.com/jacoba1100254352" target="_blank"
            >Facebook</a
            >
          </li>
          <li>
            <a href="https://www.github.com/Jacoba1100254352" target="_blank"
            >Github</a
            >
          </li>
          <li>
            <a href="https://www.instagram.com/jacoba1100254352" target="_blank"
            >Instagram</a
            >
          </li>
        </ul>
      </nav>
    </footer>
  </div>
</template>

<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video /* eslint-disable-line */ {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section /* eslint-disable-line */ {
    display: block;
  }

  body {
    line-height: 1;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /**************
  *   General   *
  **************/

  * {
    box-sizing: border-box;
  }

  body {
    background-color: lightblue;
    font-family: sans-serif;

    --nav_height: calc(2 * var(--size_adjustment));
    /*--common_background_color: white;*/

    --text_scalar: 1;
    --size_adjustment: 1.5;
  }

  .section {
    background-color: whitesmoke;
    padding: 10px 20px;
    margin: 1%;
    text-align: center;
  }

  h2 {
    font-weight: bold;
    text-align: center;
    font-size: 125%;
    padding-bottom: 5px;
  }

  /********************
  *   Media Screens   *
  ********************/

  @media screen and (min-width: 961px) {
    .flexbox_container {
      display: flex;
      justify-content: space-between;
      flex-flow: row wrap;
    }

    article {
      display: flex;
      flex-flow: column nowrap;
      width: 49%;
    }

    #experience ul {
      transform: translateX(2%);
    }
  }

  /* Tablet Styles */
  @media only screen and (min-width: 401px) and (max-width: 960px) {
    body {
      width: 100%;
    }

    ul.flexbox_container {
      flex-flow: row wrap;
    }

    nav.local {
      width: 100%;
    }

    nav.local ul li {
      width: 100%;
    }

    .section {
      width: 100%;
    }
  }

  /*****************
  *   Navigation   *
  *****************/

  /*nav.local,*/
  /*#real_list,*/
  /*#pseudo_list {*/
  /*  margin-bottom: 2%;*/
  /*}*/

  nav.local {
    position: relative;
  }

  nav.local li {
    width: calc(100% / 5);
  }

  nav.local a {
    text-decoration: none;
    color: black;
    display: block;
    padding: 3%;
  }

  ul.flexbox_container {
    flex-flow: row nowrap;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
  }

  li.pseudo_element {
    background-color: rgb(160, 160, 160);
  }

  #pseudo_list li {
    min-width: 80px;
  }

  #pseudo_list {
    outline: 1px solid;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }

  #real_list,
  #real_list li {
    text-align: center;
    align-items: center;
    z-index: 1;
  }

  nav.local > ul > li {
    width: 20%;
    line-height: var(--nav_height);
  }

  /*************
  *   Footer   *
  *************/

  /* footer a{ display: block; } */
  /* footer a:link, footer a:visited, footer a:focus{ background: rgb(128,128,128); }
  footer a:hover{  background: rgb(110,110,110); }
  footer a:active{ background: rgb(100,100,100); } */

  footer h2 {
    width: 100%;
  }

  footer nav {
    width: 100%;
  }

  footer ul {
    display: flex;
    width: 100%;
    justify-content: space-around;
    list-style: none;
  }
</style>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "vuex";

export default defineComponent({
	name: "App", // Replace with your component name
	setup() {
		const store = useStore();
	},
});
</script>