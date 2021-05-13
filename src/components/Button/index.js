import React from 'react'
import { Link } from 'react-router-dom'
import { PropTypes as T } from 'prop-types'

const Button = (props) => {
  const className = [props.className]

  if (props.type === 'link') {
    if (props.isExternal) {
      return (
        // eslint-disable-next-line react/jsx-no-target-blank
        <a href={props.link} className={className.join(' ')} style={props.style} target={props.target === '_blank' ? '_blank' : undefined} ref={props.target === '_blank' ? 'noopener noreferrer' : undefined}>
          {props.children}
        </a>
      )
    } else {
      return (
        <Link to={props.link} className={className.join(' ')} style={props.style}>
          {props.children}
        </Link>
      )
    }
  }

  if (props.isDisabled) {
    className.push('disabled')
  }

  return (
    <button data-testid='submit-button' className={className.join(' ')} style={props.style} onClick={props.action}>
      {props.children}
    </button>
  )
}

Button.defaultProps = {
  type: 'button'
}

Button.propTypes = {
  type: T.oneOf(['button', 'link', 'submit', 'reset']).isRequired,
  action: T.func,
  className: T.string,
  target: T.string,
  isDisabled: T.bool,
  isExternal: T.bool,
  link: T.string
}

export default Button
