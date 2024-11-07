import React from "react";

export default function Entry({entry}) {
    console.log(entry)

    return (
        <div>
        <h2>{entry.name}</h2>
        </div>
    )
}
