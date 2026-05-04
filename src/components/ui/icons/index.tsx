import { IconProps, Icons } from "./_types";
import ArrowRightIcon from "./arrow-right";
import EnvelopeIcon from "./envelope";
import PlayIcon from "./play";

interface Props extends IconProps {
  type: Icons;
}

export function Icon({ type, className }: Props) {
  const props = { className };

  switch (type) {
    case Icons.ArrowRight:
      return <ArrowRightIcon {...props} />;

    case Icons.Envelope:
      return <EnvelopeIcon {...props} />;

    case Icons.Play:
      return <PlayIcon {...props} />;

    default:
      return null;
  }
}
