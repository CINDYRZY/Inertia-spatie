import{G as p,j as e,S as f,x as g}from"./app-BJHpUxsG.js";import{C as h}from"./Checkbox-cAQyyw68.js";import{T as o,I as l}from"./TextInput-Z9KikTz5.js";import{I as i}from"./InputLabel-DIrAyPk1.js";import{P as j}from"./PrimaryButton-my1e7yZj.js";import{G as b}from"./GuestLayout-Corwja3p.js";import"./ApplicationLogo-D6eB31C3.js";function I({status:t,canResetPassword:n}){const{data:a,setData:r,post:d,processing:c,errors:m,reset:u}=p({email:"",password:"",remember:!1}),x=s=>{s.preventDefault(),d(route("login"),{onFinish:()=>u("password")})};return e.jsxs(b,{children:[e.jsx(f,{title:"Log in"}),t&&e.jsx("div",{className:"mb-4 text-sm font-medium text-green-600",children:t}),e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{children:[e.jsx(i,{htmlFor:"email",value:"Email"}),e.jsx(o,{id:"email",type:"email",name:"email",value:a.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>r("email",s.target.value)}),e.jsx(l,{message:m.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(i,{htmlFor:"password",value:"Password"}),e.jsx(o,{id:"password",type:"password",name:"password",value:a.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>r("password",s.target.value)}),e.jsx(l,{message:m.password,className:"mt-2"})]}),e.jsx("div",{className:"mt-4 block",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(h,{name:"remember",checked:a.remember,onChange:s=>r("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"mt-4 flex items-center justify-end",children:[n&&e.jsx(g,{href:route("password.request"),className:"rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",children:"Forgot your password?"}),e.jsx(j,{className:"ms-4",disabled:c,children:"Log in"})]})]})]})}export{I as default};
