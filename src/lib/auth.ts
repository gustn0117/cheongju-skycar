import crypto from 'crypto';
import { cookies } from 'next/headers';

const COOKIE_NAME = 'admin_session';
const SECRET = process.env.ADMIN_SECRET || 'cheongju-skycar-default-secret-key';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '1234';

function generateToken(): string {
  const timestamp = Date.now().toString();
  const hmac = crypto.createHmac('sha256', SECRET).update(timestamp).digest('hex');
  return `${timestamp}.${hmac}`;
}

function verifyToken(token: string): boolean {
  const parts = token.split('.');
  if (parts.length !== 2) return false;
  const [timestamp, hmac] = parts;
  const expected = crypto.createHmac('sha256', SECRET).update(timestamp).digest('hex');
  if (hmac !== expected) return false;
  // Token expires after 24 hours
  const age = Date.now() - parseInt(timestamp, 10);
  return age < 24 * 60 * 60 * 1000;
}

export function checkPassword(password: string): boolean {
  return password === ADMIN_PASSWORD;
}

export async function setSession(): Promise<string> {
  const token = generateToken();
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 24 * 60 * 60,
    path: '/',
  });
  return token;
}

export async function clearSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function isAuthenticated(): Promise<boolean> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  if (!token) return false;
  return verifyToken(token);
}
