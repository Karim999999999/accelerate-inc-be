import Athletes from '../models/athletes.js';

export const registerNewMedicalIncidentPrivate = async (req, res, next) => {
  try {
    if (req.currentUser.isMedic || req.currentUser.isAdmin) {
      const athlete = await Athletes.findById(req.params.id);

      if (!athlete) {
        return res.status(404).send({ message: 'Athlete not found' });
      }

      const newMedicalIncident = {
        ...req.body,
        createdyBy: req.currentUser._id,
      };

      athlete.medicalIncidents.push(newMedicalIncident);
      const savedAthlete = await athlete.save();

      return res.status(201).json(savedAthlete);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};
export const editMedicalIncidentByIDPrivate = async (req, res, next) => {
  try {
    if (req.currentUser.isMedic || req.currentUser.isAdmin) {
      const { id, medicalIncidentId } = req.params;
      const athlete = await Athletes.findById(id);

      const medicalIncident = athlete.medicalIncident.id(medicalIncidentId);

      if (!medicalIncident) {
        return res.status(404).send({ message: 'Comment not found' });
      }
      if (!medicalIncident.createdBy.equals(req.currentUser._id)) {
        return res.status(401).send({ message: 'Unathorized action' });
      }

      medicalIncident.set(req.body);

      const savedMedicalIncident = await medicalIncident.save();
      return res.status(200).send(savedMedicalIncident);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

export const getMedicalIncidentByIDPrivate = async (req, res, next) => {
  try {
    if (
      req.currentUser.isMedic ||
      req.currentUser.isAdmin ||
      req.currentUser.isCoach
    ) {
      const { id, medicalIncidentId } = req.params;
      const athlete = await Athletes.findById(id);

      const medicalIncident = athlete.medicalIncident.id(medicalIncidentId);
      if (!athlete) {
        return res.status(404).send({ message: 'Athlete not found' });
      }
      if (!medicalIncident) {
        return res.status(404).send({ message: 'Medical incident not found' });
      }
      return res.status(200).send(medicalIncident);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};

export const deleteMedicalIncidentPrivate = async (req, res, next) => {
  try {
    if (
      req.currentUser.isMedic ||
      req.currentUser.isAdmin ||
      req.currentUser.isCoach
    ) {
      const { id, medicalIncidentId } = req.params;
      const athlete = await Athletes.findById(id);

      if (!athlete) {
        return res.status(404).send({
          message:
            'Unauthorized: you must be an admin to delete this medical record',
        });
      }
      const deletedMedicalIncident =
        athlete.medicalIncidents.id(medicalIncidentId);

      deletedMedicalIncident.remove();

      const savedAthlete = await athlete.save();
      return res.status(200).send(savedAthlete);
    }
    return res.status(401).send({
      message: 'Unauthorized: you must be an admin to edit a movie',
    });
  } catch (error) {
    next(error);
  }
};
