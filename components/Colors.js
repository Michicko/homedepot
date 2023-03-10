import utilsStyles from "./Utils.module.css";
import { IoMdCheckmark } from "react-icons/io";
import { BsSlashLg } from "react-icons/bs";

const Colors = () => {
  const colors = [
    "all",
    "red",
    "green",
    "purple",
    "black",
    "pink",
    "blue",
    "brown",
    "lightblue",
    "violet",
  ];
  const current = "all";
  return (
    <div className={utilsStyles.colors}>
      {colors.map((color) => {
        return (
          <button
            className={
              color === "all" && current === "all"
                ? `${utilsStyles.color} ${utilsStyles.all} ${utilsStyles.active}`
                : color === "all"
                ? `${utilsStyles.color} ${utilsStyles.all}`
                : color === current
                ? `${utilsStyles.color} ${utilsStyles.active}`
                : utilsStyles.color
            }
            style={
              color === "all"
                ? { background: "transparent", border: "1px solid #000" }
                : { background: color }
            }
          >
            {color === current && color !== "all" && (
              <IoMdCheckmark className={utilsStyles["color-icon"]} />
            )}
            {color === "all" && (
              <BsSlashLg className={utilsStyles["color-icon"]} />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default Colors;
