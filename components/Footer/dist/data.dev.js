"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.links = exports.socialsMedia = void 0;

var _facebook = _interopRequireDefault(require("../../images/logos/facebook.png"));

var _instagram = _interopRequireDefault(require("../../images/logos/instagram.png"));

var _linkedin = _interopRequireDefault(require("../../images/logos/linkedin.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var socialsMedia = [{
  social: "Facebook",
  logo: _facebook["default"],
  redirect: "https://www.facebook.com/ieee.ghrietn/"
}, {
  social: "Instagram",
  logo: _instagram["default"],
  redirect: "https://www.instagram.com/ieee.ghrietn/"
}, {
  social: "Linkedin",
  logo: _linkedin["default"],
  redirect: "https://www.linkedin.com/showcase/ieee-ghrietn-sb"
}];
exports.socialsMedia = socialsMedia;
var links = [{
  linkName: "Home",
  content: [{
    name: "Registrations",
    redirect: "#home"
  }]
}, {
  linkName: "About",
  content: [{
    name: "About event",
    redirect: "#about-event"
  }, {
    name: "About us",
    redirect: "#about-us"
  }]
}, {
  linkName: "Partners",
  content: [{
    name: "Community Partners",
    redirect: "#our-partners"
  }, {
    name: "Sponsors",
    redirect: "#our-sponsors"
  }]
}, {
  linkName: "Speakers",
  content: [{
    name: "Speakers",
    redirect: "#speakers"
  }, {
    name: "Agenda",
    redirect: "#agenda"
  }]
}];
exports.links = links;