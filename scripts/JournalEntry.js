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
        </section>
        <hr>
    `
}

export default JournalEntryComponent