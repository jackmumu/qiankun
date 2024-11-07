const getCurrentDate = () => {
    const d = new Date();
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
};
const Header = () => {
    return (
      <header>
        {getCurrentDate()}
      </header>
    );
  };

export default Header;