import type { Metadata } from 'next';
import { GraphicDesignPage } from '../../components/category/GraphicDesignPage';

export const metadata: Metadata = {
  title: 'Graphic design — Khoa',
};

export default function Page() {
  return <GraphicDesignPage />;
}
