import{s as n}from"./state-662e3508.js";import{_ as u,r as _,o as s,c as o,a as t,t as l,i as c,g as d,h as m,F as g,e as h}from"./index-20a46d4c.js";const p="/pictionIA/assets/score-70-a292a969.webp",f="/pictionIA/assets/score-50-d2b5e051.webp",v="/pictionIA/assets/score-30-f58ef046.webp";const b={data(){return{store:n,totalPourcent:0}},mounted(){n.questionNumber=1,this.totalPourcent=n.pourcentQuestions.reduce((i,r)=>i+r,0)}},y=t("img",{src:h,id:"logo",alt:"logo pictionAi"},null,-1),C=t("br",null,null,-1),I={class:"scoreContent"},w={key:0,class:"resultContent row"},x={class:"giftText col-lg-6 col-sm-12"},S=t("h2",null,"C'est fini",-1),P=t("br",null,null,-1),V=t("span",{class:"yourScore"},"Votre score moyen est de : ",-1),k=t("div",{class:"giftImageContainer col-lg-6 col-sm-12"},[t("div",{class:"giftImage"},[t("img",{class:"giftImageSrc",src:p,alt:"Score supérieur à 70 !"})])],-1),q={key:1,class:"resultContent row"},M={class:"giftText col-lg-6 col-sm-12"},N=t("h2",null,"C'est fini",-1),T=t("br",null,null,-1),A=t("span",{class:"yourScore"},"Votre score moyen est de : ",-1),B=t("div",{class:"giftImageContainer col-lg-6 col-sm-12"},[t("div",{class:"giftImage"},[t("img",{class:"giftImageSrc",src:f,alt:"Score supérieur à 50 !"})])],-1),R={key:2,class:"resultContent row"},z={class:"giftText col-lg-6 col-sm-12"},j=t("h2",null,"C'est fini",-1),D=t("br",null,null,-1),F=t("span",{class:"yourScore"},"Votre score moyen est de : ",-1),L=t("div",{class:"giftImageContainer col-lg-6 col-sm-12"},[t("div",{class:"giftImage"},[t("img",{class:"giftImageSrc",src:v,alt:"Score inférieur à 50"})])],-1),E=t("br",null,null,-1),Q=t("button",{type:"button",class:"btn btn-warning btn-lg",id:"nouvellePartie"},"Nouvelle partie",-1),G=t("br",null,null,-1),H=t("br",null,null,-1);function J(i,r,K,O,e,U){const a=_("RouterLink");return s(),o(g,null,[y,C,t("div",I,[Math.trunc(e.totalPourcent/5)>=70?(s(),o("div",w,[t("div",x,[t("p",null,[S,P,V,t("h3",null,l(Math.trunc(e.totalPourcent/5))+"%",1)]),c(" Bonne nouvelle vous avez un score extra à ce jeu ! Par contre, la mauvaise c'est que vous avez eu 0 au test de Turing. ")]),k])):Math.trunc(e.totalPourcent/5)>=50?(s(),o("div",q,[t("div",M,[t("p",null,[N,T,A,t("h3",null,l(Math.trunc(e.totalPourcent/5))+"%",1)]),c(" Vous ne seriez pas un robot déguisé en humain par hasard ? ")]),B])):(s(),o("div",R,[t("div",z,[t("p",null,[j,D,F,t("h3",null,l(Math.trunc(e.totalPourcent/5))+"%",1)]),c(" Dommage ! Mais bon cela prouve bien que nous sommes la race supérieure et que notre conquête du monde est bien justifiée ! ")]),L]))]),E,d(a,{to:"/question"},{default:m(()=>[Q]),_:1}),G,H],64)}const Y=u(b,[["render",J]]);export{Y as default};