import Icon from "../Icon/Icon"

interface IndicatorProps {
  //Only possible status for indicators
  status: "success" | "warning" | "error"
}

const Indicator = ({status }:IndicatorProps) => {
  return (
    <>
      {status === 'success' && (
        <div className="indicator border-white bg-spanishGreen text-white">
          <Icon id={"check"} size={16} />
        </div>
      )}

      {status === 'warning' && (
        <div className="indicator border-white bg-supernova text-black">
          <Icon id={"question"} size={16} />
        </div>
      )}

      {status === 'error' && (
        <div className="indicator border-white bg-orangeRed text-white">
          <Icon id={"minus"} size={16} />
        </div>
      )}
    </>
  )
}

export default Indicator
