import mapPin from "../images/map_pin.png";

export default function Hero(props) {
  return (
    <section>
      <img
        src={props.imageUrl}
        className="card--image"
        alt="destination-image"
      />

      <div className="card--text-container">
        <span className="card--image-info">
          <img
            src={mapPin}
            className="card--map-pin"
            alt="destination-pin-image"
          />

          <h5 className="card--location">{props.location}</h5>

          <a
            href={props.googleMapsUrl}
            className="card--googlemaps-link"
            target="_blank"
          >
            View on Google Maps
          </a>
        </span>

        <h2 className="card--destination">{props.title}</h2>

        <span className="card--visit-dates">
          {props.startDate} - {props.endDate}
        </span>

        <p className="card--description">{props.description} </p>
      </div>
    </section>
  );
}
