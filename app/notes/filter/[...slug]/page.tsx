import NotesClient from "../../Notes.client";

export default function Page({
    params,
}: {
    params: { slug: string[] };
}) {
    const rawTag = params.slug[0];
    const tag = rawTag === "all" ? undefined : rawTag;

    return <NotesClient tag={tag} />;
}