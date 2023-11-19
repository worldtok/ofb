function convert() {
  let left = 19 * 60 + 30

  let stored = localStorage.getItem('time')
  if (stored) {
    left = parseInt(stored) || 19 * 60 + 30
  }

  seconds = left

  var minutes = Math.floor(seconds / 60)
  var remainingSeconds = seconds % 60

  localStorage.setItem('time', seconds - 1)

  // Formatting to have leading zeros for single-digit seconds
  if (remainingSeconds < 10) {
    remainingSeconds = '0' + remainingSeconds
  }

  return minutes + 'm  ' + remainingSeconds + 's'
}

const clock = () => {
  document.querySelector('#timer').textContent = convert()
  setTimeout(clock, 1000)
}

document.addEventListener('DOMContentLoaded', () => clock)
