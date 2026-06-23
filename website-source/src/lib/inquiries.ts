import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(20).regex(/^[+\d][\d\s()-]+$/),
  email: z.string().trim().email().max(254).or(z.literal("")),
  date: z.string().trim().max(10),
  pickup: z.string().trim().min(2).max(150),
  destination: z.string().trim().min(2).max(150),
  service: z.string().trim().min(2).max(100),
  travelers: z.coerce.number().int().min(1).max(100),
  message: z.string().trim().max(2000),
});

export type Inquiry = z.infer<typeof inquirySchema>;

export const submitInquiry = createServerFn({ method: "POST" })
  .inputValidator(inquirySchema)
  .handler(async ({ data }) => {
    const { saveInquiry } = await import("./inquiries.server");
    return saveInquiry(data);
  });
