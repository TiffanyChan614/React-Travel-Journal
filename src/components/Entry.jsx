import marker from '../assets/marker.svg';
import PropTypes from 'prop-types';

function Entry(props) {
  return (
    <section className='entry'>
      <img src={props.imageUrl} alt={props.title} className='entry--img' />
      <div className='entry--info'>
        <div className='entry--info--location'>
          <img
            src={marker}
            alt='marker'
            className='entry--info--location--marker'
          />
          <span className='entry--info--location--country'>
            {props.location}
          </span>
          <span className='entry--info--location--map'>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </span>
        </div>
        <h2 className='entry--info--title'>{props.title}</h2>
        <p className='entry--info--date'>
          {props.startDate} - {props.endDate}
        </p>
        <p className='entry--info--desc'>{props.description}</p>
      </div>
    </section>
  );
}

Entry.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  googleMapsUrl: PropTypes.string,
  startDate: PropTypes.string,
  endDate: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
};

export default Entry;
