(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{626:(e,r,t)=>{Promise.resolve().then(t.bind(t,4873)),Promise.resolve().then(t.t.bind(t,6874,23)),Promise.resolve().then(t.t.bind(t,3063,23))},3999:(e,r,t)=>{"use strict";t.d(r,{cn:()=>s});var n=t(2596),i=t(9688);function s(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return(0,i.QP)((0,n.$)(r))}},4873:(e,r,t)=>{"use strict";t.d(r,{default:()=>k});var n=t(5155),i=t(2115),s=t(2177),a=t(4624),o=t(3999),d=t(7073);function l(e){let{className:r,...t}=e;return(0,n.jsx)(d.b,{"data-slot":"label",className:(0,o.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",r),...t})}let c=s.Op,u=i.createContext({}),m=e=>{let{...r}=e;return(0,n.jsx)(u.Provider,{value:{name:r.name},children:(0,n.jsx)(s.xI,{...r})})},x=()=>{let e=i.useContext(u),r=i.useContext(b),{getFieldState:t}=(0,s.xW)(),n=(0,s.lN)({name:e.name}),a=t(e.name,n);if(!e)throw Error("useFormField should be used within <FormField>");let{id:o}=r;return{id:o,name:e.name,formItemId:"".concat(o,"-form-item"),formDescriptionId:"".concat(o,"-form-item-description"),formMessageId:"".concat(o,"-form-item-message"),...a}},b=i.createContext({});function v(e){let{className:r,...t}=e,s=i.useId();return(0,n.jsx)(b.Provider,{value:{id:s},children:(0,n.jsx)("div",{"data-slot":"form-item",className:(0,o.cn)("grid gap-2",r),...t})})}function g(e){let{className:r,...t}=e,{error:i,formItemId:s}=x();return(0,n.jsx)(l,{"data-slot":"form-label","data-error":!!i,className:(0,o.cn)("data-[error=true]:text-destructive",r),htmlFor:s,...t})}function f(e){let{...r}=e,{error:t,formItemId:i,formDescriptionId:s,formMessageId:o}=x();return(0,n.jsx)(a.DX,{"data-slot":"form-control",id:i,"aria-describedby":t?"".concat(s," ").concat(o):"".concat(s),"aria-invalid":!!t,...r})}var h=t(5594);let p=h.z.object({name:h.z.string().min(3),email:h.z.string().email(),subject:h.z.string().min(3),message:h.z.string().min(3)});var j=t(221);function y(e){let{className:r,type:t,...i}=e;return(0,n.jsx)("input",{type:t,"data-slot":"input",className:(0,o.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",r),...i})}function w(e){let{className:r,...t}=e;return(0,n.jsx)("textarea",{"data-slot":"textarea",className:(0,o.cn)("border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",r),...t})}var N=t(7168);let k=()=>{let e=(0,s.mN)({resolver:(0,j.u)(p),defaultValues:{name:"",email:"",subject:"",message:""}});return(0,n.jsx)(c,{...e,children:(0,n.jsxs)("form",{className:"w-full",children:[(0,n.jsx)(m,{name:"name",render:e=>{let{field:r}=e;return(0,n.jsxs)(v,{className:"mb-5",children:[(0,n.jsx)(g,{children:"Name"}),(0,n.jsx)(f,{children:(0,n.jsx)(y,{placeholder:"Enter your name",...r})})]})}},"name"),(0,n.jsx)(m,{name:"email",render:e=>{let{field:r}=e;return(0,n.jsxs)(v,{className:"mb-5",children:[(0,n.jsx)(g,{children:"Email"}),(0,n.jsx)(f,{children:(0,n.jsx)(y,{placeholder:"Enter your email",...r})})]})}},"email"),(0,n.jsx)(m,{name:"subject",render:e=>{let{field:r}=e;return(0,n.jsxs)(v,{className:"mb-5",children:[(0,n.jsx)(g,{children:"Subject"}),(0,n.jsx)(f,{children:(0,n.jsx)(y,{placeholder:"Enter your subject",...r})})]})}},"subject"),(0,n.jsx)(m,{name:"message",render:e=>{let{field:r}=e;return(0,n.jsxs)(v,{className:"mb-5",children:[(0,n.jsx)(g,{children:"Message"}),(0,n.jsx)(f,{children:(0,n.jsx)(w,{placeholder:"Enter your message",...r})})]})}},"message"),(0,n.jsx)("div",{children:(0,n.jsx)(N.$,{type:"submit",children:"Send Message"})})]})})}},7168:(e,r,t)=>{"use strict";t.d(r,{$:()=>d});var n=t(5155);t(2115);var i=t(4624),s=t(2085),a=t(3999);let o=(0,s.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-white shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function d(e){let{className:r,variant:t,size:s,asChild:d=!1,...l}=e,c=d?i.DX:"button";return(0,n.jsx)(c,{"data-slot":"button",className:(0,a.cn)(o({variant:t,size:s,className:r})),...l})}}},e=>{var r=r=>e(e.s=r);e.O(0,[314,874,46,441,684,358],()=>r(626)),_N_E=e.O()}]);