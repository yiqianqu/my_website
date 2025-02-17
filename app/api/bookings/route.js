import { db } from "@/app/firebase";
import { collection, addDoc } from "firebase/firestore";

export async function POST(req) {
  try {
    const { name, email, date } = await req.json();
    
    const docRef = await addDoc(collection(db, "bookings"), {
      name,
      email,
      date,
      createdAt: new Date(),
    });

    return new Response(JSON.stringify({ success: true, id: docRef.id }), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
