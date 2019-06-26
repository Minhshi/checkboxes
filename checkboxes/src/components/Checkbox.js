import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Checkbox.scss';

function Checkbox(props) {
  const { hasError, checked, indeterminate, disabled, onChange } = props;
  const className = classNames('checkbox', {
    hasError, indeterminate
  })
  return (
    <input
      type='checkbox'
      className={className}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  indeterminate: PropTypes.bool,
  disabled: PropTypes.bool,
  hasError: PropTypes.bool,
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  checked: false,
  indeterminate: false,
  disabled: false,
  hasError: false,
};

export default Checkbox;
