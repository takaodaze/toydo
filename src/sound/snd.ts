import Snd from "snd-lib";

const SELECTED_SOUND_KIT = Snd.KITS.SND01;
export const snd = new Snd({ preloadSoundKit: SELECTED_SOUND_KIT });
export const SND_SOUND = Snd.SOUNDS;
