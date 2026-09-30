import linkPreviewImage from "@/app/opengraph-image.png";

// The logo card from app/opengraph-image.png. A page that defines its own
// `openGraph` metadata replaces the site-wide one, image included, so such
// pages pass this as `openGraph.images` to keep the logo preview.
export const linkPreviewImages = [
  {
    url: linkPreviewImage.src,
    width: linkPreviewImage.width,
    height: linkPreviewImage.height,
    alt: "Formation Research logo",
  },
];
