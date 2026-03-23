import { supabase, STORAGE_BUCKET } from './supabase';
import crypto from 'crypto';
import path from 'path';

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  visible: boolean;
  sort_order: number;
  created_at: string;
}

export async function getVisibleItems(): Promise<PortfolioItem[]> {
  const { data } = await supabase
    .from('portfolio')
    .select('*')
    .eq('visible', true)
    .order('sort_order');
  return data || [];
}

export async function getAllItems(): Promise<PortfolioItem[]> {
  const { data } = await supabase
    .from('portfolio')
    .select('*')
    .order('sort_order');
  return data || [];
}

export async function getItem(id: string): Promise<PortfolioItem | null> {
  const { data } = await supabase
    .from('portfolio')
    .select('*')
    .eq('id', id)
    .single();
  return data;
}

export async function createItem(input: { title: string; description: string; images: string[] }): Promise<PortfolioItem> {
  // Get max sort_order
  const { data: maxRow } = await supabase
    .from('portfolio')
    .select('sort_order')
    .order('sort_order', { ascending: false })
    .limit(1)
    .single();

  const nextOrder = (maxRow?.sort_order ?? -1) + 1;

  const { data, error } = await supabase
    .from('portfolio')
    .insert({
      title: input.title,
      description: input.description,
      images: input.images,
      sort_order: nextOrder,
    })
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateItem(id: string, input: Partial<Pick<PortfolioItem, 'title' | 'description' | 'images' | 'visible' | 'sort_order'>>): Promise<PortfolioItem | null> {
  const { data, error } = await supabase
    .from('portfolio')
    .update(input)
    .eq('id', id)
    .select()
    .single();

  if (error) return null;
  return data;
}

export async function deleteItem(id: string): Promise<boolean> {
  // Get item to delete storage files
  const item = await getItem(id);
  if (!item) return false;

  // Delete images from storage
  if (item.images.length > 0) {
    await supabase.storage.from(STORAGE_BUCKET).remove(item.images);
  }

  const { error } = await supabase
    .from('portfolio')
    .delete()
    .eq('id', id);

  return !error;
}

export async function reorderItems(ids: string[]) {
  const updates = ids.map((id, index) =>
    supabase.from('portfolio').update({ sort_order: index }).eq('id', id)
  );
  await Promise.all(updates);
}

export async function saveUploadedFile(buffer: Buffer, originalName: string): Promise<string> {
  const ext = path.extname(originalName).toLowerCase() || '.jpg';
  const filename = `${crypto.randomUUID()}${ext}`;

  const { error } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(filename, buffer, {
      contentType: `image/${ext.replace('.', '')}`,
      upsert: false,
    });

  if (error) throw error;
  return filename;
}

export function getPublicUrl(filename: string): string {
  const { data } = supabase.storage.from(STORAGE_BUCKET).getPublicUrl(filename);
  return data.publicUrl;
}
