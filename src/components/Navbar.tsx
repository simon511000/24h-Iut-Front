export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Ma ville connectée</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/proposals">Votes en cours</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/my-house">Votes</a>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}