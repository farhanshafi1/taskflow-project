import type { NextFunction,Request,Response } from 'express';
import { verifyToken } from '../lib/auth.js';
export function requireAuth(req:Request,res:Response,next:NextFunction){
 const header=req.headers.authorization;
 if(!header?.startsWith('Bearer ')) return res.status(401).json({message:'Authentication required'});
 try{req.user=verifyToken(header.slice(7));next();}catch{return res.status(401).json({message:'Invalid or expired token'});}
}
