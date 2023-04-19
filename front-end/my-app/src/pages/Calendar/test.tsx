import {
    EventApi,
    DateSelectArg,
    EventClickArg,
    EventContentArg,
    formatDate,
  } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import "../Calendar/Calendar-page.css"
import { INITIAL_EVENTS, createEventId } from '../Calendar/event-utils'
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react' 
import {Link} from "react-router-dom"
import { EditEvent } from './AddEvent' 

function Events() {

  const [events, setEvents] = useState([
    {
      title: "Cool event", 
      date: "2023-04-22T18:30:00", 
      location: "CAR100", 
      url: "www.webkinz.com", 
      club: "Maddie Club"
    }
  ])

function newEvent(t: string, d:string, l:string, u:string, c:string) {// current problem: this isnt getting called 
  console.log("hello from NewEvent")
  let newEvent = {
      title: t, 
      date: d, 
      location: l, 
      url: u, 
      club: c
  }
  setEvents([...events, newEvent])
  console.log("hello from NewEvent")
  console.log(events)
}

function Calendar() { 

    let calendarRef: any = React.createRef(); 
  return (
    <div>
        <EditEvent newEvent={newEvent}/> 
        <FullCalendar
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
            ]}
            ref={calendarRef}
            headerToolbar={{
              left: "prev,next today customAddEventBtn",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek",
            }}
            initialView="dayGridMonth"
            events={{events}}
            // customButtons={{
            //   customAddEventBtn: {
            //     text: "Add an event",
            //     click: 
            //     // click: handleCustomAddEventBtn(),
            //   },
            // }}
            
    />
    </div>
  )
}
return (
  Calendar()
)
}



export default Events
