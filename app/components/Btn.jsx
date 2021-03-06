import React, { PropTypes } from 'react'
import classnames from 'classnames'

const Btn = ({ dropShadow, icon, inverted, isRound, label, handleClick, secondary }) => (
    <button className={classnames('btn', {
      'icon-btn': !!icon,
      'btn--round': isRound,
      'btn--inverted': inverted,
      'btn--secondary': secondary,
      'btn--drop-shadow': dropShadow
    })} onClick={handleClick}>{icon}{label}</button>
  )

Btn.propTypes = {
  handleClick: PropTypes.func.isRequired,
  label: PropTypes.string,
  icon: PropTypes.object,
  isRound: PropTypes.bool,
  secondary: PropTypes.bool,
  dropShadow: PropTypes.bool,
  inverted: PropTypes.bool
}

Btn.defaultProps = {
  icon: null,
  label: null,
  isRound: false,
  inverted: false,
  secondary: false,
  dropShadow: false
}

export default Btn
