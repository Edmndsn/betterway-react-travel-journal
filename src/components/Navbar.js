import journalLogo from "../images/journal_logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={journalLogo} className="nav--journalLogo" />
      <h1 className="nav--title">my travel journal.</h1>
    </nav>
  );
}
