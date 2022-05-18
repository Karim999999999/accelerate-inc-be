import Sessions from '../models/sessions.js';
import Athletes from '../models/athletes.js';

const getAllAthletesPrivate = async (req, res, next) => {
  try {
    if (
      req.currentUser.isAdmin ||
      req.currentUser.isCoach ||
      req.currentUser.isMedic
    ) {
      const athletes = await Athletes.find();
      return res.status(200).json(athletes);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

const getApprovedAthletesPublic = async (req, res, next) => {
  try {
    const athletes = await Athletes.find({ applicationStatus: 'Approved' });
    return res.status(200).json(athletes);
  } catch (error) {
    next(error);
  }
};

const getAthletesByStatusPrivate = async (req, res, next) => {
  try {
    if (
      req.currentUser.isAdmin ||
      req.currentUser.isCoach ||
      req.currentUser.isMedic
    ) {
      const athletes = await Athletes.find({
        applicationStatus: req.params.articleStatus,
      });
      return res.status(200).json(athletes);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

const getAthletesByIdPrivate = async (req, res, next) => {
  try {
    if (
      req.currentUser.isAdmin ||
      req.currentUser.isCoach ||
      req.currentUser.isMedic
    ) {
      const athlete = await Athletes.findById(req.params.id);
      return res.status(200).json(athlete);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

const getAthletesByIdPublic = async (req, res, next) => {
  try {
    const athlete = await Athletes.find({
      _id: req.params.id,
      applicationStatus: 'Approved',
    });
    return res.status(200).json(athlete);
  } catch (error) {
    next(error);
  }
};

const editAthleteDetailsbyIdPrivate = async (req, res, next) => {
  try {
    if (
      req.currentUser.isAdmin ||
      req.currentUser.isCoach ||
      req.currentUser.isMedic
    ) {
      const athlete = await Athletes.findById(req.params.id);
      athlete.set(req.body);
      const savedAthlete = await athlete.save();
      return res.status(200).json(savedAthlete);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

const deleteAthletePrivate = async (req, res, next) => {
  try {
    if (
      req.currentUser.isAdmin ||
      req.currentUser.isCoach ||
      req.currentUser.isMedic
    ) {
      const athlete = await Athletes.findByIdAndDelete(req.params.id);
      return res.status(200).json(athlete);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

const getAthletesAttendancePrivate = async (req, res, next) => {
  try {
    if (
      req.currentUser.isAdmin ||
      req.currentUser.isCoach ||
      req.currentUser.isMedic
    ) {
      const athlete = await Athletes.findById(req.params.id).populate(
        'attendance'
      );
      return res.status(200).json(athlete.attendance);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

const searchAthleteByNameAllAthletesPrivate = async (req, res, next) => {
  try {
    if (
      req.currentUser.isAdmin ||
      req.currentUser.isCoach ||
      req.currentUser.isMedic
    ) {
      const athlete = await Athletes.find({ name: req.params.searchName });
      return res.status(200).json(athlete);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

const getAthletesMedicalIncidentsPrivate = async (req, res, next) => {
  try {
    if (
      req.currentUser.isAdmin ||
      req.currentUser.isCoach ||
      req.currentUser.isMedic
    ) {
      const athlete = await Athletes.findById(req.params.id).populate(
        'medicalIncidents'
      );
      return res.status(200).json(athlete.medicalIncidents);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

const createNewAthlete = async (req, res, next) => {
  try {
    const athlete = await Athletes.create(req.body);

    await Sessions.updateMany(
      { _id: athlete.attendance },
      { $push: { attendance: athlete._id } }
    );
    return res.status(201).json(athlete);
  } catch (error) {
    next(error);
  }
};

export {
  getAllAthletesPrivate,
  getApprovedAthletesPublic,
  getAthletesByStatusPrivate,
  getAthletesByIdPrivate,
  getAthletesByIdPublic,
  editAthleteDetailsbyIdPrivate,
  deleteAthletePrivate,
  getAthletesAttendancePrivate,
  searchAthleteByNameAllAthletesPrivate,
  getAthletesMedicalIncidentsPrivate,
  createNewAthlete,
};
