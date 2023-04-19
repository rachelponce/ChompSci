import { ConstructionRounded } from '@mui/icons-material';
import { ColgroupHTMLAttributes, useState } from 'react';
import React from 'react'; 
import ReactDOM from 'react-dom/client';
import "./Add-Event.css"
import Calendar from "./Calendar-page"


export class eventM {
    title: string = ""; 
    date: string = ""; 
    location: string = ""; 
    description: string = ""; 
    url: string = "";  
    club: string = ""; 
    set titl(titl: string) {
        this.title = titl; 
    }
    set dat(dat: string) {
        this.date = dat; 
    }
    set loc(loc: string) {
        this.location = loc; 
    }
    set ur(ur:string) {
        this.url = ur; 
    }
    set des(des: string) {
        this.description = des; 
    }
    set cl(cl: string) {
        this.club = cl; 
    }
}; 

export const AddEventForm = ({ onSubmit }: {onSubmit:any}) => {
    const [Title, setTitle] = React.useState("");
    const [date, setDate] = React.useState("");
    const [location, setLocation] = React.useState('');
    const [url, setUrl] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [club, setClub] = React.useState('');
    const [isDisabled, setIsDisabled] = React.useState(true);


   
      async function handleSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        onSubmit(Title, date, url, description, club, location);
        setTitle('');
        setDate('');
        setUrl('')
        setDescription(''); 
        setClub(''); 
        setLocation(''); 
        setIsDisabled(true);
        console.log(Title, date, location, url, description, club)
    
       const response = await fetch('http://localhost:3000/api/calendar/add-event', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            EventTitle: Title, 
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
      
      function handleChangeTitle(event: { target: { value: string; }; }) {
        setTitle(event.target.value);
      }
      function handleChangeDate(event: { target: { value: string; }; }) {
        setDate(event.target.value);
      }
      function handleChangeLocation(event: { target: { value: string; }; }) {
        setLocation(event.target.value);
      }
      function handleChangeUrl(event: { target: { value: string; }; }) {
        setUrl(event.target.value);
      }
      function handleChangeClub(event: { target: { value: string; }; }) {
        setClub(event.target.value);
      }
      function handleChangeDescription(event: { target: { value: string; }; }) {
        setDescription(event.target.value);
      }

    return (
        <form onSubmit = {handleSubmit}>
    <div className='add-event'>
        <div className='boxes'>
      <form>
        <label>Event title:
            <p></p>
          <input
            type="text" 
            value={Title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
      </form>
      </div>
      <div className='boxes'>
      <form>
        <label>Event Date, example format: 2023-03-22T18:30:00
            <p></p>
          <input
            type="text" 
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </label>
      </form>
      </div>
      <div className='boxes'>
      <form>
        <label>Event Location:
            <p></p>
          <input
            type="text" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
      </form>
      </div>
      <div className='boxes'>
      <form>
        <label>Event URL:
            <p></p>
          <input
            type="text" 
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </label>
      </form>
      </div>
      <div className='boxes'>
      <form>
        <label>Event Description:
            <p></p>
          <input
            type="text" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </form>
      </div>
      <div className='boxes'>
      <form>
        <label>Who is hosting this event?
            <p></p>
          <input
            type="text" 
            value={club}
            onChange={(e) => setClub(e.target.value)}
          />
        </label>
      </form>
      <div className="boxes">
      <input type="submit" />
      </div>
      </div>
      </div>
      
      </form>
    );
};

// export function toJsonString(obj: eventM) {
//     var jsonString = JSON.stringify(obj); 
//     return jsonString; 
// }


export default AddEventForm