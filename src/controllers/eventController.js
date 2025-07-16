import * as eventService from "../services/eventService.js";

export async function createEvent(req, res, next) {
  try {
    // Logic for creating event
    await eventService.createEvent(req, res, next);
  } catch (err) {
    next(err);
  }
}

export async function getEventDetails(req, res, next) {
  try {
    // Logic for getting event details
    await eventService.getEventDetails(req, res, next);
  } catch (err) {
    next(err);
  }
}

export async function registerUser(req, res, next) {
  try {
    // Logic for registering user
    await eventService.registerUser(req, res, next);
  } catch (err) {
    next(err);
  }
}

export async function cancelRegistration(req, res, next) {
  try {
    // Logic for cancelling registration
    await eventService.cancelRegistration(req, res, next);
  } catch (err) {
    next(err);
  }
}

export async function listUpcomingEvents(req, res, next) {
  try {
    // Logic for listing upcoming events with cursor-based pagination
    await eventService.listUpcomingEvents(req, res, next);
  } catch (err) {
    next(err);
  }
}

export async function getEventStats(req, res, next) {
  try {
    // Logic for getting event stats
    await eventService.getEventStats(req, res, next);
  } catch (err) {
    next(err);
  }
} 