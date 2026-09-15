import type { Metadata } from 'next';
import { PhotoshootDirectionPage } from '../../components/category/PhotoshootDirectionPage';

export const metadata: Metadata = {
  title: 'Photoshoot direction — Khoa',
};

export default function Page() {
  return <PhotoshootDirectionPage />;
}
