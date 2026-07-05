import { connectMongo } from "@/lib/db";
import auth from "@/lib/auth";
import Student from "@/models/Student";
import Teacher from "@/models/Teacher";
import { z } from "zod";

const registerSchema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(8),
    role: z.enum(["student", "admin"]),
    className: z.string().optional(),
    section: z.string().optional(),
    roll: z.string().optional(),
    studentId: z.string().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
});

export async function POST(request) {
    const body = await request.json().catch(() => ({}));
    const parsed = registerSchema.safeParse(body);
    if (!parsed.success) {
        return new Response(JSON.stringify({ error: parsed.error.flatten().fieldErrors }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
        });
    }

    const { name, email, password, role, className, section, roll, studentId, phone, address } = parsed.data;
    await connectMongo();

    const signUpRequest = new Request(`${new URL(request.url).origin}/api/auth/sign-up/email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
    });

    const signUpResponse = await auth.handler(signUpRequest);
    if (!signUpResponse.ok) {
        return signUpResponse;
    }

    if (role === "student") {
        await Student.create({
            name,
            email,
            className: className || "Class 1",
            section: section || "A",
            roll: roll || "0",
            studentId: studentId || `${Date.now()}`,
            phone: phone || "",
            address: address || "",
            role,
        });
    } else {
        await Teacher.create({
            name,
            email,
            subject: "General",
            phone: phone || "",
            image: "",
            role,
        });
    }

    return signUpResponse;
}
