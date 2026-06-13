/* ============================================================
   main.js — shared behaviour
   ============================================================ */
(function () {
  "use strict";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- year ---------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- theme toggle ---------- */
  var themeBtn = document.getElementById("themeBtn");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var cur = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
      var next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- mobile nav ---------- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* ---------- scroll reveal ---------- */
  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length) {
    if (reduceMotion || !("IntersectionObserver" in window)) {
      reveals.forEach(function (el) { el.classList.add("in"); });
    } else {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
      reveals.forEach(function (el) { io.observe(el); });
    }
  }

  /* ============================================================
     FORECAST PLOT
     A solar-style production signal: bell-shaped daily cycles.
     "actual" = noisy measured line, "forecast" = smooth prediction.
     ============================================================ */
  var svg = document.getElementById("forecast-svg");
  if (!svg) return;

  var DAYS = 5, SAMPLES_PER_DAY = 56, PAD_TOP = 0.12, PAD_BOTTOM = 0.16;

  // deterministic pseudo-noise so it looks organic but stable
  function noise(i) {
    var x = Math.sin(i * 12.9898) * 43758.5453;
    return (x - Math.floor(x)) - 0.5;
  }
  // per-day peak amplitude (weather variation between days)
  var dayAmp = [0.96, 0.72, 1.0, 0.84, 0.9];

  function production(t) {
    // t in [0, DAYS]; daily phase
    var day = Math.min(DAYS - 1, Math.floor(t));
    var phase = (t - Math.floor(t)); // 0..1 within a day
    var s = Math.sin(Math.PI * phase);           // 0 at night, 1 midday
    var bell = s > 0 ? Math.pow(s, 1.5) : 0;
    return bell * dayAmp[day];
  }

  function buildPaths(w, h) {
    var plotTop = h * PAD_TOP, plotBottom = h * (1 - PAD_BOTTOM);
    var range = plotBottom - plotTop;
    var n = DAYS * SAMPLES_PER_DAY;
    var fPts = [], aPts = [];
    for (var i = 0; i <= n; i++) {
      var t = (i / n) * DAYS;
      var x = (i / n) * w;
      var base = production(t);
      var yF = plotBottom - base * range;
      // actual: forecast + small structured noise, only meaningful in daytime
      var amp = base > 0.02 ? base : 0.02;
      var na = (noise(i) + noise(i * 2.3) * 0.5) * 0.06 * (amp + 0.25);
      var yA = plotBottom - (base + na) * range;
      fPts.push([x, yF]);
      aPts.push([x, yA]);
    }
    return { f: smooth(fPts), a: poly(aPts), fPts: fPts, plotBottom: plotBottom };
  }

  // catmull-rom -> bezier for a smooth forecast line
  function smooth(p) {
    if (p.length < 2) return "";
    var d = "M" + p[0][0].toFixed(1) + "," + p[0][1].toFixed(1);
    for (var i = 0; i < p.length - 1; i++) {
      var p0 = p[i === 0 ? 0 : i - 1], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2 < p.length ? i + 2 : p.length - 1];
      var c1x = p1[0] + (p2[0] - p0[0]) / 6, c1y = p1[1] + (p2[1] - p0[1]) / 6;
      var c2x = p2[0] - (p3[0] - p1[0]) / 6, c2y = p2[1] - (p3[1] - p1[1]) / 6;
      d += "C" + c1x.toFixed(1) + "," + c1y.toFixed(1) + " " + c2x.toFixed(1) + "," + c2y.toFixed(1) + " " + p2[0].toFixed(1) + "," + p2[1].toFixed(1);
    }
    return d;
  }
  function poly(p) {
    return p.map(function (pt, i) { return (i ? "L" : "M") + pt[0].toFixed(1) + "," + pt[1].toFixed(1); }).join("");
  }

  function render() {
    var rect = svg.getBoundingClientRect();
    var w = Math.max(320, rect.width), h = rect.height || 240;
    svg.setAttribute("viewBox", "0 0 " + w + " " + h);
    var P = buildPaths(w, h);

    // vertical day separators
    var grid = "";
    for (var dgrid = 1; dgrid < DAYS; dgrid++) {
      var gx = (dgrid / DAYS) * w;
      grid += '<line class="grid-line" x1="' + gx + '" y1="0" x2="' + gx + '" y2="' + h + '" stroke-dasharray="2 5"/>';
    }
    // area fill under forecast
    var area = P.f + "L" + w + "," + P.plotBottom + "L0," + P.plotBottom + "Z";

    svg.innerHTML =
      '<defs>' +
        '<linearGradient id="fillGrad" x1="0" y1="0" x2="0" y2="1">' +
          '<stop class="s0" offset="0%"/>' +
          '<stop class="s1" offset="100%"/>' +
        '</linearGradient>' +
      '</defs>' +
      grid +
      '<path class="f-area" d="' + area + '"/>' +
      '<path class="a-line" d="' + P.a + '" fill="none" stroke-linejoin="round"/>' +
      '<path id="fline" class="f-line" d="' + P.f + '" fill="none" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<circle id="fdot" class="f-dot" r="4.5"/>';

    var fline = svg.querySelector("#fline");
    var fdot = svg.querySelector("#fdot");
    var len = fline.getTotalLength();

    // place leading dot at the end of the forecast
    var endPt = fline.getPointAtLength(len);
    fdot.setAttribute("cx", endPt.x); fdot.setAttribute("cy", endPt.y);

    if (reduceMotion) return;
    // draw-on animation
    fline.style.strokeDasharray = len;
    fline.style.strokeDashoffset = len;
    fdot.style.opacity = "0";
    requestAnimationFrame(function () {
      fline.style.transition = "stroke-dashoffset 1.8s cubic-bezier(.4,0,.1,1)";
      fline.style.strokeDashoffset = "0";
      setTimeout(function () {
        fdot.style.transition = "opacity .4s ease";
        fdot.style.opacity = "1";
      }, 1500);
    });
  }

  render();
  var rt;
  window.addEventListener("resize", function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      // re-render without the intro animation on resize
      var prev = reduceMotion; reduceMotion = true; render(); reduceMotion = prev;
    }, 180);
  });
})();
