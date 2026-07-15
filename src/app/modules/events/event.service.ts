import { Event } from "./event.model";
import { IEvent } from "./event.interface";

const createEvent = async (payload: IEvent) => {
  return await Event.create(payload);
};

const getAllEvents = async () => {
  return await Event.find().sort({ date: 1 });
};

const getEventById = async (id: string) => {
  return await Event.findById(id);
};

const updateEvent = async (id: string, payload: Partial<IEvent>) => {
  return await Event.findByIdAndUpdate(id, payload, { new: true });
};

const deleteEvent = async (id: string) => {
  return await Event.findByIdAndDelete(id);
};

export const EventService = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
