import{x as n,r as a}from"./B9w754QG.js";const r=n("post-store",()=>{const t=a([{title:"title-1",post_content:"content-1"},{title:"title-1",post_content:"content-1"}]);async function o(){return await $fetch("http://localhost:8000/api/posts")}async function e(s){return await $fetch(`http://localhost:8000/api/posts/${s}`)}return{posts:t,fetchData:o,singlePost:e}});export{r as u};
