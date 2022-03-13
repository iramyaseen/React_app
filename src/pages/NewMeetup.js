import Forms from "./Forms";
import {useEffect} from "react"
function NewMeetup() {
  function addMeetupHandler(MeetupObjectData) {
    fetch(
      "https://react-from-starting-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(MeetupObjectData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  return <Forms />;
}

export default NewMeetup;
