import { Ad } from "./ad.model";
import { IAd } from "./ad.interface";

const createAd = async (payload: IAd) => {
  return await Ad.create(payload);
};

const getAllAds = async () => {
  return await Ad.find();
};

const getAdById = async (id: string) => {
  return await Ad.findById(id);
};

const updateAd = async (id: string, payload: Partial<IAd>) => {
  return await Ad.findByIdAndUpdate(id, payload, { new: true });
};

const deleteAd = async (id: string) => {
  return await Ad.findByIdAndDelete(id);
};

export const AdService = {
  createAd,
  getAllAds,
  getAdById,
  updateAd,
  deleteAd,
};
