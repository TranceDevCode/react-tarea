import PropTypes from 'prop-types'
import MenuListItem from '../MenuListItem/MenuListItem'
import { PRODCUTS } from './constants'
import s from './style.module.css'

//componente de tipo stateless
const MenuList = (props) =>  (
    <div className={s.container}>
      {
        PRODCUTS.map((hardware) => (
          <MenuListItem key={hardware} onClick = {props.onItemClick} hardware = {hardware}
          />
        ))
      }      
    </div>
  )

export default MenuList

MenuList.propTypes = {
  onItemClick: PropTypes.func,
  hardware: PropTypes.string
}