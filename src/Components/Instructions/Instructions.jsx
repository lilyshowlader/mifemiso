import { Link } from "react-router-dom"
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Instructions () {
  const [selectedMisoDate, setSelectedMisoDate] = useState(new Date());
  const [startCompazineDate, setCompazineDate] = useState(null)
  const [startPercocetDate, setPercocetDate] = useState(null)

  function calculateCompazineDate(date) {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear());
    newDate.setMonth(date.getMonth());
    newDate.setDate(date.getDate());
    newDate.setHours(date.getHours());
    newDate.setMinutes(date.getMinutes() - 30);
    return newDate;
  }

  function calculatePercocetDate(date) {
    const newDate = new Date(date);
    newDate.setFullYear(date.getFullYear());
    newDate.setMonth(date.getMonth());
    newDate.setDate(date.getDate());
    newDate.setHours(date.getHours());
    newDate.setMinutes(date.getMinutes() + 30);
    return newDate;
  }

  const handleDateChange = (date) => {
    setSelectedMisoDate(date);
    setCompazineDate(calculateCompazineDate(date))
    setPercocetDate(calculatePercocetDate(date));
  };



  return (
    <>
    <div className='instructions-container'>
    <p>when do you plan on taking the misoprostol? remember, this date and time has to be within the range that was given to you.
    </p>
    <DatePicker
        selected={selectedMisoDate}
        onChange={handleDateChange}
        showTimeSelect
        dateFormat="Pp"
    />
    <p>okay, let's continue</p>
    <p>step two: based on your input, after having a good meal, take one compazine and one ibuprofen at: 
      {startCompazineDate ? startCompazineDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }) : "please select a date"} </p>

    <p>step three: take the first tablet of percocet at:
      {startPercocetDate ? startPercocetDate.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      }) : "please select a date"} to prevent strong pain</p>
    <p>step four: use the bathroom, wash your hands well</p>
    <p>step five: take four tablets of misoprostol as discussed with your doctor - either vaginally or buccaly</p>
    <p>VAGINAL: put on gloves. lie on your back with your knees to your chest and place four tablets of misoprostol 200mg as far up into the vagina as possible. stay lying down for 30 minutes. it's okay if the pills fall out after 30 minutes</p>
    <p>BUCCAL: place two pills in between your teeth and lower lip on the left. place two more fills between your teeth and your lower lip on the right. suck on some hard candy to help you salivate</p>
    <p>optional: at the first sign of cramping, take the second tablet of percocet from your prescription to threat pain</p>
    <p></p>
    <Link to="/okaynotokay">
      <button type="button">
      click here to continue
      </button>
    </Link>
    <Link to="/mife">
      <button type="button">
      back
      </button>
    </Link>
    </div>
  </>
  )
}

export default Instructions