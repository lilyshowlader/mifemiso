import { Link } from "react-router-dom"
function Instructions () {
  return (
    <>
    <p>step two, three, four and five</p>
    <p>when do you plan on taking the misoprostol? remember, this date and time has to be within the range that was given to you.
    </p>
    <p>based on your input, please take one compazine and one ibuprofen at: </p>
    <p>take the first tablet of percocet at: to prevent strong pain</p>
    <p>use the bathroom, wash your hands well</p>
    <p>take four tablets of misoprostol as discussed with your doctor - either vaginally or buccaly</p>
    <p>VAGINAL: put on gloves. lie on your back with your knees to your chest and place four tablets of misoprostol 200mg as far up into the vagina as possible. stay lying down for 30 minutes. it's okay if the pills fall out after 30 minutes</p>
    <p>BUCCAL: place two pills in between your teeth and lower lip on the left. place two more fills between your teeth and your lower lip on the right. suck on some hard candy to help you salivate</p>
    <p>at the first sign of cramping, take the second tablet of percocet from your prescription to threat pain</p>




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
  </>
  )
}

export default Instructions