import { NextRequest, NextResponse } from 'next/server';
import { isAuthenticated } from '@/lib/auth';
import { updateItem, deleteItem } from '@/lib/portfolio';

export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
  }

  const { id } = await params;
  const body = await req.json();
  const item = await updateItem(id, body);

  if (!item) {
    return NextResponse.json({ error: '항목을 찾을 수 없습니다.' }, { status: 404 });
  }

  return NextResponse.json({ item });
}

export async function DELETE(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: '인증이 필요합니다.' }, { status: 401 });
  }

  const { id } = await params;
  const deleted = await deleteItem(id);

  if (!deleted) {
    return NextResponse.json({ error: '항목을 찾을 수 없습니다.' }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
