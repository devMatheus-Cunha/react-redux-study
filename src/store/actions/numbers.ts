// Actions Creator
export const changeMinNumber = (newNumber: any) => {
  return {
    type: "CHANGE_MIN_NUMBER",
    payload: newNumber
  }
}
