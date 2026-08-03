"use client";

import { studentResultPost } from "@/lib/post";
import { Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

export function AddResultModal({ email }) {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const resultPayload = {
            ...data,
            email
        }
        const postResult = await studentResultPost(resultPayload)
        console.log(postResult, resultPayload);
    };
    return (
        <Modal>
            <Button variant="secondary">Add</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and we will get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                                    <TextField className="w-full" name="subject" variant="secondary">
                                        <Label>Subject Name</Label>
                                        <Input
                                            type="text"
                                            required
                                            name="subject"
                                            placeholder="e.g. Mathematics"
                                        />
                                    </TextField>
                                    <TextField className="w-full" name="marks" variant="secondary">
                                        <Label>Marks Obtained</Label>
                                        <Input
                                            type="number"
                                            name="marks"
                                            required
                                            min="0"
                                            max="100"
                                            placeholder="e.g. 85"
                                        />
                                    </TextField>
                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button slot="close" type="submit">Post Result</Button>
                                    </Modal.Footer>
                                </form>
                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}