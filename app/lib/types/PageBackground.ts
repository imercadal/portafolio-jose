export type PageBackground =
  | { type: "image"; src: string }
  | { type: "video"; src: string }
  | null;