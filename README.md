AWS-SDK (EC2) Bundle Size

The following source code:

```
import { DescribeRegionsCommand, EC2Client } from "@aws-sdk/client-ec2";

console.log({
  DescribeRegionsCommand,
  EC2Client,
});
```

builds 51kb of GZIPPED output. Expected?

```
± ls -lah dist
...
-rw-r--r--   1 nhudkins  staff   196K Mar 14 11:02 main.js
-rw-r--r--   1 nhudkins  staff    51K Mar 14 11:02 main.js.gz
```
