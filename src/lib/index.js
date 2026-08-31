///home/bilal-tariq/00--TALEEM/taleem.studio/src/lib/index.js


import { TaleemHttp } from "./taleem-http/index.js";

const modules = ["course", "library"];


export const http = new TaleemHttp(modules);
export const frontend = http.getFrontEnd();