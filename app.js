const express = require('express');
const app = express();
const port = 3003;
const AvatarGenerator = require('random-avatar-generator').AvatarGenerator;

const generator = new AvatarGenerator();
app.get('/', (req, res) => {
  res.send({
    message: 'Request served by backend!',
    app: 'ecs backend app',
    avatar: generator.generateRandomAvatar(),
  });
});

app.listen(port, () => {
  console.log(`ECS backend app listening on port ${port}`);
});
