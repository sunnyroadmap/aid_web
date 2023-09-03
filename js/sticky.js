const stickyMenu = document.querySelector('.sticky-menu');
const menuItems = document.querySelectorAll('.sticky-menu a');
let lastScrollTop = 0;
let isMenuVisible = true;

function hideMenu() {
  const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const maxScrollTop = document.body.clientHeight - window.innerHeight;
  const scrollPercentage = (currentScrollTop / maxScrollTop) * 100;

  const opacity = 1 - scrollPercentage / 100;

  stickyMenu.style.opacity = opacity;
  menuItems.forEach((item) => {
    item.style.opacity = opacity;
  });

  if (scrollPercentage >= 95) {
    stickyMenu.style.display = 'none';
    menuItems.forEach((item) => {
      item.style.display = 'none';
    });
    isMenuVisible = false;
  } else {
    stickyMenu.style.display = 'block';
    menuItems.forEach((item) => {
      item.style.display = 'block';
    });
    isMenuVisible = true;
  }

  lastScrollTop = currentScrollTop;
}

window.addEventListener('scroll', hideMenu);

const aboutMenuItem = document.querySelector('.sticky-menu .dropdown a');
const teamSection = document.querySelector('.team-section');
const missionSection = document.querySelector('.mission-section');
const dropdownContent = document.querySelector('.dropdown-content'); // Added this line

aboutMenuItem.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (teamSection.style.display === 'none') {
    showDropdownContent();
    aboutMenuItem.classList.add('active');
    dropdownContent.classList.add('active'); // Added this line
  } else {
    hideDropdownContent();
    aboutMenuItem.classList.remove('active');
    dropdownContent.classList.remove('active'); // Added this line
  }
});

window.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown')) {
    if (teamSection.style.display === 'block') {
      hideDropdownContent();
      aboutMenuItem.classList.remove('active');
      dropdownContent.classList.remove('active'); // Added this line
    }
  }
});

function showDropdownContent() {
  teamSection.style.display = 'flex'; // Change to flex
  missionSection.style.display = 'flex'; // Change to flex
}

function hideDropdownContent() {
  teamSection.style.display = 'none';
  missionSection.style.display = 'none';
}
