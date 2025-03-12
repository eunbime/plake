import Image from "next/image";

type TAvatarProps = {
  type: "default" | "editable";
  size: "small" | "default" | "large";
  imgPath?: string;
  handleAvatar: () => void;
};
const AVATAR_SIZE = {
  small: 25,
  default: 35,
  large: 55,
};
const Avatar = ({
  type,
  size,
  imgPath = "default",
  handleAvatar,
}: TAvatarProps) => {
  const selectedSize = AVATAR_SIZE[size];

  const avatarImg = () => {
    if (imgPath === "default") {
      return `/images/avatar_${type}.png`;
    }
    return imgPath;
  };

  return (
    <div
      className="relative overflow-hidden rounded-full"
      style={{ width: selectedSize, height: selectedSize }}
    >
      <Image
        className="cursor-pointer"
        onClick={handleAvatar}
        src={avatarImg()}
        alt={`avatar-${type}`}
        aria-label={`avatar-${type}`}
        fill={true}
        style={{ objectFit: "fill" }}
        placeholder="blur"
        blurDataURL="/images/avatar_default.png"
        loading="lazy"
      />
    </div>
  );
};

export default Avatar;
