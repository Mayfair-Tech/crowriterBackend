
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/wasm.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.16.2
 * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
 */
Prisma.prismaVersion = {
  client: "5.16.2",
  engine: "34ace0eb2704183d2c05b60b52fba5c43c13f303"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  fname: 'fname',
  lname: 'lname',
  email: 'email',
  password: 'password',
  role: 'role',
  profilePic: 'profilePic',
  refreshToken: 'refreshToken',
  refreshTokenExp: 'refreshTokenExp',
  online: 'online',
  active: 'active',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  experience: 'experience',
  leadershipStyle: 'leadershipStyle',
  teamSize: 'teamSize',
  achievements: 'achievements',
  professionalDevelopment: 'professionalDevelopment',
  gender: 'gender',
  country: 'country',
  city: 'city',
  altEmail: 'altEmail',
  phone: 'phone',
  altPhone: 'altPhone',
  highestDegree: 'highestDegree',
  citationStyles: 'citationStyles',
  languages: 'languages',
  disciplines: 'disciplines',
  specialization: 'specialization',
  additionalSoftware: 'additionalSoftware',
  aboutMe: 'aboutMe'
};

exports.Prisma.RelationLoadStrategy = {
  query: 'query',
  join: 'join'
};

exports.Prisma.FreelancerApplicationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.OrderScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  topic: 'topic',
  category: 'category',
  service: 'service',
  sources: 'sources',
  citation: 'citation',
  pages: 'pages',
  cpp: 'cpp',
  amount: 'amount',
  deadline: 'deadline',
  duration: 'duration',
  instructions: 'instructions',
  attachments: 'attachments',
  additionalNotes: 'additionalNotes',
  status: 'status',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  freelancerId: 'freelancerId',
  invoiceId: 'invoiceId'
};

exports.Prisma.BidsScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  freelancerId: 'freelancerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  status: 'status'
};

exports.Prisma.AssignmentScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  freelancerId: 'freelancerId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  status: 'status'
};

exports.Prisma.SubmittedJobsScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  freelancerId: 'freelancerId',
  file_Path: 'file_Path',
  file_mimeType: 'file_mimeType',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  status: 'status'
};

exports.Prisma.CancelledJobsScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  freelancerId: 'freelancerId',
  attachments: 'attachments',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  status: 'status'
};

exports.Prisma.InvoiceScalarFieldEnum = {
  id: 'id',
  invoiceNumber: 'invoiceNumber',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  totalAmount: 'totalAmount',
  finalAmount: 'finalAmount',
  userId: 'userId',
  isDraft: 'isDraft'
};

exports.Prisma.PaymentScalarFieldEnum = {
  id: 'id',
  paymentRef: 'paymentRef',
  amount: 'amount',
  modeOfPayment: 'modeOfPayment',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  invoiceId: 'invoiceId',
  userId: 'userId'
};

exports.Prisma.FinesScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  freelancerId: 'freelancerId',
  amount: 'amount',
  reason: 'reason',
  invoiceId: 'invoiceId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.ReviewScalarFieldEnum = {
  id: 'id',
  orderId: 'orderId',
  reviewerId: 'reviewerId',
  freelancerId: 'freelancerId',
  rating: 'rating',
  comment: 'comment',
  invoiceId: 'invoiceId',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.NotificationScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  orderId: 'orderId',
  title: 'title',
  message: 'message',
  read: 'read',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  MANAGER: 'MANAGER',
  FREELANCER: 'FREELANCER',
  ADMIN: 'ADMIN'
};

exports.ApplicationStatus = exports.$Enums.ApplicationStatus = {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  DECLINED: 'DECLINED'
};

exports.OrderStatus = exports.$Enums.OrderStatus = {
  PENDING: 'PENDING',
  ASSIGNED: 'ASSIGNED',
  ACCEPTED: 'ACCEPTED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  BIDDED: 'BIDDED'
};

exports.ModeOfPayment = exports.$Enums.ModeOfPayment = {
  MPESA: 'MPESA',
  CREDIT_CARD: 'CREDIT_CARD',
  BANK_TRANSFER: 'BANK_TRANSFER',
  PAYPAL: 'PAYPAL',
  CASH: 'CASH',
  CHEQUE: 'CHEQUE',
  OTHER: 'OTHER'
};

