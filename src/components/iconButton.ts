// Round icon links for people (LinkedIn, email, website, Scholar), shared
// by the About page team cards and post author blocks. Styled like the
// LessWrong/Substack tags on posts: a tinted outline that fills with the
// brand colour on hover.
const iconButtonBase =
  "inline-flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full border transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

export const linkedInButtonClass = `${iconButtonBase} border-[#0A66C2]/40 bg-[#0A66C2]/5 text-[#0A66C2] hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:text-white focus-visible:ring-[#0A66C2]/40`;

export const iconButtonClass = `${iconButtonBase} border-customPurple/30 bg-customPurple/5 text-customPurple hover:bg-customPurple hover:border-customPurple hover:text-white focus-visible:ring-customPurple/40`;
