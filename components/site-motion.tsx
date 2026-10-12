"use client";

import {useEffect} from "react";

export function SiteMotion() {
 useEffect(()=>{
  const preference=window.matchMedia("(prefers-reduced-motion: reduce)");
  let dispose=()=>{};
  const setup=()=>{
   dispose();
   if(preference.matches||!("IntersectionObserver" in window))return;
   const active=new Set<Animation>();
   const observer=new IntersectionObserver(entries=>{
    for(const entry of entries){
     if(!entry.isIntersecting)continue;
     observer.unobserve(entry.target);
     // Never hide server-rendered content or move a card beneath the pointer.
     const animation=entry.target.animate([{opacity:.85},{opacity:1}],{
      duration:280,easing:"ease-out",
     });
     active.add(animation);
     animation.finished.then(()=>active.delete(animation),()=>active.delete(animation));
    }
   },{threshold:.08,rootMargin:"0px 0px 24px 0px"});
   document.querySelectorAll<HTMLElement>(".section-heading,.regional-copy,.review-card,.why-choose-card").forEach(element=>{
    if(element.getBoundingClientRect().top>=window.innerHeight)observer.observe(element);
   });
   dispose=()=>{observer.disconnect();active.forEach(animation=>animation.cancel());active.clear();};
  };
  setup();preference.addEventListener("change",setup);
  return()=>{dispose();preference.removeEventListener("change",setup);};
 },[]);
 return null;
}
