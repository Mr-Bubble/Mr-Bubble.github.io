import{_ as b,r as p,o as m,c as x,a as e,b as i,u as s,g as V,h as k,d as u,e as I,p as S,f as w}from"./index-354c5c2e.js";import{a as v,C as B,F as C,b as D,S as H,c as N}from"./index-58a83240.js";import{h as F,s as q,c as T,B as z}from"./index-2c154946.js";const U="//ws.lightstar.top";function E(l){return F.request({url:"/sky/getHeights/sky–314877984&"+l,method:"get",individuation:{app_api:U}})}const G=l=>(S("data-v-44d272ff"),l=l(),w(),l),L={class:"zh-body"},j={style:{margin:"16px"}},A=G(()=>u("div",{class:"zh_footer_tips"},[u("h4",{class:"app-font-danger"},"使用说明:"),u("p",null,"1、使用时请到游戏精灵中复制完整角色 ID"),u("p",null,"2、仅供学习交流，严禁用于商业用途，请于24小时内删除")],-1)),J={__name:"index",setup(l){const n=p({user_id:"",is_save:!1});let a=p({});const f=()=>{const{user_id:_}=n;q({message:"加载中...",forbidClick:!0}),E(_).then(t=>{T(),t.code===200?(t.data.user_id=_,v({type:"success",message:t.msg||"提交成功"}),a={...t.data}):v({type:"danger",message:t.msg||"提交失败"})})};return(_,t)=>{const c=D,h=H,r=B,g=z,y=C,o=N;return m(),x("div",L,[e(y,{onSubmit:f},{default:i(()=>[e(r,{inset:""},{default:i(()=>[e(c,{modelValue:n.user_id,"onUpdate:modelValue":t[0]||(t[0]=d=>n.user_id=d),name:"user_id",label:"角色 ID",placeholder:"请输入角色 ID",required:"",rules:[{required:!0,message:"请输入角色 ID"}]},null,8,["modelValue"]),e(c,{name:"is_save",label:"保存角色 ID"},{input:i(()=>[e(h,{modelValue:n.is_save,"onUpdate:modelValue":t[1]||(t[1]=d=>n.is_save=d)},null,8,["modelValue"])]),_:1})]),_:1}),u("div",j,[e(g,{round:"",block:"",type:"primary","native-type":"submit"},{default:i(()=>[I(" 查询身高 ")]),_:1})])]),_:1}),s(a).user_id?(m(),V(r,{key:0,inset:""},{default:i(()=>[e(o,{title:"当前用户:",value:s(a).user_id},null,8,["value"]),e(o,{title:"体型值:",value:s(a).scale},null,8,["value"]),e(o,{title:"身高值:",value:s(a).height},null,8,["value"]),e(o,{title:"当前身高:",value:s(a).currentHeight},null,8,["value"]),e(o,{title:"最高身高:",value:s(a).maxHeight},null,8,["value"]),e(o,{title:"最矮身高:",value:s(a).minHeight},null,8,["value"])]),_:1})):k("",!0),A])}}},P=b(J,[["__scopeId","data-v-44d272ff"]]);export{P as default};