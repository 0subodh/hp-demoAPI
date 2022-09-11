const Character = require('../models/characterModel');
const APIFeatures = require('../utils/apiFeatures');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');

exports.getAllCharacters = catchAsync(async (req, res, next) => {
  const features = new APIFeatures(Character.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const characters = await features.query;

  // SEND RESPONSE
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: characters.length,
    data: {
      characters,
    },
  });
});

exports.getCharacter = catchAsync(async (req, res, next) => {
  const character = await Character.findOne({ id: req.params.id });

  if (!character) {
    return next(new AppError('No character found with that ID', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      character,
    },
  });
});
