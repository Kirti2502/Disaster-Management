<script>
const accountSid = 'AC11c194770cc7cda62d449c799cf651da';
const authToken = '5d6d29eae34a08e7983b45811307f112';
// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);
client.messages
  .create({
    to: '+917355982667',
    from: '+14158141829',
    body: "Tomorrow's forecast in Financial District, San Francisco is Clear",
    mediaUrl: 'https://climacons.herokuapp.com/clear.png',
  })
  .then((message) => console.log(message.sid));

</script>
