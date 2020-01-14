import { useEntries, getEntries, deleteEntry } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"





const contentTarget = document.querySelector("#entryLog")
const eventHub = document.querySelector(".container")

const EntryListComponent = () => {
    eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.id === "showEntries") {
        // getEntries().then(
            // () => {
                const allTheEntries = useEntries()
                render(allTheEntries)
            }
          })
          
    // })

    eventHub.addEventListener("click", clickEvent => {
      if (clickEvent.target.id.startsWith("deleteEntries--")) {
          const [prefix, id] = clickEvent.target.id.split("--")

         deleteEntry(id).then( () => render(useEntries()) )
      }
  })

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("editEntries--")) {
      const [notUsed, entryId] = clickEvent.target.id.split("--")
      const editEvent = new CustomEvent("editButtonClicked", {
        detail: {
            entryId: entryId
        }
    })

    eventHub.dispatchEvent(editEvent)
    }
})

  eventHub.addEventListener("searchInitiated", event => {
    const searchTerm = event.detail.search
    console.log(searchTerm)
    const entries = useEntries()
    const matchingEntries = []

    for (const entry of entries) {
        for (const value of Object.values(entry)) {
          console.log(value)
          const valueString = String(value).toLowerCase()
            if (valueString.includes(searchTerm)) {
                matchingEntries.push(entry)
            }
        }
    }
      render(matchingEntries)
    })

eventHub.addEventListener("newEntryCreated", event => {
  const allTheEntries = useEntries()
  render(allTheEntries)
})

eventHub.addEventListener("entryHasBeenEdited", event => {
  const allTheEntries = useEntries()
  render(allTheEntries)
})

eventHub.addEventListener("filterClick", event => {
  const allTheEntries = useEntries()
  render(allTheEntries)
})



}
      const render = (entries) => {
  
      contentTarget.innerHTML = `
      <section class='journalEntryList'>
          ${
            entries.map(
              (entry) =>{
                return JournalEntryComponent(entry)
              }
            ).join("")
              }
        </section>
      `
  }




export default EntryListComponent