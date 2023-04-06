import { useEffect } from "react";
import { Link } from "react-router-dom"

const medications = [
  {
    title: "mifepristone",
    description: "mifepristone is the first pill you will take during this process. mifepristone works by stopping the supply of hormones that maintains the interior of the uterus. without these hormones, the uterus cannot support the pregnancy and the contents of the uterus are expelled.",
    imgUrl: "https://i.imgur.com/TOSVkTZ.png"
  },
  {
    title: "misoprostol",
    description: "you were given 4 misoprostol pills. misoprostol is what is used to help \"empty\" your uterus. we recommend you take misoprostol either vaginally or buccally. we're gonna explain this, don't worry.",
    imgUrl: "https://i.imgur.com/evBYUOl.png"
  },
  {
    title: "compazine",
    description: "compazine is used to treat nausea. we recommend for patients to take this medication as a preventative measure.",
    imgUrl: "https://i.imgur.com/1peHsSv.png",
    imgWidth: 300
  },
  {
    title: "ibuprofen",
    description: "ibuprofen is used for pain management. we recommend for patients to take this medication as a preventative measure.",
    imgUrl: "https://i.imgur.com/h83dewV.png"
  },
  {
    title: "percocet",
    description: "percocet is a controlled substance that is also used for pain management. we have given you a perscription for this medication. please pick it up from your pharmacy. we recommend for patients to take this medication as a preventative measure.",
    imgUrl: "https://i.imgur.com/OUSClVk.png"
  },
]

const Medication = ({ title, description, imgUrl, index, imgWidth }) => (
  <div className={`pill-layout animate__animated animate__fadeIn animate__delay-${index > 4 ? 4 : index+1}s`}>
    <img src={imgUrl} alt={title} height={200} width={300} />
    <p className="medication-names">{title.toLowerCase()}</p>
    <p className="medication-description">
      {description.toLowerCase()}
    </p>
  </div>
);

function PillDescription () {
  useEffect(() => {
    document.querySelector(":root").style.setProperty("--animate-delay", "0.4s")
    return () => {
      document.querySelector(":root").style.setProperty("--animate-delay", "1s")
    }
  }, []);
  return (<>
    <div className="container animate__animated animate__fadeIn">
      <p className='pill-title'>here is a list of all the medications<br></br> that were given to you.</p>
    </div>
    <div className="pill-container">
      { medications.map((med, i) => <Medication key={med.title} index={i} {...med} />) }
    </div>
    <div style={{ paddingBottom: 30, textAlign: "center" }}>
      <Link to="/misooptions">
        <button type="button">
          continue
        </button>
      </Link>
    </div>
  </>)
}

export default PillDescription
