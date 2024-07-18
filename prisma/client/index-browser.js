
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
