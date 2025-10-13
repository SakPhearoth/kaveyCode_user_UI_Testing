import { Button } from "../components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center p-8 bg-white/30 max-w-lg mx-auto rounded-lg shadow-sm">
        <Image
          src="/404.svg"
          alt="Page Not Found"
          width={250}
          height={250}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight">
          404 - Page Not Found
        </h1>
        <p className="text-lg text-gray-700 mt-4 max-w-md mx-auto">
          Sorry, the page you are looking for does not exist, has been moved, or
          is under construction.
        </p>
        <div className="mt-8">
          <Link href="/dashboard">
            <Button size="lg">Go to Dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
