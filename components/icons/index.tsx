import type { SVGProps } from "react";

import { SiGoodreads, SiSpotify, SiTrakt } from "@icons-pack/react-simple-icons";

import { SLinkedin } from "./linkedin";

const withProps = (
  Component: (props: SVGProps<SVGSVGElement>) => JSX.Element
): ((props: SVGProps<SVGSVGElement>) => JSX.Element) =>
  function ForwardedIcon(props: SVGProps<SVGSVGElement>) {
    return <Component {...props} />;
  };

export const Icons = {
  linkedin: withProps(SLinkedin),
  spotify: withProps(SiSpotify),
  trakt: withProps(SiTrakt),
  goodreads: withProps(SiGoodreads),
};
