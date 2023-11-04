import React from "react";
import "./EventCalender.scss";
import calImg from "../../assets/images/Calendar.jpg";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import SlideBlock from "../../Components/SliderBlock";


const localizer = momentLocalizer(moment);

const events = [

  {
    title: 'Event 27',
    start: new Date(2023, 7, 27), // August 28, 2023
    end: new Date(2023, 7, 27),
  },
  {
    title: 'Event 17',
    start: new Date(2023, 8, 17), // August 28, 2023
    end: new Date(2023, 8, 17),
  },
];
const EventCalender = () => {

  return (
    <>
      {/* <div className="wraper_calender"> */}
        {/* <img src={calImg} alt="cal-img" className="img-fluid"/> */}
        {/* <div>
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            
          />
        </div> */}
      {/* </div> */}
      <SlideBlock/>
    </>
  );
};
export default EventCalender;
