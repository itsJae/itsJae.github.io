// ripple.js (shim)
// Small no-op script to satisfy build when ripple functionality isn't required.
(function () {
  // Intentionally empty — placeholder for ripple effect script.
  if (typeof window !== 'undefined') {
    window.__ripple_shim_installed = true;
  }
})();
