(()=>{"use strict";function e(){const t=document.querySelector(".tasks");for(;t.firstChild;)t.removeChild(t.firstChild);const d=document.createElement("button");d.innerText="Add a Task +",d.classList.add("addTaskBtn"),d.addEventListener("click",(function(){document.querySelector(".bg-modal").style.display="flex"})),t.appendChild(d);let l=0;n.forEach((d=>{const a=document.createElement("div");a.classList.add("card"),t.appendChild(a);for(let e in d){const t=document.createElement("p");t.textContent=`${d[e]}`,a.appendChild(t)}let c=document.createElement("button");c.innerText="Delete",c.classList.add("delete"),c.dataset.linkedArray=l,l++,a.appendChild(c),c.addEventListener("click",(function(){let t=c.dataset.linkedArray;n.splice(parseInt(t),1),a.remove(),e()})),a.firstChild.classList.add("task-title-card")}))}function t(){document.querySelector(".bg-modal").style.display="none"}let n=[];class d{constructor(e,t,n){this.title=e,this.description=t,this.dueDate=n}}function l(t,l,a){let c=new d(t,l,a);n.push(c),e()}const a=document.forms["add-form"];a.addEventListener("submit",(function(e){e.preventDefault(),l(a.querySelector('input[name="title"]').value,a.querySelector('input[name="description"]').value,a.querySelector('input[name="dueDate"]').value),t()})),document.querySelector(".close").addEventListener("click",t),l("Gym","Upper body day","11/07/22")})();