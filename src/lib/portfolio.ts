import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  images: string[];
  visible: boolean;
  sortOrder: number;
  createdAt: string;
}

interface PortfolioData {
  items: PortfolioItem[];
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'portfolio.json');
const UPLOADS_DIR = path.join(DATA_DIR, 'uploads');

function ensureDirs() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

function readData(): PortfolioData {
  ensureDirs();
  if (!fs.existsSync(DATA_FILE)) {
    return { items: [] };
  }
  const raw = fs.readFileSync(DATA_FILE, 'utf-8');
  return JSON.parse(raw);
}

function writeData(data: PortfolioData) {
  ensureDirs();
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
}

export function getVisibleItems(): PortfolioItem[] {
  const data = readData();
  return data.items
    .filter((item) => item.visible)
    .sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getAllItems(): PortfolioItem[] {
  const data = readData();
  return data.items.sort((a, b) => a.sortOrder - b.sortOrder);
}

export function getItem(id: string): PortfolioItem | undefined {
  const data = readData();
  return data.items.find((item) => item.id === id);
}

export function createItem(input: { title: string; description: string; images: string[] }): PortfolioItem {
  const data = readData();
  const maxOrder = data.items.reduce((max, item) => Math.max(max, item.sortOrder), -1);
  const item: PortfolioItem = {
    id: crypto.randomUUID(),
    title: input.title,
    description: input.description,
    images: input.images,
    visible: true,
    sortOrder: maxOrder + 1,
    createdAt: new Date().toISOString(),
  };
  data.items.push(item);
  writeData(data);
  return item;
}

export function updateItem(id: string, input: Partial<Pick<PortfolioItem, 'title' | 'description' | 'images' | 'visible' | 'sortOrder'>>): PortfolioItem | null {
  const data = readData();
  const idx = data.items.findIndex((item) => item.id === id);
  if (idx === -1) return null;
  Object.assign(data.items[idx], input);
  writeData(data);
  return data.items[idx];
}

export function deleteItem(id: string): boolean {
  const data = readData();
  const idx = data.items.findIndex((item) => item.id === id);
  if (idx === -1) return false;
  const item = data.items[idx];
  // Delete associated image files
  for (const img of item.images) {
    const imgPath = path.join(UPLOADS_DIR, img);
    if (fs.existsSync(imgPath)) fs.unlinkSync(imgPath);
  }
  data.items.splice(idx, 1);
  writeData(data);
  return true;
}

export function reorderItems(ids: string[]) {
  const data = readData();
  ids.forEach((id, index) => {
    const item = data.items.find((i) => i.id === id);
    if (item) item.sortOrder = index;
  });
  writeData(data);
}

export function saveUploadedFile(buffer: Buffer, originalName: string): string {
  ensureDirs();
  const ext = path.extname(originalName).toLowerCase() || '.jpg';
  const filename = `${crypto.randomUUID()}${ext}`;
  fs.writeFileSync(path.join(UPLOADS_DIR, filename), buffer);
  return filename;
}

export function getUploadPath(filename: string): string | null {
  const filePath = path.join(UPLOADS_DIR, path.basename(filename));
  if (!fs.existsSync(filePath)) return null;
  return filePath;
}
