import HeaderImage from "../assets/investment-calculator-logo.png";

function Header() {
  return (
    <header id="header">
      <img src={HeaderImage} alt="Investment Calculator logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default Header;
