import{_ as b}from"./BWUHg-jy.js";import{r as p,o as y,c as v,a as e,y as c,z as m,p as n,b as h,w as k,d as N,t as S,E}from"./C4Xlz3sA.js";import{a as f}from"./CpxPsSom.js";const V={class:"bg-slate-100 h-screen"},B={class:"flex justify-between"},C={class:"w-[300px] mt-20"},L={class:"flex flex-col gap-2"},U=["disabled"],O={__name:"login",setup(j){const a=p({email:"",password:""}),i=p(!1),g=E();async function x(){var d,s,l,o,r,u;try{i.value=!0;const t=await $fetch(((d=g.public)==null?void 0:d.API_BASE_URL)+"/login",{headers:{Accept:"application/json","content-type":"application/json"},method:"POST",body:JSON.stringify(a.value)});i.value=!1,localStorage.setItem("userData",JSON.stringify({user:t==null?void 0:t.user,token:t==null?void 0:t.token})),window.location.href="/admin/dashboard"}catch(t){if(i.value=!1,((s=t==null?void 0:t.response)==null?void 0:s.status)===401&&f((o=(l=t.response)==null?void 0:l._data)==null?void 0:o.message),((r=t==null?void 0:t.response)==null?void 0:r.status)===422){const _=(u=t.response)==null?void 0:u._data;for(const w of _)f(w)}}}return(d,s)=>{const l=b;return y(),v("div",V,[e("div",B,[s[4]||(s[4]=e("div",null,null,-1)),e("div",C,[e("div",L,[s[3]||(s[3]=e("h1",{class:"text-2xl"},"Login",-1)),c(e("input",{type:"text",name:"","onUpdate:modelValue":s[0]||(s[0]=o=>n(a).email=o),placeholder:"E-mail",id:"",class:"py-2 px-2 text-sm rounded-md shadow-sm focus:ring focus:ring-blue-300"},null,512),[[m,n(a).email]]),c(e("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>n(a).password=o),type:"password",name:"",placeholder:"password",id:"",class:"py-2 px-2 text-sm rounded-md shadow-sm focus:ring focus:ring-blue-300"},null,512),[[m,n(a).password]]),h(l,{to:"/auth/register",class:"text-indigo-700 font-semibold"},{default:k(()=>s[2]||(s[2]=[N(" Create an account ")])),_:1}),e("button",{onClick:x,disabled:n(i),class:"rounded-md text-white py-2 bg-indigo-700 text-sm font-semibold"},S(n(i)?"Processing...":"Login"),9,U)])]),s[5]||(s[5]=e("div",null,null,-1))])])}}};export{O as default};
