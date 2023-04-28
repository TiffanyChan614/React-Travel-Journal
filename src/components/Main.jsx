import data from '../data';
import Entry from './Entry';

function Main() {
  const entryElements = data.map((entry, index) => {
    return (
      <Entry
        key={index}
        title={entry.title}
        location={entry.location}
        googleMapsUrl={entry.googleMapsUrl}
        startDate={entry.startDate}
        endDate={entry.endDate}
        description={entry.description}
        imageUrl={entry.imageUrl}
      />
    );
  });
  return <main>{entryElements}</main>;
}

export default Main;
