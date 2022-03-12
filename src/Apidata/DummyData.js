import DummyList from "../Apidata/DummyList";

// import us from '../asset/image1'
const dummy_data = [
  {
    id: "m-1",
    title: "This is First meetup",
    // image1: us,
    image:
      "https://images.unsplash.com/photo-1508963731933-8875ec27d2b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    address: "Adda Noorpur, Sahiwal, Punjab - Central",
    desc: "This is The city of Pakistan and this picture about nature",
  },
  {
    id: "m-2",
    title: "This is Second meetup",
    // image1: us,
    image:
      "https://images.unsplash.com/photo-1508963731933-8875ec27d2b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    address: "Adda Noorpur, Sahiwal, Punjab - Central",
    desc: "This is The city of Pakistan and this picture about nature",
  },
  {
    id: "m-3",
    title: "This is Third meetup",
    // image1: us,
    image:
      "https://images.unsplash.com/photo-1508963731933-8875ec27d2b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    address: "Adda Noorpur, Sahiwal, Punjab - Central",
    desc: "This is The city of Pakistan and this picture about nature",
  },
];

function DummyData() {
    return (
      <section>
          <DummyList meetup={dummy_data} />
      </section>
  );
}


export default DummyData;



