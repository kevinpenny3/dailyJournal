import getEntries, { useJournalEntries } from "./JournalDataProvider.js";
import EntryListComponent from "./JournalEntryLists.js";
import JournalFormComponent from "./form/formComponent.js";

JournalFormComponent()
getEntries().then(
    () => EntryListComponent()
)

useJournalEntries()


