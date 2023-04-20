import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import "../Calendar/Calendar-page.css"
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react' 
import { EditEvent } from './AddEvent' 

function Events() {
  const [events, setEvents] = useState([
    {
      title: "Sprint 4", 
      date: "2023-04-19T23:00:00", 
      location: "Online", 
      url: "https://www.instagram.com/p/Cp3JPN7uCTL/", 
      club: "CEN3031",
      description: "The final stretch lets goooo"
    },

    {
      title: "WICSE GBM #10", 
      date: "2023-04-23T23:00:00", 
      location: "CSE122", 
      url: "wicse.com", 
      club: "WICSE",
      description: "WICSE GBM #3 - Chipotle Catering!"
    },

    {
      title: "Austria X UF CISE Study Abroad Deadline", 
      date: "2023-04-29T23:00:00", 
      location: " ", 
      url: " ", 
      club: "UF Study Abroad Program",
      description: "Last day to submit applications for Summer 2040 Austria Study Abroad Program"
    }
  ]) 

function newEvent(t: string, d:string, l:string, u:string, c:string, de:string) {// current problem: this isnt getting called 
  //console.log("hello from NewEvent")
  let newEvent = {
      title: t, 
      date: d, 
      location: l, 
      url: u, 
      club: c,
      description: de
  }
  setEvents([...events, newEvent])
  //window.localStorage.setItem(generateRandomString(), JSON.stringify(events))
  //setEvents([newEvent, ...events])
  //console.log("hello from NewEvent")
  console.log(events)
} 

/* window.onload = function() {
  //localStorage.setItem('arr', JSON.stringify(events))
  //localStorage.setItem('adasds', JSON.stringify(events))
  if(localStorage.getItem('arr') == null){
    window.localStorage.setItem('arr', JSON.stringify(events))
  }
}  */

var randomstring = require("randomstring")
useEffect(() => {
  //console.log('beginning of useEffect')
  window.localStorage.setItem(randomstring.generate(), JSON.stringify(events))
 // console.log('setEvents', setEvents)
 // console.log('end of useEffect')
}, [events]) 

function Calendar() { 

    let calendarRef: any = React.createRef(); 
  return (
    <div className='calendar'>
      <div className='calendar-main' role='calendar'>
        <EditEvent newEvent={newEvent}/> 
        <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
            ]}
            ref={calendarRef}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            initialView="dayGridMonth"
            events={{events}}
            eventDidMount={(info) => {
              return new bootstrap.Popover(info.el, {
                title: info.event.title,
                placement: "auto",
                container: "body", 
                trigger: "hover",
                customClass: "popoverStyle",
                content: 
                  "Event by " + info.event.extendedProps.club + 
                  "<p></p>" + 
                  "Date: " + info.event.start + 
                  "<p></p>" + 
                  "Location: " + info.event.extendedProps.location + 
                  "<p></p>" + 
                  info.event.extendedProps.description + 
                  "<p></p>" + 
                  "Click on the event for more information!",    
                html: true,
              }) 
            }
          }
            eventClick={function(info) {
              info.jsEvent.preventDefault(); 

              if (info.event.url) {
                window.open(info.event.url); 
              }
            }}
    />
    </div>
    </div>
  )
}
return (
  Calendar()
)
}



export default Events
function generateRandomString(): string {
  throw new Error('Function not implemented.')
}

