const start = [0,1];
const drive = [0,1];
const bike = [0,1];
const walk = [0,1];

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
