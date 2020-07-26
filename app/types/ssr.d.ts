import { Request, Response } from "express";
import { HasSsr } from "efuzy";

interface QSsrContext {
  req: Request;
  res: Response;
  url: Request["url"];
}

export type HasSsrParam = HasSsr<{ ssrContext?: QSsrContext | null }>;
