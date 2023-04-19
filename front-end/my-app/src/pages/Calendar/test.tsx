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
import React from 'react' 
import {Link} from "react-router-dom"
import { EditEvent } from './EditEvent' 

const Calendar = () => {

    let calendarRef: any = React.createRef(); 
  return (
    <div>
        <EditEvent/>
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
export default Calendar
