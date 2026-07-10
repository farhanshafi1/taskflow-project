import { z } from 'zod';
const clean=z.string().trim().min(1).max(120).transform(v=>v.replace(/[<>]/g,''));
export const registerSchema=z.object({name:clean,email:z.string().email().transform(v=>v.toLowerCase()),password:z.string().min(8).max(72)});
export const loginSchema=z.object({email:z.string().email(),password:z.string().min(1)});
export const projectSchema=z.object({title:clean,description:z.string().trim().max(1000).optional().default('')});
export const taskSchema=z.object({title:clean,description:z.string().trim().max(1000).optional().default(''),status:z.enum(['TODO','IN_PROGRESS','DONE']).optional(),priority:z.enum(['LOW','MEDIUM','HIGH']).optional(),dueDate:z.string().datetime().optional().nullable()});
