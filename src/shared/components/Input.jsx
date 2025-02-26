import PropTypes from "prop-types";

export default function Input({ children, ...attributes }, ref) {
  return (
    <>
      {children}
      <input ref={ref} {...attributes} />
    </>
  );
}
Input.propTypes = {
  children: PropTypes.node,
};
