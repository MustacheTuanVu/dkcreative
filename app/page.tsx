import type { Metadata } from 'next';
import { HomePage } from '../components/HomePage';

export const metadata: Metadata = {
  title: 'Creative works exhibition — Khoa',
};

export default function Page() {
  return <HomePage />;
}
