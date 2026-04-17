/* eslint-disable @next/next/no-html-link-for-pages */
import css from "./SidebarNotes.module.css";

const tags = ["Work", "Personal", "Todo", "Meeting", "Shopping"];

export default function SidebarNotes() {
    return (
        <ul className={css.menuList}>
            <li className={css.menuItem}>
                <a href="/notes/filter/all" className={css.menuLink}>
                    All notes
                </a>
            </li>

            {tags.map((tag) => (
                <li key={tag} className={css.menuItem}>
                    <a
                        href={`/notes/filter/${tag.toLowerCase()}`}
                        className={css.menuLink}
                    >
                        {tag}
                    </a>
                </li>
            ))}
        </ul>
    );
}