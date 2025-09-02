export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="text-4xl font-bold">Welcome to Kavey Code</h1>
      <p className="text-lg">Your one-stop solution for all coding needs.</p>
      <footer className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Kavey Code. All rights reserved.
      </footer>
    </div>
  );
}
