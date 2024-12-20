import { c as defineEventHandler, g as getQuery, r as readBody } from '../../_/nitro.mjs';
import { PrismaClient } from '@prisma/client';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import '@iconify/utils';
import 'consola/core';
import 'node:path';

var _a;
const prismaClientSingleton = () => {
  return new PrismaClient();
};
const prisma = (_a = globalThis.prismaGlobal) != null ? _a : prismaClientSingleton();

const hello = defineEventHandler(async (event) => {
  const user = await prisma.user.create({
    data: {
      name: "ben",
      email: "benx@prisma.io",
      password: "password",
      role: "admin"
    }
  });
  console.log(`Request: ${event.toString()}`);
  getQuery(event);
  const { some } = await readBody(event);
  return {
    // path: event.path,
    // method: event.method,
    // query,
    some,
    user
  };
});

export { hello as default };
//# sourceMappingURL=hello.mjs.map
