export const SUBMIT_REGISTRATION = 'SUBMIT_REGISTRATION';

export function submitRegistration(formData: any) {
  return {
    type: SUBMIT_REGISTRATION,
    payload: formData,
  };
}
