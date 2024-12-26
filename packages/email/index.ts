import { env } from '@c14/env';
import { Resend } from 'resend';

export const resend = new Resend(env.RESEND_TOKEN);
