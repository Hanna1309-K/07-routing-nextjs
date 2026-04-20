import type { ReactNode } from "react";
import css from "../LayoutNotes.module.css";

export default function Layout({
    children,
    sidebar,
}: {
    children: ReactNode;
    sidebar?: ReactNode;
}) {
    return (
        <div className={css.container}>
            {sidebar}

            <main className={css.notesWrapper}>
                {children}
            </main>
        </div>
    );
}