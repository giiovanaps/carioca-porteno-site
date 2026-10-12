"use client";

import {useEffect,useRef} from "react";
import {Lang,pick} from "../lib/content";
import {Icon} from "./tour-icons";

const NOTICE_SEEN_KEY="flash-presentation-notice-v1";
const COPYRIGHT_LAW="https://www.planalto.gov.br/ccivil_03/leis/l9610.htm";

export function FlashPresentation({lang}:{lang:Lang}){
 const dialog=useRef<HTMLDialogElement>(null);
 const t=(pt:string,es:string)=>pick(lang,pt,es);

 useEffect(()=>{
  try{if(window.sessionStorage.getItem(NOTICE_SEEN_KEY))return;}catch{}
  const notice=dialog.current;
  if(notice&&!notice.open&&!document.querySelector("dialog[open]")){
   notice.showModal();
   try{window.sessionStorage.setItem(NOTICE_SEEN_KEY,"seen");}catch{}
  }
 },[]);

 return <>
  <aside className="flash-presentation-banner" aria-label={t("Aviso de apresentação exclusiva","Aviso de presentación exclusiva")}>
   <div className="container flash-banner-inner">
    <span className="flash-wordmark"><svg className="flash-brand-bolt" width="26" height="38" viewBox="0 0 26 38" aria-hidden="true" focusable="false"><defs><linearGradient id="flash-brand-gradient" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#00e5ff"/><stop offset=".5" stopColor="#7863ff"/><stop offset="1" stopColor="#f32ab0"/></linearGradient></defs><path d="M16 1 2 22h10l-3 15 15-22H14z" fill="url(#flash-brand-gradient)"/></svg><span className="flash-brand-copy"><span className="flash-brand-name">FLASH SITES</span><small>{t("APRESENTAÇÃO EXCLUSIVA","PRESENTACIÓN EXCLUSIVA")}</small></span></span>
    <div><strong>{t("Uma apresentação exclusiva para a Carioca Porteño Tour.","Una presentación exclusiva para Carioca Porteño Tour.")}</strong>
     <p>{t("Se a contratação não avançar, os logos, fotos, dados e demais materiais do cliente serão retirados. O layout autoral da Flash Sites poderá ser adaptado e disponibilizado a outros clientes, respeitando direitos de terceiros e acordos já firmados. A exclusividade e a licença de uso serão definidas em contrato.","Si la contratación no avanza, se retirarán los logotipos, fotos, datos y demás materiales del cliente. El diseño de Flash Sites podrá adaptarse y ofrecerse a otros clientes, respetando los derechos de terceros y los acuerdos vigentes. La exclusividad y la licencia de uso se definirán en el contrato.")}</p>
    </div>
   </div>
  </aside>
  <div className="flash-watermark" aria-hidden="true"><span>FLASH SITES<small>{t("LAYOUT PERSONALIZADO • APRESENTAÇÃO EXCLUSIVA","DISEÑO PERSONALIZADO • PRESENTACIÓN EXCLUSIVA")}</small></span></div>
  <dialog ref={dialog} className="flash-rights-dialog" aria-labelledby="flash-rights-title" aria-describedby="flash-rights-description" onClick={event=>{if(event.target===event.currentTarget)dialog.current?.close();}}>
   <button className="flash-dialog-close circle-button" type="button" autoFocus onClick={()=>dialog.current?.close()} aria-label={t("Fechar aviso","Cerrar aviso")}><Icon name="close"/></button>
   <span className="flash-dialog-kicker">FLASH SITES</span>
   <h2 id="flash-rights-title">{t("Design exclusivo. Autoria protegida.","Diseño exclusivo. Autoría protegida.")}</h2>
   <p id="flash-rights-description">{t("Layout desenvolvido pela Flash Sites para esta apresentação personalizada. Todos os direitos sobre as criações originais da Flash Sites são reservados, nos limites da legislação aplicável.","Diseño desarrollado por Flash Sites para esta presentación personalizada. Se reservan todos los derechos sobre las creaciones originales de Flash Sites, dentro de los límites de la legislación aplicable.")}</p>
   <div className="flash-rights-warning"><strong>{t("Não copie. Não reutilize. Não encaminhe a terceiros.","No copies. No reutilices. No compartas con terceros.")}</strong><p>{t("Esta apresentação não concede autorização para reproduzir, publicar, adaptar ou compartilhar o layout, inclusive por capturas de tela, sem autorização prévia e escrita da Flash Sites, ressalvadas as hipóteses permitidas por lei.","Esta presentación no autoriza la reproducción, publicación, adaptación ni difusión del diseño, incluso mediante capturas de pantalla, sin autorización previa y escrita de Flash Sites, salvo los casos permitidos por la ley.")}</p></div>
   <p className="flash-law">{t("A reprodução ou divulgação ilícita de obra protegida pode dar origem a medidas judiciais para suspender a divulgação e buscar a indenização cabível. Base legal: Lei 9.610/1998, arts. 29 e 102.","La reproducción o difusión ilícita de una obra protegida puede dar lugar a medidas judiciales para suspender su difusión y reclamar la indemnización correspondiente. Base legal brasileña: Ley 9.610/1998, arts. 29 y 102.")} <a href={COPYRIGHT_LAW} target="_blank" rel="noopener noreferrer">{t("Consultar a lei","Consultar la ley")}<Icon name="arrow"/></a></p>
   <p className="flash-ownership-note">{t("Logos, fotos e materiais do cliente ou de terceiros permanecem com seus respectivos titulares. A visualização desta prévia não transfere direitos nem substitui um contrato.","Los logotipos, fotos y materiales del cliente o de terceros pertenecen a sus respectivos titulares. Visualizar esta propuesta no transfiere derechos ni sustituye un contrato.")}</p>
   <button className="button red flash-dialog-continue" type="button" onClick={()=>dialog.current?.close()}>{t("Continuar apresentação","Continuar presentación")}<Icon name="arrow"/></button>
  </dialog>
 </>;
}
