// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/hello': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/hello').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/api/_nuxt_icon/:collection': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/@nuxt/icon/dist/runtime/server/api').default>>>>
    }
  }
}
export {}