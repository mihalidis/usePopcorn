import PropTypes from "prop-types";

EmptyState.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.string
}

function EmptyState({text, icon}) {
  return <>
  <div className="flex flex-col items-center justify-center h-full mt-8">
    <img className="h-[45px] inline mb-[10px]" src={icon} alt="loupe"></img>
    <p className="text-center">{text}</p>
  </div>
  </>
}

export default EmptyState