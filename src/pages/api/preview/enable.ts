import type { NextApiRequest, NextApiResponse } from "next";

export default function enablePreview(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setPreviewData({});
  res.writeHead(307, { Location: "/" });
  res.end();
}
