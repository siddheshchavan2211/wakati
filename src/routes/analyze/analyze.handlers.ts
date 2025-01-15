import * as HttpStatusCodes from "stoker/http-status-codes"
import { AnalyzeRoute } from "./analyze.routes"
import { Context } from "hono"
import { RouteHandler } from "@hono/zod-openapi"
import { evaluate } from "@/lib/evaluate"

export const analyze: RouteHandler<AnalyzeRoute> = async (c: Context) => {
    const body = await c.req.json()

    if (!body.text) {
        return c.json({ error: "text is required" },
            HttpStatusCodes.BAD_REQUEST);
    }

    const result = evaluate(body.text)

    return c.json(result)

}

