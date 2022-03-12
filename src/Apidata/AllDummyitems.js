import classes from './AllDummyitems.module.css'

function DummyItems(props) {
  return (
    <div className={classes.main}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title }/>
      </div>
      <div>
        <h3>{props.title}</h3>
        <address>{props.address}</address>
        <p>{props.desc}</p>
      </div>
      <div>
        <button className={classes.btn}>To Favorite</button>
      </div>
    </div>
  );
}

export default DummyItems;
