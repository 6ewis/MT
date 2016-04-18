export const INITIALIZE = 'INITIALIZE';

export function initialize(initialData) {
  return {
    type: INITIALIZE,
    payload: initialData
  //payload: serializeData(content.entities)
  };
}
