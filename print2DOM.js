export const setHTML = (selector, msg, reset = false, { parent = document } = {}) => {
  if (!reset) {
    parent.querySelector(selector).innerHTML = msg;
  }
  else {
    parent.querySelector(selector).insertAdjacentHTML("beforeend", msg)
  }
}

export const setText = (selector, value, { parent = document } = {}) => {
  parent.querySelector(`[data-${selector}]`).textContent = value
}

