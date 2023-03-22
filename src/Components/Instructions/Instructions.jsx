import { Link } from "react-router-dom"
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Instructions () {
  // TODO: redo this using react hooks
  const [selectedMisoDate, setSelectedMisoDate] = useState(new Date());
  const [startCompazineDate, setCompazineDate] = useState(null)
  const [startPercocetDate, setPercocetDate] = useState(null)

  function calculateCompazineDate(date) {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear());
    newDate.setMonth(date.getMonth());
    newDate.setDate(date.getDate());
    newDate.setHours(date.getHours());
    newDate.setMinutes(date.getMinutes() + 30);
    return newDate;
  }

  function calculatePercocetDate(date) {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear());
    newDate.setMonth(date.getMonth());
    newDate.setDate(date.getDate());
    newDate.setHours(date.getHours() + 1);
    newDate.setMinutes(date.getMinutes());
    return newDate;
  }

  const handleDateChange = (date) => {
    setSelectedMisoDate(date);
    setCompazineDate(calculateCompazineDate(date))
    setPercocetDate(calculatePercocetDate(date));
  };


  return (
    <div className='container'>
      <p className='other-steps'>step two, three, four and five.</p>
      <p>when do you plan on taking the next set of pills?</p>
      <p className='warning'>remember, this date and time has to be within the range that was given to you, which is 6-72 hours after taking mifepristone. the misoprostol medication causes bleeding and cramping, so we suggest that you choose a time when you have no other obligations for the day.</p>
      <p> please select the date and time below when you will be taking the next set of pills.
      </p>
      <DatePicker
          selected={selectedMisoDate}
          onChange={handleDateChange}
          showTimeSelect
          dateFormat="Pp"
      />
      <p className='continue-break'>okay, let's continue.</p>
      <p className='step-title'>step two</p>
      <p className='step-description'>based on your input above, after having a good meal, take one compazine (10mg) and one ibuprofen (500mg) at:</p>
      <p className='time'>
        {startCompazineDate ? startCompazineDate.toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }) : "please select a date"} </p>
      <p className='step-title'>step three</p>
      <p className='step-description '>to prevent strong pain, take the first tablet of percocet from your perscription at:</p>
      <p className='time'>
        {startPercocetDate ? startPercocetDate.toLocaleString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }) : "please select a date"} </p>
      <p className='step-title'>step four</p>
      <p className='step-description '>use the bathroom, wash your hands well.</p>
      <p className='step-title'>step five</p>
      <p className='step-description '>take four tablets of misoprostol (200 mcg) as discussed with your doctor - either vaginally or buccaly.</p>
      <p className='step-description'>VAGINAL: <br></br>put on gloves. lie on your back with your knees to your chest and place four tablets of misoprostol 200mg as far up into the vagina as possible. stay lying down for 30 minutes. it's okay if the pills fall out after 30 minutes.</p>
      <p className='step-title'>optional:</p>
      <p className='step-description'> at the first sign of cramping, take the second tablet of percocet from your prescription to treat pain.</p>
      <p></p>

      <div className='buttons-container'>
      <Link to="/okaynotokay">
        <button type="button">
        continue
        </button>
      </Link>
      <Link to="/mifeMisoVaginal">
        <button type="button">
        back
        </button>
      </Link>
      </div>
    </div>
  )
}

export default Instructions