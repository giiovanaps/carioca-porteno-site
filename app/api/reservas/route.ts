import {and,eq,gte} from "drizzle-orm";
import {getDb} from "../../../db";
import {reservations} from "../../../db/schema";
import {validateReservation} from "../../../lib/reservation-validation";
export async function POST(request:Request){
const origin=request.headers.get("origin");if(origin&&origin!==new URL(request.url).origin)return Response.json({error:"Origem inválida."},{status:403});
if(!request.headers.get("content-type")?.includes("application/json"))return Response.json({error:"Formato inválido."},{status:415});
try{const body=await request.text();if(body.length>12000)return Response.json({error:"Solicitação muito longa."},{status:413});let payload:unknown;try{payload=JSON.parse(body);}catch{return Response.json({error:"Dados inválidos."},{status:400});}
const today=new Intl.DateTimeFormat("en-CA",{timeZone:"America/Sao_Paulo",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());const valid=validateReservation(payload,today);if("error" in valid)return Response.json(valid,{status:400});const data=valid.data;const db=getDb();
const previous=await db.select({reference:reservations.reference}).from(reservations).where(eq(reservations.requestKey,data.requestKey)).limit(1);if(previous.length)return Response.json({reference:previous[0].reference},{status:200,headers:{"Cache-Control":"no-store"}});
const recent=await db.select({id:reservations.id}).from(reservations).where(and(eq(reservations.email,data.email),gte(reservations.createdAt,new Date(Date.now()-3600000).toISOString()))).limit(5);
if(recent.length>=5)return Response.json({error:data.language==="es"?"Ya recibimos tus solicitudes. Habla con nosotros por WhatsApp.":"Já recebemos suas solicitações. Fale com a equipe pelo WhatsApp."},{status:429});
const id=crypto.randomUUID();const reference="CPT-"+today.replaceAll("-","")+"-"+id.replaceAll("-","").slice(0,10).toUpperCase();
await db.insert(reservations).values({...data,id,reference,createdAt:new Date().toISOString()}).onConflictDoNothing({target:reservations.requestKey});const saved=await db.select({reference:reservations.reference}).from(reservations).where(eq(reservations.requestKey,data.requestKey)).limit(1);return Response.json({reference:saved[0].reference},{status:201,headers:{"Cache-Control":"no-store"}});
}catch{console.error("Reservation save failed");return Response.json({error:"Não foi possível registrar sua solicitação agora. Tente novamente ou fale pelo WhatsApp."},{status:503});}}
