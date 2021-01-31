import { Button } from "@material-ui/core";

const SimpleButton = (props) => {
  return (
    <Button
      variant={props.variant}
      color={props.color}
      style={{ width: "100%" }}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default SimpleButton;
