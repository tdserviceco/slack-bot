/** SETUP */
let SlackBot = require("slackbots");
let message;
let channel;
let channels;
let date = new Date();
let today = date.getDay();
let homework;
let weekdays = new Array(7);
weekdays[0] = "Sunday";
weekdays[1] = "Monday";
weekdays[2] = "Tuesday";
weekdays[3] = "Wednesday";
weekdays[4] = "Thursday";
weekdays[5] = "Friday";
weekdays[6] = "Saturday";
let time = '23:59';
message;

/** LETS START */

let bot = new SlackBot({
  token: '',
  name: 't',
  status_emoji : ':robot_face:',
  status_expiration : 0
});
bot.on("start", function () {  
  if (weekdays[today] === 'Monday') {
    channels = ["m05", "m06"];
    channels.forEach(function (channel) {
      bot.postMessageToChannel(channel, 'Oh great... Monday...');
    })
  }

  if (weekdays[today] === 'Wednesday') {
    channel = "m05";
    homework = "js3 week1";
    message = `${channel} ${homework} send PR to @Katja Bregenzer`;
    bot.postMessageToChannel(channel, message);
  }

  if (weekdays[today] === 'Friday') {
    channel = "m06";
    homework = "html/css week3";
    message = `${channel} ${homework} deadline is ${time}`;
    bot.postMessageToChannel(channel, message);
  }

});
