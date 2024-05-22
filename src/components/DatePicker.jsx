import Datepicker from "react-tailwindcss-datepicker";
import PropTypes from 'prop-types';

const DatePicker = ({value,handleValueChange , ...props}) => {
  return (
       <>
        <Datepicker 
            value={value} 
            onChange={handleValueChange} 
            {...props}
            /> 
       </>
  )
}

DatePicker.propTypes = {
     value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.object,
          PropTypes.array
     ]).isRequired,
     handleValueChange: PropTypes.func.isRequired,
};

export default DatePicker