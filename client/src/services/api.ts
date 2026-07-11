const API='http://localhost:4000/api';
export async function api<T>(path:string,options:RequestInit={}){
 const token=localStorage.getItem('token');
 const headers=new Headers(options.headers);
 headers.set('Content-Type','application/json');
 if(token)headers.set('Authorization',`Bearer ${token}`);
 const r=await fetch(API+path,{...options,headers});
 if(r.status===204)return undefined as T;
 const data=await r.json();
 if(!r.ok)throw new Error(data.message||'Request failed');
 return data as T;
}
