
import DetailsPage from "@/components/DetailsPage";
import { getDataById } from "@/lib/get";




export default async function StudentDetailsPage({ params }) {
    const { id } = await params;
    const studentDetails = await getDataById(id)

    return (
        <div>

            <DetailsPage studentDetails={studentDetails} />
        </div>
    );
}