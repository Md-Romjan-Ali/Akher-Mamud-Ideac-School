
import StudentAdmissionForm from "@/components/StudentAdmissionForm";
import { userSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function StudentForm() {
    const user = await userSession()
    if (!user) {
        redirect('login')
    }

    return <StudentAdmissionForm />;
}