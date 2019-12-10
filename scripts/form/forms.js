import { useJournalEntries } from "../JournalDataProvider.js";
import FormComponent from "./formComponent.js";


useJournalEntries
FormComponent



const FormMakerComponent = () => {

    const contentElement = document.querySelector(".listies")
    const entries = useJournalEntries()




    contentElement.innerHTML += `
        <section class="listies--card">
        <h3 class="listies--title">Switzerland's Top Cities</h3>
        <ul>
        ${
            city.map(
                (currentCity) => {
                    return FormComponent(currentCity)
                }
            ).join("")
        }
        </ul>
        </section>
    `
    
}

export default CityListComponent