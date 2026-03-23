import { NextRequest, NextResponse } from 'next/server';
import { getPublicUrl } from '@/lib/portfolio';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  const { filename } = await params;
  const publicUrl = getPublicUrl(filename);
  return NextResponse.redirect(publicUrl, 301);
}
