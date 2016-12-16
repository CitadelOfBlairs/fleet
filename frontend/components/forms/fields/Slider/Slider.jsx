import React, { PropTypes } from 'react';
import classnames from 'classnames';
import { pick } from 'lodash';

import FormField from 'components/forms/FormField';

const Slider = ({ onChange, value, inactiveText = 'Off', activeText = 'On' }) => {
  const baseClass = 'kolide-slider';

  const sliderBtnClass = classnames(
    baseClass,
    { [`${baseClass}--active`]: value }
  );

  const sliderDotClass = classnames(
    `${baseClass}__dot`,
    { [`${baseClass}__dot--active`]: value }
  );

  const handleClick = (evt) => {
    evt.preventDefault();

    return onChange(!value);
  };

  const formFieldProps = pick(this.props, ['hint', 'label', 'error', 'name']);

  return (
    <FormField {...formFieldProps} type="slider">
      <span className={`${baseClass}__label ${baseClass}__label--inactive`}>{inactiveText}</span>
      <button className={`button button--unstyled ${sliderBtnClass}`} onClick={handleClick}>
        <div className={sliderDotClass} />
      </button>
      <span className={`${baseClass}__label ${baseClass}__label--active`}>{activeText}</span>
    </FormField>
  );
};

Slider.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
  inactiveText: PropTypes.string,
  activeText: PropTypes.string,
  error: PropTypes.string,
  hint: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  label: PropTypes.string,
  name: PropTypes.string,
};

export default Slider;