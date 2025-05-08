export const poEntriesFilter = (user, entries) => {
    let entriesFiltered;

    if (user.name === "Admin") {
        entriesFiltered = entries;
    } else {
        if (user.id === 1 || user.id === 8) {
            entriesFiltered = entries.filter(
                (entry) => entry.userId === 1 || entry.userId === 8
            );
        } else {
            entriesFiltered = entries.filter(
                (entry) => entry.userId === user.id
            );
        }
    }
    return entriesFiltered;
}
