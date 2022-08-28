function Card({ planetdata }) {
  return (
    <div className="card">
      <h2 className="card-name">
        {new Date(planetdata.created).toLocaleDateString()}
      </h2>
      <div className="card-body">
        <div className="details">
          <div className="avatar-border">
            <div className="avatar">
              <div className="avatar__letters">
                {planetdata.name.toUpperCase().substring(0, 1)}
              </div>
            </div>
          </div>
          <div>
            <h1 className="heading">{planetdata.name}</h1>
            <p className="root">{planetdata.climate}</p>
          </div>
        </div>
        <div>
          <i className="fa fa-paint-brush fa-xl icon" aria-hidden="true"></i>
        </div>
      </div>
      <h2 className="card-footer">Films:{planetdata.films.length}</h2>
    </div>
  );
}

export default Card;
