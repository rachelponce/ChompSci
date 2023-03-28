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

interface DemoAppState {
  weekendsVisible: boolean
  currentEvents: EventApi[]
}

export default class Calendar extends React.Component<{}, DemoAppState> {

sidebarEventTitle:  string = "Default event"; 
sidebarEventDate: string = "Default date"
sidebarEventTime: string = "Default time"; 
sidebarEventLocation: string = "Default location";

  state: DemoAppState = {
    weekendsVisible: true,
    currentEvents: []
  }

  render() {
    return (
      <div className='calendar'>
        {this.renderSidebar()}
        <div className='calendar-main'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            headerToolbar={{
              left: 'prev,next today',
              center: 'title',
              right: 'dayGridMonth,timeGridWeek,timeGridDay'
            }}
            events={[
              {
                title: "WiCSE GBM #3", 
                date: "2023-03-22T18:30:00", 
                location: "MCAAG186",
                url: "https://www.instagram.com/p/Cp3JPN7uCTL/"
              }, 
              {
                title: "event 2", 
                date: "2023-03-29T05:00:00",
                location: "CSE221"
              }
            ]}
            initialView='dayGridMonth'
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            weekends={this.state.weekendsVisible}
            eventDidMount={(info) => {
              return new bootstrap.Popover(info.el, {
                title: info.event.title,
                placement: "auto",
                container: "body", 
                trigger: "hover",
                customClass: "popoverStyle",
                content: 
                  info.event.start + 
                  "<p></p>" + 
                  info.event.url, 
                html: true,
              }) 
            }
          }
            // initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
            // select={this.handleDateSelect}
            // eventContent={renderEventContent} // custom render function
            eventClick={this.handleEventClick}
            // eventsSet={this.handleEvents} // called after events are initialized/added/changed/removed
            /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
          />
        </div>
      </div>
    )
  }

  renderSidebar() {
    return (
      <div className='calendar-sidebar'>
        <div className='calendar-sidebar-section'>
          <h2> {this.sidebarEventTitle} </h2>
          <h3>{this.sidebarEventDate}</h3> 
          <h3>{this.sidebarEventTime}</h3>
          <h3>{this.sidebarEventLocation}</h3>
          <h3> {this.state.currentEvents.map(renderSidebarEvent)} </h3>
        </div>
      </div>
    )
  }

  handleWeekendsToggle = () => {
    this.setState({
      weekendsVisible: !this.state.weekendsVisible
    })
  }

  handleDateSelect = (selectInfo: DateSelectArg) => {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }
  }

  handleEventClick = (clickInfo: EventClickArg) => {
    // if (window.confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    //   clickInfo.event.remove()
    // }
    this.setEventTitle(clickInfo.event.title); 
    console.log(this.sidebarEventTitle); 
    this.renderSidebar();  
    
  }

  handleEvents = (events: EventApi[]) => {
    this.setState({
      currentEvents: events
    })
  }

  setEventTitle = (title: string) => {
    this.sidebarEventTitle = title; 
  }

  setEventDate = (date: string) => {
    this.sidebarEventDate = date; 
  }

  setEventTime = (time: string) => {
    this.sidebarEventTime = time; 
  }

  setEventLocation = (location: string) => {
    this.sidebarEventLocation = location; 
  }
}

function renderEventContent(eventContent: EventContentArg) {
  return (
    <>
      <b>{eventContent.timeText}</b>
      <i>{eventContent.event.title}</i>
    </>
  )
}

function renderSidebarEvent(event: EventApi) {
  return (
    <li key={event.id}>
      <b>{formatDate(event.start!, {year: 'numeric', month: 'short', day: 'numeric'})}</b>
      <i>{event.title}</i>
    </li>
  )
}

/* {/* <ul>
            <li>Select dates and you will be prompted to create a new event</li>
            <li>Drag, drop, and resize events</li>
            <li>Click an event to delete it</li>
          </ul> }*/

          /* {/* <div className='calendar-sidebar-section'> }*/
          {/* <label>
            <input
              type='checkbox'
              checked={this.state.weekendsVisible}
              onChange={this.handleWeekendsToggle}
            ></input>
            toggle weekends
          </label> */}
        {/* </div>
        <div className='calendar-sidebar-section'>
        <h2>All Events ({this.state.currentEvents.length})</h2>
        <ul>
        {this.state.currentEvents.map(renderSidebarEvent)}
        //   </ul>
        // </div> */}