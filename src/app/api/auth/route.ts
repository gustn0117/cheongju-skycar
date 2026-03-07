import { NextRequest, NextResponse } from 'next/server';
import { checkPassword, setSession, clearSession, isAuthenticated } from '@/lib/auth';

export async function GET() {
  const authed = await isAuthenticated();
  return NextResponse.json({ authenticated: authed });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { action, password } = body;

  if (action === 'logout') {
    await clearSession();
    return NextResponse.json({ success: true });
  }

  if (!password || !checkPassword(password)) {
    return NextResponse.json({ error: '비밀번호가 올바르지 않습니다.' }, { status: 401 });
  }

  await setSession();
  return NextResponse.json({ success: true });
}
