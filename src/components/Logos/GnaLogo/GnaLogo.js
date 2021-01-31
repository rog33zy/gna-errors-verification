import classes from "./GnaLogo.module.css";
import gnaLogo from "../../../assets/images/GNALOGO2.png";

const GnaLogo = (props) => {
  return (
    <div className={classes.GnaLogo}>
      <img src={gnaLogo} alt="GNA" />
    </div>
  );
};

export default GnaLogo;
