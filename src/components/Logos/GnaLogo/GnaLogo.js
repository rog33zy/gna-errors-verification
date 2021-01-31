import classes from "./GnaLogo.module.css";
import gnaLogo from "../../../assets/images/GNALOGO2.png";

import history from "../../../history";

const GnaLogo = () => {
  return (
    <div onClick={() => history.push("/")} className={classes.GnaLogo}>
      <img src={gnaLogo} alt="GNA" />
    </div>
  );
};

export default GnaLogo;
