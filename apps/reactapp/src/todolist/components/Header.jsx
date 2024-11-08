const getCurrentDate = () => {
    const d = new Date();
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
};
const Header = () => {
    return (
      <header className="lql-header">
        <span className="lql-header__title">
          {getCurrentDate()}
        </span>
      </header>
    );
  };

export default Header;