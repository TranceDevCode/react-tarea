import PropTypes from 'prop-types'
import s from './style.module.css'

const DisplayHardware = (props) => {

  const {  } = props;

  return (
      <div className={s.container}>
        <div>
          <h3>Display hardware</h3>
        </div>
        {
          props.hardware 
          ?  `Hardware selected ${props.hardware}`
          : 'No hardware selected'
        }
      </div>
  )
}

export default DisplayHardware

DisplayHardware.propTypes = {
  hardware: PropTypes.string
}
