let btnSwitch=document.querySelectorAll(".switch, .btn-switch"),form=document.querySelector("form"),btnSubmit=form.querySelector("[type='submit']"),out=document.querySelector("#out"),inp=document.querySelector("#inp");function decode(e){e.preventDefault(),Translate(inp,out)}function DecryptionEncryption(){Swap(form.querySelector("label.name.inp"),form.querySelector("label.name.out"),"innerHTML"),toggleId(btnSwitch[1],"switched"),Swap(inp,out,"placeholder"),Swap(inp,out,"value"),ChangeButtonValue()}function ChangeButtonValue(){btnSubmit.value=TO_DECRYPTION()?"ENCRYPTION\uD83D\uDD12":"DECRYPTION\uD83D\uDD13"}function TO_DECRYPTION(){return"DECRYPTION\uD83D\uDD13"==btnSubmit.value}function Translate(e,t){t.value=TO_DECRYPTION()?DecryptionWalkers(e.value):EncryptionWalkers(e.value)}function toggleId(e,t){isSwitched(e,"switched")?e.removeAttribute("id"):e.setAttribute("id",t)}function isSwitched(e,t){return e.id==t}form.addEventListener("submit",e=>decode(e)),btnSwitch.forEach(e=>e.onclick=()=>DecryptionEncryption());const DecryptionWalkers=e=>{let t={4:"a",7:"l",1:"i",0:"o",3:"e",5:"s"};return e.split("").map((e,n)=>Object.keys(t).includes(e)?t[`${e}`]:e).join("")},EncryptionWalkers=e=>{let t={a:4,l:7,i:1,o:0,e:3,s:5};return e.toLowerCase().split("").map((e,n)=>Object.keys(t).includes(e)?t[`${e}`]:e).join("")};function Swap(e,t,n=""){""==n&&([e,t]=[t,e]),""!=n&&([e[`${n}`],t[`${n}`]]=[t[`${n}`],e[`${n}`]])}