exports.NotificationType = exports.$Enums.NotificationType = {
  ORDER: 'ORDER',
  REVIEW: 'REVIEW',
  FINE: 'FINE',
  INVOICE: 'INVOICE',
  PAYMENT: 'PAYMENT',
  OTHER: 'OTHER'
};

exports.Prisma.ModelName = {
  User: 'User',
  FreelancerApplication: 'FreelancerApplication',
  Order: 'Order',
  Bids: 'Bids',
  Assignment: 'Assignment',
  SubmittedJobs: 'SubmittedJobs',
  CancelledJobs: 'CancelledJobs',
  Invoice: 'Invoice',
  Payment: 'Payment',
  Fines: 'Fines',
  Review: 'Review',
  Notification: 'Notification'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/home/jonny/mercy-work/crowriter/server/prisma/client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "debian-openssl-1.1.x",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters",
      "metrics",
      "relationJoins"
    ],
    "sourceFilePath": "/home/jonny/mercy-work/crowriter/server/prisma/schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "..",
  "clientVersion": "5.16.2",
  "engineVersion": "34ace0eb2704183d2c05b60b52fba5c43c13f303",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = [\"relationJoins\", \"driverAdapters\", \"metrics\"]\n  output          = \"./client\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\n// User model representing manager, freelancer, and admin\nmodel User {\n  id              String    @id @default(uuid())\n  fname           String\n  lname           String\n  email           String    @unique\n  password        String\n  role            Role?     @default(FREELANCER)\n  profilePic      String? // To store profile picture\n  refreshToken    String? // To store refresh token\n  refreshTokenExp DateTime? // To store refresh token expiration\n  online          Boolean   @default(false)\n  active          Boolean   @default(true)\n  createdAt       DateTime  @default(now())\n  updatedAt       DateTime  @updatedAt\n\n  // Add manager-specific fields\n  experience              String? // Years of experience\n  leadershipStyle         String? // Leadership style\n  teamSize                String? // Team size\n  achievements            String? // Key achievements\n  professionalDevelopment String? // Professional development\n\n  // Add freelancer-specific fields\n  gender             String? // Gender\n  country            String? // Country\n  city               String? // City\n  altEmail           String? // Alternative Email\n  phone              String? // Phone\n  altPhone           String? // Alternative Phone\n  highestDegree      String? // Highest Degree\n  citationStyles     String? // Citation Styles\n  languages          String? // Languages\n  disciplines        String? // Disciplines\n  specialization     String? // Specialization\n  additionalSoftware String? // Additional Software\n  aboutMe            String? // About Me\n\n  orders        Order[] // Relation with the Order model\n  bids          Bids[]\n  assignments   Assignment[]\n  SubmittedJobs SubmittedJobs[]\n  cancelledJobs CancelledJobs[]\n  invoices      Invoice[] // Invoices created by the user\n  payments      Payment[] // Payments made by the user\n  fines         Fines[]\n  reviews       Review[]        @relation(\"Reviewer\") // Reviews made by the user as a reviewer\n  reviewed      Review[]        @relation(\"ReviewedUser\") // Reviews received by the user as a freelancer\n  notifications Notification[] // Notifications received by the user\n\n  freelancerApplications FreelancerApplication[]\n}\n\nenum Role {\n  MANAGER\n  FREELANCER\n  ADMIN\n}\n\n// New model for freelancer applications\nmodel FreelancerApplication {\n  id        String            @id @default(uuid())\n  user      User              @relation(fields: [userId], references: [id])\n  userId    String\n  status    ApplicationStatus @default(PENDING)\n  createdAt DateTime          @default(now())\n  updatedAt DateTime          @updatedAt\n\n  @@index([userId])\n}\n\nenum ApplicationStatus {\n  PENDING\n  APPROVED\n  DECLINED\n}\n\nmodel Order {\n  id              String      @id @default(uuid())\n  orderId         String\n  topic           String\n  category        String?\n  service         String?\n  sources         String?\n  citation        String?\n  pages           Decimal?\n  cpp             Int         @default(0)\n  amount          Int         @default(0)\n  deadline        DateTime\n  duration        String\n  instructions    String\n  attachments     String[] // Change to array to store attachments\n  additionalNotes String?\n  status          OrderStatus @default(PENDING)\n  createdAt       DateTime    @default(now())\n  updatedAt       DateTime    @updatedAt\n\n  freelancerId String?\n  freelancer   User?   @relation(fields: [freelancerId], references: [id])\n\n  bids          Bids[]\n  assignments   Assignment[]\n  SubmittedJobs SubmittedJobs[]\n  cancelledJobs CancelledJobs[]\n  fines         Fines[]\n  reviews       Review[] // Reviews associated with this order\n\n  invoiceId String? // Foreign key to link an order to an invoice\n  invoice   Invoice? @relation(fields: [invoiceId], references: [id])\n\n  notifications Notification[] // Notifications related to this order\n\n  @@index([freelancerId, status, createdAt, orderId])\n}\n\nenum OrderStatus {\n  PENDING\n  ASSIGNED\n  ACCEPTED\n  COMPLETED\n  CANCELLED\n  BIDDED\n}\n\nmodel Bids {\n  id           String      @id @default(uuid())\n  order        Order       @relation(fields: [orderId], references: [id])\n  orderId      String\n  freelancer   User        @relation(fields: [freelancerId], references: [id])\n  freelancerId String\n  createdAt    DateTime    @default(now())\n  updatedAt    DateTime    @updatedAt\n  status       OrderStatus @default(PENDING)\n\n  @@index([freelancerId, status, createdAt])\n}\n\nmodel Assignment {\n  id           String      @id @default(uuid())\n  order        Order       @relation(fields: [orderId], references: [id])\n  orderId      String\n  freelancer   User        @relation(fields: [freelancerId], references: [id])\n  freelancerId String\n  createdAt    DateTime    @default(now())\n  updatedAt    DateTime    @updatedAt\n  status       OrderStatus @default(PENDING)\n\n  @@index([freelancerId, status, createdAt])\n}\n\nmodel SubmittedJobs {\n  id            String      @id @default(uuid())\n  order         Order       @relation(fields: [orderId], references: [id])\n  orderId       String\n  freelancer    User        @relation(fields: [freelancerId], references: [id])\n  freelancerId  String\n  file_Path     String\n  file_mimeType String\n  createdAt     DateTime    @default(now())\n  updatedAt     DateTime    @updatedAt\n  status        OrderStatus @default(PENDING)\n\n  @@index([freelancerId, status, createdAt])\n}\n\nmodel CancelledJobs {\n  id           String      @id @default(uuid())\n  order        Order       @relation(fields: [orderId], references: [id])\n  orderId      String\n  freelancer   User?       @relation(fields: [freelancerId], references: [id])\n  freelancerId String\n  attachments  String?\n  createdAt    DateTime    @default(now())\n  updatedAt    DateTime    @updatedAt\n  status       OrderStatus @default(PENDING)\n}\n\n// New model for Invoices\nmodel Invoice {\n  id            String    @id @default(uuid())\n  invoiceNumber String    @unique\n  createdAt     DateTime  @default(now())\n  updatedAt     DateTime  @updatedAt\n  totalAmount   Int       @default(0)\n  finalAmount   Int       @default(0) // Make sure this field is defined correctly\n  orders        Order[]\n  payments      Payment[]\n  userId        String\n  user          User      @relation(fields: [userId], references: [id])\n  isDraft       Boolean   @default(false)\n  fines         Fines[]\n  reviews       Review[]\n}\n\n// Enum to define possible payment modes\nenum ModeOfPayment {\n  MPESA\n  CREDIT_CARD\n  BANK_TRANSFER\n  PAYPAL\n  CASH\n  CHEQUE\n  OTHER\n}\n\n// Model to handle payments\nmodel Payment {\n  id            String        @id @default(uuid())\n  paymentRef    String        @unique\n  amount        Int\n  modeOfPayment ModeOfPayment\n  createdAt     DateTime      @default(now())\n  updatedAt     DateTime      @updatedAt\n\n  invoiceId String // Foreign key to link payment to an invoice\n  invoice   Invoice @relation(fields: [invoiceId], references: [id])\n\n  userId String // Foreign key to link the payment to the user\n  user   User   @relation(fields: [userId], references: [id])\n}\n\nmodel Fines {\n  id           String   @id @default(uuid())\n  order        Order    @relation(fields: [orderId], references: [id])\n  orderId      String\n  freelancer   User     @relation(fields: [freelancerId], references: [id])\n  freelancerId String\n  amount       Int\n  reason       String?\n  invoiceId    String?\n  invoice      Invoice? @relation(fields: [invoiceId], references: [id])\n  createdAt    DateTime @default(now())\n  updatedAt    DateTime @updatedAt\n}\n\n// Model to handle reviews\nmodel Review {\n  id      String @id @default(uuid())\n  orderId String\n  order   Order  @relation(fields: [orderId], references: [id])\n\n  reviewerId String\n  reviewer   User   @relation(\"Reviewer\", fields: [reviewerId], references: [id])\n\n  freelancerId String\n  freelancer   User   @relation(\"ReviewedUser\", fields: [freelancerId], references: [id])\n\n  rating  Int?\n  comment String?\n\n  invoiceId String?\n  invoice   Invoice? @relation(fields: [invoiceId], references: [id])\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n}\n\nmodel Notification {\n  id        String           @id @default(uuid())\n  userId    String\n  user      User             @relation(fields: [userId], references: [id])\n  order     Order?           @relation(fields: [orderId], references: [id])\n  orderId   String?\n  title     String?\n  message   String?\n  read      Boolean          @default(false)\n  type      NotificationType\n  createdAt DateTime         @default(now())\n  updatedAt DateTime         @updatedAt\n}\n\nenum NotificationType {\n  ORDER\n  REVIEW\n  FINE\n  INVOICE\n  PAYMENT\n  OTHER\n}\n",
  "inlineSchemaHash": "8bc4bd7c10b93ae4320a142fab533737998f0d5b22c041fb13e69123674f7c57",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"fname\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"lname\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"email\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"password\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"role\",\"kind\":\"enum\",\"type\":\"Role\"},{\"name\":\"profilePic\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"refreshToken\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"refreshTokenExp\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"online\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"active\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"experience\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"leadershipStyle\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"teamSize\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"achievements\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"professionalDevelopment\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"gender\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"country\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"city\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"altEmail\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"phone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"altPhone\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"highestDegree\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"citationStyles\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"languages\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"disciplines\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"specialization\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"additionalSoftware\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"aboutMe\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"orders\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"OrderToUser\"},{\"name\":\"bids\",\"kind\":\"object\",\"type\":\"Bids\",\"relationName\":\"BidsToUser\"},{\"name\":\"assignments\",\"kind\":\"object\",\"type\":\"Assignment\",\"relationName\":\"AssignmentToUser\"},{\"name\":\"SubmittedJobs\",\"kind\":\"object\",\"type\":\"SubmittedJobs\",\"relationName\":\"SubmittedJobsToUser\"},{\"name\":\"cancelledJobs\",\"kind\":\"object\",\"type\":\"CancelledJobs\",\"relationName\":\"CancelledJobsToUser\"},{\"name\":\"invoices\",\"kind\":\"object\",\"type\":\"Invoice\",\"relationName\":\"InvoiceToUser\"},{\"name\":\"payments\",\"kind\":\"object\",\"type\":\"Payment\",\"relationName\":\"PaymentToUser\"},{\"name\":\"fines\",\"kind\":\"object\",\"type\":\"Fines\",\"relationName\":\"FinesToUser\"},{\"name\":\"reviews\",\"kind\":\"object\",\"type\":\"Review\",\"relationName\":\"Reviewer\"},{\"name\":\"reviewed\",\"kind\":\"object\",\"type\":\"Review\",\"relationName\":\"ReviewedUser\"},{\"name\":\"notifications\",\"kind\":\"object\",\"type\":\"Notification\",\"relationName\":\"NotificationToUser\"},{\"name\":\"freelancerApplications\",\"kind\":\"object\",\"type\":\"FreelancerApplication\",\"relationName\":\"FreelancerApplicationToUser\"}],\"dbName\":null},\"FreelancerApplication\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"FreelancerApplicationToUser\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"ApplicationStatus\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Order\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"orderId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"topic\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"category\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"service\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"sources\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"citation\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"pages\",\"kind\":\"scalar\",\"type\":\"Decimal\"},{\"name\":\"cpp\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"deadline\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"duration\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"instructions\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"attachments\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"additionalNotes\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"OrderStatus\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"freelancerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"freelancer\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"OrderToUser\"},{\"name\":\"bids\",\"kind\":\"object\",\"type\":\"Bids\",\"relationName\":\"BidsToOrder\"},{\"name\":\"assignments\",\"kind\":\"object\",\"type\":\"Assignment\",\"relationName\":\"AssignmentToOrder\"},{\"name\":\"SubmittedJobs\",\"kind\":\"object\",\"type\":\"SubmittedJobs\",\"relationName\":\"OrderToSubmittedJobs\"},{\"name\":\"cancelledJobs\",\"kind\":\"object\",\"type\":\"CancelledJobs\",\"relationName\":\"CancelledJobsToOrder\"},{\"name\":\"fines\",\"kind\":\"object\",\"type\":\"Fines\",\"relationName\":\"FinesToOrder\"},{\"name\":\"reviews\",\"kind\":\"object\",\"type\":\"Review\",\"relationName\":\"OrderToReview\"},{\"name\":\"invoiceId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"invoice\",\"kind\":\"object\",\"type\":\"Invoice\",\"relationName\":\"InvoiceToOrder\"},{\"name\":\"notifications\",\"kind\":\"object\",\"type\":\"Notification\",\"relationName\":\"NotificationToOrder\"}],\"dbName\":null},\"Bids\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"order\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"BidsToOrder\"},{\"name\":\"orderId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"freelancer\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"BidsToUser\"},{\"name\":\"freelancerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"OrderStatus\"}],\"dbName\":null},\"Assignment\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"order\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"AssignmentToOrder\"},{\"name\":\"orderId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"freelancer\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"AssignmentToUser\"},{\"name\":\"freelancerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"OrderStatus\"}],\"dbName\":null},\"SubmittedJobs\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"order\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"OrderToSubmittedJobs\"},{\"name\":\"orderId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"freelancer\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"SubmittedJobsToUser\"},{\"name\":\"freelancerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"file_Path\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"file_mimeType\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"OrderStatus\"}],\"dbName\":null},\"CancelledJobs\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"order\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"CancelledJobsToOrder\"},{\"name\":\"orderId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"freelancer\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"CancelledJobsToUser\"},{\"name\":\"freelancerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"attachments\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"status\",\"kind\":\"enum\",\"type\":\"OrderStatus\"}],\"dbName\":null},\"Invoice\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"invoiceNumber\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"totalAmount\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"finalAmount\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"orders\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"InvoiceToOrder\"},{\"name\":\"payments\",\"kind\":\"object\",\"type\":\"Payment\",\"relationName\":\"InvoiceToPayment\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"InvoiceToUser\"},{\"name\":\"isDraft\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"fines\",\"kind\":\"object\",\"type\":\"Fines\",\"relationName\":\"FinesToInvoice\"},{\"name\":\"reviews\",\"kind\":\"object\",\"type\":\"Review\",\"relationName\":\"InvoiceToReview\"}],\"dbName\":null},\"Payment\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"paymentRef\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"modeOfPayment\",\"kind\":\"enum\",\"type\":\"ModeOfPayment\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"invoiceId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"invoice\",\"kind\":\"object\",\"type\":\"Invoice\",\"relationName\":\"InvoiceToPayment\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"PaymentToUser\"}],\"dbName\":null},\"Fines\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"order\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"FinesToOrder\"},{\"name\":\"orderId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"freelancer\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"FinesToUser\"},{\"name\":\"freelancerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"amount\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"reason\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"invoiceId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"invoice\",\"kind\":\"object\",\"type\":\"Invoice\",\"relationName\":\"FinesToInvoice\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Review\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"orderId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"order\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"OrderToReview\"},{\"name\":\"reviewerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"reviewer\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"Reviewer\"},{\"name\":\"freelancerId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"freelancer\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"ReviewedUser\"},{\"name\":\"rating\",\"kind\":\"scalar\",\"type\":\"Int\"},{\"name\":\"comment\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"invoiceId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"invoice\",\"kind\":\"object\",\"type\":\"Invoice\",\"relationName\":\"InvoiceToReview\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null},\"Notification\":{\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"userId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"user\",\"kind\":\"object\",\"type\":\"User\",\"relationName\":\"NotificationToUser\"},{\"name\":\"order\",\"kind\":\"object\",\"type\":\"Order\",\"relationName\":\"NotificationToOrder\"},{\"name\":\"orderId\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"title\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"message\",\"kind\":\"scalar\",\"type\":\"String\"},{\"name\":\"read\",\"kind\":\"scalar\",\"type\":\"Boolean\"},{\"name\":\"type\",\"kind\":\"enum\",\"type\":\"NotificationType\"},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"type\":\"DateTime\"}],\"dbName\":null}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = {
  getRuntime: () => require('./query_engine_bg.js'),
  getQueryEngineWasmModule: async () => {
    const loader = (await import('#wasm-engine-loader')).default
    const engine = (await loader).default
    return engine 
  }
}

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

