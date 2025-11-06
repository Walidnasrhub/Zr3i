import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { getProjects, getProjectById, getCarbonCredits, getCarbonCreditsByProjectId, createContactInquiry } from "./db";
import { notifyOwner } from "./_core/notification";
import { z } from "zod";

const ContactInquiryInput = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  inquiryType: z.string().min(1),
  message: z.string().min(1),
});

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  projects: router({
    list: publicProcedure.query(async () => {
      return getProjects();
    }),
    getById: publicProcedure.input(z.object({ id: z.number() })).query(async ({ input }) => {
      return getProjectById(input.id);
    }),
  }),

  carbonCredits: router({
    list: publicProcedure.query(async () => {
      return getCarbonCredits();
    }),
    getByProjectId: publicProcedure.input(z.object({ projectId: z.number() })).query(async ({ input }) => {
      return getCarbonCreditsByProjectId(input.projectId);
    }),
  }),

  contact: router({
    submit: publicProcedure.input(ContactInquiryInput).mutation(async ({ input }) => {
      const result = await createContactInquiry(input);
      
      // Notify owner of new inquiry
      await notifyOwner({
        title: "New Contact Inquiry",
        content: `New inquiry from ${input.name} (${input.email}): ${input.inquiryType}`,
      }).catch(() => null);
      
      return result;
    }),
  }),
});

export type AppRouter = typeof appRouter;
