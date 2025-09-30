import { ComponentProps, FC } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import styles from "./styles.module.css";
import classNames from "classnames";

type IProps = ComponentProps<typeof NextLink>;

export const Link: FC<IProps> = ({ children, ...props }) => {
  const pathname = usePathname();

  const isActive = pathname === props.href;

  return (
    <NextLink
      {...props}
      className={classNames(styles.link, {
        [styles.isActive]: isActive,
      })}
    >
      {children}
    </NextLink>
  );
};
