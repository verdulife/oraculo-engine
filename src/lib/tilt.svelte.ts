import type { TiltOptions } from 'vanilla-tilt';
import VanillaTilt from 'vanilla-tilt';

export function tilt(node: HTMLElement, data: TiltOptions = {}) {
  $effect(() => {
    VanillaTilt.init(node, data);
  });
}