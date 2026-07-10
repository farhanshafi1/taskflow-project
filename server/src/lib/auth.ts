import jwt from 'jsonwebtoken';
export type TokenPayload={id:number;email:string;role:'USER'|'ADMIN'};
export const signToken=(payload:TokenPayload)=>jwt.sign(payload,process.env.JWT_SECRET||'dev-secret',{expiresIn:'2h'});
export const verifyToken=(token:string)=>jwt.verify(token,process.env.JWT_SECRET||'dev-secret') as TokenPayload;
