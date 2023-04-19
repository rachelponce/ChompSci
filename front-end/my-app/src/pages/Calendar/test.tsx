import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import "../Calendar/Calendar-page.css"
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react' 
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
    }
  ])

function newEvent(t: string, d:string, l:string, u:string, c:string, de:string) {// current problem: this isnt getting called 
  console.log("hello from NewEvent")
  let newEvent = {
      title: t, 
      date: d, 
      location: l, 
      url: u, 
      club: c,
      description: de
  }
  setEvents([...events, newEvent])
  console.log("hello from NewEvent")
  console.log(events)
}

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
