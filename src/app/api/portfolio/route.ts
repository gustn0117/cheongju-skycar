import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { getVisibleItems, getAllItems, createItem, reorderItems } from '@/lib/portfolio';

export async function GET(req: NextRequest) {
  const isAdmin = await isAuthenticated();
  const all = req.nextUrl.searchParams.get('all') === 'true';

  const items = isAdmin && all ? await getAllItems() : await getVisibleItems();
  return NextResponse.json({ items });
}

export async function POST(req: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
  }

  const body = await req.json();

  if (body.action === 'reorder') {
    await reorderItems(body.ids);
    return NextResponse.json({ success: true });
  }

  const { title, description, images } = body;
  if (!title || !images?.length) {
    return NextResponse.json({ error: '제목과 이미지는 필수입니다.' }, { status: 400 });
  }

  const item = await createItem({ title, description: description || '', images });
  return NextResponse.json({ item }, { status: 201 });
}
