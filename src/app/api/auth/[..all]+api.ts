import { auth } from '@/lib/utils/auth';

const handler = auth.handler;
export { handler as GET, handler as POST };
