import { keys as analytics } from '@c14/analytics/keys';
import { createEnv } from '@t3-oss/env-nextjs';

export const env = createEnv({
    extends: [analytics()],
    server: {},
    client: {},
    runtimeEnv: {},
});