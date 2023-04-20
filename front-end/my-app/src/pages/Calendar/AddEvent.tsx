import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export function EditEvent(props: any ) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [club, setClub] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function handleSubmit(event: { preventDefault: () => void; }) {
/*         handleClose();
        event.preventDefault();
        setTitle(title);
        setDate(date); 
        props.newEvent(title, date); 
        console.log("hello from editevent!");  */

        handleClose();
        event.preventDefault();
        //setTitle(title);
        //setDate(date); 
        setTitle('');
        setDate(''); 
        props.newEvent(title, date, location, url, club, description); 
        //console.log("hello from editevent!"); 
        // Other thing isnt getting called cuz i never called it in here tbh 
        // how to send this data to calendar on submit?

        /* event.preventDefault();
        onSubmit(title, date);
        setTitle('');
        setDate('');
        console.log(title, date) */
    
       const response = await fetch('http://localhost:3000/api/calendar/add-event', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            EventTitle: title, 
            EventDate: date, 
            EventURL: url,
            EventDescription: description, 
            EventClub: club, 
            EventLocation: location
          })
        });

        const content = await response.json();
        console.log(content)
      }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + Add an Event
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
         <Modal.Header closeButton>
                    <Modal.Title>New Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={handleSubmit}
                        id="editmodal"
                        className="w-full max-w-sm"
                    >
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    htmlFor="event-title"
                                >
                                    Event Title
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="title"
                                    type="text"
                                    value={title}
                                    onChange={(e) => {
                                        setTitle(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    htmlFor="role"
                                >
                                    Date (Format: 2023-04-23T18:30:00)
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="date"
                                    type="text"
                                    value={date}
                                    onChange={(e) => {
                                        setDate(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    htmlFor="event-title"
                                >
                                    Location
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="location"
                                    type="text"
                                    value={location}
                                    onChange={(e) => {
                                        setLocation(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    htmlFor="event-title"
                                >
                                    Who is hosting this event? 
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="club"
                                    type="text"
                                    value={club}
                                    onChange={(e) => {
                                        setClub(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    htmlFor="event-title"
                                >
                                    Url (Optional)
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="url"
                                    type="text"
                                    value={url}
                                    onChange={(e) => {
                                        setUrl(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        <div className="md:flex md:items-center mb-6">
                            <div className="md:w-1/3">
                                <label
                                    className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                    htmlFor="event-title"
                                >
                                    Event Description
                                </label>
                            </div>
                            <div className="md:w-2/3">
                                <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    id="description"
                                    type="text"
                                    value={description}
                                    onChange={(e) => {
                                        setDescription(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <button
                        className="bg-slate-400 hover:bg-slate-500 text-gray font-bold py-2 px-4 rounded"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                    <button
                        className="bg-purple-600 hover:bg-purple-700 text-gray font-bold py-2 px-4 rounded"
                        form="editmodal"
                    >
                        Add Event
                    </button>
                </Modal.Footer>
      </Modal>
    </>
  );
}
