import firebaseApp from "./firebase";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Welcome to Our Company</h1>
      <p className="mt-4 text-lg text-gray-700">Providing professional services, easy booking!</p>
      <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Book Now
      </button>
      <p className="mt-6 text-sm">Firebase Initialized: {firebaseApp ? "Yes" : "No"}</p>
    </main>
  );
}
