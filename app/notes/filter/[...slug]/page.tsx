import { fetchNotes } from "@/lib/api";
import NoteList from "@/components/NoteList/NoteList";

export default async function Page({
    params,
}: {
    params: { slug: string[] };
}) {
    const tag = params.slug?.[0];

    const filterTag = tag === "all" ? "" : tag;

    const data = await fetchNotes(filterTag, 1);

    return <NoteList notes={data.notes} />;
}