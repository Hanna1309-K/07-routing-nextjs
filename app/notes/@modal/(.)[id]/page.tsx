"use client";

import { useRouter } from "next/navigation";
import Modal from "@/components/Modal/Modal";
import NotePreview from "@/components/NotePreview/NotePreview";
import { Note } from "@/types/note";

export default function NotePreviewModal({ note }: { note: Note }) {
    const router = useRouter();

    return (
        <Modal onClose={() => router.back()}>
            <NotePreview note={note} />
        </Modal>
    );
}