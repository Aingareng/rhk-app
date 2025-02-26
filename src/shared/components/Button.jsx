import PropTypes from "prop-types";

const Button = ({ children, ...attributes }) => {
  return <button {...attributes}>{children}</button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
