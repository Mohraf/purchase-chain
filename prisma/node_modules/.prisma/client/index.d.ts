
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Company
 * 
 */
export type Company = $Result.DefaultSelection<Prisma.$CompanyPayload>
/**
 * Model Site
 * 
 */
export type Site = $Result.DefaultSelection<Prisma.$SitePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Lpo
 * 
 */
export type Lpo = $Result.DefaultSelection<Prisma.$LpoPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model SupplyItem
 * 
 */
export type SupplyItem = $Result.DefaultSelection<Prisma.$SupplyItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  EMPLOYEE: 'EMPLOYEE',
  APPROVER: 'APPROVER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const LpoRejected: {
  NO: 'NO',
  YES: 'YES'
};

export type LpoRejected = (typeof LpoRejected)[keyof typeof LpoRejected]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type LpoRejected = $Enums.LpoRejected

export const LpoRejected: typeof $Enums.LpoRejected

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Companies
 * const companies = await prisma.company.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Companies
   * const companies = await prisma.company.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.company`: Exposes CRUD operations for the **Company** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.company.findMany()
    * ```
    */
  get company(): Prisma.CompanyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.site`: Exposes CRUD operations for the **Site** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sites
    * const sites = await prisma.site.findMany()
    * ```
    */
  get site(): Prisma.SiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lpo`: Exposes CRUD operations for the **Lpo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lpos
    * const lpos = await prisma.lpo.findMany()
    * ```
    */
  get lpo(): Prisma.LpoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplyItem`: Exposes CRUD operations for the **SupplyItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplyItems
    * const supplyItems = await prisma.supplyItem.findMany()
    * ```
    */
  get supplyItem(): Prisma.SupplyItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.4.0
   * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Company: 'Company',
    Site: 'Site',
    User: 'User',
    Lpo: 'Lpo',
    Supplier: 'Supplier',
    SupplyItem: 'SupplyItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "company" | "site" | "user" | "lpo" | "supplier" | "supplyItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Company: {
        payload: Prisma.$CompanyPayload<ExtArgs>
        fields: Prisma.CompanyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findFirst: {
            args: Prisma.CompanyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          findMany: {
            args: Prisma.CompanyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          create: {
            args: Prisma.CompanyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          createMany: {
            args: Prisma.CompanyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          delete: {
            args: Prisma.CompanyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          update: {
            args: Prisma.CompanyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          deleteMany: {
            args: Prisma.CompanyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>[]
          }
          upsert: {
            args: Prisma.CompanyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyPayload>
          }
          aggregate: {
            args: Prisma.CompanyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompany>
          }
          groupBy: {
            args: Prisma.CompanyGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyCountAggregateOutputType> | number
          }
        }
      }
      Site: {
        payload: Prisma.$SitePayload<ExtArgs>
        fields: Prisma.SiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findFirst: {
            args: Prisma.SiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          findMany: {
            args: Prisma.SiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          create: {
            args: Prisma.SiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          createMany: {
            args: Prisma.SiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          delete: {
            args: Prisma.SiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          update: {
            args: Prisma.SiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          deleteMany: {
            args: Prisma.SiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>[]
          }
          upsert: {
            args: Prisma.SiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SitePayload>
          }
          aggregate: {
            args: Prisma.SiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSite>
          }
          groupBy: {
            args: Prisma.SiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<SiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.SiteCountArgs<ExtArgs>
            result: $Utils.Optional<SiteCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Lpo: {
        payload: Prisma.$LpoPayload<ExtArgs>
        fields: Prisma.LpoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LpoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LpoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LpoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LpoPayload>
          }
          findFirst: {
            args: Prisma.LpoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LpoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LpoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LpoPayload>
          }
          findMany: {
            args: Prisma.LpoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LpoPayload>[]
          }
          create: {
            args: Prisma.LpoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LpoPayload>
          }
          createMany: {
            args: Prisma.LpoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LpoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LpoPayload>[]
          }
          delete: {
            args: Prisma.LpoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LpoPayload>
          }
          update: {
            args: Prisma.LpoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LpoPayload>
          }
          deleteMany: {
            args: Prisma.LpoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LpoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LpoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LpoPayload>[]
          }
          upsert: {
            args: Prisma.LpoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LpoPayload>
          }
          aggregate: {
            args: Prisma.LpoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLpo>
          }
          groupBy: {
            args: Prisma.LpoGroupByArgs<ExtArgs>
            result: $Utils.Optional<LpoGroupByOutputType>[]
          }
          count: {
            args: Prisma.LpoCountArgs<ExtArgs>
            result: $Utils.Optional<LpoCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      SupplyItem: {
        payload: Prisma.$SupplyItemPayload<ExtArgs>
        fields: Prisma.SupplyItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplyItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplyItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplyItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplyItemPayload>
          }
          findFirst: {
            args: Prisma.SupplyItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplyItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplyItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplyItemPayload>
          }
          findMany: {
            args: Prisma.SupplyItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplyItemPayload>[]
          }
          create: {
            args: Prisma.SupplyItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplyItemPayload>
          }
          createMany: {
            args: Prisma.SupplyItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplyItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplyItemPayload>[]
          }
          delete: {
            args: Prisma.SupplyItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplyItemPayload>
          }
          update: {
            args: Prisma.SupplyItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplyItemPayload>
          }
          deleteMany: {
            args: Prisma.SupplyItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplyItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplyItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplyItemPayload>[]
          }
          upsert: {
            args: Prisma.SupplyItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplyItemPayload>
          }
          aggregate: {
            args: Prisma.SupplyItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplyItem>
          }
          groupBy: {
            args: Prisma.SupplyItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplyItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplyItemCountArgs<ExtArgs>
            result: $Utils.Optional<SupplyItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    company?: CompanyOmit
    site?: SiteOmit
    user?: UserOmit
    lpo?: LpoOmit
    supplier?: SupplierOmit
    supplyItem?: SupplyItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompanyCountOutputType
   */

  export type CompanyCountOutputType = {
    sites: number
  }

  export type CompanyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sites?: boolean | CompanyCountOutputTypeCountSitesArgs
  }

  // Custom InputTypes
  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyCountOutputType
     */
    select?: CompanyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyCountOutputType without action
   */
  export type CompanyCountOutputTypeCountSitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
  }


  /**
   * Count Type SiteCountOutputType
   */

  export type SiteCountOutputType = {
    lpos: number
  }

  export type SiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lpos?: boolean | SiteCountOutputTypeCountLposArgs
  }

  // Custom InputTypes
  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SiteCountOutputType
     */
    select?: SiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SiteCountOutputType without action
   */
  export type SiteCountOutputTypeCountLposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LpoWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdLpos: number
    firstApprovedLpos: number
    secondApprovedLpos: number
    finalApprovedLpos: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdLpos?: boolean | UserCountOutputTypeCountCreatedLposArgs
    firstApprovedLpos?: boolean | UserCountOutputTypeCountFirstApprovedLposArgs
    secondApprovedLpos?: boolean | UserCountOutputTypeCountSecondApprovedLposArgs
    finalApprovedLpos?: boolean | UserCountOutputTypeCountFinalApprovedLposArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedLposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LpoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFirstApprovedLposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LpoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSecondApprovedLposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LpoWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFinalApprovedLposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LpoWhereInput
  }


  /**
   * Count Type LpoCountOutputType
   */

  export type LpoCountOutputType = {
    supplyItems: number
  }

  export type LpoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplyItems?: boolean | LpoCountOutputTypeCountSupplyItemsArgs
  }

  // Custom InputTypes
  /**
   * LpoCountOutputType without action
   */
  export type LpoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LpoCountOutputType
     */
    select?: LpoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LpoCountOutputType without action
   */
  export type LpoCountOutputTypeCountSupplyItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplyItemWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    lpos: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lpos?: boolean | SupplierCountOutputTypeCountLposArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountLposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LpoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Company
   */

  export type AggregateCompany = {
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  export type CompanyAvgAggregateOutputType = {
    id: number | null
  }

  export type CompanySumAggregateOutputType = {
    id: number | null
  }

  export type CompanyMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CompanyMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CompanyCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CompanyAvgAggregateInputType = {
    id?: true
  }

  export type CompanySumAggregateInputType = {
    id?: true
  }

  export type CompanyMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompanyMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CompanyCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CompanyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Company to aggregate.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompanyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompanyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompanySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyMaxAggregateInputType
  }

  export type GetCompanyAggregateType<T extends CompanyAggregateArgs> = {
        [P in keyof T & keyof AggregateCompany]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompany[P]>
      : GetScalarType<T[P], AggregateCompany[P]>
  }




  export type CompanyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyWhereInput
    orderBy?: CompanyOrderByWithAggregationInput | CompanyOrderByWithAggregationInput[]
    by: CompanyScalarFieldEnum[] | CompanyScalarFieldEnum
    having?: CompanyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyCountAggregateInputType | true
    _avg?: CompanyAvgAggregateInputType
    _sum?: CompanySumAggregateInputType
    _min?: CompanyMinAggregateInputType
    _max?: CompanyMaxAggregateInputType
  }

  export type CompanyGroupByOutputType = {
    id: number
    name: string
    _count: CompanyCountAggregateOutputType | null
    _avg: CompanyAvgAggregateOutputType | null
    _sum: CompanySumAggregateOutputType | null
    _min: CompanyMinAggregateOutputType | null
    _max: CompanyMaxAggregateOutputType | null
  }

  type GetCompanyGroupByPayload<T extends CompanyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyGroupByOutputType[P]>
        }
      >
    >


  export type CompanySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sites?: boolean | Company$sitesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["company"]>

  export type CompanySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["company"]>

  export type CompanySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CompanyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["company"]>
  export type CompanyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sites?: boolean | Company$sitesArgs<ExtArgs>
    _count?: boolean | CompanyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompanyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompanyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Company"
    objects: {
      sites: Prisma.$SitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["company"]>
    composites: {}
  }

  type CompanyGetPayload<S extends boolean | null | undefined | CompanyDefaultArgs> = $Result.GetResult<Prisma.$CompanyPayload, S>

  type CompanyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyCountAggregateInputType | true
    }

  export interface CompanyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Company'], meta: { name: 'Company' } }
    /**
     * Find zero or one Company that matches the filter.
     * @param {CompanyFindUniqueArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyFindUniqueArgs>(args: SelectSubset<T, CompanyFindUniqueArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Company that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyFindUniqueOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Company that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyFindFirstArgs>(args?: SelectSubset<T, CompanyFindFirstArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Company that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindFirstOrThrowArgs} args - Arguments to find a Company
     * @example
     * // Get one Company
     * const company = await prisma.company.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.company.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.company.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyWithIdOnly = await prisma.company.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyFindManyArgs>(args?: SelectSubset<T, CompanyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Company.
     * @param {CompanyCreateArgs} args - Arguments to create a Company.
     * @example
     * // Create one Company
     * const Company = await prisma.company.create({
     *   data: {
     *     // ... data to create a Company
     *   }
     * })
     * 
     */
    create<T extends CompanyCreateArgs>(args: SelectSubset<T, CompanyCreateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Companies.
     * @param {CompanyCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyCreateManyArgs>(args?: SelectSubset<T, CompanyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompanyCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const company = await prisma.company.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Company.
     * @param {CompanyDeleteArgs} args - Arguments to delete one Company.
     * @example
     * // Delete one Company
     * const Company = await prisma.company.delete({
     *   where: {
     *     // ... filter to delete one Company
     *   }
     * })
     * 
     */
    delete<T extends CompanyDeleteArgs>(args: SelectSubset<T, CompanyDeleteArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Company.
     * @param {CompanyUpdateArgs} args - Arguments to update one Company.
     * @example
     * // Update one Company
     * const company = await prisma.company.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyUpdateArgs>(args: SelectSubset<T, CompanyUpdateArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompanyDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.company.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyDeleteManyArgs>(args?: SelectSubset<T, CompanyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyUpdateManyArgs>(args: SelectSubset<T, CompanyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompanyUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const company = await prisma.company.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companyWithIdOnly = await prisma.company.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Company.
     * @param {CompanyUpsertArgs} args - Arguments to update or create a Company.
     * @example
     * // Update or create a Company
     * const company = await prisma.company.upsert({
     *   create: {
     *     // ... data to create a Company
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Company we want to update
     *   }
     * })
     */
    upsert<T extends CompanyUpsertArgs>(args: SelectSubset<T, CompanyUpsertArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.company.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompanyCountArgs>(
      args?: Subset<T, CompanyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyAggregateArgs>(args: Subset<T, CompanyAggregateArgs>): Prisma.PrismaPromise<GetCompanyAggregateType<T>>

    /**
     * Group by Company.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyGroupByArgs['orderBy'] }
        : { orderBy?: CompanyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Company model
   */
  readonly fields: CompanyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Company.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sites<T extends Company$sitesArgs<ExtArgs> = {}>(args?: Subset<T, Company$sitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Company model
   */ 
  interface CompanyFieldRefs {
    readonly id: FieldRef<"Company", 'Int'>
    readonly name: FieldRef<"Company", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Company findUnique
   */
  export type CompanyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findUniqueOrThrow
   */
  export type CompanyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company findFirst
   */
  export type CompanyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findFirstOrThrow
   */
  export type CompanyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Company to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company findMany
   */
  export type CompanyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompanyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompanyOrderByWithRelationInput | CompanyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompanyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompanyScalarFieldEnum | CompanyScalarFieldEnum[]
  }

  /**
   * Company create
   */
  export type CompanyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to create a Company.
     */
    data: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
  }

  /**
   * Company createMany
   */
  export type CompanyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company createManyAndReturn
   */
  export type CompanyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompanyCreateManyInput | CompanyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Company update
   */
  export type CompanyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The data needed to update a Company.
     */
    data: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
    /**
     * Choose, which Company to update.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company updateMany
   */
  export type CompanyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company updateManyAndReturn
   */
  export type CompanyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompanyUpdateManyMutationInput, CompanyUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Company upsert
   */
  export type CompanyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * The filter to search for the Company to update in case it exists.
     */
    where: CompanyWhereUniqueInput
    /**
     * In case the Company found by the `where` argument doesn't exist, create a new Company with this data.
     */
    create: XOR<CompanyCreateInput, CompanyUncheckedCreateInput>
    /**
     * In case the Company was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyUpdateInput, CompanyUncheckedUpdateInput>
  }

  /**
   * Company delete
   */
  export type CompanyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
    /**
     * Filter which Company to delete.
     */
    where: CompanyWhereUniqueInput
  }

  /**
   * Company deleteMany
   */
  export type CompanyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompanyWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Company.sites
   */
  export type Company$sitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    cursor?: SiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Company without action
   */
  export type CompanyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Company
     */
    select?: CompanySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Company
     */
    omit?: CompanyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyInclude<ExtArgs> | null
  }


  /**
   * Model Site
   */

  export type AggregateSite = {
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  export type SiteAvgAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type SiteSumAggregateOutputType = {
    id: number | null
    companyId: number | null
  }

  export type SiteMinAggregateOutputType = {
    id: number | null
    name: string | null
    companyId: number | null
  }

  export type SiteMaxAggregateOutputType = {
    id: number | null
    name: string | null
    companyId: number | null
  }

  export type SiteCountAggregateOutputType = {
    id: number
    name: number
    companyId: number
    _all: number
  }


  export type SiteAvgAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type SiteSumAggregateInputType = {
    id?: true
    companyId?: true
  }

  export type SiteMinAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
  }

  export type SiteMaxAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
  }

  export type SiteCountAggregateInputType = {
    id?: true
    name?: true
    companyId?: true
    _all?: true
  }

  export type SiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Site to aggregate.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sites
    **/
    _count?: true | SiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SiteMaxAggregateInputType
  }

  export type GetSiteAggregateType<T extends SiteAggregateArgs> = {
        [P in keyof T & keyof AggregateSite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSite[P]>
      : GetScalarType<T[P], AggregateSite[P]>
  }




  export type SiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SiteWhereInput
    orderBy?: SiteOrderByWithAggregationInput | SiteOrderByWithAggregationInput[]
    by: SiteScalarFieldEnum[] | SiteScalarFieldEnum
    having?: SiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SiteCountAggregateInputType | true
    _avg?: SiteAvgAggregateInputType
    _sum?: SiteSumAggregateInputType
    _min?: SiteMinAggregateInputType
    _max?: SiteMaxAggregateInputType
  }

  export type SiteGroupByOutputType = {
    id: number
    name: string
    companyId: number
    _count: SiteCountAggregateOutputType | null
    _avg: SiteAvgAggregateOutputType | null
    _sum: SiteSumAggregateOutputType | null
    _min: SiteMinAggregateOutputType | null
    _max: SiteMaxAggregateOutputType | null
  }

  type GetSiteGroupByPayload<T extends SiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SiteGroupByOutputType[P]>
            : GetScalarType<T[P], SiteGroupByOutputType[P]>
        }
      >
    >


  export type SiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    lpos?: boolean | Site$lposArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    companyId?: boolean
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["site"]>

  export type SiteSelectScalar = {
    id?: boolean
    name?: boolean
    companyId?: boolean
  }

  export type SiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "companyId", ExtArgs["result"]["site"]>
  export type SiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
    lpos?: boolean | Site$lposArgs<ExtArgs>
    _count?: boolean | SiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }
  export type SiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    company?: boolean | CompanyDefaultArgs<ExtArgs>
  }

  export type $SitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Site"
    objects: {
      company: Prisma.$CompanyPayload<ExtArgs>
      lpos: Prisma.$LpoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      companyId: number
    }, ExtArgs["result"]["site"]>
    composites: {}
  }

  type SiteGetPayload<S extends boolean | null | undefined | SiteDefaultArgs> = $Result.GetResult<Prisma.$SitePayload, S>

  type SiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SiteCountAggregateInputType | true
    }

  export interface SiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Site'], meta: { name: 'Site' } }
    /**
     * Find zero or one Site that matches the filter.
     * @param {SiteFindUniqueArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SiteFindUniqueArgs>(args: SelectSubset<T, SiteFindUniqueArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Site that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SiteFindUniqueOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SiteFindUniqueOrThrowArgs>(args: SelectSubset<T, SiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Site that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SiteFindFirstArgs>(args?: SelectSubset<T, SiteFindFirstArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Site that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindFirstOrThrowArgs} args - Arguments to find a Site
     * @example
     * // Get one Site
     * const site = await prisma.site.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SiteFindFirstOrThrowArgs>(args?: SelectSubset<T, SiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Sites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sites
     * const sites = await prisma.site.findMany()
     * 
     * // Get first 10 Sites
     * const sites = await prisma.site.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const siteWithIdOnly = await prisma.site.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SiteFindManyArgs>(args?: SelectSubset<T, SiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Site.
     * @param {SiteCreateArgs} args - Arguments to create a Site.
     * @example
     * // Create one Site
     * const Site = await prisma.site.create({
     *   data: {
     *     // ... data to create a Site
     *   }
     * })
     * 
     */
    create<T extends SiteCreateArgs>(args: SelectSubset<T, SiteCreateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Sites.
     * @param {SiteCreateManyArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SiteCreateManyArgs>(args?: SelectSubset<T, SiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sites and returns the data saved in the database.
     * @param {SiteCreateManyAndReturnArgs} args - Arguments to create many Sites.
     * @example
     * // Create many Sites
     * const site = await prisma.site.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SiteCreateManyAndReturnArgs>(args?: SelectSubset<T, SiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Site.
     * @param {SiteDeleteArgs} args - Arguments to delete one Site.
     * @example
     * // Delete one Site
     * const Site = await prisma.site.delete({
     *   where: {
     *     // ... filter to delete one Site
     *   }
     * })
     * 
     */
    delete<T extends SiteDeleteArgs>(args: SelectSubset<T, SiteDeleteArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Site.
     * @param {SiteUpdateArgs} args - Arguments to update one Site.
     * @example
     * // Update one Site
     * const site = await prisma.site.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SiteUpdateArgs>(args: SelectSubset<T, SiteUpdateArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Sites.
     * @param {SiteDeleteManyArgs} args - Arguments to filter Sites to delete.
     * @example
     * // Delete a few Sites
     * const { count } = await prisma.site.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SiteDeleteManyArgs>(args?: SelectSubset<T, SiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SiteUpdateManyArgs>(args: SelectSubset<T, SiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sites and returns the data updated in the database.
     * @param {SiteUpdateManyAndReturnArgs} args - Arguments to update many Sites.
     * @example
     * // Update many Sites
     * const site = await prisma.site.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sites and only return the `id`
     * const siteWithIdOnly = await prisma.site.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SiteUpdateManyAndReturnArgs>(args: SelectSubset<T, SiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Site.
     * @param {SiteUpsertArgs} args - Arguments to update or create a Site.
     * @example
     * // Update or create a Site
     * const site = await prisma.site.upsert({
     *   create: {
     *     // ... data to create a Site
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Site we want to update
     *   }
     * })
     */
    upsert<T extends SiteUpsertArgs>(args: SelectSubset<T, SiteUpsertArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Sites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteCountArgs} args - Arguments to filter Sites to count.
     * @example
     * // Count the number of Sites
     * const count = await prisma.site.count({
     *   where: {
     *     // ... the filter for the Sites we want to count
     *   }
     * })
    **/
    count<T extends SiteCountArgs>(
      args?: Subset<T, SiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SiteAggregateArgs>(args: Subset<T, SiteAggregateArgs>): Prisma.PrismaPromise<GetSiteAggregateType<T>>

    /**
     * Group by Site.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SiteGroupByArgs['orderBy'] }
        : { orderBy?: SiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Site model
   */
  readonly fields: SiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Site.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    company<T extends CompanyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyDefaultArgs<ExtArgs>>): Prisma__CompanyClient<$Result.GetResult<Prisma.$CompanyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    lpos<T extends Site$lposArgs<ExtArgs> = {}>(args?: Subset<T, Site$lposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Site model
   */ 
  interface SiteFieldRefs {
    readonly id: FieldRef<"Site", 'Int'>
    readonly name: FieldRef<"Site", 'String'>
    readonly companyId: FieldRef<"Site", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Site findUnique
   */
  export type SiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findUniqueOrThrow
   */
  export type SiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site findFirst
   */
  export type SiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findFirstOrThrow
   */
  export type SiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Site to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sites.
     */
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site findMany
   */
  export type SiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter, which Sites to fetch.
     */
    where?: SiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sites to fetch.
     */
    orderBy?: SiteOrderByWithRelationInput | SiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sites.
     */
    cursor?: SiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sites.
     */
    skip?: number
    distinct?: SiteScalarFieldEnum | SiteScalarFieldEnum[]
  }

  /**
   * Site create
   */
  export type SiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Site.
     */
    data: XOR<SiteCreateInput, SiteUncheckedCreateInput>
  }

  /**
   * Site createMany
   */
  export type SiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Site createManyAndReturn
   */
  export type SiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to create many Sites.
     */
    data: SiteCreateManyInput | SiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site update
   */
  export type SiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Site.
     */
    data: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
    /**
     * Choose, which Site to update.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site updateMany
   */
  export type SiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
  }

  /**
   * Site updateManyAndReturn
   */
  export type SiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * The data used to update Sites.
     */
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyInput>
    /**
     * Filter which Sites to update
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Site upsert
   */
  export type SiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Site to update in case it exists.
     */
    where: SiteWhereUniqueInput
    /**
     * In case the Site found by the `where` argument doesn't exist, create a new Site with this data.
     */
    create: XOR<SiteCreateInput, SiteUncheckedCreateInput>
    /**
     * In case the Site was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SiteUpdateInput, SiteUncheckedUpdateInput>
  }

  /**
   * Site delete
   */
  export type SiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
    /**
     * Filter which Site to delete.
     */
    where: SiteWhereUniqueInput
  }

  /**
   * Site deleteMany
   */
  export type SiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sites to delete
     */
    where?: SiteWhereInput
    /**
     * Limit how many Sites to delete.
     */
    limit?: number
  }

  /**
   * Site.lpos
   */
  export type Site$lposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
    where?: LpoWhereInput
    orderBy?: LpoOrderByWithRelationInput | LpoOrderByWithRelationInput[]
    cursor?: LpoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LpoScalarFieldEnum | LpoScalarFieldEnum[]
  }

  /**
   * Site without action
   */
  export type SiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Site
     */
    select?: SiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Site
     */
    omit?: SiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SiteInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdLpos?: boolean | User$createdLposArgs<ExtArgs>
    firstApprovedLpos?: boolean | User$firstApprovedLposArgs<ExtArgs>
    secondApprovedLpos?: boolean | User$secondApprovedLposArgs<ExtArgs>
    finalApprovedLpos?: boolean | User$finalApprovedLposArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdLpos?: boolean | User$createdLposArgs<ExtArgs>
    firstApprovedLpos?: boolean | User$firstApprovedLposArgs<ExtArgs>
    secondApprovedLpos?: boolean | User$secondApprovedLposArgs<ExtArgs>
    finalApprovedLpos?: boolean | User$finalApprovedLposArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdLpos: Prisma.$LpoPayload<ExtArgs>[]
      firstApprovedLpos: Prisma.$LpoPayload<ExtArgs>[]
      secondApprovedLpos: Prisma.$LpoPayload<ExtArgs>[]
      finalApprovedLpos: Prisma.$LpoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      firstName: string
      lastName: string
      email: string
      password: string
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdLpos<T extends User$createdLposArgs<ExtArgs> = {}>(args?: Subset<T, User$createdLposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    firstApprovedLpos<T extends User$firstApprovedLposArgs<ExtArgs> = {}>(args?: Subset<T, User$firstApprovedLposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    secondApprovedLpos<T extends User$secondApprovedLposArgs<ExtArgs> = {}>(args?: Subset<T, User$secondApprovedLposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    finalApprovedLpos<T extends User$finalApprovedLposArgs<ExtArgs> = {}>(args?: Subset<T, User$finalApprovedLposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdLpos
   */
  export type User$createdLposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
    where?: LpoWhereInput
    orderBy?: LpoOrderByWithRelationInput | LpoOrderByWithRelationInput[]
    cursor?: LpoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LpoScalarFieldEnum | LpoScalarFieldEnum[]
  }

  /**
   * User.firstApprovedLpos
   */
  export type User$firstApprovedLposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
    where?: LpoWhereInput
    orderBy?: LpoOrderByWithRelationInput | LpoOrderByWithRelationInput[]
    cursor?: LpoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LpoScalarFieldEnum | LpoScalarFieldEnum[]
  }

  /**
   * User.secondApprovedLpos
   */
  export type User$secondApprovedLposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
    where?: LpoWhereInput
    orderBy?: LpoOrderByWithRelationInput | LpoOrderByWithRelationInput[]
    cursor?: LpoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LpoScalarFieldEnum | LpoScalarFieldEnum[]
  }

  /**
   * User.finalApprovedLpos
   */
  export type User$finalApprovedLposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
    where?: LpoWhereInput
    orderBy?: LpoOrderByWithRelationInput | LpoOrderByWithRelationInput[]
    cursor?: LpoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LpoScalarFieldEnum | LpoScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Lpo
   */

  export type AggregateLpo = {
    _count: LpoCountAggregateOutputType | null
    _avg: LpoAvgAggregateOutputType | null
    _sum: LpoSumAggregateOutputType | null
    _min: LpoMinAggregateOutputType | null
    _max: LpoMaxAggregateOutputType | null
  }

  export type LpoAvgAggregateOutputType = {
    id: number | null
    siteId: number | null
    subTotal: number | null
    vatRate: number | null
    total: number | null
    createdById: number | null
    firstApproverId: number | null
    secondApproverId: number | null
    finalApproverId: number | null
    supplierId: number | null
  }

  export type LpoSumAggregateOutputType = {
    id: number | null
    siteId: number | null
    subTotal: number | null
    vatRate: number | null
    total: number | null
    createdById: number | null
    firstApproverId: number | null
    secondApproverId: number | null
    finalApproverId: number | null
    supplierId: number | null
  }

  export type LpoMinAggregateOutputType = {
    id: number | null
    siteId: number | null
    lpoNumber: string | null
    prNumber: string | null
    paymentTerms: string | null
    deliveryTerms: string | null
    subTotal: number | null
    vatRate: number | null
    total: number | null
    createdById: number | null
    createdAt: Date | null
    updatedAt: Date | null
    firstApproverId: number | null
    secondApproverId: number | null
    finalApproverId: number | null
    supplierId: number | null
    remarks: string | null
    rejected: $Enums.LpoRejected | null
  }

  export type LpoMaxAggregateOutputType = {
    id: number | null
    siteId: number | null
    lpoNumber: string | null
    prNumber: string | null
    paymentTerms: string | null
    deliveryTerms: string | null
    subTotal: number | null
    vatRate: number | null
    total: number | null
    createdById: number | null
    createdAt: Date | null
    updatedAt: Date | null
    firstApproverId: number | null
    secondApproverId: number | null
    finalApproverId: number | null
    supplierId: number | null
    remarks: string | null
    rejected: $Enums.LpoRejected | null
  }

  export type LpoCountAggregateOutputType = {
    id: number
    siteId: number
    lpoNumber: number
    prNumber: number
    paymentTerms: number
    deliveryTerms: number
    subTotal: number
    vatRate: number
    total: number
    createdById: number
    createdAt: number
    updatedAt: number
    firstApproverId: number
    secondApproverId: number
    finalApproverId: number
    supplierId: number
    remarks: number
    rejected: number
    _all: number
  }


  export type LpoAvgAggregateInputType = {
    id?: true
    siteId?: true
    subTotal?: true
    vatRate?: true
    total?: true
    createdById?: true
    firstApproverId?: true
    secondApproverId?: true
    finalApproverId?: true
    supplierId?: true
  }

  export type LpoSumAggregateInputType = {
    id?: true
    siteId?: true
    subTotal?: true
    vatRate?: true
    total?: true
    createdById?: true
    firstApproverId?: true
    secondApproverId?: true
    finalApproverId?: true
    supplierId?: true
  }

  export type LpoMinAggregateInputType = {
    id?: true
    siteId?: true
    lpoNumber?: true
    prNumber?: true
    paymentTerms?: true
    deliveryTerms?: true
    subTotal?: true
    vatRate?: true
    total?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    firstApproverId?: true
    secondApproverId?: true
    finalApproverId?: true
    supplierId?: true
    remarks?: true
    rejected?: true
  }

  export type LpoMaxAggregateInputType = {
    id?: true
    siteId?: true
    lpoNumber?: true
    prNumber?: true
    paymentTerms?: true
    deliveryTerms?: true
    subTotal?: true
    vatRate?: true
    total?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    firstApproverId?: true
    secondApproverId?: true
    finalApproverId?: true
    supplierId?: true
    remarks?: true
    rejected?: true
  }

  export type LpoCountAggregateInputType = {
    id?: true
    siteId?: true
    lpoNumber?: true
    prNumber?: true
    paymentTerms?: true
    deliveryTerms?: true
    subTotal?: true
    vatRate?: true
    total?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    firstApproverId?: true
    secondApproverId?: true
    finalApproverId?: true
    supplierId?: true
    remarks?: true
    rejected?: true
    _all?: true
  }

  export type LpoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lpo to aggregate.
     */
    where?: LpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lpos to fetch.
     */
    orderBy?: LpoOrderByWithRelationInput | LpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lpos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lpos
    **/
    _count?: true | LpoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LpoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LpoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LpoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LpoMaxAggregateInputType
  }

  export type GetLpoAggregateType<T extends LpoAggregateArgs> = {
        [P in keyof T & keyof AggregateLpo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLpo[P]>
      : GetScalarType<T[P], AggregateLpo[P]>
  }




  export type LpoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LpoWhereInput
    orderBy?: LpoOrderByWithAggregationInput | LpoOrderByWithAggregationInput[]
    by: LpoScalarFieldEnum[] | LpoScalarFieldEnum
    having?: LpoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LpoCountAggregateInputType | true
    _avg?: LpoAvgAggregateInputType
    _sum?: LpoSumAggregateInputType
    _min?: LpoMinAggregateInputType
    _max?: LpoMaxAggregateInputType
  }

  export type LpoGroupByOutputType = {
    id: number
    siteId: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdById: number
    createdAt: Date
    updatedAt: Date
    firstApproverId: number | null
    secondApproverId: number | null
    finalApproverId: number | null
    supplierId: number
    remarks: string
    rejected: $Enums.LpoRejected
    _count: LpoCountAggregateOutputType | null
    _avg: LpoAvgAggregateOutputType | null
    _sum: LpoSumAggregateOutputType | null
    _min: LpoMinAggregateOutputType | null
    _max: LpoMaxAggregateOutputType | null
  }

  type GetLpoGroupByPayload<T extends LpoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LpoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LpoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LpoGroupByOutputType[P]>
            : GetScalarType<T[P], LpoGroupByOutputType[P]>
        }
      >
    >


  export type LpoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    lpoNumber?: boolean
    prNumber?: boolean
    paymentTerms?: boolean
    deliveryTerms?: boolean
    subTotal?: boolean
    vatRate?: boolean
    total?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstApproverId?: boolean
    secondApproverId?: boolean
    finalApproverId?: boolean
    supplierId?: boolean
    remarks?: boolean
    rejected?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    supplyItems?: boolean | Lpo$supplyItemsArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    firstApprover?: boolean | Lpo$firstApproverArgs<ExtArgs>
    secondApprover?: boolean | Lpo$secondApproverArgs<ExtArgs>
    finalApprover?: boolean | Lpo$finalApproverArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    _count?: boolean | LpoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lpo"]>

  export type LpoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    lpoNumber?: boolean
    prNumber?: boolean
    paymentTerms?: boolean
    deliveryTerms?: boolean
    subTotal?: boolean
    vatRate?: boolean
    total?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstApproverId?: boolean
    secondApproverId?: boolean
    finalApproverId?: boolean
    supplierId?: boolean
    remarks?: boolean
    rejected?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    firstApprover?: boolean | Lpo$firstApproverArgs<ExtArgs>
    secondApprover?: boolean | Lpo$secondApproverArgs<ExtArgs>
    finalApprover?: boolean | Lpo$finalApproverArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lpo"]>

  export type LpoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    siteId?: boolean
    lpoNumber?: boolean
    prNumber?: boolean
    paymentTerms?: boolean
    deliveryTerms?: boolean
    subTotal?: boolean
    vatRate?: boolean
    total?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstApproverId?: boolean
    secondApproverId?: boolean
    finalApproverId?: boolean
    supplierId?: boolean
    remarks?: boolean
    rejected?: boolean
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    firstApprover?: boolean | Lpo$firstApproverArgs<ExtArgs>
    secondApprover?: boolean | Lpo$secondApproverArgs<ExtArgs>
    finalApprover?: boolean | Lpo$finalApproverArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lpo"]>

  export type LpoSelectScalar = {
    id?: boolean
    siteId?: boolean
    lpoNumber?: boolean
    prNumber?: boolean
    paymentTerms?: boolean
    deliveryTerms?: boolean
    subTotal?: boolean
    vatRate?: boolean
    total?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    firstApproverId?: boolean
    secondApproverId?: boolean
    finalApproverId?: boolean
    supplierId?: boolean
    remarks?: boolean
    rejected?: boolean
  }

  export type LpoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "siteId" | "lpoNumber" | "prNumber" | "paymentTerms" | "deliveryTerms" | "subTotal" | "vatRate" | "total" | "createdById" | "createdAt" | "updatedAt" | "firstApproverId" | "secondApproverId" | "finalApproverId" | "supplierId" | "remarks" | "rejected", ExtArgs["result"]["lpo"]>
  export type LpoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    supplyItems?: boolean | Lpo$supplyItemsArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    firstApprover?: boolean | Lpo$firstApproverArgs<ExtArgs>
    secondApprover?: boolean | Lpo$secondApproverArgs<ExtArgs>
    finalApprover?: boolean | Lpo$finalApproverArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    _count?: boolean | LpoCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LpoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    firstApprover?: boolean | Lpo$firstApproverArgs<ExtArgs>
    secondApprover?: boolean | Lpo$secondApproverArgs<ExtArgs>
    finalApprover?: boolean | Lpo$finalApproverArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type LpoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    site?: boolean | SiteDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    firstApprover?: boolean | Lpo$firstApproverArgs<ExtArgs>
    secondApprover?: boolean | Lpo$secondApproverArgs<ExtArgs>
    finalApprover?: boolean | Lpo$finalApproverArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $LpoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lpo"
    objects: {
      site: Prisma.$SitePayload<ExtArgs>
      supplyItems: Prisma.$SupplyItemPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs>
      firstApprover: Prisma.$UserPayload<ExtArgs> | null
      secondApprover: Prisma.$UserPayload<ExtArgs> | null
      finalApprover: Prisma.$UserPayload<ExtArgs> | null
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      siteId: number
      lpoNumber: string
      prNumber: string
      paymentTerms: string
      deliveryTerms: string
      subTotal: number
      vatRate: number
      total: number
      createdById: number
      createdAt: Date
      updatedAt: Date
      firstApproverId: number | null
      secondApproverId: number | null
      finalApproverId: number | null
      supplierId: number
      remarks: string
      rejected: $Enums.LpoRejected
    }, ExtArgs["result"]["lpo"]>
    composites: {}
  }

  type LpoGetPayload<S extends boolean | null | undefined | LpoDefaultArgs> = $Result.GetResult<Prisma.$LpoPayload, S>

  type LpoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LpoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LpoCountAggregateInputType | true
    }

  export interface LpoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lpo'], meta: { name: 'Lpo' } }
    /**
     * Find zero or one Lpo that matches the filter.
     * @param {LpoFindUniqueArgs} args - Arguments to find a Lpo
     * @example
     * // Get one Lpo
     * const lpo = await prisma.lpo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LpoFindUniqueArgs>(args: SelectSubset<T, LpoFindUniqueArgs<ExtArgs>>): Prisma__LpoClient<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Lpo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LpoFindUniqueOrThrowArgs} args - Arguments to find a Lpo
     * @example
     * // Get one Lpo
     * const lpo = await prisma.lpo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LpoFindUniqueOrThrowArgs>(args: SelectSubset<T, LpoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LpoClient<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Lpo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LpoFindFirstArgs} args - Arguments to find a Lpo
     * @example
     * // Get one Lpo
     * const lpo = await prisma.lpo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LpoFindFirstArgs>(args?: SelectSubset<T, LpoFindFirstArgs<ExtArgs>>): Prisma__LpoClient<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Lpo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LpoFindFirstOrThrowArgs} args - Arguments to find a Lpo
     * @example
     * // Get one Lpo
     * const lpo = await prisma.lpo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LpoFindFirstOrThrowArgs>(args?: SelectSubset<T, LpoFindFirstOrThrowArgs<ExtArgs>>): Prisma__LpoClient<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Lpos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LpoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lpos
     * const lpos = await prisma.lpo.findMany()
     * 
     * // Get first 10 Lpos
     * const lpos = await prisma.lpo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lpoWithIdOnly = await prisma.lpo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LpoFindManyArgs>(args?: SelectSubset<T, LpoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Lpo.
     * @param {LpoCreateArgs} args - Arguments to create a Lpo.
     * @example
     * // Create one Lpo
     * const Lpo = await prisma.lpo.create({
     *   data: {
     *     // ... data to create a Lpo
     *   }
     * })
     * 
     */
    create<T extends LpoCreateArgs>(args: SelectSubset<T, LpoCreateArgs<ExtArgs>>): Prisma__LpoClient<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Lpos.
     * @param {LpoCreateManyArgs} args - Arguments to create many Lpos.
     * @example
     * // Create many Lpos
     * const lpo = await prisma.lpo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LpoCreateManyArgs>(args?: SelectSubset<T, LpoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lpos and returns the data saved in the database.
     * @param {LpoCreateManyAndReturnArgs} args - Arguments to create many Lpos.
     * @example
     * // Create many Lpos
     * const lpo = await prisma.lpo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lpos and only return the `id`
     * const lpoWithIdOnly = await prisma.lpo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LpoCreateManyAndReturnArgs>(args?: SelectSubset<T, LpoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Lpo.
     * @param {LpoDeleteArgs} args - Arguments to delete one Lpo.
     * @example
     * // Delete one Lpo
     * const Lpo = await prisma.lpo.delete({
     *   where: {
     *     // ... filter to delete one Lpo
     *   }
     * })
     * 
     */
    delete<T extends LpoDeleteArgs>(args: SelectSubset<T, LpoDeleteArgs<ExtArgs>>): Prisma__LpoClient<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Lpo.
     * @param {LpoUpdateArgs} args - Arguments to update one Lpo.
     * @example
     * // Update one Lpo
     * const lpo = await prisma.lpo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LpoUpdateArgs>(args: SelectSubset<T, LpoUpdateArgs<ExtArgs>>): Prisma__LpoClient<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Lpos.
     * @param {LpoDeleteManyArgs} args - Arguments to filter Lpos to delete.
     * @example
     * // Delete a few Lpos
     * const { count } = await prisma.lpo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LpoDeleteManyArgs>(args?: SelectSubset<T, LpoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lpos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LpoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lpos
     * const lpo = await prisma.lpo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LpoUpdateManyArgs>(args: SelectSubset<T, LpoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lpos and returns the data updated in the database.
     * @param {LpoUpdateManyAndReturnArgs} args - Arguments to update many Lpos.
     * @example
     * // Update many Lpos
     * const lpo = await prisma.lpo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lpos and only return the `id`
     * const lpoWithIdOnly = await prisma.lpo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends LpoUpdateManyAndReturnArgs>(args: SelectSubset<T, LpoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Lpo.
     * @param {LpoUpsertArgs} args - Arguments to update or create a Lpo.
     * @example
     * // Update or create a Lpo
     * const lpo = await prisma.lpo.upsert({
     *   create: {
     *     // ... data to create a Lpo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lpo we want to update
     *   }
     * })
     */
    upsert<T extends LpoUpsertArgs>(args: SelectSubset<T, LpoUpsertArgs<ExtArgs>>): Prisma__LpoClient<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Lpos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LpoCountArgs} args - Arguments to filter Lpos to count.
     * @example
     * // Count the number of Lpos
     * const count = await prisma.lpo.count({
     *   where: {
     *     // ... the filter for the Lpos we want to count
     *   }
     * })
    **/
    count<T extends LpoCountArgs>(
      args?: Subset<T, LpoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LpoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lpo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LpoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LpoAggregateArgs>(args: Subset<T, LpoAggregateArgs>): Prisma.PrismaPromise<GetLpoAggregateType<T>>

    /**
     * Group by Lpo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LpoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends LpoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LpoGroupByArgs['orderBy'] }
        : { orderBy?: LpoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, LpoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLpoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lpo model
   */
  readonly fields: LpoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lpo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LpoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    site<T extends SiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SiteDefaultArgs<ExtArgs>>): Prisma__SiteClient<$Result.GetResult<Prisma.$SitePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    supplyItems<T extends Lpo$supplyItemsArgs<ExtArgs> = {}>(args?: Subset<T, Lpo$supplyItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplyItemPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    firstApprover<T extends Lpo$firstApproverArgs<ExtArgs> = {}>(args?: Subset<T, Lpo$firstApproverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    secondApprover<T extends Lpo$secondApproverArgs<ExtArgs> = {}>(args?: Subset<T, Lpo$secondApproverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    finalApprover<T extends Lpo$finalApproverArgs<ExtArgs> = {}>(args?: Subset<T, Lpo$finalApproverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lpo model
   */ 
  interface LpoFieldRefs {
    readonly id: FieldRef<"Lpo", 'Int'>
    readonly siteId: FieldRef<"Lpo", 'Int'>
    readonly lpoNumber: FieldRef<"Lpo", 'String'>
    readonly prNumber: FieldRef<"Lpo", 'String'>
    readonly paymentTerms: FieldRef<"Lpo", 'String'>
    readonly deliveryTerms: FieldRef<"Lpo", 'String'>
    readonly subTotal: FieldRef<"Lpo", 'Float'>
    readonly vatRate: FieldRef<"Lpo", 'Float'>
    readonly total: FieldRef<"Lpo", 'Float'>
    readonly createdById: FieldRef<"Lpo", 'Int'>
    readonly createdAt: FieldRef<"Lpo", 'DateTime'>
    readonly updatedAt: FieldRef<"Lpo", 'DateTime'>
    readonly firstApproverId: FieldRef<"Lpo", 'Int'>
    readonly secondApproverId: FieldRef<"Lpo", 'Int'>
    readonly finalApproverId: FieldRef<"Lpo", 'Int'>
    readonly supplierId: FieldRef<"Lpo", 'Int'>
    readonly remarks: FieldRef<"Lpo", 'String'>
    readonly rejected: FieldRef<"Lpo", 'LpoRejected'>
  }
    

  // Custom InputTypes
  /**
   * Lpo findUnique
   */
  export type LpoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
    /**
     * Filter, which Lpo to fetch.
     */
    where: LpoWhereUniqueInput
  }

  /**
   * Lpo findUniqueOrThrow
   */
  export type LpoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
    /**
     * Filter, which Lpo to fetch.
     */
    where: LpoWhereUniqueInput
  }

  /**
   * Lpo findFirst
   */
  export type LpoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
    /**
     * Filter, which Lpo to fetch.
     */
    where?: LpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lpos to fetch.
     */
    orderBy?: LpoOrderByWithRelationInput | LpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lpos.
     */
    cursor?: LpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lpos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lpos.
     */
    distinct?: LpoScalarFieldEnum | LpoScalarFieldEnum[]
  }

  /**
   * Lpo findFirstOrThrow
   */
  export type LpoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
    /**
     * Filter, which Lpo to fetch.
     */
    where?: LpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lpos to fetch.
     */
    orderBy?: LpoOrderByWithRelationInput | LpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lpos.
     */
    cursor?: LpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lpos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lpos.
     */
    distinct?: LpoScalarFieldEnum | LpoScalarFieldEnum[]
  }

  /**
   * Lpo findMany
   */
  export type LpoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
    /**
     * Filter, which Lpos to fetch.
     */
    where?: LpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lpos to fetch.
     */
    orderBy?: LpoOrderByWithRelationInput | LpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lpos.
     */
    cursor?: LpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lpos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lpos.
     */
    skip?: number
    distinct?: LpoScalarFieldEnum | LpoScalarFieldEnum[]
  }

  /**
   * Lpo create
   */
  export type LpoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
    /**
     * The data needed to create a Lpo.
     */
    data: XOR<LpoCreateInput, LpoUncheckedCreateInput>
  }

  /**
   * Lpo createMany
   */
  export type LpoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lpos.
     */
    data: LpoCreateManyInput | LpoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lpo createManyAndReturn
   */
  export type LpoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * The data used to create many Lpos.
     */
    data: LpoCreateManyInput | LpoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lpo update
   */
  export type LpoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
    /**
     * The data needed to update a Lpo.
     */
    data: XOR<LpoUpdateInput, LpoUncheckedUpdateInput>
    /**
     * Choose, which Lpo to update.
     */
    where: LpoWhereUniqueInput
  }

  /**
   * Lpo updateMany
   */
  export type LpoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lpos.
     */
    data: XOR<LpoUpdateManyMutationInput, LpoUncheckedUpdateManyInput>
    /**
     * Filter which Lpos to update
     */
    where?: LpoWhereInput
    /**
     * Limit how many Lpos to update.
     */
    limit?: number
  }

  /**
   * Lpo updateManyAndReturn
   */
  export type LpoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * The data used to update Lpos.
     */
    data: XOR<LpoUpdateManyMutationInput, LpoUncheckedUpdateManyInput>
    /**
     * Filter which Lpos to update
     */
    where?: LpoWhereInput
    /**
     * Limit how many Lpos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lpo upsert
   */
  export type LpoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
    /**
     * The filter to search for the Lpo to update in case it exists.
     */
    where: LpoWhereUniqueInput
    /**
     * In case the Lpo found by the `where` argument doesn't exist, create a new Lpo with this data.
     */
    create: XOR<LpoCreateInput, LpoUncheckedCreateInput>
    /**
     * In case the Lpo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LpoUpdateInput, LpoUncheckedUpdateInput>
  }

  /**
   * Lpo delete
   */
  export type LpoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
    /**
     * Filter which Lpo to delete.
     */
    where: LpoWhereUniqueInput
  }

  /**
   * Lpo deleteMany
   */
  export type LpoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lpos to delete
     */
    where?: LpoWhereInput
    /**
     * Limit how many Lpos to delete.
     */
    limit?: number
  }

  /**
   * Lpo.supplyItems
   */
  export type Lpo$supplyItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplyItem
     */
    select?: SupplyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplyItem
     */
    omit?: SupplyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplyItemInclude<ExtArgs> | null
    where?: SupplyItemWhereInput
    orderBy?: SupplyItemOrderByWithRelationInput | SupplyItemOrderByWithRelationInput[]
    cursor?: SupplyItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplyItemScalarFieldEnum | SupplyItemScalarFieldEnum[]
  }

  /**
   * Lpo.firstApprover
   */
  export type Lpo$firstApproverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Lpo.secondApprover
   */
  export type Lpo$secondApproverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Lpo.finalApprover
   */
  export type Lpo$finalApproverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Lpo without action
   */
  export type LpoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: number
    name: string
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    lpos?: boolean | Supplier$lposArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lpos?: boolean | Supplier$lposArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      lpos: Prisma.$LpoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lpos<T extends Supplier$lposArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$lposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Supplier model
   */ 
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'Int'>
    readonly name: FieldRef<"Supplier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.lpos
   */
  export type Supplier$lposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lpo
     */
    select?: LpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lpo
     */
    omit?: LpoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LpoInclude<ExtArgs> | null
    where?: LpoWhereInput
    orderBy?: LpoOrderByWithRelationInput | LpoOrderByWithRelationInput[]
    cursor?: LpoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LpoScalarFieldEnum | LpoScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model SupplyItem
   */

  export type AggregateSupplyItem = {
    _count: SupplyItemCountAggregateOutputType | null
    _avg: SupplyItemAvgAggregateOutputType | null
    _sum: SupplyItemSumAggregateOutputType | null
    _min: SupplyItemMinAggregateOutputType | null
    _max: SupplyItemMaxAggregateOutputType | null
  }

  export type SupplyItemAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    unitPrice: number | null
    lpoId: number | null
  }

  export type SupplyItemSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    unitPrice: number | null
    lpoId: number | null
  }

  export type SupplyItemMinAggregateOutputType = {
    id: number | null
    name: string | null
    quantity: number | null
    unit: string | null
    unitPrice: number | null
    lpoId: number | null
  }

  export type SupplyItemMaxAggregateOutputType = {
    id: number | null
    name: string | null
    quantity: number | null
    unit: string | null
    unitPrice: number | null
    lpoId: number | null
  }

  export type SupplyItemCountAggregateOutputType = {
    id: number
    name: number
    quantity: number
    unit: number
    unitPrice: number
    lpoId: number
    _all: number
  }


  export type SupplyItemAvgAggregateInputType = {
    id?: true
    quantity?: true
    unitPrice?: true
    lpoId?: true
  }

  export type SupplyItemSumAggregateInputType = {
    id?: true
    quantity?: true
    unitPrice?: true
    lpoId?: true
  }

  export type SupplyItemMinAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit?: true
    unitPrice?: true
    lpoId?: true
  }

  export type SupplyItemMaxAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit?: true
    unitPrice?: true
    lpoId?: true
  }

  export type SupplyItemCountAggregateInputType = {
    id?: true
    name?: true
    quantity?: true
    unit?: true
    unitPrice?: true
    lpoId?: true
    _all?: true
  }

  export type SupplyItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplyItem to aggregate.
     */
    where?: SupplyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplyItems to fetch.
     */
    orderBy?: SupplyItemOrderByWithRelationInput | SupplyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplyItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplyItems
    **/
    _count?: true | SupplyItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplyItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplyItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplyItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplyItemMaxAggregateInputType
  }

  export type GetSupplyItemAggregateType<T extends SupplyItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplyItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplyItem[P]>
      : GetScalarType<T[P], AggregateSupplyItem[P]>
  }




  export type SupplyItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplyItemWhereInput
    orderBy?: SupplyItemOrderByWithAggregationInput | SupplyItemOrderByWithAggregationInput[]
    by: SupplyItemScalarFieldEnum[] | SupplyItemScalarFieldEnum
    having?: SupplyItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplyItemCountAggregateInputType | true
    _avg?: SupplyItemAvgAggregateInputType
    _sum?: SupplyItemSumAggregateInputType
    _min?: SupplyItemMinAggregateInputType
    _max?: SupplyItemMaxAggregateInputType
  }

  export type SupplyItemGroupByOutputType = {
    id: number
    name: string
    quantity: number
    unit: string
    unitPrice: number
    lpoId: number
    _count: SupplyItemCountAggregateOutputType | null
    _avg: SupplyItemAvgAggregateOutputType | null
    _sum: SupplyItemSumAggregateOutputType | null
    _min: SupplyItemMinAggregateOutputType | null
    _max: SupplyItemMaxAggregateOutputType | null
  }

  type GetSupplyItemGroupByPayload<T extends SupplyItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplyItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplyItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplyItemGroupByOutputType[P]>
            : GetScalarType<T[P], SupplyItemGroupByOutputType[P]>
        }
      >
    >


  export type SupplyItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    unitPrice?: boolean
    lpoId?: boolean
    lpo?: boolean | LpoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplyItem"]>

  export type SupplyItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    unitPrice?: boolean
    lpoId?: boolean
    lpo?: boolean | LpoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplyItem"]>

  export type SupplyItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    unitPrice?: boolean
    lpoId?: boolean
    lpo?: boolean | LpoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplyItem"]>

  export type SupplyItemSelectScalar = {
    id?: boolean
    name?: boolean
    quantity?: boolean
    unit?: boolean
    unitPrice?: boolean
    lpoId?: boolean
  }

  export type SupplyItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "quantity" | "unit" | "unitPrice" | "lpoId", ExtArgs["result"]["supplyItem"]>
  export type SupplyItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lpo?: boolean | LpoDefaultArgs<ExtArgs>
  }
  export type SupplyItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lpo?: boolean | LpoDefaultArgs<ExtArgs>
  }
  export type SupplyItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lpo?: boolean | LpoDefaultArgs<ExtArgs>
  }

  export type $SupplyItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplyItem"
    objects: {
      lpo: Prisma.$LpoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      quantity: number
      unit: string
      unitPrice: number
      lpoId: number
    }, ExtArgs["result"]["supplyItem"]>
    composites: {}
  }

  type SupplyItemGetPayload<S extends boolean | null | undefined | SupplyItemDefaultArgs> = $Result.GetResult<Prisma.$SupplyItemPayload, S>

  type SupplyItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplyItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplyItemCountAggregateInputType | true
    }

  export interface SupplyItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplyItem'], meta: { name: 'SupplyItem' } }
    /**
     * Find zero or one SupplyItem that matches the filter.
     * @param {SupplyItemFindUniqueArgs} args - Arguments to find a SupplyItem
     * @example
     * // Get one SupplyItem
     * const supplyItem = await prisma.supplyItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplyItemFindUniqueArgs>(args: SelectSubset<T, SupplyItemFindUniqueArgs<ExtArgs>>): Prisma__SupplyItemClient<$Result.GetResult<Prisma.$SupplyItemPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one SupplyItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplyItemFindUniqueOrThrowArgs} args - Arguments to find a SupplyItem
     * @example
     * // Get one SupplyItem
     * const supplyItem = await prisma.supplyItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplyItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplyItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplyItemClient<$Result.GetResult<Prisma.$SupplyItemPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first SupplyItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplyItemFindFirstArgs} args - Arguments to find a SupplyItem
     * @example
     * // Get one SupplyItem
     * const supplyItem = await prisma.supplyItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplyItemFindFirstArgs>(args?: SelectSubset<T, SupplyItemFindFirstArgs<ExtArgs>>): Prisma__SupplyItemClient<$Result.GetResult<Prisma.$SupplyItemPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first SupplyItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplyItemFindFirstOrThrowArgs} args - Arguments to find a SupplyItem
     * @example
     * // Get one SupplyItem
     * const supplyItem = await prisma.supplyItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplyItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplyItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplyItemClient<$Result.GetResult<Prisma.$SupplyItemPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more SupplyItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplyItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplyItems
     * const supplyItems = await prisma.supplyItem.findMany()
     * 
     * // Get first 10 SupplyItems
     * const supplyItems = await prisma.supplyItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplyItemWithIdOnly = await prisma.supplyItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplyItemFindManyArgs>(args?: SelectSubset<T, SupplyItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplyItemPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a SupplyItem.
     * @param {SupplyItemCreateArgs} args - Arguments to create a SupplyItem.
     * @example
     * // Create one SupplyItem
     * const SupplyItem = await prisma.supplyItem.create({
     *   data: {
     *     // ... data to create a SupplyItem
     *   }
     * })
     * 
     */
    create<T extends SupplyItemCreateArgs>(args: SelectSubset<T, SupplyItemCreateArgs<ExtArgs>>): Prisma__SupplyItemClient<$Result.GetResult<Prisma.$SupplyItemPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many SupplyItems.
     * @param {SupplyItemCreateManyArgs} args - Arguments to create many SupplyItems.
     * @example
     * // Create many SupplyItems
     * const supplyItem = await prisma.supplyItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplyItemCreateManyArgs>(args?: SelectSubset<T, SupplyItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplyItems and returns the data saved in the database.
     * @param {SupplyItemCreateManyAndReturnArgs} args - Arguments to create many SupplyItems.
     * @example
     * // Create many SupplyItems
     * const supplyItem = await prisma.supplyItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplyItems and only return the `id`
     * const supplyItemWithIdOnly = await prisma.supplyItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplyItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplyItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplyItemPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a SupplyItem.
     * @param {SupplyItemDeleteArgs} args - Arguments to delete one SupplyItem.
     * @example
     * // Delete one SupplyItem
     * const SupplyItem = await prisma.supplyItem.delete({
     *   where: {
     *     // ... filter to delete one SupplyItem
     *   }
     * })
     * 
     */
    delete<T extends SupplyItemDeleteArgs>(args: SelectSubset<T, SupplyItemDeleteArgs<ExtArgs>>): Prisma__SupplyItemClient<$Result.GetResult<Prisma.$SupplyItemPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one SupplyItem.
     * @param {SupplyItemUpdateArgs} args - Arguments to update one SupplyItem.
     * @example
     * // Update one SupplyItem
     * const supplyItem = await prisma.supplyItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplyItemUpdateArgs>(args: SelectSubset<T, SupplyItemUpdateArgs<ExtArgs>>): Prisma__SupplyItemClient<$Result.GetResult<Prisma.$SupplyItemPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more SupplyItems.
     * @param {SupplyItemDeleteManyArgs} args - Arguments to filter SupplyItems to delete.
     * @example
     * // Delete a few SupplyItems
     * const { count } = await prisma.supplyItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplyItemDeleteManyArgs>(args?: SelectSubset<T, SupplyItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplyItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplyItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplyItems
     * const supplyItem = await prisma.supplyItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplyItemUpdateManyArgs>(args: SelectSubset<T, SupplyItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplyItems and returns the data updated in the database.
     * @param {SupplyItemUpdateManyAndReturnArgs} args - Arguments to update many SupplyItems.
     * @example
     * // Update many SupplyItems
     * const supplyItem = await prisma.supplyItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupplyItems and only return the `id`
     * const supplyItemWithIdOnly = await prisma.supplyItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupplyItemUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplyItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplyItemPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one SupplyItem.
     * @param {SupplyItemUpsertArgs} args - Arguments to update or create a SupplyItem.
     * @example
     * // Update or create a SupplyItem
     * const supplyItem = await prisma.supplyItem.upsert({
     *   create: {
     *     // ... data to create a SupplyItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplyItem we want to update
     *   }
     * })
     */
    upsert<T extends SupplyItemUpsertArgs>(args: SelectSubset<T, SupplyItemUpsertArgs<ExtArgs>>): Prisma__SupplyItemClient<$Result.GetResult<Prisma.$SupplyItemPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of SupplyItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplyItemCountArgs} args - Arguments to filter SupplyItems to count.
     * @example
     * // Count the number of SupplyItems
     * const count = await prisma.supplyItem.count({
     *   where: {
     *     // ... the filter for the SupplyItems we want to count
     *   }
     * })
    **/
    count<T extends SupplyItemCountArgs>(
      args?: Subset<T, SupplyItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplyItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplyItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplyItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplyItemAggregateArgs>(args: Subset<T, SupplyItemAggregateArgs>): Prisma.PrismaPromise<GetSupplyItemAggregateType<T>>

    /**
     * Group by SupplyItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplyItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplyItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplyItemGroupByArgs['orderBy'] }
        : { orderBy?: SupplyItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplyItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplyItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplyItem model
   */
  readonly fields: SupplyItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplyItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplyItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lpo<T extends LpoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LpoDefaultArgs<ExtArgs>>): Prisma__LpoClient<$Result.GetResult<Prisma.$LpoPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupplyItem model
   */ 
  interface SupplyItemFieldRefs {
    readonly id: FieldRef<"SupplyItem", 'Int'>
    readonly name: FieldRef<"SupplyItem", 'String'>
    readonly quantity: FieldRef<"SupplyItem", 'Int'>
    readonly unit: FieldRef<"SupplyItem", 'String'>
    readonly unitPrice: FieldRef<"SupplyItem", 'Float'>
    readonly lpoId: FieldRef<"SupplyItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SupplyItem findUnique
   */
  export type SupplyItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplyItem
     */
    select?: SupplyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplyItem
     */
    omit?: SupplyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplyItemInclude<ExtArgs> | null
    /**
     * Filter, which SupplyItem to fetch.
     */
    where: SupplyItemWhereUniqueInput
  }

  /**
   * SupplyItem findUniqueOrThrow
   */
  export type SupplyItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplyItem
     */
    select?: SupplyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplyItem
     */
    omit?: SupplyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplyItemInclude<ExtArgs> | null
    /**
     * Filter, which SupplyItem to fetch.
     */
    where: SupplyItemWhereUniqueInput
  }

  /**
   * SupplyItem findFirst
   */
  export type SupplyItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplyItem
     */
    select?: SupplyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplyItem
     */
    omit?: SupplyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplyItemInclude<ExtArgs> | null
    /**
     * Filter, which SupplyItem to fetch.
     */
    where?: SupplyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplyItems to fetch.
     */
    orderBy?: SupplyItemOrderByWithRelationInput | SupplyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplyItems.
     */
    cursor?: SupplyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplyItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplyItems.
     */
    distinct?: SupplyItemScalarFieldEnum | SupplyItemScalarFieldEnum[]
  }

  /**
   * SupplyItem findFirstOrThrow
   */
  export type SupplyItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplyItem
     */
    select?: SupplyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplyItem
     */
    omit?: SupplyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplyItemInclude<ExtArgs> | null
    /**
     * Filter, which SupplyItem to fetch.
     */
    where?: SupplyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplyItems to fetch.
     */
    orderBy?: SupplyItemOrderByWithRelationInput | SupplyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplyItems.
     */
    cursor?: SupplyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplyItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplyItems.
     */
    distinct?: SupplyItemScalarFieldEnum | SupplyItemScalarFieldEnum[]
  }

  /**
   * SupplyItem findMany
   */
  export type SupplyItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplyItem
     */
    select?: SupplyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplyItem
     */
    omit?: SupplyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplyItemInclude<ExtArgs> | null
    /**
     * Filter, which SupplyItems to fetch.
     */
    where?: SupplyItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplyItems to fetch.
     */
    orderBy?: SupplyItemOrderByWithRelationInput | SupplyItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplyItems.
     */
    cursor?: SupplyItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplyItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplyItems.
     */
    skip?: number
    distinct?: SupplyItemScalarFieldEnum | SupplyItemScalarFieldEnum[]
  }

  /**
   * SupplyItem create
   */
  export type SupplyItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplyItem
     */
    select?: SupplyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplyItem
     */
    omit?: SupplyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplyItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplyItem.
     */
    data: XOR<SupplyItemCreateInput, SupplyItemUncheckedCreateInput>
  }

  /**
   * SupplyItem createMany
   */
  export type SupplyItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplyItems.
     */
    data: SupplyItemCreateManyInput | SupplyItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplyItem createManyAndReturn
   */
  export type SupplyItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplyItem
     */
    select?: SupplyItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplyItem
     */
    omit?: SupplyItemOmit<ExtArgs> | null
    /**
     * The data used to create many SupplyItems.
     */
    data: SupplyItemCreateManyInput | SupplyItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplyItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplyItem update
   */
  export type SupplyItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplyItem
     */
    select?: SupplyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplyItem
     */
    omit?: SupplyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplyItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplyItem.
     */
    data: XOR<SupplyItemUpdateInput, SupplyItemUncheckedUpdateInput>
    /**
     * Choose, which SupplyItem to update.
     */
    where: SupplyItemWhereUniqueInput
  }

  /**
   * SupplyItem updateMany
   */
  export type SupplyItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplyItems.
     */
    data: XOR<SupplyItemUpdateManyMutationInput, SupplyItemUncheckedUpdateManyInput>
    /**
     * Filter which SupplyItems to update
     */
    where?: SupplyItemWhereInput
    /**
     * Limit how many SupplyItems to update.
     */
    limit?: number
  }

  /**
   * SupplyItem updateManyAndReturn
   */
  export type SupplyItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplyItem
     */
    select?: SupplyItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplyItem
     */
    omit?: SupplyItemOmit<ExtArgs> | null
    /**
     * The data used to update SupplyItems.
     */
    data: XOR<SupplyItemUpdateManyMutationInput, SupplyItemUncheckedUpdateManyInput>
    /**
     * Filter which SupplyItems to update
     */
    where?: SupplyItemWhereInput
    /**
     * Limit how many SupplyItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplyItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplyItem upsert
   */
  export type SupplyItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplyItem
     */
    select?: SupplyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplyItem
     */
    omit?: SupplyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplyItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplyItem to update in case it exists.
     */
    where: SupplyItemWhereUniqueInput
    /**
     * In case the SupplyItem found by the `where` argument doesn't exist, create a new SupplyItem with this data.
     */
    create: XOR<SupplyItemCreateInput, SupplyItemUncheckedCreateInput>
    /**
     * In case the SupplyItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplyItemUpdateInput, SupplyItemUncheckedUpdateInput>
  }

  /**
   * SupplyItem delete
   */
  export type SupplyItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplyItem
     */
    select?: SupplyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplyItem
     */
    omit?: SupplyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplyItemInclude<ExtArgs> | null
    /**
     * Filter which SupplyItem to delete.
     */
    where: SupplyItemWhereUniqueInput
  }

  /**
   * SupplyItem deleteMany
   */
  export type SupplyItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplyItems to delete
     */
    where?: SupplyItemWhereInput
    /**
     * Limit how many SupplyItems to delete.
     */
    limit?: number
  }

  /**
   * SupplyItem without action
   */
  export type SupplyItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplyItem
     */
    select?: SupplyItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplyItem
     */
    omit?: SupplyItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplyItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CompanyScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CompanyScalarFieldEnum = (typeof CompanyScalarFieldEnum)[keyof typeof CompanyScalarFieldEnum]


  export const SiteScalarFieldEnum: {
    id: 'id',
    name: 'name',
    companyId: 'companyId'
  };

  export type SiteScalarFieldEnum = (typeof SiteScalarFieldEnum)[keyof typeof SiteScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const LpoScalarFieldEnum: {
    id: 'id',
    siteId: 'siteId',
    lpoNumber: 'lpoNumber',
    prNumber: 'prNumber',
    paymentTerms: 'paymentTerms',
    deliveryTerms: 'deliveryTerms',
    subTotal: 'subTotal',
    vatRate: 'vatRate',
    total: 'total',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    firstApproverId: 'firstApproverId',
    secondApproverId: 'secondApproverId',
    finalApproverId: 'finalApproverId',
    supplierId: 'supplierId',
    remarks: 'remarks',
    rejected: 'rejected'
  };

  export type LpoScalarFieldEnum = (typeof LpoScalarFieldEnum)[keyof typeof LpoScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const SupplyItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    quantity: 'quantity',
    unit: 'unit',
    unitPrice: 'unitPrice',
    lpoId: 'lpoId'
  };

  export type SupplyItemScalarFieldEnum = (typeof SupplyItemScalarFieldEnum)[keyof typeof SupplyItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'LpoRejected'
   */
  export type EnumLpoRejectedFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LpoRejected'>
    


  /**
   * Reference to a field of type 'LpoRejected[]'
   */
  export type ListEnumLpoRejectedFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LpoRejected[]'>
    
  /**
   * Deep Input Types
   */


  export type CompanyWhereInput = {
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    id?: IntFilter<"Company"> | number
    name?: StringFilter<"Company"> | string
    sites?: SiteListRelationFilter
  }

  export type CompanyOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sites?: SiteOrderByRelationAggregateInput
  }

  export type CompanyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompanyWhereInput | CompanyWhereInput[]
    OR?: CompanyWhereInput[]
    NOT?: CompanyWhereInput | CompanyWhereInput[]
    name?: StringFilter<"Company"> | string
    sites?: SiteListRelationFilter
  }, "id">

  export type CompanyOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CompanyCountOrderByAggregateInput
    _avg?: CompanyAvgOrderByAggregateInput
    _max?: CompanyMaxOrderByAggregateInput
    _min?: CompanyMinOrderByAggregateInput
    _sum?: CompanySumOrderByAggregateInput
  }

  export type CompanyScalarWhereWithAggregatesInput = {
    AND?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    OR?: CompanyScalarWhereWithAggregatesInput[]
    NOT?: CompanyScalarWhereWithAggregatesInput | CompanyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Company"> | number
    name?: StringWithAggregatesFilter<"Company"> | string
  }

  export type SiteWhereInput = {
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    id?: IntFilter<"Site"> | number
    name?: StringFilter<"Site"> | string
    companyId?: IntFilter<"Site"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    lpos?: LpoListRelationFilter
  }

  export type SiteOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    company?: CompanyOrderByWithRelationInput
    lpos?: LpoOrderByRelationAggregateInput
  }

  export type SiteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SiteWhereInput | SiteWhereInput[]
    OR?: SiteWhereInput[]
    NOT?: SiteWhereInput | SiteWhereInput[]
    name?: StringFilter<"Site"> | string
    companyId?: IntFilter<"Site"> | number
    company?: XOR<CompanyScalarRelationFilter, CompanyWhereInput>
    lpos?: LpoListRelationFilter
  }, "id">

  export type SiteOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
    _count?: SiteCountOrderByAggregateInput
    _avg?: SiteAvgOrderByAggregateInput
    _max?: SiteMaxOrderByAggregateInput
    _min?: SiteMinOrderByAggregateInput
    _sum?: SiteSumOrderByAggregateInput
  }

  export type SiteScalarWhereWithAggregatesInput = {
    AND?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    OR?: SiteScalarWhereWithAggregatesInput[]
    NOT?: SiteScalarWhereWithAggregatesInput | SiteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Site"> | number
    name?: StringWithAggregatesFilter<"Site"> | string
    companyId?: IntWithAggregatesFilter<"Site"> | number
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdLpos?: LpoListRelationFilter
    firstApprovedLpos?: LpoListRelationFilter
    secondApprovedLpos?: LpoListRelationFilter
    finalApprovedLpos?: LpoListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdLpos?: LpoOrderByRelationAggregateInput
    firstApprovedLpos?: LpoOrderByRelationAggregateInput
    secondApprovedLpos?: LpoOrderByRelationAggregateInput
    finalApprovedLpos?: LpoOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdLpos?: LpoListRelationFilter
    firstApprovedLpos?: LpoListRelationFilter
    secondApprovedLpos?: LpoListRelationFilter
    finalApprovedLpos?: LpoListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type LpoWhereInput = {
    AND?: LpoWhereInput | LpoWhereInput[]
    OR?: LpoWhereInput[]
    NOT?: LpoWhereInput | LpoWhereInput[]
    id?: IntFilter<"Lpo"> | number
    siteId?: IntFilter<"Lpo"> | number
    lpoNumber?: StringFilter<"Lpo"> | string
    prNumber?: StringFilter<"Lpo"> | string
    paymentTerms?: StringFilter<"Lpo"> | string
    deliveryTerms?: StringFilter<"Lpo"> | string
    subTotal?: FloatFilter<"Lpo"> | number
    vatRate?: FloatFilter<"Lpo"> | number
    total?: FloatFilter<"Lpo"> | number
    createdById?: IntFilter<"Lpo"> | number
    createdAt?: DateTimeFilter<"Lpo"> | Date | string
    updatedAt?: DateTimeFilter<"Lpo"> | Date | string
    firstApproverId?: IntNullableFilter<"Lpo"> | number | null
    secondApproverId?: IntNullableFilter<"Lpo"> | number | null
    finalApproverId?: IntNullableFilter<"Lpo"> | number | null
    supplierId?: IntFilter<"Lpo"> | number
    remarks?: StringFilter<"Lpo"> | string
    rejected?: EnumLpoRejectedFilter<"Lpo"> | $Enums.LpoRejected
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    supplyItems?: SupplyItemListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    firstApprover?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    secondApprover?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    finalApprover?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }

  export type LpoOrderByWithRelationInput = {
    id?: SortOrder
    siteId?: SortOrder
    lpoNumber?: SortOrder
    prNumber?: SortOrder
    paymentTerms?: SortOrder
    deliveryTerms?: SortOrder
    subTotal?: SortOrder
    vatRate?: SortOrder
    total?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstApproverId?: SortOrderInput | SortOrder
    secondApproverId?: SortOrderInput | SortOrder
    finalApproverId?: SortOrderInput | SortOrder
    supplierId?: SortOrder
    remarks?: SortOrder
    rejected?: SortOrder
    site?: SiteOrderByWithRelationInput
    supplyItems?: SupplyItemOrderByRelationAggregateInput
    createdBy?: UserOrderByWithRelationInput
    firstApprover?: UserOrderByWithRelationInput
    secondApprover?: UserOrderByWithRelationInput
    finalApprover?: UserOrderByWithRelationInput
    supplier?: SupplierOrderByWithRelationInput
  }

  export type LpoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LpoWhereInput | LpoWhereInput[]
    OR?: LpoWhereInput[]
    NOT?: LpoWhereInput | LpoWhereInput[]
    siteId?: IntFilter<"Lpo"> | number
    lpoNumber?: StringFilter<"Lpo"> | string
    prNumber?: StringFilter<"Lpo"> | string
    paymentTerms?: StringFilter<"Lpo"> | string
    deliveryTerms?: StringFilter<"Lpo"> | string
    subTotal?: FloatFilter<"Lpo"> | number
    vatRate?: FloatFilter<"Lpo"> | number
    total?: FloatFilter<"Lpo"> | number
    createdById?: IntFilter<"Lpo"> | number
    createdAt?: DateTimeFilter<"Lpo"> | Date | string
    updatedAt?: DateTimeFilter<"Lpo"> | Date | string
    firstApproverId?: IntNullableFilter<"Lpo"> | number | null
    secondApproverId?: IntNullableFilter<"Lpo"> | number | null
    finalApproverId?: IntNullableFilter<"Lpo"> | number | null
    supplierId?: IntFilter<"Lpo"> | number
    remarks?: StringFilter<"Lpo"> | string
    rejected?: EnumLpoRejectedFilter<"Lpo"> | $Enums.LpoRejected
    site?: XOR<SiteScalarRelationFilter, SiteWhereInput>
    supplyItems?: SupplyItemListRelationFilter
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    firstApprover?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    secondApprover?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    finalApprover?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }, "id">

  export type LpoOrderByWithAggregationInput = {
    id?: SortOrder
    siteId?: SortOrder
    lpoNumber?: SortOrder
    prNumber?: SortOrder
    paymentTerms?: SortOrder
    deliveryTerms?: SortOrder
    subTotal?: SortOrder
    vatRate?: SortOrder
    total?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstApproverId?: SortOrderInput | SortOrder
    secondApproverId?: SortOrderInput | SortOrder
    finalApproverId?: SortOrderInput | SortOrder
    supplierId?: SortOrder
    remarks?: SortOrder
    rejected?: SortOrder
    _count?: LpoCountOrderByAggregateInput
    _avg?: LpoAvgOrderByAggregateInput
    _max?: LpoMaxOrderByAggregateInput
    _min?: LpoMinOrderByAggregateInput
    _sum?: LpoSumOrderByAggregateInput
  }

  export type LpoScalarWhereWithAggregatesInput = {
    AND?: LpoScalarWhereWithAggregatesInput | LpoScalarWhereWithAggregatesInput[]
    OR?: LpoScalarWhereWithAggregatesInput[]
    NOT?: LpoScalarWhereWithAggregatesInput | LpoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Lpo"> | number
    siteId?: IntWithAggregatesFilter<"Lpo"> | number
    lpoNumber?: StringWithAggregatesFilter<"Lpo"> | string
    prNumber?: StringWithAggregatesFilter<"Lpo"> | string
    paymentTerms?: StringWithAggregatesFilter<"Lpo"> | string
    deliveryTerms?: StringWithAggregatesFilter<"Lpo"> | string
    subTotal?: FloatWithAggregatesFilter<"Lpo"> | number
    vatRate?: FloatWithAggregatesFilter<"Lpo"> | number
    total?: FloatWithAggregatesFilter<"Lpo"> | number
    createdById?: IntWithAggregatesFilter<"Lpo"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Lpo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Lpo"> | Date | string
    firstApproverId?: IntNullableWithAggregatesFilter<"Lpo"> | number | null
    secondApproverId?: IntNullableWithAggregatesFilter<"Lpo"> | number | null
    finalApproverId?: IntNullableWithAggregatesFilter<"Lpo"> | number | null
    supplierId?: IntWithAggregatesFilter<"Lpo"> | number
    remarks?: StringWithAggregatesFilter<"Lpo"> | string
    rejected?: EnumLpoRejectedWithAggregatesFilter<"Lpo"> | $Enums.LpoRejected
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: IntFilter<"Supplier"> | number
    name?: StringFilter<"Supplier"> | string
    lpos?: LpoListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    lpos?: LpoOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    name?: StringFilter<"Supplier"> | string
    lpos?: LpoListRelationFilter
  }, "id">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Supplier"> | number
    name?: StringWithAggregatesFilter<"Supplier"> | string
  }

  export type SupplyItemWhereInput = {
    AND?: SupplyItemWhereInput | SupplyItemWhereInput[]
    OR?: SupplyItemWhereInput[]
    NOT?: SupplyItemWhereInput | SupplyItemWhereInput[]
    id?: IntFilter<"SupplyItem"> | number
    name?: StringFilter<"SupplyItem"> | string
    quantity?: IntFilter<"SupplyItem"> | number
    unit?: StringFilter<"SupplyItem"> | string
    unitPrice?: FloatFilter<"SupplyItem"> | number
    lpoId?: IntFilter<"SupplyItem"> | number
    lpo?: XOR<LpoScalarRelationFilter, LpoWhereInput>
  }

  export type SupplyItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    unitPrice?: SortOrder
    lpoId?: SortOrder
    lpo?: LpoOrderByWithRelationInput
  }

  export type SupplyItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SupplyItemWhereInput | SupplyItemWhereInput[]
    OR?: SupplyItemWhereInput[]
    NOT?: SupplyItemWhereInput | SupplyItemWhereInput[]
    name?: StringFilter<"SupplyItem"> | string
    quantity?: IntFilter<"SupplyItem"> | number
    unit?: StringFilter<"SupplyItem"> | string
    unitPrice?: FloatFilter<"SupplyItem"> | number
    lpoId?: IntFilter<"SupplyItem"> | number
    lpo?: XOR<LpoScalarRelationFilter, LpoWhereInput>
  }, "id">

  export type SupplyItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    unitPrice?: SortOrder
    lpoId?: SortOrder
    _count?: SupplyItemCountOrderByAggregateInput
    _avg?: SupplyItemAvgOrderByAggregateInput
    _max?: SupplyItemMaxOrderByAggregateInput
    _min?: SupplyItemMinOrderByAggregateInput
    _sum?: SupplyItemSumOrderByAggregateInput
  }

  export type SupplyItemScalarWhereWithAggregatesInput = {
    AND?: SupplyItemScalarWhereWithAggregatesInput | SupplyItemScalarWhereWithAggregatesInput[]
    OR?: SupplyItemScalarWhereWithAggregatesInput[]
    NOT?: SupplyItemScalarWhereWithAggregatesInput | SupplyItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"SupplyItem"> | number
    name?: StringWithAggregatesFilter<"SupplyItem"> | string
    quantity?: IntWithAggregatesFilter<"SupplyItem"> | number
    unit?: StringWithAggregatesFilter<"SupplyItem"> | string
    unitPrice?: FloatWithAggregatesFilter<"SupplyItem"> | number
    lpoId?: IntWithAggregatesFilter<"SupplyItem"> | number
  }

  export type CompanyCreateInput = {
    name: string
    sites?: SiteCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUncheckedCreateInput = {
    id?: number
    name: string
    sites?: SiteUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    sites?: SiteUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    sites?: SiteUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyCreateManyInput = {
    id?: number
    name: string
  }

  export type CompanyUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SiteCreateInput = {
    name: string
    company: CompanyCreateNestedOneWithoutSitesInput
    lpos?: LpoCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateInput = {
    id?: number
    name: string
    companyId: number
    lpos?: LpoUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneRequiredWithoutSitesNestedInput
    lpos?: LpoUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
    lpos?: LpoUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteCreateManyInput = {
    id?: number
    name: string
    companyId: number
  }

  export type SiteUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SiteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdLpos?: LpoCreateNestedManyWithoutCreatedByInput
    firstApprovedLpos?: LpoCreateNestedManyWithoutFirstApproverInput
    secondApprovedLpos?: LpoCreateNestedManyWithoutSecondApproverInput
    finalApprovedLpos?: LpoCreateNestedManyWithoutFinalApproverInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdLpos?: LpoUncheckedCreateNestedManyWithoutCreatedByInput
    firstApprovedLpos?: LpoUncheckedCreateNestedManyWithoutFirstApproverInput
    secondApprovedLpos?: LpoUncheckedCreateNestedManyWithoutSecondApproverInput
    finalApprovedLpos?: LpoUncheckedCreateNestedManyWithoutFinalApproverInput
  }

  export type UserUpdateInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdLpos?: LpoUpdateManyWithoutCreatedByNestedInput
    firstApprovedLpos?: LpoUpdateManyWithoutFirstApproverNestedInput
    secondApprovedLpos?: LpoUpdateManyWithoutSecondApproverNestedInput
    finalApprovedLpos?: LpoUpdateManyWithoutFinalApproverNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdLpos?: LpoUncheckedUpdateManyWithoutCreatedByNestedInput
    firstApprovedLpos?: LpoUncheckedUpdateManyWithoutFirstApproverNestedInput
    secondApprovedLpos?: LpoUncheckedUpdateManyWithoutSecondApproverNestedInput
    finalApprovedLpos?: LpoUncheckedUpdateManyWithoutFinalApproverNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LpoCreateInput = {
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    remarks?: string
    rejected?: $Enums.LpoRejected
    site: SiteCreateNestedOneWithoutLposInput
    supplyItems?: SupplyItemCreateNestedManyWithoutLpoInput
    createdBy: UserCreateNestedOneWithoutCreatedLposInput
    firstApprover?: UserCreateNestedOneWithoutFirstApprovedLposInput
    secondApprover?: UserCreateNestedOneWithoutSecondApprovedLposInput
    finalApprover?: UserCreateNestedOneWithoutFinalApprovedLposInput
    supplier: SupplierCreateNestedOneWithoutLposInput
  }

  export type LpoUncheckedCreateInput = {
    id?: number
    siteId: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstApproverId?: number | null
    secondApproverId?: number | null
    finalApproverId?: number | null
    supplierId: number
    remarks?: string
    rejected?: $Enums.LpoRejected
    supplyItems?: SupplyItemUncheckedCreateNestedManyWithoutLpoInput
  }

  export type LpoUpdateInput = {
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
    site?: SiteUpdateOneRequiredWithoutLposNestedInput
    supplyItems?: SupplyItemUpdateManyWithoutLpoNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedLposNestedInput
    firstApprover?: UserUpdateOneWithoutFirstApprovedLposNestedInput
    secondApprover?: UserUpdateOneWithoutSecondApprovedLposNestedInput
    finalApprover?: UserUpdateOneWithoutFinalApprovedLposNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutLposNestedInput
  }

  export type LpoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    siteId?: IntFieldUpdateOperationsInput | number
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    secondApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    finalApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
    supplyItems?: SupplyItemUncheckedUpdateManyWithoutLpoNestedInput
  }

  export type LpoCreateManyInput = {
    id?: number
    siteId: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstApproverId?: number | null
    secondApproverId?: number | null
    finalApproverId?: number | null
    supplierId: number
    remarks?: string
    rejected?: $Enums.LpoRejected
  }

  export type LpoUpdateManyMutationInput = {
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
  }

  export type LpoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    siteId?: IntFieldUpdateOperationsInput | number
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    secondApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    finalApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
  }

  export type SupplierCreateInput = {
    name: string
    lpos?: LpoCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: number
    name: string
    lpos?: LpoUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    lpos?: LpoUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lpos?: LpoUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: number
    name: string
  }

  export type SupplierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SupplyItemCreateInput = {
    name: string
    quantity: number
    unit: string
    unitPrice: number
    lpo: LpoCreateNestedOneWithoutSupplyItemsInput
  }

  export type SupplyItemUncheckedCreateInput = {
    id?: number
    name: string
    quantity: number
    unit: string
    unitPrice: number
    lpoId: number
  }

  export type SupplyItemUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    lpo?: LpoUpdateOneRequiredWithoutSupplyItemsNestedInput
  }

  export type SupplyItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    lpoId?: IntFieldUpdateOperationsInput | number
  }

  export type SupplyItemCreateManyInput = {
    id?: number
    name: string
    quantity: number
    unit: string
    unitPrice: number
    lpoId: number
  }

  export type SupplyItemUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type SupplyItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    lpoId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type SiteListRelationFilter = {
    every?: SiteWhereInput
    some?: SiteWhereInput
    none?: SiteWhereInput
  }

  export type SiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompanyCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanyAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompanyMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanyMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CompanySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CompanyScalarRelationFilter = {
    is?: CompanyWhereInput
    isNot?: CompanyWhereInput
  }

  export type LpoListRelationFilter = {
    every?: LpoWhereInput
    some?: LpoWhereInput
    none?: LpoWhereInput
  }

  export type LpoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SiteCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
  }

  export type SiteAvgOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type SiteMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
  }

  export type SiteMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    companyId?: SortOrder
  }

  export type SiteSumOrderByAggregateInput = {
    id?: SortOrder
    companyId?: SortOrder
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumLpoRejectedFilter<$PrismaModel = never> = {
    equals?: $Enums.LpoRejected | EnumLpoRejectedFieldRefInput<$PrismaModel>
    in?: $Enums.LpoRejected[] | ListEnumLpoRejectedFieldRefInput<$PrismaModel>
    notIn?: $Enums.LpoRejected[] | ListEnumLpoRejectedFieldRefInput<$PrismaModel>
    not?: NestedEnumLpoRejectedFilter<$PrismaModel> | $Enums.LpoRejected
  }

  export type SiteScalarRelationFilter = {
    is?: SiteWhereInput
    isNot?: SiteWhereInput
  }

  export type SupplyItemListRelationFilter = {
    every?: SupplyItemWhereInput
    some?: SupplyItemWhereInput
    none?: SupplyItemWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SupplyItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LpoCountOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    lpoNumber?: SortOrder
    prNumber?: SortOrder
    paymentTerms?: SortOrder
    deliveryTerms?: SortOrder
    subTotal?: SortOrder
    vatRate?: SortOrder
    total?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstApproverId?: SortOrder
    secondApproverId?: SortOrder
    finalApproverId?: SortOrder
    supplierId?: SortOrder
    remarks?: SortOrder
    rejected?: SortOrder
  }

  export type LpoAvgOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    subTotal?: SortOrder
    vatRate?: SortOrder
    total?: SortOrder
    createdById?: SortOrder
    firstApproverId?: SortOrder
    secondApproverId?: SortOrder
    finalApproverId?: SortOrder
    supplierId?: SortOrder
  }

  export type LpoMaxOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    lpoNumber?: SortOrder
    prNumber?: SortOrder
    paymentTerms?: SortOrder
    deliveryTerms?: SortOrder
    subTotal?: SortOrder
    vatRate?: SortOrder
    total?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstApproverId?: SortOrder
    secondApproverId?: SortOrder
    finalApproverId?: SortOrder
    supplierId?: SortOrder
    remarks?: SortOrder
    rejected?: SortOrder
  }

  export type LpoMinOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    lpoNumber?: SortOrder
    prNumber?: SortOrder
    paymentTerms?: SortOrder
    deliveryTerms?: SortOrder
    subTotal?: SortOrder
    vatRate?: SortOrder
    total?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    firstApproverId?: SortOrder
    secondApproverId?: SortOrder
    finalApproverId?: SortOrder
    supplierId?: SortOrder
    remarks?: SortOrder
    rejected?: SortOrder
  }

  export type LpoSumOrderByAggregateInput = {
    id?: SortOrder
    siteId?: SortOrder
    subTotal?: SortOrder
    vatRate?: SortOrder
    total?: SortOrder
    createdById?: SortOrder
    firstApproverId?: SortOrder
    secondApproverId?: SortOrder
    finalApproverId?: SortOrder
    supplierId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumLpoRejectedWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LpoRejected | EnumLpoRejectedFieldRefInput<$PrismaModel>
    in?: $Enums.LpoRejected[] | ListEnumLpoRejectedFieldRefInput<$PrismaModel>
    notIn?: $Enums.LpoRejected[] | ListEnumLpoRejectedFieldRefInput<$PrismaModel>
    not?: NestedEnumLpoRejectedWithAggregatesFilter<$PrismaModel> | $Enums.LpoRejected
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLpoRejectedFilter<$PrismaModel>
    _max?: NestedEnumLpoRejectedFilter<$PrismaModel>
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type LpoScalarRelationFilter = {
    is?: LpoWhereInput
    isNot?: LpoWhereInput
  }

  export type SupplyItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    unitPrice?: SortOrder
    lpoId?: SortOrder
  }

  export type SupplyItemAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    lpoId?: SortOrder
  }

  export type SupplyItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    unitPrice?: SortOrder
    lpoId?: SortOrder
  }

  export type SupplyItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
    unitPrice?: SortOrder
    lpoId?: SortOrder
  }

  export type SupplyItemSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    lpoId?: SortOrder
  }

  export type SiteCreateNestedManyWithoutCompanyInput = {
    create?: XOR<SiteCreateWithoutCompanyInput, SiteUncheckedCreateWithoutCompanyInput> | SiteCreateWithoutCompanyInput[] | SiteUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutCompanyInput | SiteCreateOrConnectWithoutCompanyInput[]
    createMany?: SiteCreateManyCompanyInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type SiteUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<SiteCreateWithoutCompanyInput, SiteUncheckedCreateWithoutCompanyInput> | SiteCreateWithoutCompanyInput[] | SiteUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutCompanyInput | SiteCreateOrConnectWithoutCompanyInput[]
    createMany?: SiteCreateManyCompanyInputEnvelope
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type SiteUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<SiteCreateWithoutCompanyInput, SiteUncheckedCreateWithoutCompanyInput> | SiteCreateWithoutCompanyInput[] | SiteUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutCompanyInput | SiteCreateOrConnectWithoutCompanyInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutCompanyInput | SiteUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: SiteCreateManyCompanyInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutCompanyInput | SiteUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutCompanyInput | SiteUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SiteUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<SiteCreateWithoutCompanyInput, SiteUncheckedCreateWithoutCompanyInput> | SiteCreateWithoutCompanyInput[] | SiteUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: SiteCreateOrConnectWithoutCompanyInput | SiteCreateOrConnectWithoutCompanyInput[]
    upsert?: SiteUpsertWithWhereUniqueWithoutCompanyInput | SiteUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: SiteCreateManyCompanyInputEnvelope
    set?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    disconnect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    delete?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    connect?: SiteWhereUniqueInput | SiteWhereUniqueInput[]
    update?: SiteUpdateWithWhereUniqueWithoutCompanyInput | SiteUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: SiteUpdateManyWithWhereWithoutCompanyInput | SiteUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: SiteScalarWhereInput | SiteScalarWhereInput[]
  }

  export type CompanyCreateNestedOneWithoutSitesInput = {
    create?: XOR<CompanyCreateWithoutSitesInput, CompanyUncheckedCreateWithoutSitesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSitesInput
    connect?: CompanyWhereUniqueInput
  }

  export type LpoCreateNestedManyWithoutSiteInput = {
    create?: XOR<LpoCreateWithoutSiteInput, LpoUncheckedCreateWithoutSiteInput> | LpoCreateWithoutSiteInput[] | LpoUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutSiteInput | LpoCreateOrConnectWithoutSiteInput[]
    createMany?: LpoCreateManySiteInputEnvelope
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
  }

  export type LpoUncheckedCreateNestedManyWithoutSiteInput = {
    create?: XOR<LpoCreateWithoutSiteInput, LpoUncheckedCreateWithoutSiteInput> | LpoCreateWithoutSiteInput[] | LpoUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutSiteInput | LpoCreateOrConnectWithoutSiteInput[]
    createMany?: LpoCreateManySiteInputEnvelope
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
  }

  export type CompanyUpdateOneRequiredWithoutSitesNestedInput = {
    create?: XOR<CompanyCreateWithoutSitesInput, CompanyUncheckedCreateWithoutSitesInput>
    connectOrCreate?: CompanyCreateOrConnectWithoutSitesInput
    upsert?: CompanyUpsertWithoutSitesInput
    connect?: CompanyWhereUniqueInput
    update?: XOR<XOR<CompanyUpdateToOneWithWhereWithoutSitesInput, CompanyUpdateWithoutSitesInput>, CompanyUncheckedUpdateWithoutSitesInput>
  }

  export type LpoUpdateManyWithoutSiteNestedInput = {
    create?: XOR<LpoCreateWithoutSiteInput, LpoUncheckedCreateWithoutSiteInput> | LpoCreateWithoutSiteInput[] | LpoUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutSiteInput | LpoCreateOrConnectWithoutSiteInput[]
    upsert?: LpoUpsertWithWhereUniqueWithoutSiteInput | LpoUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: LpoCreateManySiteInputEnvelope
    set?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    disconnect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    delete?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    update?: LpoUpdateWithWhereUniqueWithoutSiteInput | LpoUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: LpoUpdateManyWithWhereWithoutSiteInput | LpoUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: LpoScalarWhereInput | LpoScalarWhereInput[]
  }

  export type LpoUncheckedUpdateManyWithoutSiteNestedInput = {
    create?: XOR<LpoCreateWithoutSiteInput, LpoUncheckedCreateWithoutSiteInput> | LpoCreateWithoutSiteInput[] | LpoUncheckedCreateWithoutSiteInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutSiteInput | LpoCreateOrConnectWithoutSiteInput[]
    upsert?: LpoUpsertWithWhereUniqueWithoutSiteInput | LpoUpsertWithWhereUniqueWithoutSiteInput[]
    createMany?: LpoCreateManySiteInputEnvelope
    set?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    disconnect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    delete?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    update?: LpoUpdateWithWhereUniqueWithoutSiteInput | LpoUpdateWithWhereUniqueWithoutSiteInput[]
    updateMany?: LpoUpdateManyWithWhereWithoutSiteInput | LpoUpdateManyWithWhereWithoutSiteInput[]
    deleteMany?: LpoScalarWhereInput | LpoScalarWhereInput[]
  }

  export type LpoCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<LpoCreateWithoutCreatedByInput, LpoUncheckedCreateWithoutCreatedByInput> | LpoCreateWithoutCreatedByInput[] | LpoUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutCreatedByInput | LpoCreateOrConnectWithoutCreatedByInput[]
    createMany?: LpoCreateManyCreatedByInputEnvelope
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
  }

  export type LpoCreateNestedManyWithoutFirstApproverInput = {
    create?: XOR<LpoCreateWithoutFirstApproverInput, LpoUncheckedCreateWithoutFirstApproverInput> | LpoCreateWithoutFirstApproverInput[] | LpoUncheckedCreateWithoutFirstApproverInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutFirstApproverInput | LpoCreateOrConnectWithoutFirstApproverInput[]
    createMany?: LpoCreateManyFirstApproverInputEnvelope
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
  }

  export type LpoCreateNestedManyWithoutSecondApproverInput = {
    create?: XOR<LpoCreateWithoutSecondApproverInput, LpoUncheckedCreateWithoutSecondApproverInput> | LpoCreateWithoutSecondApproverInput[] | LpoUncheckedCreateWithoutSecondApproverInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutSecondApproverInput | LpoCreateOrConnectWithoutSecondApproverInput[]
    createMany?: LpoCreateManySecondApproverInputEnvelope
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
  }

  export type LpoCreateNestedManyWithoutFinalApproverInput = {
    create?: XOR<LpoCreateWithoutFinalApproverInput, LpoUncheckedCreateWithoutFinalApproverInput> | LpoCreateWithoutFinalApproverInput[] | LpoUncheckedCreateWithoutFinalApproverInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutFinalApproverInput | LpoCreateOrConnectWithoutFinalApproverInput[]
    createMany?: LpoCreateManyFinalApproverInputEnvelope
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
  }

  export type LpoUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<LpoCreateWithoutCreatedByInput, LpoUncheckedCreateWithoutCreatedByInput> | LpoCreateWithoutCreatedByInput[] | LpoUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutCreatedByInput | LpoCreateOrConnectWithoutCreatedByInput[]
    createMany?: LpoCreateManyCreatedByInputEnvelope
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
  }

  export type LpoUncheckedCreateNestedManyWithoutFirstApproverInput = {
    create?: XOR<LpoCreateWithoutFirstApproverInput, LpoUncheckedCreateWithoutFirstApproverInput> | LpoCreateWithoutFirstApproverInput[] | LpoUncheckedCreateWithoutFirstApproverInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutFirstApproverInput | LpoCreateOrConnectWithoutFirstApproverInput[]
    createMany?: LpoCreateManyFirstApproverInputEnvelope
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
  }

  export type LpoUncheckedCreateNestedManyWithoutSecondApproverInput = {
    create?: XOR<LpoCreateWithoutSecondApproverInput, LpoUncheckedCreateWithoutSecondApproverInput> | LpoCreateWithoutSecondApproverInput[] | LpoUncheckedCreateWithoutSecondApproverInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutSecondApproverInput | LpoCreateOrConnectWithoutSecondApproverInput[]
    createMany?: LpoCreateManySecondApproverInputEnvelope
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
  }

  export type LpoUncheckedCreateNestedManyWithoutFinalApproverInput = {
    create?: XOR<LpoCreateWithoutFinalApproverInput, LpoUncheckedCreateWithoutFinalApproverInput> | LpoCreateWithoutFinalApproverInput[] | LpoUncheckedCreateWithoutFinalApproverInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutFinalApproverInput | LpoCreateOrConnectWithoutFinalApproverInput[]
    createMany?: LpoCreateManyFinalApproverInputEnvelope
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LpoUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<LpoCreateWithoutCreatedByInput, LpoUncheckedCreateWithoutCreatedByInput> | LpoCreateWithoutCreatedByInput[] | LpoUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutCreatedByInput | LpoCreateOrConnectWithoutCreatedByInput[]
    upsert?: LpoUpsertWithWhereUniqueWithoutCreatedByInput | LpoUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: LpoCreateManyCreatedByInputEnvelope
    set?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    disconnect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    delete?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    update?: LpoUpdateWithWhereUniqueWithoutCreatedByInput | LpoUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: LpoUpdateManyWithWhereWithoutCreatedByInput | LpoUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: LpoScalarWhereInput | LpoScalarWhereInput[]
  }

  export type LpoUpdateManyWithoutFirstApproverNestedInput = {
    create?: XOR<LpoCreateWithoutFirstApproverInput, LpoUncheckedCreateWithoutFirstApproverInput> | LpoCreateWithoutFirstApproverInput[] | LpoUncheckedCreateWithoutFirstApproverInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutFirstApproverInput | LpoCreateOrConnectWithoutFirstApproverInput[]
    upsert?: LpoUpsertWithWhereUniqueWithoutFirstApproverInput | LpoUpsertWithWhereUniqueWithoutFirstApproverInput[]
    createMany?: LpoCreateManyFirstApproverInputEnvelope
    set?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    disconnect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    delete?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    update?: LpoUpdateWithWhereUniqueWithoutFirstApproverInput | LpoUpdateWithWhereUniqueWithoutFirstApproverInput[]
    updateMany?: LpoUpdateManyWithWhereWithoutFirstApproverInput | LpoUpdateManyWithWhereWithoutFirstApproverInput[]
    deleteMany?: LpoScalarWhereInput | LpoScalarWhereInput[]
  }

  export type LpoUpdateManyWithoutSecondApproverNestedInput = {
    create?: XOR<LpoCreateWithoutSecondApproverInput, LpoUncheckedCreateWithoutSecondApproverInput> | LpoCreateWithoutSecondApproverInput[] | LpoUncheckedCreateWithoutSecondApproverInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutSecondApproverInput | LpoCreateOrConnectWithoutSecondApproverInput[]
    upsert?: LpoUpsertWithWhereUniqueWithoutSecondApproverInput | LpoUpsertWithWhereUniqueWithoutSecondApproverInput[]
    createMany?: LpoCreateManySecondApproverInputEnvelope
    set?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    disconnect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    delete?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    update?: LpoUpdateWithWhereUniqueWithoutSecondApproverInput | LpoUpdateWithWhereUniqueWithoutSecondApproverInput[]
    updateMany?: LpoUpdateManyWithWhereWithoutSecondApproverInput | LpoUpdateManyWithWhereWithoutSecondApproverInput[]
    deleteMany?: LpoScalarWhereInput | LpoScalarWhereInput[]
  }

  export type LpoUpdateManyWithoutFinalApproverNestedInput = {
    create?: XOR<LpoCreateWithoutFinalApproverInput, LpoUncheckedCreateWithoutFinalApproverInput> | LpoCreateWithoutFinalApproverInput[] | LpoUncheckedCreateWithoutFinalApproverInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutFinalApproverInput | LpoCreateOrConnectWithoutFinalApproverInput[]
    upsert?: LpoUpsertWithWhereUniqueWithoutFinalApproverInput | LpoUpsertWithWhereUniqueWithoutFinalApproverInput[]
    createMany?: LpoCreateManyFinalApproverInputEnvelope
    set?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    disconnect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    delete?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    update?: LpoUpdateWithWhereUniqueWithoutFinalApproverInput | LpoUpdateWithWhereUniqueWithoutFinalApproverInput[]
    updateMany?: LpoUpdateManyWithWhereWithoutFinalApproverInput | LpoUpdateManyWithWhereWithoutFinalApproverInput[]
    deleteMany?: LpoScalarWhereInput | LpoScalarWhereInput[]
  }

  export type LpoUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<LpoCreateWithoutCreatedByInput, LpoUncheckedCreateWithoutCreatedByInput> | LpoCreateWithoutCreatedByInput[] | LpoUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutCreatedByInput | LpoCreateOrConnectWithoutCreatedByInput[]
    upsert?: LpoUpsertWithWhereUniqueWithoutCreatedByInput | LpoUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: LpoCreateManyCreatedByInputEnvelope
    set?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    disconnect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    delete?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    update?: LpoUpdateWithWhereUniqueWithoutCreatedByInput | LpoUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: LpoUpdateManyWithWhereWithoutCreatedByInput | LpoUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: LpoScalarWhereInput | LpoScalarWhereInput[]
  }

  export type LpoUncheckedUpdateManyWithoutFirstApproverNestedInput = {
    create?: XOR<LpoCreateWithoutFirstApproverInput, LpoUncheckedCreateWithoutFirstApproverInput> | LpoCreateWithoutFirstApproverInput[] | LpoUncheckedCreateWithoutFirstApproverInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutFirstApproverInput | LpoCreateOrConnectWithoutFirstApproverInput[]
    upsert?: LpoUpsertWithWhereUniqueWithoutFirstApproverInput | LpoUpsertWithWhereUniqueWithoutFirstApproverInput[]
    createMany?: LpoCreateManyFirstApproverInputEnvelope
    set?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    disconnect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    delete?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    update?: LpoUpdateWithWhereUniqueWithoutFirstApproverInput | LpoUpdateWithWhereUniqueWithoutFirstApproverInput[]
    updateMany?: LpoUpdateManyWithWhereWithoutFirstApproverInput | LpoUpdateManyWithWhereWithoutFirstApproverInput[]
    deleteMany?: LpoScalarWhereInput | LpoScalarWhereInput[]
  }

  export type LpoUncheckedUpdateManyWithoutSecondApproverNestedInput = {
    create?: XOR<LpoCreateWithoutSecondApproverInput, LpoUncheckedCreateWithoutSecondApproverInput> | LpoCreateWithoutSecondApproverInput[] | LpoUncheckedCreateWithoutSecondApproverInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutSecondApproverInput | LpoCreateOrConnectWithoutSecondApproverInput[]
    upsert?: LpoUpsertWithWhereUniqueWithoutSecondApproverInput | LpoUpsertWithWhereUniqueWithoutSecondApproverInput[]
    createMany?: LpoCreateManySecondApproverInputEnvelope
    set?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    disconnect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    delete?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    update?: LpoUpdateWithWhereUniqueWithoutSecondApproverInput | LpoUpdateWithWhereUniqueWithoutSecondApproverInput[]
    updateMany?: LpoUpdateManyWithWhereWithoutSecondApproverInput | LpoUpdateManyWithWhereWithoutSecondApproverInput[]
    deleteMany?: LpoScalarWhereInput | LpoScalarWhereInput[]
  }

  export type LpoUncheckedUpdateManyWithoutFinalApproverNestedInput = {
    create?: XOR<LpoCreateWithoutFinalApproverInput, LpoUncheckedCreateWithoutFinalApproverInput> | LpoCreateWithoutFinalApproverInput[] | LpoUncheckedCreateWithoutFinalApproverInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutFinalApproverInput | LpoCreateOrConnectWithoutFinalApproverInput[]
    upsert?: LpoUpsertWithWhereUniqueWithoutFinalApproverInput | LpoUpsertWithWhereUniqueWithoutFinalApproverInput[]
    createMany?: LpoCreateManyFinalApproverInputEnvelope
    set?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    disconnect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    delete?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    update?: LpoUpdateWithWhereUniqueWithoutFinalApproverInput | LpoUpdateWithWhereUniqueWithoutFinalApproverInput[]
    updateMany?: LpoUpdateManyWithWhereWithoutFinalApproverInput | LpoUpdateManyWithWhereWithoutFinalApproverInput[]
    deleteMany?: LpoScalarWhereInput | LpoScalarWhereInput[]
  }

  export type SiteCreateNestedOneWithoutLposInput = {
    create?: XOR<SiteCreateWithoutLposInput, SiteUncheckedCreateWithoutLposInput>
    connectOrCreate?: SiteCreateOrConnectWithoutLposInput
    connect?: SiteWhereUniqueInput
  }

  export type SupplyItemCreateNestedManyWithoutLpoInput = {
    create?: XOR<SupplyItemCreateWithoutLpoInput, SupplyItemUncheckedCreateWithoutLpoInput> | SupplyItemCreateWithoutLpoInput[] | SupplyItemUncheckedCreateWithoutLpoInput[]
    connectOrCreate?: SupplyItemCreateOrConnectWithoutLpoInput | SupplyItemCreateOrConnectWithoutLpoInput[]
    createMany?: SupplyItemCreateManyLpoInputEnvelope
    connect?: SupplyItemWhereUniqueInput | SupplyItemWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedLposInput = {
    create?: XOR<UserCreateWithoutCreatedLposInput, UserUncheckedCreateWithoutCreatedLposInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedLposInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFirstApprovedLposInput = {
    create?: XOR<UserCreateWithoutFirstApprovedLposInput, UserUncheckedCreateWithoutFirstApprovedLposInput>
    connectOrCreate?: UserCreateOrConnectWithoutFirstApprovedLposInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSecondApprovedLposInput = {
    create?: XOR<UserCreateWithoutSecondApprovedLposInput, UserUncheckedCreateWithoutSecondApprovedLposInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecondApprovedLposInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFinalApprovedLposInput = {
    create?: XOR<UserCreateWithoutFinalApprovedLposInput, UserUncheckedCreateWithoutFinalApprovedLposInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinalApprovedLposInput
    connect?: UserWhereUniqueInput
  }

  export type SupplierCreateNestedOneWithoutLposInput = {
    create?: XOR<SupplierCreateWithoutLposInput, SupplierUncheckedCreateWithoutLposInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutLposInput
    connect?: SupplierWhereUniqueInput
  }

  export type SupplyItemUncheckedCreateNestedManyWithoutLpoInput = {
    create?: XOR<SupplyItemCreateWithoutLpoInput, SupplyItemUncheckedCreateWithoutLpoInput> | SupplyItemCreateWithoutLpoInput[] | SupplyItemUncheckedCreateWithoutLpoInput[]
    connectOrCreate?: SupplyItemCreateOrConnectWithoutLpoInput | SupplyItemCreateOrConnectWithoutLpoInput[]
    createMany?: SupplyItemCreateManyLpoInputEnvelope
    connect?: SupplyItemWhereUniqueInput | SupplyItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumLpoRejectedFieldUpdateOperationsInput = {
    set?: $Enums.LpoRejected
  }

  export type SiteUpdateOneRequiredWithoutLposNestedInput = {
    create?: XOR<SiteCreateWithoutLposInput, SiteUncheckedCreateWithoutLposInput>
    connectOrCreate?: SiteCreateOrConnectWithoutLposInput
    upsert?: SiteUpsertWithoutLposInput
    connect?: SiteWhereUniqueInput
    update?: XOR<XOR<SiteUpdateToOneWithWhereWithoutLposInput, SiteUpdateWithoutLposInput>, SiteUncheckedUpdateWithoutLposInput>
  }

  export type SupplyItemUpdateManyWithoutLpoNestedInput = {
    create?: XOR<SupplyItemCreateWithoutLpoInput, SupplyItemUncheckedCreateWithoutLpoInput> | SupplyItemCreateWithoutLpoInput[] | SupplyItemUncheckedCreateWithoutLpoInput[]
    connectOrCreate?: SupplyItemCreateOrConnectWithoutLpoInput | SupplyItemCreateOrConnectWithoutLpoInput[]
    upsert?: SupplyItemUpsertWithWhereUniqueWithoutLpoInput | SupplyItemUpsertWithWhereUniqueWithoutLpoInput[]
    createMany?: SupplyItemCreateManyLpoInputEnvelope
    set?: SupplyItemWhereUniqueInput | SupplyItemWhereUniqueInput[]
    disconnect?: SupplyItemWhereUniqueInput | SupplyItemWhereUniqueInput[]
    delete?: SupplyItemWhereUniqueInput | SupplyItemWhereUniqueInput[]
    connect?: SupplyItemWhereUniqueInput | SupplyItemWhereUniqueInput[]
    update?: SupplyItemUpdateWithWhereUniqueWithoutLpoInput | SupplyItemUpdateWithWhereUniqueWithoutLpoInput[]
    updateMany?: SupplyItemUpdateManyWithWhereWithoutLpoInput | SupplyItemUpdateManyWithWhereWithoutLpoInput[]
    deleteMany?: SupplyItemScalarWhereInput | SupplyItemScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedLposNestedInput = {
    create?: XOR<UserCreateWithoutCreatedLposInput, UserUncheckedCreateWithoutCreatedLposInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedLposInput
    upsert?: UserUpsertWithoutCreatedLposInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedLposInput, UserUpdateWithoutCreatedLposInput>, UserUncheckedUpdateWithoutCreatedLposInput>
  }

  export type UserUpdateOneWithoutFirstApprovedLposNestedInput = {
    create?: XOR<UserCreateWithoutFirstApprovedLposInput, UserUncheckedCreateWithoutFirstApprovedLposInput>
    connectOrCreate?: UserCreateOrConnectWithoutFirstApprovedLposInput
    upsert?: UserUpsertWithoutFirstApprovedLposInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFirstApprovedLposInput, UserUpdateWithoutFirstApprovedLposInput>, UserUncheckedUpdateWithoutFirstApprovedLposInput>
  }

  export type UserUpdateOneWithoutSecondApprovedLposNestedInput = {
    create?: XOR<UserCreateWithoutSecondApprovedLposInput, UserUncheckedCreateWithoutSecondApprovedLposInput>
    connectOrCreate?: UserCreateOrConnectWithoutSecondApprovedLposInput
    upsert?: UserUpsertWithoutSecondApprovedLposInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSecondApprovedLposInput, UserUpdateWithoutSecondApprovedLposInput>, UserUncheckedUpdateWithoutSecondApprovedLposInput>
  }

  export type UserUpdateOneWithoutFinalApprovedLposNestedInput = {
    create?: XOR<UserCreateWithoutFinalApprovedLposInput, UserUncheckedCreateWithoutFinalApprovedLposInput>
    connectOrCreate?: UserCreateOrConnectWithoutFinalApprovedLposInput
    upsert?: UserUpsertWithoutFinalApprovedLposInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFinalApprovedLposInput, UserUpdateWithoutFinalApprovedLposInput>, UserUncheckedUpdateWithoutFinalApprovedLposInput>
  }

  export type SupplierUpdateOneRequiredWithoutLposNestedInput = {
    create?: XOR<SupplierCreateWithoutLposInput, SupplierUncheckedCreateWithoutLposInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutLposInput
    upsert?: SupplierUpsertWithoutLposInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutLposInput, SupplierUpdateWithoutLposInput>, SupplierUncheckedUpdateWithoutLposInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SupplyItemUncheckedUpdateManyWithoutLpoNestedInput = {
    create?: XOR<SupplyItemCreateWithoutLpoInput, SupplyItemUncheckedCreateWithoutLpoInput> | SupplyItemCreateWithoutLpoInput[] | SupplyItemUncheckedCreateWithoutLpoInput[]
    connectOrCreate?: SupplyItemCreateOrConnectWithoutLpoInput | SupplyItemCreateOrConnectWithoutLpoInput[]
    upsert?: SupplyItemUpsertWithWhereUniqueWithoutLpoInput | SupplyItemUpsertWithWhereUniqueWithoutLpoInput[]
    createMany?: SupplyItemCreateManyLpoInputEnvelope
    set?: SupplyItemWhereUniqueInput | SupplyItemWhereUniqueInput[]
    disconnect?: SupplyItemWhereUniqueInput | SupplyItemWhereUniqueInput[]
    delete?: SupplyItemWhereUniqueInput | SupplyItemWhereUniqueInput[]
    connect?: SupplyItemWhereUniqueInput | SupplyItemWhereUniqueInput[]
    update?: SupplyItemUpdateWithWhereUniqueWithoutLpoInput | SupplyItemUpdateWithWhereUniqueWithoutLpoInput[]
    updateMany?: SupplyItemUpdateManyWithWhereWithoutLpoInput | SupplyItemUpdateManyWithWhereWithoutLpoInput[]
    deleteMany?: SupplyItemScalarWhereInput | SupplyItemScalarWhereInput[]
  }

  export type LpoCreateNestedManyWithoutSupplierInput = {
    create?: XOR<LpoCreateWithoutSupplierInput, LpoUncheckedCreateWithoutSupplierInput> | LpoCreateWithoutSupplierInput[] | LpoUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutSupplierInput | LpoCreateOrConnectWithoutSupplierInput[]
    createMany?: LpoCreateManySupplierInputEnvelope
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
  }

  export type LpoUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<LpoCreateWithoutSupplierInput, LpoUncheckedCreateWithoutSupplierInput> | LpoCreateWithoutSupplierInput[] | LpoUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutSupplierInput | LpoCreateOrConnectWithoutSupplierInput[]
    createMany?: LpoCreateManySupplierInputEnvelope
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
  }

  export type LpoUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<LpoCreateWithoutSupplierInput, LpoUncheckedCreateWithoutSupplierInput> | LpoCreateWithoutSupplierInput[] | LpoUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutSupplierInput | LpoCreateOrConnectWithoutSupplierInput[]
    upsert?: LpoUpsertWithWhereUniqueWithoutSupplierInput | LpoUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: LpoCreateManySupplierInputEnvelope
    set?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    disconnect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    delete?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    update?: LpoUpdateWithWhereUniqueWithoutSupplierInput | LpoUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: LpoUpdateManyWithWhereWithoutSupplierInput | LpoUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: LpoScalarWhereInput | LpoScalarWhereInput[]
  }

  export type LpoUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<LpoCreateWithoutSupplierInput, LpoUncheckedCreateWithoutSupplierInput> | LpoCreateWithoutSupplierInput[] | LpoUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: LpoCreateOrConnectWithoutSupplierInput | LpoCreateOrConnectWithoutSupplierInput[]
    upsert?: LpoUpsertWithWhereUniqueWithoutSupplierInput | LpoUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: LpoCreateManySupplierInputEnvelope
    set?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    disconnect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    delete?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    connect?: LpoWhereUniqueInput | LpoWhereUniqueInput[]
    update?: LpoUpdateWithWhereUniqueWithoutSupplierInput | LpoUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: LpoUpdateManyWithWhereWithoutSupplierInput | LpoUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: LpoScalarWhereInput | LpoScalarWhereInput[]
  }

  export type LpoCreateNestedOneWithoutSupplyItemsInput = {
    create?: XOR<LpoCreateWithoutSupplyItemsInput, LpoUncheckedCreateWithoutSupplyItemsInput>
    connectOrCreate?: LpoCreateOrConnectWithoutSupplyItemsInput
    connect?: LpoWhereUniqueInput
  }

  export type LpoUpdateOneRequiredWithoutSupplyItemsNestedInput = {
    create?: XOR<LpoCreateWithoutSupplyItemsInput, LpoUncheckedCreateWithoutSupplyItemsInput>
    connectOrCreate?: LpoCreateOrConnectWithoutSupplyItemsInput
    upsert?: LpoUpsertWithoutSupplyItemsInput
    connect?: LpoWhereUniqueInput
    update?: XOR<XOR<LpoUpdateToOneWithWhereWithoutSupplyItemsInput, LpoUpdateWithoutSupplyItemsInput>, LpoUncheckedUpdateWithoutSupplyItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLpoRejectedFilter<$PrismaModel = never> = {
    equals?: $Enums.LpoRejected | EnumLpoRejectedFieldRefInput<$PrismaModel>
    in?: $Enums.LpoRejected[] | ListEnumLpoRejectedFieldRefInput<$PrismaModel>
    notIn?: $Enums.LpoRejected[] | ListEnumLpoRejectedFieldRefInput<$PrismaModel>
    not?: NestedEnumLpoRejectedFilter<$PrismaModel> | $Enums.LpoRejected
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLpoRejectedWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LpoRejected | EnumLpoRejectedFieldRefInput<$PrismaModel>
    in?: $Enums.LpoRejected[] | ListEnumLpoRejectedFieldRefInput<$PrismaModel>
    notIn?: $Enums.LpoRejected[] | ListEnumLpoRejectedFieldRefInput<$PrismaModel>
    not?: NestedEnumLpoRejectedWithAggregatesFilter<$PrismaModel> | $Enums.LpoRejected
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLpoRejectedFilter<$PrismaModel>
    _max?: NestedEnumLpoRejectedFilter<$PrismaModel>
  }

  export type SiteCreateWithoutCompanyInput = {
    name: string
    lpos?: LpoCreateNestedManyWithoutSiteInput
  }

  export type SiteUncheckedCreateWithoutCompanyInput = {
    id?: number
    name: string
    lpos?: LpoUncheckedCreateNestedManyWithoutSiteInput
  }

  export type SiteCreateOrConnectWithoutCompanyInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutCompanyInput, SiteUncheckedCreateWithoutCompanyInput>
  }

  export type SiteCreateManyCompanyInputEnvelope = {
    data: SiteCreateManyCompanyInput | SiteCreateManyCompanyInput[]
    skipDuplicates?: boolean
  }

  export type SiteUpsertWithWhereUniqueWithoutCompanyInput = {
    where: SiteWhereUniqueInput
    update: XOR<SiteUpdateWithoutCompanyInput, SiteUncheckedUpdateWithoutCompanyInput>
    create: XOR<SiteCreateWithoutCompanyInput, SiteUncheckedCreateWithoutCompanyInput>
  }

  export type SiteUpdateWithWhereUniqueWithoutCompanyInput = {
    where: SiteWhereUniqueInput
    data: XOR<SiteUpdateWithoutCompanyInput, SiteUncheckedUpdateWithoutCompanyInput>
  }

  export type SiteUpdateManyWithWhereWithoutCompanyInput = {
    where: SiteScalarWhereInput
    data: XOR<SiteUpdateManyMutationInput, SiteUncheckedUpdateManyWithoutCompanyInput>
  }

  export type SiteScalarWhereInput = {
    AND?: SiteScalarWhereInput | SiteScalarWhereInput[]
    OR?: SiteScalarWhereInput[]
    NOT?: SiteScalarWhereInput | SiteScalarWhereInput[]
    id?: IntFilter<"Site"> | number
    name?: StringFilter<"Site"> | string
    companyId?: IntFilter<"Site"> | number
  }

  export type CompanyCreateWithoutSitesInput = {
    name: string
  }

  export type CompanyUncheckedCreateWithoutSitesInput = {
    id?: number
    name: string
  }

  export type CompanyCreateOrConnectWithoutSitesInput = {
    where: CompanyWhereUniqueInput
    create: XOR<CompanyCreateWithoutSitesInput, CompanyUncheckedCreateWithoutSitesInput>
  }

  export type LpoCreateWithoutSiteInput = {
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    remarks?: string
    rejected?: $Enums.LpoRejected
    supplyItems?: SupplyItemCreateNestedManyWithoutLpoInput
    createdBy: UserCreateNestedOneWithoutCreatedLposInput
    firstApprover?: UserCreateNestedOneWithoutFirstApprovedLposInput
    secondApprover?: UserCreateNestedOneWithoutSecondApprovedLposInput
    finalApprover?: UserCreateNestedOneWithoutFinalApprovedLposInput
    supplier: SupplierCreateNestedOneWithoutLposInput
  }

  export type LpoUncheckedCreateWithoutSiteInput = {
    id?: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstApproverId?: number | null
    secondApproverId?: number | null
    finalApproverId?: number | null
    supplierId: number
    remarks?: string
    rejected?: $Enums.LpoRejected
    supplyItems?: SupplyItemUncheckedCreateNestedManyWithoutLpoInput
  }

  export type LpoCreateOrConnectWithoutSiteInput = {
    where: LpoWhereUniqueInput
    create: XOR<LpoCreateWithoutSiteInput, LpoUncheckedCreateWithoutSiteInput>
  }

  export type LpoCreateManySiteInputEnvelope = {
    data: LpoCreateManySiteInput | LpoCreateManySiteInput[]
    skipDuplicates?: boolean
  }

  export type CompanyUpsertWithoutSitesInput = {
    update: XOR<CompanyUpdateWithoutSitesInput, CompanyUncheckedUpdateWithoutSitesInput>
    create: XOR<CompanyCreateWithoutSitesInput, CompanyUncheckedCreateWithoutSitesInput>
    where?: CompanyWhereInput
  }

  export type CompanyUpdateToOneWithWhereWithoutSitesInput = {
    where?: CompanyWhereInput
    data: XOR<CompanyUpdateWithoutSitesInput, CompanyUncheckedUpdateWithoutSitesInput>
  }

  export type CompanyUpdateWithoutSitesInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyUncheckedUpdateWithoutSitesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LpoUpsertWithWhereUniqueWithoutSiteInput = {
    where: LpoWhereUniqueInput
    update: XOR<LpoUpdateWithoutSiteInput, LpoUncheckedUpdateWithoutSiteInput>
    create: XOR<LpoCreateWithoutSiteInput, LpoUncheckedCreateWithoutSiteInput>
  }

  export type LpoUpdateWithWhereUniqueWithoutSiteInput = {
    where: LpoWhereUniqueInput
    data: XOR<LpoUpdateWithoutSiteInput, LpoUncheckedUpdateWithoutSiteInput>
  }

  export type LpoUpdateManyWithWhereWithoutSiteInput = {
    where: LpoScalarWhereInput
    data: XOR<LpoUpdateManyMutationInput, LpoUncheckedUpdateManyWithoutSiteInput>
  }

  export type LpoScalarWhereInput = {
    AND?: LpoScalarWhereInput | LpoScalarWhereInput[]
    OR?: LpoScalarWhereInput[]
    NOT?: LpoScalarWhereInput | LpoScalarWhereInput[]
    id?: IntFilter<"Lpo"> | number
    siteId?: IntFilter<"Lpo"> | number
    lpoNumber?: StringFilter<"Lpo"> | string
    prNumber?: StringFilter<"Lpo"> | string
    paymentTerms?: StringFilter<"Lpo"> | string
    deliveryTerms?: StringFilter<"Lpo"> | string
    subTotal?: FloatFilter<"Lpo"> | number
    vatRate?: FloatFilter<"Lpo"> | number
    total?: FloatFilter<"Lpo"> | number
    createdById?: IntFilter<"Lpo"> | number
    createdAt?: DateTimeFilter<"Lpo"> | Date | string
    updatedAt?: DateTimeFilter<"Lpo"> | Date | string
    firstApproverId?: IntNullableFilter<"Lpo"> | number | null
    secondApproverId?: IntNullableFilter<"Lpo"> | number | null
    finalApproverId?: IntNullableFilter<"Lpo"> | number | null
    supplierId?: IntFilter<"Lpo"> | number
    remarks?: StringFilter<"Lpo"> | string
    rejected?: EnumLpoRejectedFilter<"Lpo"> | $Enums.LpoRejected
  }

  export type LpoCreateWithoutCreatedByInput = {
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    remarks?: string
    rejected?: $Enums.LpoRejected
    site: SiteCreateNestedOneWithoutLposInput
    supplyItems?: SupplyItemCreateNestedManyWithoutLpoInput
    firstApprover?: UserCreateNestedOneWithoutFirstApprovedLposInput
    secondApprover?: UserCreateNestedOneWithoutSecondApprovedLposInput
    finalApprover?: UserCreateNestedOneWithoutFinalApprovedLposInput
    supplier: SupplierCreateNestedOneWithoutLposInput
  }

  export type LpoUncheckedCreateWithoutCreatedByInput = {
    id?: number
    siteId: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstApproverId?: number | null
    secondApproverId?: number | null
    finalApproverId?: number | null
    supplierId: number
    remarks?: string
    rejected?: $Enums.LpoRejected
    supplyItems?: SupplyItemUncheckedCreateNestedManyWithoutLpoInput
  }

  export type LpoCreateOrConnectWithoutCreatedByInput = {
    where: LpoWhereUniqueInput
    create: XOR<LpoCreateWithoutCreatedByInput, LpoUncheckedCreateWithoutCreatedByInput>
  }

  export type LpoCreateManyCreatedByInputEnvelope = {
    data: LpoCreateManyCreatedByInput | LpoCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type LpoCreateWithoutFirstApproverInput = {
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    remarks?: string
    rejected?: $Enums.LpoRejected
    site: SiteCreateNestedOneWithoutLposInput
    supplyItems?: SupplyItemCreateNestedManyWithoutLpoInput
    createdBy: UserCreateNestedOneWithoutCreatedLposInput
    secondApprover?: UserCreateNestedOneWithoutSecondApprovedLposInput
    finalApprover?: UserCreateNestedOneWithoutFinalApprovedLposInput
    supplier: SupplierCreateNestedOneWithoutLposInput
  }

  export type LpoUncheckedCreateWithoutFirstApproverInput = {
    id?: number
    siteId: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    secondApproverId?: number | null
    finalApproverId?: number | null
    supplierId: number
    remarks?: string
    rejected?: $Enums.LpoRejected
    supplyItems?: SupplyItemUncheckedCreateNestedManyWithoutLpoInput
  }

  export type LpoCreateOrConnectWithoutFirstApproverInput = {
    where: LpoWhereUniqueInput
    create: XOR<LpoCreateWithoutFirstApproverInput, LpoUncheckedCreateWithoutFirstApproverInput>
  }

  export type LpoCreateManyFirstApproverInputEnvelope = {
    data: LpoCreateManyFirstApproverInput | LpoCreateManyFirstApproverInput[]
    skipDuplicates?: boolean
  }

  export type LpoCreateWithoutSecondApproverInput = {
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    remarks?: string
    rejected?: $Enums.LpoRejected
    site: SiteCreateNestedOneWithoutLposInput
    supplyItems?: SupplyItemCreateNestedManyWithoutLpoInput
    createdBy: UserCreateNestedOneWithoutCreatedLposInput
    firstApprover?: UserCreateNestedOneWithoutFirstApprovedLposInput
    finalApprover?: UserCreateNestedOneWithoutFinalApprovedLposInput
    supplier: SupplierCreateNestedOneWithoutLposInput
  }

  export type LpoUncheckedCreateWithoutSecondApproverInput = {
    id?: number
    siteId: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstApproverId?: number | null
    finalApproverId?: number | null
    supplierId: number
    remarks?: string
    rejected?: $Enums.LpoRejected
    supplyItems?: SupplyItemUncheckedCreateNestedManyWithoutLpoInput
  }

  export type LpoCreateOrConnectWithoutSecondApproverInput = {
    where: LpoWhereUniqueInput
    create: XOR<LpoCreateWithoutSecondApproverInput, LpoUncheckedCreateWithoutSecondApproverInput>
  }

  export type LpoCreateManySecondApproverInputEnvelope = {
    data: LpoCreateManySecondApproverInput | LpoCreateManySecondApproverInput[]
    skipDuplicates?: boolean
  }

  export type LpoCreateWithoutFinalApproverInput = {
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    remarks?: string
    rejected?: $Enums.LpoRejected
    site: SiteCreateNestedOneWithoutLposInput
    supplyItems?: SupplyItemCreateNestedManyWithoutLpoInput
    createdBy: UserCreateNestedOneWithoutCreatedLposInput
    firstApprover?: UserCreateNestedOneWithoutFirstApprovedLposInput
    secondApprover?: UserCreateNestedOneWithoutSecondApprovedLposInput
    supplier: SupplierCreateNestedOneWithoutLposInput
  }

  export type LpoUncheckedCreateWithoutFinalApproverInput = {
    id?: number
    siteId: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstApproverId?: number | null
    secondApproverId?: number | null
    supplierId: number
    remarks?: string
    rejected?: $Enums.LpoRejected
    supplyItems?: SupplyItemUncheckedCreateNestedManyWithoutLpoInput
  }

  export type LpoCreateOrConnectWithoutFinalApproverInput = {
    where: LpoWhereUniqueInput
    create: XOR<LpoCreateWithoutFinalApproverInput, LpoUncheckedCreateWithoutFinalApproverInput>
  }

  export type LpoCreateManyFinalApproverInputEnvelope = {
    data: LpoCreateManyFinalApproverInput | LpoCreateManyFinalApproverInput[]
    skipDuplicates?: boolean
  }

  export type LpoUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: LpoWhereUniqueInput
    update: XOR<LpoUpdateWithoutCreatedByInput, LpoUncheckedUpdateWithoutCreatedByInput>
    create: XOR<LpoCreateWithoutCreatedByInput, LpoUncheckedCreateWithoutCreatedByInput>
  }

  export type LpoUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: LpoWhereUniqueInput
    data: XOR<LpoUpdateWithoutCreatedByInput, LpoUncheckedUpdateWithoutCreatedByInput>
  }

  export type LpoUpdateManyWithWhereWithoutCreatedByInput = {
    where: LpoScalarWhereInput
    data: XOR<LpoUpdateManyMutationInput, LpoUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type LpoUpsertWithWhereUniqueWithoutFirstApproverInput = {
    where: LpoWhereUniqueInput
    update: XOR<LpoUpdateWithoutFirstApproverInput, LpoUncheckedUpdateWithoutFirstApproverInput>
    create: XOR<LpoCreateWithoutFirstApproverInput, LpoUncheckedCreateWithoutFirstApproverInput>
  }

  export type LpoUpdateWithWhereUniqueWithoutFirstApproverInput = {
    where: LpoWhereUniqueInput
    data: XOR<LpoUpdateWithoutFirstApproverInput, LpoUncheckedUpdateWithoutFirstApproverInput>
  }

  export type LpoUpdateManyWithWhereWithoutFirstApproverInput = {
    where: LpoScalarWhereInput
    data: XOR<LpoUpdateManyMutationInput, LpoUncheckedUpdateManyWithoutFirstApproverInput>
  }

  export type LpoUpsertWithWhereUniqueWithoutSecondApproverInput = {
    where: LpoWhereUniqueInput
    update: XOR<LpoUpdateWithoutSecondApproverInput, LpoUncheckedUpdateWithoutSecondApproverInput>
    create: XOR<LpoCreateWithoutSecondApproverInput, LpoUncheckedCreateWithoutSecondApproverInput>
  }

  export type LpoUpdateWithWhereUniqueWithoutSecondApproverInput = {
    where: LpoWhereUniqueInput
    data: XOR<LpoUpdateWithoutSecondApproverInput, LpoUncheckedUpdateWithoutSecondApproverInput>
  }

  export type LpoUpdateManyWithWhereWithoutSecondApproverInput = {
    where: LpoScalarWhereInput
    data: XOR<LpoUpdateManyMutationInput, LpoUncheckedUpdateManyWithoutSecondApproverInput>
  }

  export type LpoUpsertWithWhereUniqueWithoutFinalApproverInput = {
    where: LpoWhereUniqueInput
    update: XOR<LpoUpdateWithoutFinalApproverInput, LpoUncheckedUpdateWithoutFinalApproverInput>
    create: XOR<LpoCreateWithoutFinalApproverInput, LpoUncheckedCreateWithoutFinalApproverInput>
  }

  export type LpoUpdateWithWhereUniqueWithoutFinalApproverInput = {
    where: LpoWhereUniqueInput
    data: XOR<LpoUpdateWithoutFinalApproverInput, LpoUncheckedUpdateWithoutFinalApproverInput>
  }

  export type LpoUpdateManyWithWhereWithoutFinalApproverInput = {
    where: LpoScalarWhereInput
    data: XOR<LpoUpdateManyMutationInput, LpoUncheckedUpdateManyWithoutFinalApproverInput>
  }

  export type SiteCreateWithoutLposInput = {
    name: string
    company: CompanyCreateNestedOneWithoutSitesInput
  }

  export type SiteUncheckedCreateWithoutLposInput = {
    id?: number
    name: string
    companyId: number
  }

  export type SiteCreateOrConnectWithoutLposInput = {
    where: SiteWhereUniqueInput
    create: XOR<SiteCreateWithoutLposInput, SiteUncheckedCreateWithoutLposInput>
  }

  export type SupplyItemCreateWithoutLpoInput = {
    name: string
    quantity: number
    unit: string
    unitPrice: number
  }

  export type SupplyItemUncheckedCreateWithoutLpoInput = {
    id?: number
    name: string
    quantity: number
    unit: string
    unitPrice: number
  }

  export type SupplyItemCreateOrConnectWithoutLpoInput = {
    where: SupplyItemWhereUniqueInput
    create: XOR<SupplyItemCreateWithoutLpoInput, SupplyItemUncheckedCreateWithoutLpoInput>
  }

  export type SupplyItemCreateManyLpoInputEnvelope = {
    data: SupplyItemCreateManyLpoInput | SupplyItemCreateManyLpoInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedLposInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    firstApprovedLpos?: LpoCreateNestedManyWithoutFirstApproverInput
    secondApprovedLpos?: LpoCreateNestedManyWithoutSecondApproverInput
    finalApprovedLpos?: LpoCreateNestedManyWithoutFinalApproverInput
  }

  export type UserUncheckedCreateWithoutCreatedLposInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    firstApprovedLpos?: LpoUncheckedCreateNestedManyWithoutFirstApproverInput
    secondApprovedLpos?: LpoUncheckedCreateNestedManyWithoutSecondApproverInput
    finalApprovedLpos?: LpoUncheckedCreateNestedManyWithoutFinalApproverInput
  }

  export type UserCreateOrConnectWithoutCreatedLposInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedLposInput, UserUncheckedCreateWithoutCreatedLposInput>
  }

  export type UserCreateWithoutFirstApprovedLposInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdLpos?: LpoCreateNestedManyWithoutCreatedByInput
    secondApprovedLpos?: LpoCreateNestedManyWithoutSecondApproverInput
    finalApprovedLpos?: LpoCreateNestedManyWithoutFinalApproverInput
  }

  export type UserUncheckedCreateWithoutFirstApprovedLposInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdLpos?: LpoUncheckedCreateNestedManyWithoutCreatedByInput
    secondApprovedLpos?: LpoUncheckedCreateNestedManyWithoutSecondApproverInput
    finalApprovedLpos?: LpoUncheckedCreateNestedManyWithoutFinalApproverInput
  }

  export type UserCreateOrConnectWithoutFirstApprovedLposInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFirstApprovedLposInput, UserUncheckedCreateWithoutFirstApprovedLposInput>
  }

  export type UserCreateWithoutSecondApprovedLposInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdLpos?: LpoCreateNestedManyWithoutCreatedByInput
    firstApprovedLpos?: LpoCreateNestedManyWithoutFirstApproverInput
    finalApprovedLpos?: LpoCreateNestedManyWithoutFinalApproverInput
  }

  export type UserUncheckedCreateWithoutSecondApprovedLposInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdLpos?: LpoUncheckedCreateNestedManyWithoutCreatedByInput
    firstApprovedLpos?: LpoUncheckedCreateNestedManyWithoutFirstApproverInput
    finalApprovedLpos?: LpoUncheckedCreateNestedManyWithoutFinalApproverInput
  }

  export type UserCreateOrConnectWithoutSecondApprovedLposInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSecondApprovedLposInput, UserUncheckedCreateWithoutSecondApprovedLposInput>
  }

  export type UserCreateWithoutFinalApprovedLposInput = {
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdLpos?: LpoCreateNestedManyWithoutCreatedByInput
    firstApprovedLpos?: LpoCreateNestedManyWithoutFirstApproverInput
    secondApprovedLpos?: LpoCreateNestedManyWithoutSecondApproverInput
  }

  export type UserUncheckedCreateWithoutFinalApprovedLposInput = {
    id?: number
    firstName: string
    lastName: string
    email: string
    password: string
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    createdLpos?: LpoUncheckedCreateNestedManyWithoutCreatedByInput
    firstApprovedLpos?: LpoUncheckedCreateNestedManyWithoutFirstApproverInput
    secondApprovedLpos?: LpoUncheckedCreateNestedManyWithoutSecondApproverInput
  }

  export type UserCreateOrConnectWithoutFinalApprovedLposInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFinalApprovedLposInput, UserUncheckedCreateWithoutFinalApprovedLposInput>
  }

  export type SupplierCreateWithoutLposInput = {
    name: string
  }

  export type SupplierUncheckedCreateWithoutLposInput = {
    id?: number
    name: string
  }

  export type SupplierCreateOrConnectWithoutLposInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutLposInput, SupplierUncheckedCreateWithoutLposInput>
  }

  export type SiteUpsertWithoutLposInput = {
    update: XOR<SiteUpdateWithoutLposInput, SiteUncheckedUpdateWithoutLposInput>
    create: XOR<SiteCreateWithoutLposInput, SiteUncheckedCreateWithoutLposInput>
    where?: SiteWhereInput
  }

  export type SiteUpdateToOneWithWhereWithoutLposInput = {
    where?: SiteWhereInput
    data: XOR<SiteUpdateWithoutLposInput, SiteUncheckedUpdateWithoutLposInput>
  }

  export type SiteUpdateWithoutLposInput = {
    name?: StringFieldUpdateOperationsInput | string
    company?: CompanyUpdateOneRequiredWithoutSitesNestedInput
  }

  export type SiteUncheckedUpdateWithoutLposInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    companyId?: IntFieldUpdateOperationsInput | number
  }

  export type SupplyItemUpsertWithWhereUniqueWithoutLpoInput = {
    where: SupplyItemWhereUniqueInput
    update: XOR<SupplyItemUpdateWithoutLpoInput, SupplyItemUncheckedUpdateWithoutLpoInput>
    create: XOR<SupplyItemCreateWithoutLpoInput, SupplyItemUncheckedCreateWithoutLpoInput>
  }

  export type SupplyItemUpdateWithWhereUniqueWithoutLpoInput = {
    where: SupplyItemWhereUniqueInput
    data: XOR<SupplyItemUpdateWithoutLpoInput, SupplyItemUncheckedUpdateWithoutLpoInput>
  }

  export type SupplyItemUpdateManyWithWhereWithoutLpoInput = {
    where: SupplyItemScalarWhereInput
    data: XOR<SupplyItemUpdateManyMutationInput, SupplyItemUncheckedUpdateManyWithoutLpoInput>
  }

  export type SupplyItemScalarWhereInput = {
    AND?: SupplyItemScalarWhereInput | SupplyItemScalarWhereInput[]
    OR?: SupplyItemScalarWhereInput[]
    NOT?: SupplyItemScalarWhereInput | SupplyItemScalarWhereInput[]
    id?: IntFilter<"SupplyItem"> | number
    name?: StringFilter<"SupplyItem"> | string
    quantity?: IntFilter<"SupplyItem"> | number
    unit?: StringFilter<"SupplyItem"> | string
    unitPrice?: FloatFilter<"SupplyItem"> | number
    lpoId?: IntFilter<"SupplyItem"> | number
  }

  export type UserUpsertWithoutCreatedLposInput = {
    update: XOR<UserUpdateWithoutCreatedLposInput, UserUncheckedUpdateWithoutCreatedLposInput>
    create: XOR<UserCreateWithoutCreatedLposInput, UserUncheckedCreateWithoutCreatedLposInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedLposInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedLposInput, UserUncheckedUpdateWithoutCreatedLposInput>
  }

  export type UserUpdateWithoutCreatedLposInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstApprovedLpos?: LpoUpdateManyWithoutFirstApproverNestedInput
    secondApprovedLpos?: LpoUpdateManyWithoutSecondApproverNestedInput
    finalApprovedLpos?: LpoUpdateManyWithoutFinalApproverNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedLposInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstApprovedLpos?: LpoUncheckedUpdateManyWithoutFirstApproverNestedInput
    secondApprovedLpos?: LpoUncheckedUpdateManyWithoutSecondApproverNestedInput
    finalApprovedLpos?: LpoUncheckedUpdateManyWithoutFinalApproverNestedInput
  }

  export type UserUpsertWithoutFirstApprovedLposInput = {
    update: XOR<UserUpdateWithoutFirstApprovedLposInput, UserUncheckedUpdateWithoutFirstApprovedLposInput>
    create: XOR<UserCreateWithoutFirstApprovedLposInput, UserUncheckedCreateWithoutFirstApprovedLposInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFirstApprovedLposInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFirstApprovedLposInput, UserUncheckedUpdateWithoutFirstApprovedLposInput>
  }

  export type UserUpdateWithoutFirstApprovedLposInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdLpos?: LpoUpdateManyWithoutCreatedByNestedInput
    secondApprovedLpos?: LpoUpdateManyWithoutSecondApproverNestedInput
    finalApprovedLpos?: LpoUpdateManyWithoutFinalApproverNestedInput
  }

  export type UserUncheckedUpdateWithoutFirstApprovedLposInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdLpos?: LpoUncheckedUpdateManyWithoutCreatedByNestedInput
    secondApprovedLpos?: LpoUncheckedUpdateManyWithoutSecondApproverNestedInput
    finalApprovedLpos?: LpoUncheckedUpdateManyWithoutFinalApproverNestedInput
  }

  export type UserUpsertWithoutSecondApprovedLposInput = {
    update: XOR<UserUpdateWithoutSecondApprovedLposInput, UserUncheckedUpdateWithoutSecondApprovedLposInput>
    create: XOR<UserCreateWithoutSecondApprovedLposInput, UserUncheckedCreateWithoutSecondApprovedLposInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSecondApprovedLposInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSecondApprovedLposInput, UserUncheckedUpdateWithoutSecondApprovedLposInput>
  }

  export type UserUpdateWithoutSecondApprovedLposInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdLpos?: LpoUpdateManyWithoutCreatedByNestedInput
    firstApprovedLpos?: LpoUpdateManyWithoutFirstApproverNestedInput
    finalApprovedLpos?: LpoUpdateManyWithoutFinalApproverNestedInput
  }

  export type UserUncheckedUpdateWithoutSecondApprovedLposInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdLpos?: LpoUncheckedUpdateManyWithoutCreatedByNestedInput
    firstApprovedLpos?: LpoUncheckedUpdateManyWithoutFirstApproverNestedInput
    finalApprovedLpos?: LpoUncheckedUpdateManyWithoutFinalApproverNestedInput
  }

  export type UserUpsertWithoutFinalApprovedLposInput = {
    update: XOR<UserUpdateWithoutFinalApprovedLposInput, UserUncheckedUpdateWithoutFinalApprovedLposInput>
    create: XOR<UserCreateWithoutFinalApprovedLposInput, UserUncheckedCreateWithoutFinalApprovedLposInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFinalApprovedLposInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFinalApprovedLposInput, UserUncheckedUpdateWithoutFinalApprovedLposInput>
  }

  export type UserUpdateWithoutFinalApprovedLposInput = {
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdLpos?: LpoUpdateManyWithoutCreatedByNestedInput
    firstApprovedLpos?: LpoUpdateManyWithoutFirstApproverNestedInput
    secondApprovedLpos?: LpoUpdateManyWithoutSecondApproverNestedInput
  }

  export type UserUncheckedUpdateWithoutFinalApprovedLposInput = {
    id?: IntFieldUpdateOperationsInput | number
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdLpos?: LpoUncheckedUpdateManyWithoutCreatedByNestedInput
    firstApprovedLpos?: LpoUncheckedUpdateManyWithoutFirstApproverNestedInput
    secondApprovedLpos?: LpoUncheckedUpdateManyWithoutSecondApproverNestedInput
  }

  export type SupplierUpsertWithoutLposInput = {
    update: XOR<SupplierUpdateWithoutLposInput, SupplierUncheckedUpdateWithoutLposInput>
    create: XOR<SupplierCreateWithoutLposInput, SupplierUncheckedCreateWithoutLposInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutLposInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutLposInput, SupplierUncheckedUpdateWithoutLposInput>
  }

  export type SupplierUpdateWithoutLposInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierUncheckedUpdateWithoutLposInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LpoCreateWithoutSupplierInput = {
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    remarks?: string
    rejected?: $Enums.LpoRejected
    site: SiteCreateNestedOneWithoutLposInput
    supplyItems?: SupplyItemCreateNestedManyWithoutLpoInput
    createdBy: UserCreateNestedOneWithoutCreatedLposInput
    firstApprover?: UserCreateNestedOneWithoutFirstApprovedLposInput
    secondApprover?: UserCreateNestedOneWithoutSecondApprovedLposInput
    finalApprover?: UserCreateNestedOneWithoutFinalApprovedLposInput
  }

  export type LpoUncheckedCreateWithoutSupplierInput = {
    id?: number
    siteId: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstApproverId?: number | null
    secondApproverId?: number | null
    finalApproverId?: number | null
    remarks?: string
    rejected?: $Enums.LpoRejected
    supplyItems?: SupplyItemUncheckedCreateNestedManyWithoutLpoInput
  }

  export type LpoCreateOrConnectWithoutSupplierInput = {
    where: LpoWhereUniqueInput
    create: XOR<LpoCreateWithoutSupplierInput, LpoUncheckedCreateWithoutSupplierInput>
  }

  export type LpoCreateManySupplierInputEnvelope = {
    data: LpoCreateManySupplierInput | LpoCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type LpoUpsertWithWhereUniqueWithoutSupplierInput = {
    where: LpoWhereUniqueInput
    update: XOR<LpoUpdateWithoutSupplierInput, LpoUncheckedUpdateWithoutSupplierInput>
    create: XOR<LpoCreateWithoutSupplierInput, LpoUncheckedCreateWithoutSupplierInput>
  }

  export type LpoUpdateWithWhereUniqueWithoutSupplierInput = {
    where: LpoWhereUniqueInput
    data: XOR<LpoUpdateWithoutSupplierInput, LpoUncheckedUpdateWithoutSupplierInput>
  }

  export type LpoUpdateManyWithWhereWithoutSupplierInput = {
    where: LpoScalarWhereInput
    data: XOR<LpoUpdateManyMutationInput, LpoUncheckedUpdateManyWithoutSupplierInput>
  }

  export type LpoCreateWithoutSupplyItemsInput = {
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    remarks?: string
    rejected?: $Enums.LpoRejected
    site: SiteCreateNestedOneWithoutLposInput
    createdBy: UserCreateNestedOneWithoutCreatedLposInput
    firstApprover?: UserCreateNestedOneWithoutFirstApprovedLposInput
    secondApprover?: UserCreateNestedOneWithoutSecondApprovedLposInput
    finalApprover?: UserCreateNestedOneWithoutFinalApprovedLposInput
    supplier: SupplierCreateNestedOneWithoutLposInput
  }

  export type LpoUncheckedCreateWithoutSupplyItemsInput = {
    id?: number
    siteId: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstApproverId?: number | null
    secondApproverId?: number | null
    finalApproverId?: number | null
    supplierId: number
    remarks?: string
    rejected?: $Enums.LpoRejected
  }

  export type LpoCreateOrConnectWithoutSupplyItemsInput = {
    where: LpoWhereUniqueInput
    create: XOR<LpoCreateWithoutSupplyItemsInput, LpoUncheckedCreateWithoutSupplyItemsInput>
  }

  export type LpoUpsertWithoutSupplyItemsInput = {
    update: XOR<LpoUpdateWithoutSupplyItemsInput, LpoUncheckedUpdateWithoutSupplyItemsInput>
    create: XOR<LpoCreateWithoutSupplyItemsInput, LpoUncheckedCreateWithoutSupplyItemsInput>
    where?: LpoWhereInput
  }

  export type LpoUpdateToOneWithWhereWithoutSupplyItemsInput = {
    where?: LpoWhereInput
    data: XOR<LpoUpdateWithoutSupplyItemsInput, LpoUncheckedUpdateWithoutSupplyItemsInput>
  }

  export type LpoUpdateWithoutSupplyItemsInput = {
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
    site?: SiteUpdateOneRequiredWithoutLposNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedLposNestedInput
    firstApprover?: UserUpdateOneWithoutFirstApprovedLposNestedInput
    secondApprover?: UserUpdateOneWithoutSecondApprovedLposNestedInput
    finalApprover?: UserUpdateOneWithoutFinalApprovedLposNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutLposNestedInput
  }

  export type LpoUncheckedUpdateWithoutSupplyItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    siteId?: IntFieldUpdateOperationsInput | number
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    secondApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    finalApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
  }

  export type SiteCreateManyCompanyInput = {
    id?: number
    name: string
  }

  export type SiteUpdateWithoutCompanyInput = {
    name?: StringFieldUpdateOperationsInput | string
    lpos?: LpoUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    lpos?: LpoUncheckedUpdateManyWithoutSiteNestedInput
  }

  export type SiteUncheckedUpdateManyWithoutCompanyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LpoCreateManySiteInput = {
    id?: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstApproverId?: number | null
    secondApproverId?: number | null
    finalApproverId?: number | null
    supplierId: number
    remarks?: string
    rejected?: $Enums.LpoRejected
  }

  export type LpoUpdateWithoutSiteInput = {
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
    supplyItems?: SupplyItemUpdateManyWithoutLpoNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedLposNestedInput
    firstApprover?: UserUpdateOneWithoutFirstApprovedLposNestedInput
    secondApprover?: UserUpdateOneWithoutSecondApprovedLposNestedInput
    finalApprover?: UserUpdateOneWithoutFinalApprovedLposNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutLposNestedInput
  }

  export type LpoUncheckedUpdateWithoutSiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    secondApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    finalApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
    supplyItems?: SupplyItemUncheckedUpdateManyWithoutLpoNestedInput
  }

  export type LpoUncheckedUpdateManyWithoutSiteInput = {
    id?: IntFieldUpdateOperationsInput | number
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    secondApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    finalApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
  }

  export type LpoCreateManyCreatedByInput = {
    id?: number
    siteId: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstApproverId?: number | null
    secondApproverId?: number | null
    finalApproverId?: number | null
    supplierId: number
    remarks?: string
    rejected?: $Enums.LpoRejected
  }

  export type LpoCreateManyFirstApproverInput = {
    id?: number
    siteId: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    secondApproverId?: number | null
    finalApproverId?: number | null
    supplierId: number
    remarks?: string
    rejected?: $Enums.LpoRejected
  }

  export type LpoCreateManySecondApproverInput = {
    id?: number
    siteId: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstApproverId?: number | null
    finalApproverId?: number | null
    supplierId: number
    remarks?: string
    rejected?: $Enums.LpoRejected
  }

  export type LpoCreateManyFinalApproverInput = {
    id?: number
    siteId: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstApproverId?: number | null
    secondApproverId?: number | null
    supplierId: number
    remarks?: string
    rejected?: $Enums.LpoRejected
  }

  export type LpoUpdateWithoutCreatedByInput = {
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
    site?: SiteUpdateOneRequiredWithoutLposNestedInput
    supplyItems?: SupplyItemUpdateManyWithoutLpoNestedInput
    firstApprover?: UserUpdateOneWithoutFirstApprovedLposNestedInput
    secondApprover?: UserUpdateOneWithoutSecondApprovedLposNestedInput
    finalApprover?: UserUpdateOneWithoutFinalApprovedLposNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutLposNestedInput
  }

  export type LpoUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    siteId?: IntFieldUpdateOperationsInput | number
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    secondApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    finalApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
    supplyItems?: SupplyItemUncheckedUpdateManyWithoutLpoNestedInput
  }

  export type LpoUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    siteId?: IntFieldUpdateOperationsInput | number
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    secondApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    finalApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
  }

  export type LpoUpdateWithoutFirstApproverInput = {
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
    site?: SiteUpdateOneRequiredWithoutLposNestedInput
    supplyItems?: SupplyItemUpdateManyWithoutLpoNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedLposNestedInput
    secondApprover?: UserUpdateOneWithoutSecondApprovedLposNestedInput
    finalApprover?: UserUpdateOneWithoutFinalApprovedLposNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutLposNestedInput
  }

  export type LpoUncheckedUpdateWithoutFirstApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    siteId?: IntFieldUpdateOperationsInput | number
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secondApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    finalApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
    supplyItems?: SupplyItemUncheckedUpdateManyWithoutLpoNestedInput
  }

  export type LpoUncheckedUpdateManyWithoutFirstApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    siteId?: IntFieldUpdateOperationsInput | number
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    secondApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    finalApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
  }

  export type LpoUpdateWithoutSecondApproverInput = {
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
    site?: SiteUpdateOneRequiredWithoutLposNestedInput
    supplyItems?: SupplyItemUpdateManyWithoutLpoNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedLposNestedInput
    firstApprover?: UserUpdateOneWithoutFirstApprovedLposNestedInput
    finalApprover?: UserUpdateOneWithoutFinalApprovedLposNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutLposNestedInput
  }

  export type LpoUncheckedUpdateWithoutSecondApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    siteId?: IntFieldUpdateOperationsInput | number
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    finalApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
    supplyItems?: SupplyItemUncheckedUpdateManyWithoutLpoNestedInput
  }

  export type LpoUncheckedUpdateManyWithoutSecondApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    siteId?: IntFieldUpdateOperationsInput | number
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    finalApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
  }

  export type LpoUpdateWithoutFinalApproverInput = {
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
    site?: SiteUpdateOneRequiredWithoutLposNestedInput
    supplyItems?: SupplyItemUpdateManyWithoutLpoNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedLposNestedInput
    firstApprover?: UserUpdateOneWithoutFirstApprovedLposNestedInput
    secondApprover?: UserUpdateOneWithoutSecondApprovedLposNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutLposNestedInput
  }

  export type LpoUncheckedUpdateWithoutFinalApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    siteId?: IntFieldUpdateOperationsInput | number
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    secondApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
    supplyItems?: SupplyItemUncheckedUpdateManyWithoutLpoNestedInput
  }

  export type LpoUncheckedUpdateManyWithoutFinalApproverInput = {
    id?: IntFieldUpdateOperationsInput | number
    siteId?: IntFieldUpdateOperationsInput | number
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    secondApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    supplierId?: IntFieldUpdateOperationsInput | number
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
  }

  export type SupplyItemCreateManyLpoInput = {
    id?: number
    name: string
    quantity: number
    unit: string
    unitPrice: number
  }

  export type SupplyItemUpdateWithoutLpoInput = {
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type SupplyItemUncheckedUpdateWithoutLpoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type SupplyItemUncheckedUpdateManyWithoutLpoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
  }

  export type LpoCreateManySupplierInput = {
    id?: number
    siteId: number
    lpoNumber: string
    prNumber: string
    paymentTerms: string
    deliveryTerms: string
    subTotal: number
    vatRate: number
    total: number
    createdById: number
    createdAt?: Date | string
    updatedAt?: Date | string
    firstApproverId?: number | null
    secondApproverId?: number | null
    finalApproverId?: number | null
    remarks?: string
    rejected?: $Enums.LpoRejected
  }

  export type LpoUpdateWithoutSupplierInput = {
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
    site?: SiteUpdateOneRequiredWithoutLposNestedInput
    supplyItems?: SupplyItemUpdateManyWithoutLpoNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedLposNestedInput
    firstApprover?: UserUpdateOneWithoutFirstApprovedLposNestedInput
    secondApprover?: UserUpdateOneWithoutSecondApprovedLposNestedInput
    finalApprover?: UserUpdateOneWithoutFinalApprovedLposNestedInput
  }

  export type LpoUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    siteId?: IntFieldUpdateOperationsInput | number
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    secondApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    finalApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
    supplyItems?: SupplyItemUncheckedUpdateManyWithoutLpoNestedInput
  }

  export type LpoUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    siteId?: IntFieldUpdateOperationsInput | number
    lpoNumber?: StringFieldUpdateOperationsInput | string
    prNumber?: StringFieldUpdateOperationsInput | string
    paymentTerms?: StringFieldUpdateOperationsInput | string
    deliveryTerms?: StringFieldUpdateOperationsInput | string
    subTotal?: FloatFieldUpdateOperationsInput | number
    vatRate?: FloatFieldUpdateOperationsInput | number
    total?: FloatFieldUpdateOperationsInput | number
    createdById?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    firstApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    secondApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    finalApproverId?: NullableIntFieldUpdateOperationsInput | number | null
    remarks?: StringFieldUpdateOperationsInput | string
    rejected?: EnumLpoRejectedFieldUpdateOperationsInput | $Enums.LpoRejected
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}