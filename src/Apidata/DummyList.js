import DummyItems from "./AllDummyitems";

function DummyList(props) {
  return (
    <ul>
      {props.meetup.map((meetup) => (
        <DummyItems
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          desc={meetup.desc}
        />
      ))}
    </ul>
  );
}

export default DummyList;
