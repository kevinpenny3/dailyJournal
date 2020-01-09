/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
            <p>${entry.date}</p>
            <p class="concept">${entry.concept}</p>
            <p>${entry.entry}</p>
            <p>${entry.mood}</p>
            <button class="deleteButton" id="deleteEntries--${entry.id}" type="submit" value="deleteEntry">Delete Entry</button>
            <button class="editButton" id="editEntries--${entry.id}">Edit Entry</button>
            <input type="hidden" name="entryId" id="entryId">
        </section>
        <hr>
    `
}

export default JournalEntryComponent