
const topMenu = document.getElementById('cbd-top-menu')
const toggleTopMenuIcon = document.getElementById('cbd-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
  if (toggleTopMenuIcon.contains(e.target)) {
    // Click to Toggle top menu icon
    topMenu.classList.toggle('cbd-topmenu-expanded')
    topMenu.classList.toggle('hidden')
  } else {
    // Click Outside from Toggle top menu icon
    if (topMenu.classList.contains('cbd-topmenu-expanded')) {
      topMenu.classList.remove('cbd-topmenu-expanded')
      topMenu.classList.add('hidden')
    }
  }
})
