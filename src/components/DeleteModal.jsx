"use client";

import { deleteStudent, deleteTeacher } from "@/lib/delete";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";

export function DeleteModal({ teacher, student }) {

    const router = useRouter()
    const handleDelete = async () => {
        try {
            teacher ?
                await deleteTeacher(teacher?._id)
                :
                await deleteStudent(student?._id)
        } catch (error) {
            console.error(error);
            toast.error('Delete Fail')
        }
        router.refresh()
        toast.success('Successfully Delete')
    };

    return (
        <div className="flex flex-wrap gap-4">

            <Modal >
                <Button variant="error"
                    className="p-2 rounded-lg text-rose-500  bg-rose-50 dark:hover:bg-rose-950/40 transition-all"
                >
                    <FaTrashAlt className="text-base" />
                </Button>
                <Modal.Backdrop>
                    <Modal.Container>
                        <Modal.Dialog>
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-default text-foreground">
                                    <Rocket className="size-5" />
                                </Modal.Icon>
                                <Modal.Heading>
                                    Delete Teacher
                                </Modal.Heading>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                    Are you sure you want to delete this teacher? This action cannot be undone, and all associated data will be permanently removed.
                                </p>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button slot="close" variant="secondary">
                                    Cancel
                                </Button>
                                <Button
                                    onClick={handleDelete}
                                    slot="close"
                                >
                                    Confirm</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>

        </div>
    );
}