import PropTypes from "prop-types";

export default function Form({ children, ...other }) {
  return <form {...other}>{children}</form>;
}

Form.propTypes = {
  children: PropTypes.node.isRequired,
};
