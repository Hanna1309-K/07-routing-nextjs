import type { ReactNode } from "react";
import css from "./LayoutNotes.module.css";
import SidebarNotes from "../../components/SidebarNotes/SidebarNotes";

export default function Layout({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <div className={css.container}>
            <aside className={css.sidebar}>
                <SidebarNotes />
            </aside>

            <main className={css.notesWrapper}>
                {children}
            </main>
        </div>
    );
}