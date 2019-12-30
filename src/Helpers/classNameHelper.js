export const getClasses = (props) => {
  const classes = [];
  if (props.bgColor) {
    classes.push(`bg--${props.bgColor}`);
  }
  if (props.padding) {
    classes.push(`padding__all--${props.padding}`);
  }
  if (props.margin) {
    classes.push(`margin__all--${props.margin}`);
  }

  return classes.join(' ');
};
