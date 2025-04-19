import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/home');
  // This component will never actually render anything
  // because it immediately redirects to the main home page
  return null;
}