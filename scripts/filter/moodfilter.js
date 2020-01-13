import { useEntries } from "../Journal/JournalDataProvider.js";
import JournalEntryComponent from "../Journal/JournalEntry.js";



const eventHub = document.querySelector(".container");
const content = document.querySelector("#entryLog")
export const moodFilter = () => {
    eventHub.addEventListener("filterClick", event => {
        const allEntries = useEntries()
        const mood = event.detail.mood
        console.log(mood)
        const matchingEntries = allEntries.filter(entry => {
            if (entry.mood.toLowerCase() === mood.toLowerCase()) {
                return entry
            }
        })
        render(matchingEntries)
    })

    const render = (entries) => {
        content.innerHTML = `
        <section class="entryList">
        ${
            entries.map(
                (currentEntry) => {
                    return JournalEntryComponent(currentEntry)
                }
            ).join("")
        }
        </section>
        `
    }

}