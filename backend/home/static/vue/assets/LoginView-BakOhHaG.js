import{d as b,r as a,c as w,a as n,w as c,v as d,b as u,e as i,f as x,o as _,g as r}from"./index-BjXRRvzy.js";const h={class:"flex flex-col justify-center items-center"},v=n("h1",{class:"text-3xl font-bold underline"},"Login View ",-1),g=n("button",{type:"submit",class:"btn btn-wide mt-3"},"Login",-1),y={class:"flex justify-between w-60 mt-4"},k=b({__name:"LoginView",setup(L){const o=a(""),l=a(""),m=new URL("http://127.0.0.1:8000/auth/token/login/");function p(f){const s=a(null),t=new FormData;t.set("username",o.value),t.set("password",l.value),fetch(m,{method:"POST",body:t}).then(e=>e.json()).then(e=>{console.log(e),s.value=e})}return(f,s)=>{const t=x("RouterLink");return _(),w("section",h,[v,n("form",{onSubmit:p,class:"flex flex-col justify-center items-center my-5"},[c(n("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=e=>o.value=e),placeholder:"Username",class:"input input-bordered w-full max-w-xs"},null,512),[[d,o.value]]),c(n("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=e=>l.value=e),placeholder:"Password",class:"input input-bordered w-full max-w-xs"},null,512),[[d,l.value]]),g],32),n("nav",y,[u(t,{class:"btn btn-outline",to:"/"},{default:i(()=>[r("Home")]),_:1}),u(t,{class:"btn btn-outline",to:"/signup"},{default:i(()=>[r("Signup")]),_:1}),u(t,{class:"btn btn-outline",to:"/list"},{default:i(()=>[r("List")]),_:1})])])}}});export{k as default};
