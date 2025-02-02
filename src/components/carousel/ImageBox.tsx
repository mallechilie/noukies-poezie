import Globals from "@/globals";
import { Paper } from "@mui/material";
import Image from "next/image";
import { ComponentProps } from "react";

interface ImageBoxProps extends ComponentProps<typeof Paper> {
  alt: string;
  src: string;
  color?: string;
}

export default function ImageBox({ src, alt, color, ...props }: ImageBoxProps) {
  return (
    <Paper
      {...props}
      sx={{
        backgroundColor: color ?? Globals.theme.palette.secondary.light,
        borderRadius: 5,
        aspectRatio: 1,
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Image
        priority={true}
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "90%",
          height: "90%",
          objectFit: "contain",
          margin: "auto",
        }}
      />
    </Paper>
  );
}
