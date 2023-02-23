const Boiler = () => {
  return (
    <>
      <div className={styles["nav-container"]}>
        <div className={styles.navlinks}>
          {navlinks.map((navlink) => {
            if (navlink === "/") {
              return (
                <Link
                  href="/"
                  className={styles.navlogo}
                  key={generateUniqueId()}
                >
                  homedepot.
                </Link>
              );
            }
            return (
              <Link
                href={`/${navlink}`}
                className={styles.navlink}
                key={generateUniqueId()}
              >
                {navlink}
              </Link>
            );
          })}
        </div>
        <div className={styles.box}>
          <div className="nav-search-box">
            <BsSearch className="icon" />
            <input
              type="text"
              name="search"
              id="search"
              className="nav-search-input"
              placeholder="Search"
            />
          </div>
          <Link href="/profile">
            <FaRegUser className="icon" />
          </Link>
          <Link href="/cart">
            <BsBag className="icon" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Boiler;
