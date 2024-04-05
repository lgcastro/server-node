import {
  registerForEvent
} from "./chunk-5GXCXZIP.mjs";
import {
  errorHandler
} from "./chunk-A7LFXJYF.mjs";
import {
  checkIn
} from "./chunk-ECVEQBTT.mjs";
import {
  createEvent
} from "./chunk-PV2ULJN2.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeeBadge
} from "./chunk-22QE3EOM.mjs";
import {
  getEventAttendees
} from "./chunk-DHK53M5A.mjs";
import {
  getEvent
} from "./chunk-5EPCSY3M.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import fastifyCors from "@fastify/cors";
import { serializerCompiler, validatorCompiler, jsonSchemaTransform } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
app.register(fastifyCors, {
  // origin: 'http://meufrontend.com',
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/jason"],
    produces: ["application/jason"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in constru\xEDda durante o NLW Unite da Rocketseat.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("HTTP server running!");
});
