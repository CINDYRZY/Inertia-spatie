import{X as f,G as j,j as e,S as v}from"./app-BJHpUxsG.js";import{A as g}from"./AuthenticatedLayout-BXwNTdzb.js";import{C as b,B as n,S as C}from"./Button-CrtORse8.js";import{C as S,I as o}from"./Card-BkM9UiTV.js";import{S as y}from"./Select2-DEaYiiQA.js";import"./ApplicationLogo-D6eB31C3.js";import"./transition-VUrhxt2Q.js";import"./index-x2-cxkkr.js";function A({auth:i}){const{user:a,roles:m}=f().props,{data:t,setData:l,post:c,errors:r}=j({name:a.name,email:a.email,selectedRoles:a.roles.map(s=>s.name),filterRole:a.roles.map(s=>({value:s.name,label:s.name})),_method:"put"}),d=m.map(s=>({value:s.name,label:s.name})),u=s=>{const x=s.map(h=>h.value);l("selectedRoles",x)},p=async s=>{s.preventDefault(),c(route("users.update",a.id),{onSuccess:()=>{C.fire({title:"Success!",text:"Data updated successfully!",icon:"success",showConfirmButton:!1,timer:1500})}})};return e.jsxs(g,{user:i.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Edit User"}),children:[e.jsx(v,{title:"Create Users"}),e.jsx(b,{children:e.jsx(S,{title:"Create new user",children:e.jsxs("form",{onSubmit:p,children:[e.jsx("div",{className:"mb-4",children:e.jsx(o,{label:"Name",type:"text",value:t.name,onChange:s=>l("name",s.target.value),errors:r.name,placeholder:"Input name user.."})}),e.jsx("div",{className:"mb-4",children:e.jsx(o,{label:"Email",type:"email",value:t.email,onChange:s=>l("email",s.target.value),errors:r.email,placeholder:"Input email user.."})}),e.jsxs("div",{className:"mb-4",children:[e.jsx("div",{className:"flex items-center gap-2 text-sm text-gray-700",children:"Roles"}),e.jsx(y,{onChange:u,defaultOptions:t.filterRole,options:d,placeholder:"Pilih Role..."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(n,{type:"submit"}),e.jsx(n,{type:"cancel",url:route("users.index")})]})]})})})]})}export{A as default};
