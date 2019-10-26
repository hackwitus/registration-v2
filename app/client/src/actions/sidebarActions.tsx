export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const BLUR_SIDEBAR = 'BLUR_SIDEBAR';

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR,
  };
}

export function blurSidebar() {
  return {
    type: BLUR_SIDEBAR,
  };
}
