let journalEntries = []

export const useEntries = () => {
    return journalEntries
}
console.log("*** I am going to fetch the data ***")

export const getEntries = () => {     

    return fetch("http://localhost:3000/entries")
        .then(response => response.json())

        .then(
            parsedEntries => {
                console.table(parsedEntries) 
                journalEntries = parsedEntries.slice()
            }
        )
}
console.log("I have the data")

export default getEntries


export const useJournalEntries = () => {
    const sortedByDate = journalEntries.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}