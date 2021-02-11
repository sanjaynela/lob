const redirect = window.redirect

const SECRET_COMBO = [1, 3, 5, 1]

const lockState = window.mobx.observable({
  locked: true,
  wheels: [0, 0, 0, 0]
})

function changeDialValue (index, incrementBy) {
  // If incrementBy is 1
  if (incrementBy === 1) {
    // Add one if digit is not 9. Else, update to zero
    let digit = window.lockState.wheels[index]
    if (digit !== 9) {
      digit += 1
    } else {
      digit = 0
    }
    window.lockState.wheels[index] = digit
  } else {
    // if incrementBy is -1
    // Minus one if digit is not 0. Else, update to 9
    let digit = window.lockState.wheels[index]
    if (digit !== 0) {
      digit -= 1
    } else {
      digit = 9
    }
    window.lockState.wheels[index] = digit
  }

  // Check if the digits are the secret code
  let i
  let equal = 1
  for (i = 0; i < SECRET_COMBO.length; i++) {
    if (SECRET_COMBO[i] !== window.lockState.wheels[i]) {
      equal = 0
    }
  }
  if (equal) {
    // If yes, updated locked to unlocked
    window.lockState.locked = false
  } else {
    // If no, update locked to true
    window.lockState.locked = true

    // When the lock is set to match the secretCombo
    // call the redirect() function with your name
    redirect('sanjay-nelagadde')
  }
}

// let our other modules find our functions
window.lockState = lockState
window.changeDialValue = changeDialValue
