// Actions Creator
export const changeMinNumber = (newNumber: any) => {
  return {
    type: "CHANGE_MIN_NUMBER",
    payload: newNumber
  }
}

export const changeMaxNumber = (newNumber: any) => {
  return {
    type: "CHANGE_MAX_NUMBER",
    payload: newNumber
  }
}
