import{_ as r}from"./CmMDobZU.js";import{r as a,c as i,a as e,b as d,w as p,o as m,d as u}from"./B9w754QG.js";const x={class:"flex justify-between"},w={class:"w-[300px] mt-20"},b={__name:"login",setup(c){const o=a({name:"ben",email:"ben@example.com",password:"password"});async function n(){const s=await $fetch("http://localhost:8000/api/login",{method:"POST",body:JSON.stringify(o.value)});console.log(s)}return(s,t)=>{const l=r;return m(),i("div",x,[t[4]||(t[4]=e("div",null,null,-1)),e("div",w,[t[1]||(t[1]=e("h1",{class:"text-2xl"},"Login",-1)),t[2]||(t[2]=e("input",{type:"text",placeholder:"E-mail",class:"px-2 py-2 w-[100%] rounded-md mb-2 text-sm shadow-sm"},null,-1)),t[3]||(t[3]=e("input",{type:"text",placeholder:"Password",class:"px-2 py-2 w-[100%] mb-2 rounded-md text-sm shadow-sm"},null,-1)),d(l,{to:"/auth/register",class:"hover:underline"},{default:p(()=>t[0]||(t[0]=[u("register ?")])),_:1}),e("button",{onClick:n,class:"text-white bg-indigo-500 rounded-md px-2 py-2 w-[100%] mt-4"},"Login")]),t[5]||(t[5]=e("div",null,null,-1))])}}};export{b as default};