import { Link } from 'wouter';
import Navbar from '@/components/Navbar';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-8xl font-black text-[#0D1E40] mb-4">404</h1>
          <p className="text-2xl font-bold text-gray-700 mb-2">Page Not Found</p>
          <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D1E40] text-white text-sm font-bold rounded-lg hover:bg-[#0D1E40]/90 transition-all"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
