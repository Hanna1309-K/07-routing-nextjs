import css from "./LayoutNotes.module.css";

export default function NotesLayout({
    children,
    sidebar,
    modal,
}: {
    children: React.ReactNode;
    sidebar: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <div className={css.layout}>
            {sidebar && (
                <aside className={css.sidebar}>
                    {sidebar}
                </aside>
            )}
            <main className={css.content}>{children}</main>
            {modal}
        </div>
    );
}