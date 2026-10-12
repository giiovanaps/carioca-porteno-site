"use client";

import {useEffect} from "react";

export function SiteMotion() {
 useEffect(()=>{
  const preference=window.matchMedia("(prefers-reduced-motion: reduce)");
  let dispose=()=>{};
  const setup=()=>{
   dispose();
   if(preference.matches)return;
   const animations:Animation[]=[];
   const targets=Array.from(document.querySelectorAll<HTMLElement>(".section-heading,.service-card,.destination,.regional-card,.review-card,.review-invite,.steps li,.photo-grid button,.why-choose-card,.contact-copy,.booking-panel,.faq-list details,.service-hero-figure,.service-detail-grid>*,.itinerary-card"));
   const reveal=(element:HTMLElement)=>{
    element.removeAttribute("data-motion-pending");
    const siblings=element.parentElement?Array.from(element.parentElement.children):[];
    const index=siblings.indexOf(element);
    animations.push(element.animate([{opacity:0,transform:"translateY(24px)"},{opacity:1,transform:"translateY(0)"}],{duration:650,delay:Math.min(Math.max(index,0)*65,260),fill:"backwards",easing:"cubic-bezier(.22,1,.36,1)"}));
   };
   const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{if(entry.isIntersecting){reveal(entry.target as HTMLElement);observer.unobserve(entry.target);}});
   },{threshold:.08,rootMargin:"0px 0px -24px 0px"});
   targets.forEach(element=>{
    if(element.getBoundingClientRect().top>window.innerHeight){element.setAttribute("data-motion-pending","");observer.observe(element);}
    else reveal(element);
   });
   document.querySelectorAll<HTMLElement>(".hero-content>.eyebrow,.hero h1,.hero-content>p,.hero-buttons").forEach((element,index)=>{
    animations.push(element.animate([{opacity:0,transform:"translateY(18px)"},{opacity:1,transform:"translateY(0)"}],{duration:850,delay:120+index*100,fill:"backwards",easing:"cubic-bezier(.22,1,.36,1)"}));
   });
   const photo=document.querySelector<HTMLElement>(".hero-photo");
   const hero=document.querySelector<HTMLElement>(".hero");
   const progress=document.querySelector<HTMLElement>(".scroll-progress");
   const desktop=window.matchMedia("(min-width: 761px) and (hover: hover)");
   let frame=0;
   const update=()=>{
    frame=0;
    const distance=document.documentElement.scrollHeight-window.innerHeight;
    progress?.style.setProperty("--scroll-progress",String(distance>0?Math.min(window.scrollY/distance,1):0));
    if(photo&&hero&&desktop.matches){
     const bounds=hero.getBoundingClientRect();
     if(bounds.bottom>0&&bounds.top<window.innerHeight)photo.style.transform=`translateY(${Math.min(Math.max(-bounds.top*.045,-8),16)}px) scale(1.035)`;
    }else if(photo)photo.style.removeProperty("transform");
   };
   const onScroll=()=>{if(!frame)frame=window.requestAnimationFrame(update);};
   const onFocus=(event:FocusEvent)=>{
    if(event.target instanceof HTMLElement){const element=event.target.closest<HTMLElement>("[data-motion-pending]");if(element){observer.unobserve(element);element.removeAttribute("data-motion-pending");}}
   };
   window.addEventListener("scroll",onScroll,{passive:true});
   window.addEventListener("resize",onScroll,{passive:true});
   document.addEventListener("focusin",onFocus);
   update();
   dispose=()=>{
    observer.disconnect();animations.forEach(animation=>animation.cancel());
    targets.forEach(element=>element.removeAttribute("data-motion-pending"));
    window.cancelAnimationFrame(frame);
    window.removeEventListener("scroll",onScroll);window.removeEventListener("resize",onScroll);
    document.removeEventListener("focusin",onFocus);
    photo?.style.removeProperty("transform");progress?.style.removeProperty("--scroll-progress");
   };
  };
  setup();preference.addEventListener("change",setup);
  return()=>{dispose();preference.removeEventListener("change",setup);};
 },[]);
 return <div className="scroll-progress" aria-hidden="true"/>;
}
