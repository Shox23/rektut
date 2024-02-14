// const isTouch = () =>
//   "ontouchstart" in window ||
//   (window.DocumentTouch && document instanceof window.DocumentTouch) ||
//   navigator.maxTouchPoints > 0 ||
//   window.navigator.msMaxTouchPoints > 0;
const handleRipple = (element: Element, binding: any, ev: any) => {
  const rippleElement = document.createElement("span");
  let currentDiameter = 1;
  let currentOpacity = 0.45;
  let animationHandler = setInterval(animateRippleSpread, 10);
  applyRippleStyle();

  function applyRippleStyle() {
    const elementCoordinates = element.getBoundingClientRect();
    let offsetY;
    let offsetX;
    // if (isTouch()) {
    //   offsetY = ev.touches[0].clientY - elementCoordinates.y;
    //   offsetX = ev.touches[0].clientX - elementCoordinates.x;
    // } else {
    offsetY = ev.clientY - elementCoordinates.y;
    offsetX = ev.clientX - elementCoordinates.x;
    // }

    rippleElement.style.position = "absolute";
    rippleElement.style.height = "5px";
    rippleElement.style.width = "5px";
    rippleElement.style.borderRadius = "100%";
    rippleElement.style.backgroundColor = "var(--ripple, #f2f2f2)";
    rippleElement.style.left = `${offsetX}px`;
    rippleElement.style.top = `${offsetY}px`;
    element.appendChild(rippleElement);
  }

  function animateRippleSpread() {
    const maximalDiameter = +binding.radius || 50;
    if (currentDiameter <= maximalDiameter) {
      currentDiameter++;
      currentOpacity -= 0.65 / maximalDiameter;
      rippleElement.style.transform = `scale(${currentDiameter})`;
      rippleElement.style.opacity = `${currentOpacity}`;
    } else {
      rippleElement.remove();
      clearInterval(animationHandler);
    }
  }
};

// Hook the directive to the DOM element
const vRipple = {
  mounted: (el: HTMLElement, binding: any) => {
    let down = false;
    const position = getComputedStyle(el).position;
    if (position != "absolute") {
      el.style.position = "relative";
    }
    el.style.overflow = "hidden";
    el.style.cursor = "pointer";
    el.addEventListener("mousedown", (ev) => {
      // if (isTouch()) return;
      if (!down) handleRipple(el, binding, ev);
      down = true;
    });
    el.addEventListener("mouseup", () => {
      navigator.vibrate(70);
    });
    el.addEventListener("click", () => {
      navigator.vibrate(70);
    });
    el.addEventListener(
      "touchstart",
      (ev) => {
        handleRipple(el, binding, ev);
      },
      true
    );
    window.addEventListener("mouseup", () => {
      down = false;
    });
  },
};

export default vRipple;
