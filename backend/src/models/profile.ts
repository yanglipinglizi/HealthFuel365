import * as mongoose from "mongoose";
import { EaterType } from "./types";

export interface ProfileInterface extends mongoose.Document {
  userID: string;
  losingWeightAsGoal: boolean;
  keepGoodDietAsGoal:boolean;
  lowInFat: boolean;
  lowInSugar: boolean;
  lowInSalt: boolean;
  // typeOfEater: EaterType;
  typeOfEater: string;
  nutriPreference: string[];
}

export const ProfileSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  losingWeightAsGoal: {
    type: Boolean,
    required: true,
  },
  keepGoodDietAsGoal: {
    type: Boolean,
    required: true,
  },
  lowInFat: {
    type: Boolean,
    required: true,
  },
  lowInSugar: {
    type: Boolean,
    required: true,
  },
  typeOfEater: {
    // type: EaterType,
    type:String,
    required: true,
  },
  lowInSalt: {
    type: Boolean,
    required: true,
  },
  nutriPreference: {
    type: [String],
    required: true,
  },
});
/* This maps the internal id of the profile
 created by mongoose to the field id when accessed via to JSON */
ProfileSchema.virtual("id").get(function () {
  // @ts-ignore
  // eslint-disable-next-line no-underscore-dangle
  return this._id.toHexString();
});

ProfileSchema.set("toJSON", {
  virtuals: true,
});

export default mongoose.model<ProfileInterface>("Profile", ProfileSchema);
