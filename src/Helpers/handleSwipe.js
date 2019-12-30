/**
 * This method is responsible for handling the sidebar swipe events on the screen
 * @param {React.MutableRefObject} sidebarRef
 * @param {React.MutableRefObject} bodyRef
 * @returns {void}
 */
export const handleSwipe = (sidebarRef, bodyRef) => {
  let initialTouchPos = null;
  let endTouchPos = null;

  const getGesturePointFromEvent = (evt) => {
    let point = 0;

    if (evt.targetTouches) {
      point = evt.targetTouches[0].clientX;
    } else {
      point = evt.clientX;
    }

    return point;
  };

  const handleGestureMove = (evt) => {
    evt.preventDefault();

    if (!initialTouchPos) {
      return;
    }

    endTouchPos = getGesturePointFromEvent(evt);
  };

  const handleGestureEnd = (evt) => {
    evt.preventDefault();

    if (evt.touches && evt.touches.length > 0) {
      return;
    }

    if (initialTouchPos - endTouchPos < 0) {
      sidebarRef.current.classList.add('sidebar--open');
    } else {
      sidebarRef.current.classList.remove('sidebar--open');
    }

    initialTouchPos = null;
    endTouchPos = null;

    if (window.PointerEvent) {
      evt.target.releasePointerCapture(evt.pointerId);
    } else {
      document.removeEventListener('mousemove', handleGestureMove, true);
      document.removeEventListener('mouseup', handleGestureEnd, true);
    }
  };

  const handleGestureStart = (evt) => {
    evt.preventDefault();

    if (evt.touches && evt.touches.length > 1) {
      return;
    }

    if (window.PointerEvent) {
      evt.target.setPointerCapture(evt.pointerId);
    } else {
      document.addEventListener('mousemove', handleGestureMove, true);
      document.addEventListener('mouseup', handleGestureEnd, true);
    }

    initialTouchPos = getGesturePointFromEvent(evt);
  };


  if (bodyRef.current) {
    if (window.PointerEvent) {
      bodyRef.current.addEventListener('pointerdown', handleGestureStart, true);
      bodyRef.current.addEventListener('pointermove', handleGestureMove, true);
      bodyRef.current.addEventListener('pointerup', handleGestureEnd, true);
      bodyRef.current.addEventListener('pointercancel', handleGestureEnd, true);
    } else {
      bodyRef.current.addEventListener('touchstart', handleGestureStart, true);
      bodyRef.current.addEventListener('touchmove', handleGestureMove, true);
      bodyRef.current.addEventListener('touchend', handleGestureEnd, true);
      bodyRef.current.addEventListener('touchcancel', handleGestureEnd, true);
    }
    bodyRef.current.addEventListener('mousedown', handleGestureStart, true);
  }
};
