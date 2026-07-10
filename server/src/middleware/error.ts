import type { NextFunction,Request,Response } from 'express';
export class AppError extends Error{constructor(public status:number,message:string){super(message)}}
export function notFound(_req:Request,res:Response){res.status(404).json({message:'Route not found'});}
export function errorHandler(err:unknown,_req:Request,res:Response,_next:NextFunction){
 const e=err instanceof AppError?err:new AppError(500,'Unexpected server error');
 res.status(e.status).json({message:e.message});
}
