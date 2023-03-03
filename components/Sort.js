import utilsStyles from "./Utils.module.css";

const Sort = () => {
  return (
    <div className={utilsStyles["sort-container"]}>
      <h4 className={utilsStyles["utils-heading"]}>sort by:</h4>
      <select name="sort" id="sort" className={utilsStyles.sort}>
        <option value="">--sort by--</option>
        <option value="popular">popular</option>
        <option value="price highest">price - highest</option>
        <option value="price lowest">price - lowest</option>
        <option value="name(a-z)">Name (a-z)</option>
        <option value="name(a-z)">Name (z-a)</option>
      </select>
    </div>
  );
};

export default Sort;
