let journalEntries = []

export const saveEntry = entry => {
    return fetch('http://localhost:3000/entries', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
    .then(getEntries)
}

export const editEntry = (entryObject) => {
    return fetch(`http://localhost:3000/entries/${entryObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObject)
    })
        .then(getEntries)

}


export const getEntries = () => {     

    return fetch("http://localhost:3000/entries")
        .then(response => response.json())

        .then(
            parsedEntries => {
                journalEntries = parsedEntries.slice()
            }
        )
}

export const deleteEntry = entryId => {
    return fetch(`http://localhost:3000/entries/${entryId}`, {
        method: "DELETE"
    })
        .then(getEntries)
}

export const useEntries = () => {
    return journalEntries
}

// export const useJournalEntries = () => {
//     const sortedByDate = journalEntries.sort(
//         (currentEntry, nextEntry) =>
//             Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//     )
//     return sortedByDate
// }