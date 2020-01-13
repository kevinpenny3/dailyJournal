import { saveEntry, useEntries, editEntry } from "../Journal/JournalDataProvider.js"



const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".journalForm")

const JournalFormComponent = () => {


    eventHub.addEventListener("editButtonClicked", event => {
        const entryToBeEdited = event.detail.entryId

        const allEntriesArray = useEntries()

        const theFoundedEntry = allEntriesArray.find(
            (currentEntryObject) => {
                return currentEntryObject.id === parseInt(entryToBeEdited, 10)
            }
        )
        document.querySelector("#editedEntry").value = theFoundedEntry.id
        document.querySelector("#concept--textbox").value = theFoundedEntry.concept
        document.querySelector("#journal__entry").value = theFoundedEntry.entry
        document.querySelector("#mood-select").value = theFoundedEntry.mood
    })


    eventHub.addEventListener("click", event => {
        if (event.target.classList.contains("filter")) {
          const mood = event.target.value
          const message = new CustomEvent("filterClick", {
            detail: {
              mood: mood
            }
          })
          eventHub.dispatchEvent(message)
        }
      })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveEntry") {

        const hiddenInputValue = document.querySelector("#editedEntry").value

        // If so, edit the note with a PUT operation
        if (hiddenInputValue !== "") {
            const editedEntry = {
                id: parseInt(document.querySelector("#editedEntry").value, 10),
                concept: document.querySelector("#concept--textbox").value,
                entry: document.querySelector("#journal__entry").value,
                mood: document.querySelector("#mood-select").value,
                date: Date.now()
            }
            editEntry(editedEntry).then(() => {
                eventHub.dispatchEvent(new CustomEvent("entryHasBeenEdited"))
            })
        } else {
    
            const newEntry = {

                "concept": document.querySelector("#concept--textbox").value,
                "entry": document.querySelector("#journal__entry").value,
                "mood": document.querySelector("#mood-select").value,
                "date": Date.now()
    
            }
            saveEntry(newEntry).then(
                () => {
                    const message = new CustomEvent("newEntryCreated")
                    eventHub.dispatchEvent(message)
                }
            )
        }
    }
    })
    const render = () => {

    contentTarget.innerHTML = `
        <fieldset>
        <label for="concepts__covered">Concepts Covered</label>
        <input type="text" name="concepts__covered" id="concept--textbox">
        </fieldset>
        <fieldset>
        <label for="journal__entry">Journal Entry</label>
            <textarea name="journal entry" id="journal__entry" cols="30" rows="3"></textarea>
        </fieldset>
        <fieldset>
            <label for="mood">Mood for the day</label>
            <div class="box">
            <select id="mood-select">
                <option value="" disabled selected hidden>Choose here</option>
                <option value="Happy">Happy</option>
                <option value="Sad">Sad</option>
                <option value="Excited">Excited</option>
            </select>
        </div>
        </fieldset>
        <fieldset>
        <div class="filters">
            <div class="moodFilter">
            <div class="filterLabel">Filter By Moods</div>
            <input type="radio" class="filter" name="mood" id="happyButton" value="Happy">
            <label for="happy">Happy</label>
            <input type="radio" id="sadButton" class="filter" name="mood" value="Sad">
            <label for="sad">Sad</label>
            <input type="radio" id="excitedButton" class="filter" name="mood" value="Excited">
            <label for="Excited">Excited</label>
        </div>
        </fieldset>
        <input type="hidden" id="editedEntry" name="editButton">
        <button class="submitButton" id="saveEntry" type="submit" value="Record Journal Entry">Submit</button>
        <button class="showEntriesButton" id="showEntries" type="submit" value="Show Journal Entries">Show Journal Entries</button>
     `   

}
render()
}

export default JournalFormComponent