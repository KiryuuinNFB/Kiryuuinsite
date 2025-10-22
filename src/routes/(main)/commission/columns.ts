import type { ColumnDef } from "@tanstack/table-core";

export type Work= {
    id: number;
    stats: "Queued" | "Working" | "Finished";
    notes: string
}

export const columns: ColumnDef<Work>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "stats",
        header: "Status",
    },
    {
        accessorKey: "notes",
        header: "Notes",
    }
]