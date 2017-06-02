/* global SITE_ROOT */

module.exports = {
  routes: {
    "/": { page: "/", title: "Home", nav: true },
    "/setup": { page: "/setup", title: "Bot Setup", nav: true },
    "/deploying": { page: "/deploying", title: "Deploying", nav: true },
    "/new-plugin": { page: "/new-plugin", title: "Scripting New Plugins", nav: true },
    "/new-adapter": { page: "/new-adapter", title: "Creating New Service Adapters", nav: true },
  },
  siteRoot: '/exobot-docs',
};
