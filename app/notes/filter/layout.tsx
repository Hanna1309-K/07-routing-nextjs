import type { ReactNode } from "react";
import css from "../LayoutNotes.module.css";

export default function Layout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className={css.container}>
            <main className={css.notesWrapper}>
                {children}
            </main>
        </div>
    );
}