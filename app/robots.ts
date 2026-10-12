import {ORIGIN} from "../lib/content";
export default function robots(){return{rules:{userAgent:"*",allow:"/",disallow:["/api/","/admin/"]},sitemap:ORIGIN+"/sitemap.xml"};}
