
function submitForm(e){
  e.preventDefault();
  const name=document.getElementById("fName")?.value.trim();
  const phone=document.getElementById("fPhone")?.value.trim();
  const type=document.getElementById("fType")?.value;
  const time=document.getElementById("fTime")?.value;
  const note=document.getElementById("fNote")?.value.trim();
  if(!name||!phone){alert("请填写姓名和联系方式");return;}
  const text=`咨询信息\n\n姓名：${name}\n联系方式：${phone}\n服务类型：${type}\n期望周期：${time}\n需求说明：${note}`;
  navigator.clipboard&&navigator.clipboard.writeText(text);
  alert("咨询信息已生成，并已尝试复制到剪贴板。\n\n"+text);
}
function toggleMenu(){
  const m=document.querySelector(".menu");
  m.style.display=m.style.display==="flex"?"none":"flex";
}
