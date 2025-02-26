import PropTypes from "prop-types";

const Label = ({ leftLabel, labelType, children, rightLabel, ...other }) => {
  const labelTypeClasses =
    labelType === "form-control"
      ? "form-control"
      : "input input-bordered flex items-center gap-2";

  const labelElement = (
    <div className="label">
      {labelType === "form-control" && (
        <span className="label-text">{leftLabel}</span>
      )}
      {rightLabel && <span className="label-text-alt">{rightLabel}</span>}
    </div>
  );

  return (
    <label className={`${labelTypeClasses}`} {...other}>
      {labelElement}
      {children}
    </label>
  );
};

Label.propTypes = {
  labelType: PropTypes.oneOf(["form-control", "normal-input"]).isRequired,
  children: PropTypes.node.isRequired,
  rightLabel: PropTypes.string,
  leftLabel: PropTypes.string,
};

Label.defaultProps = {
  labelType: "normal-input",
  rightLabel: "",
};

export default Label;
