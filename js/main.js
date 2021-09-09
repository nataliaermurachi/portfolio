// initialize sidenav for mobile version
const sideNav = document.querySelector('.sidenav');
M.Sidenav.init(sideNav, {});

// Initialize Slider
const slider = document.querySelector('.slider');
M.Slider.init(slider, {
  indicators: false,
  height: 500,
  transition: 500,
  interval: 6000
}); // second parameter is the options you can put

//Material boxed

const mb = document.querySelectorAll('.materialboxed');
M.Materialbox.init(mb, {});
  // Initalise scrollspy

const ss = document.querySelectorAll('.scrollspy');
M.Scrollspy.init(ss, {});
