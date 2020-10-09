/**
 * 防抖
 * */
function debounceThrottle(fn, dueTimeMs) {
  let timer = null;

  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    const ctx = this;
    timer = setTimeout(() => {
      fn(args).apply(ctx, args);
    }, dueTimeMs);
  };
}
/**
 * 节流
 * 时间戳版
 * */
function throttle(fn, durationMs) {
  let lastTime = 0;
  return function(...args) {
    const nowTime = new Date().getTime();
    if (!lastTime || nowTime - lastTime >= durationMs) {
      lastTime = nowTime;
      fn.apply(this, args);
    }
  }
}
/**
 * 节流
 * 定时器版
 * */
function throttleTimer(fn, durationMs) {
  let timer = null;
  return function(...args) {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      timer = null;
    }, durationMs);
    fn.apply(this, args);
  };
}

