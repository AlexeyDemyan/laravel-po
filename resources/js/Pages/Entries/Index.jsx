import React from "react";
import Entry from "@/Components/Entry";

export default function Index( {entries} ) {
    console.log(entries);

    return (
        <div>
            {entries.map((entry) => (
                <Entry entry={entry} />
            ))}
        </div>
    );
}
