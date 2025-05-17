import mongoose, { Schema, Document } from 'mongoose';

// Define interface for PageData document
export interface PageDataDocument extends Document {
  slug: string;
  title: string;
  subtitle: string;
  features: { img: string; title: string }[];
  procedureInfo: {
    coloredTitle: string;
    title: string;
    bulletPoints: string[];
  };
  faqs: { question: string; answer: string }[];
  beforeAfterImage: string;
}

const FeatureSchema = new Schema({
  img: { type: String, required: true },
  title: { type: String, required: true },
});

const ProcedureInfoSchema = new Schema({
  coloredTitle: { type: String, required: true },
  title: { type: String, required: true },
  bulletPoints: { type: [String], required: true },
});

const FaqSchema = new Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
});

const PageDataSchema = new Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  features: { type: [FeatureSchema], required: true },
  procedureInfo: { type: ProcedureInfoSchema, required: true },
  faqs: { type: [FaqSchema], required: true },
  beforeAfterImage: { type: String, required: true },
});

const PageData =
  mongoose.models.PageData ||
  mongoose.model<PageDataDocument>('PageData', PageDataSchema);

export default PageData;
