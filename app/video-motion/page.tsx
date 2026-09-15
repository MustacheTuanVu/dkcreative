import type { Metadata } from 'next';
import { VideoMotionPage } from '../../components/category/VideoMotionPage';

export const metadata: Metadata = {
  title: 'Video & motion — Khoa',
};

export default function Page() {
  return <VideoMotionPage />;
}
