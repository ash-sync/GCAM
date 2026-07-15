import { Member } from "./member.model";
import { IMember } from "./member.interface";

const createMember = async (payload: IMember) => {
  return await Member.create(payload);
};

const getAllMembers = async (query: any) => {
  const filter: any = {};
  if (query.role && query.role !== "All") {
    filter.role = query.role;
  }
  if (query.search) {
    const searchRegex = new RegExp(query.search, "i");
    filter.$or = [
      { name: searchRegex },
      { phone: searchRegex },
      { role: searchRegex },
      { email: searchRegex },
    ];
  }
  return await Member.find(filter);
};

const getMemberById = async (id: string) => {
  return await Member.findById(id);
};

const updateMember = async (id: string, payload: Partial<IMember>) => {
  return await Member.findByIdAndUpdate(id, payload, { new: true });
};

const deleteMember = async (id: string) => {
  return await Member.findByIdAndDelete(id);
};

export const MemberService = {
  createMember,
  getAllMembers,
  getMemberById,
  updateMember,
  deleteMember,
};
