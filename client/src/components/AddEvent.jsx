import React, { Fragment, useContext, useState } from 'react'
import userContext from '../context/userContext';
import { addEvent } from '../services/serviceWorkers';

function AddEvent() {
  const initialState = { title: "", desc: "", imglink: "", count: 0, location: "", organizer: "", date: "" };
  const [eventDetails, setEventDetails] = useState(initialState);
  const { setMsg } = useContext(userContext)

  const handleEdit = (e) => {
    e.preventDefault();
    setEventDetails({ ...eventDetails, [e.target.id]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (eventDetails.title.trim() == "" || eventDetails.desc.trim() == "" || eventDetails.count.trim() == "" || eventDetails.location.trim() == "" || eventDetails.imglink.trim() == "" || eventDetails.organizer.trim() == "" || eventDetails.date.trim() == "") {
      setMsg("Enter all the Fields");
      return;
    }

    addEvent(eventDetails)
      .then((response) => {
        setMsg(response.message);
        setEventDetails(initialState);
      })
      .catch((e) => console.log(e.message));
  }

  return (
    <Fragment>
      <section className="page form_page">
        <form autoComplete='OFF' onSubmit={(e) => handleSubmit(e)}>
          <h1 className="form_title">Add New Event</h1>
          <div className="form_group">
            <label htmlFor="title">Event Title</label>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(e) => handleEdit(e)}
              value={eventDetails.title}
            />
          </div>

          <div className="form_group">
            <label htmlFor="desc">Description</label>
            <input
              type="text"
              name="desc"
              id="desc"
              onChange={(e) => handleEdit(e)}
              value={eventDetails.desc}
            />
          </div>
          
          <div className="form_group">
            <label htmlFor="imglink">Poster Link</label>
            <input
              type="text"
              name="imglink"
              id="imglink"
              onChange={(e) => handleEdit(e)}
              value={eventDetails.imglink}
            />
          </div>

          <div className="form_group">
            <label htmlFor="organizer">Organizer Name</label>
            <input
              type="text"
              name="organizer"
              id="organizer"
              onChange={(e) => handleEdit(e)}
              value={eventDetails.organizer}
            />
          </div>

          <div className="form_group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              name="location"
              id="location"
              onChange={(e) => handleEdit(e)}
              value={eventDetails.location}
            />
          </div>

          <div className="form_group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              id="date"
              onChange={(e) => handleEdit(e)}
              value={eventDetails.date}
            />
          </div>

          <div className="form_group">
            <label htmlFor="count">Count</label>
            <input
              type="number"
              name="count"
              id="count"
              onChange={(e) => handleEdit(e)}
              value={eventDetails.count}
            />
          </div>

          <input
            type="submit"
            value="Add Event"
          />
        </form>
      </section>
    </Fragment>
  )
}

export default AddEvent