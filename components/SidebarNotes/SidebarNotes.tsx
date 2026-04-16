"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import css from "./SidebarNotes.module.css";

const tags = ["Work", "Personal", "Todo", "Meeting", "Shopping"];

export default function SidebarNotes() {
    const params = useParams();
    const currentTag = params?.tag as string | undefined;

    return (
        <ul className={css.menuList}>
            <li className={css.menuItem}>
                <Link
                    href="/notes/filter/all"
                    className={`${css.menuLink} ${!currentTag || currentTag === "all" ? css.active : ""
                        }`}
                >
                    All notes
                </Link>
            </li>

            {tags.map((tag) => (
                <li key={tag} className={css.menuItem}>
                    <Link
                        href={`/notes/filter/${tag}`}
                        className={`${css.menuLink} ${currentTag === tag ? css.active : ""
                            }`}
                    >
                        {tag}
                    </Link>
                </li>
            ))}
        </ul>
    );
}