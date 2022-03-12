import classes from "../pages/FormsStyle.module.css";
import React, { useRef } from "react";
function Forms(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function SubmitHandler(event) {
    event.preventDefault();
    const enterTitle = titleInputRef.current.value;
    const enterImage = imageInputRef.current.value;
    const enterAddress = addressInputRef.current.value;
    const enterDescription = descriptionInputRef.current.value;
    
    const MeetupObjectData = {
      title: enterTitle,
      image: enterImage,
      address: enterAddress,
      description: enterDescription,
    };
    console.log(MeetupObjectData);
    
    props.onAddMeetup(MeetupObjectData)
  }
  return (
    <>
      <h1 className={classes.heading}>Add Meetup</h1>
      <form className={classes.form} onSubmit={SubmitHandler}>
        <div className={classes.textTitle}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={classes.textTitle}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={classes.textTitle}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={classes.textarea}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            row="5"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        <div>
          <button className={classes.btn}>Add Meetup</button>
        </div>
      </form>
    </>
  );
}

export default Forms;
