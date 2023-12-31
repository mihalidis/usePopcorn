import PropTypes from "prop-types";

ToggleButton.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func
}

function ToggleButton({isOpen, setIsOpen}) {
  return (
    <>
        {
          isOpen ? <svg
          onClick={() => setIsOpen(!isOpen)}
          className="w-[20px] h-[20px] absolute top-3 right-3 cursor-pointer"
            fill="#5d5fef"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
              <path d="M17,13H7V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
          </svg> :
          <svg onClick={() => setIsOpen(!isOpen)} className="w-[20px] h-[20px] absolute top-3 right-3 cursor-pointer" fill="#5d5fef" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" /></svg>
        }
    </>
  )
}

export default ToggleButton