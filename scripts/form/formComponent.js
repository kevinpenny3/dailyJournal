const contentElement = document.querySelector(".journalForm")

const JournalFormComponent = (form) => {

    contentElement.innerHTML += `
        <fieldset>
        <label for="journal__date">Date of Entry</label>
        <input type="date">
        </fieldset>
        <fieldset>
        <label for="concepts__covered">Concepts Covered</label>
        <input type="text" name="concepts__covered" id="textbox">
        </fieldset>
        <fieldset>
        <label for="journal__entry">Journal Entry</label>
            <textarea name="journal entry" id="journal__entry" cols="30" rows="3"></textarea>
        </fieldset>
        <fieldset>
            <label for="mood">Mood for the day</label>
            <div class="box">
            <select>
                <option value="" disabled selected hidden>Choose here</option>
                <option value="happy">Happy</option>
                <option value="sad">Sad</option>
                <option value="excited">Super Excited</option>
            </select>
        </div>
        </fieldset>
        <input class="submitButton" type="submit" value="Record Journal Entry">
     `   

}

export default JournalFormComponent