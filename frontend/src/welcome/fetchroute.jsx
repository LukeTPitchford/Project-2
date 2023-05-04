const start = window.localStorage.getItem("start");
const drive = window.localStorage.getItem("drive");
const bike = window.localStorage.getItem("bike");
const walk = window.localStorage.getItem("start");

const data = {
  'start': start,
  'drive': drive,
  'bike': bike,
  'walk': walk
}

export default function SayHello(event) {
      event.preventDefault();
      console.log(JSON.stringify(data));
    };
