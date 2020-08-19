export interface FadeIn {
  duration: number;
  delay: number;
  origin: string;
  reset: boolean;
  distance: string;
  viewFactor: number;
}
export type FadeInCongig = (duration: number, delay: number, origin: string, reset?: boolean, distance?: string, viewFactor?: number) => FadeIn