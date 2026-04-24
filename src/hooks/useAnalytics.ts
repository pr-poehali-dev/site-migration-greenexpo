const YM_ID = 100343781;
const VK_PIXEL_ID = 3685571;

declare global {
  interface Window {
    ym?: (id: number, action: string, goal: string) => void;
    _tmr?: Array<{ id: string; type: string; goal?: string }>;
  }
}

export function reachGoal(goal: string) {
  // Яндекс Метрика
  if (window.ym) {
    window.ym(YM_ID, 'reachGoal', goal);
  }
  // ВКонтакте пиксель (Top.Mail.Ru)
  if (window._tmr) {
    window._tmr.push({ id: String(VK_PIXEL_ID), type: 'reachGoal', goal });
  }
}

export const GOALS = {
  OPEN_MODAL: 'open_modal',
  FORM_SUBMIT: 'form_submit',
  CLICK_TELEGRAM: 'click_telegram',
  CLICK_VK: 'click_vk',
  DACHA_PARTICIPANT_OPEN: 'dacha_participant_open',
  DACHA_PRESENTATION_OPEN: 'dacha_presentation_open',
  DACHA_PARTICIPANT_SUBMIT: 'dacha_participant_form',
  DACHA_PRESENTATION_SUBMIT: 'dacha_presentation_form',
};
