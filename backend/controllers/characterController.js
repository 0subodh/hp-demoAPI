const fs = require('fs');

const characters = JSON.parse(fs.readFileSync(`./dev-data/characters.json`));

exports.checkID = (req, res, next, val) => {
  console.log(`Character id is: ${val}`);

  if (req.params.id * 1 > characters.length) {
    return res.status(404).json({
      status: 'fail',
      message: 'Invalid ID, (0-7) available',
    });
  }
  next();
};

exports.getAllCharacters = (req, res) => {
  console.log(req.requestTime);

  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: characters.length,
    data: {
      characters,
    },
  });
};

exports.getCharacter = (req, res) => {
  console.log(req.params);
  const id = req.params.id * 1;

  const character = characters.find((el) => el.id === id);

  res.status(200).json({
    status: 'success',
    data: {
      character,
    },
  });
};
