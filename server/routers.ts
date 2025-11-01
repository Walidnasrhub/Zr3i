import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContactInquiry, getProjects, getCarbonCredits } from "./db";

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

  contact: router({
    submit: publicProcedure
      .input(
        z.object({
          name: z.string().min(1),
          email: z.string().email(),
          phone: z.string().optional(),
          company: z.string().optional(),
          inquiryType: z.string().min(1),
          message: z.string().min(10),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await createContactInquiry({
            name: input.name,
            email: input.email,
            phone: input.phone,
            company: input.company,
            inquiryType: input.inquiryType,
            message: input.message,
            status: "new",
          });
          return { success: true };
        } catch (error) {
          console.error("Failed to create contact inquiry:", error);
          throw new Error("Failed to submit inquiry");
        }
      }),
  }),

  projects: router({
    list: publicProcedure.query(async () => {
      return getProjects();
    }),
  }),

  credits: router({
    list: publicProcedure.query(async () => {
      return getCarbonCredits();
    }),
  }),
});

export type AppRouter = typeof appRouter;
