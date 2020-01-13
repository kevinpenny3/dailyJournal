import { getEntries } from "./Journal/JournalDataProvider.js"
import EntryListComponent from "./Journal/JournalEntryLists.js"
import JournalFormComponent from "./form/formComponent.js"
import { moodFilter } from "./filter/moodfilter.js"

JournalFormComponent()

getEntries()
    .then(EntryListComponent)
    .then(moodFilter)



