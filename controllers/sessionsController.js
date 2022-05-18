import Sessions from '../models/sessions.js';

export const getAllSessionsPrivate = async (req, res, next) => {
  try {
    if (req.currentUser.isAdmin || req.currentUser.isCoach) {
      const sessions = await Sessions.find();
      return res.status(200).json(sessions);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

export const getAllSessionsForCoachPrivate = async (req, res, next) => {
  try {
    if (req.currentUser.isAdmin || req.currentUser.isCoach) {
      const sessions = await Sessions.find({ coach: req.params.coachId });
      return res.status(200).json(sessions);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

// export const getSessionsByStatusPrivate = async (req, res, next) => {
//   try {
//     if (req.currentUser.isAdmin || req.currentUser.isCoach) {
//       const sessions = await Sessions.find({ status: req.params.statusquery });
//       return res.status(200).json(sessions);
//     }
//     return res.status(401).send({
//       message: 'Unauthorized: you must be an admin to edit a movie',
//     });
//   } catch (error) {
//     next(error);
//   }
// };

const getSessionsByStatusPrivate = async (req, res, next) => {
  try {
    const sessions = await Sessions.find();
    res.status(200).json(res.sortPaginate);
  } catch (error) {
    next(error);
  }
};

const getSessionBySessionIdPrivate = (req, res, next) => {
  Sessions.findById(req.params.id)
    .then(session => res.status(200).json(session))
    .catch(next);
};

const updateSession = async (req, res, next) => {
  await Sessions.findByIdAndUpdate(req.params.id, req.body);
  const updatedSession = await Sessions.findById(req.params.id);
  res.status(200).json(updatedSession);
};

export const createSessionPrivate = async (req, res, next) => {
  console.log(req);
  try {
    if (req.currentUser.isAdmin || req.currentUser.isCoach) {
      const session = await Sessions.create(req.body);
      return res.status(200).json(session);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

export const deleteSessionPrivate = async (req, res, next) => {
  try {
    if (req.currentUser.isAdmin || req.currentUser.isCoach) {
      const session = await Sessions.findByIdAndDelete(req.params.id);
      return res.status(200).json(session);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

export {
  getSessionsByStatusPrivate,
  getSessionBySessionIdPrivate,
  updateSession,
};
