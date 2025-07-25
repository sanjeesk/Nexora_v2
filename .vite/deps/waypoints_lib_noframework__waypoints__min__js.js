// node_modules/waypoints/lib/noframework.waypoints.min.js
!function() {
  "use strict";
  function t(n) {
    if (!n) throw new Error("No options passed to Waypoint constructor");
    if (!n.element) throw new Error("No element option passed to Waypoint constructor");
    if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
    this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, n), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1;
  }
  var e = 0, i = {};
  t.prototype.queueTrigger = function(t2) {
    this.group.queueTrigger(this, t2);
  }, t.prototype.trigger = function(t2) {
    this.enabled && this.callback && this.callback.apply(this, t2);
  }, t.prototype.destroy = function() {
    this.context.remove(this), this.group.remove(this), delete i[this.key];
  }, t.prototype.disable = function() {
    return this.enabled = false, this;
  }, t.prototype.enable = function() {
    return this.context.refresh(), this.enabled = true, this;
  }, t.prototype.next = function() {
    return this.group.next(this);
  }, t.prototype.previous = function() {
    return this.group.previous(this);
  }, t.invokeAll = function(t2) {
    var e2 = [];
    for (var n in i) e2.push(i[n]);
    for (var o = 0, r = e2.length; r > o; o++) e2[o][t2]();
  }, t.destroyAll = function() {
    t.invokeAll("destroy");
  }, t.disableAll = function() {
    t.invokeAll("disable");
  }, t.enableAll = function() {
    t.Context.refreshAll();
    for (var e2 in i) i[e2].enabled = true;
    return this;
  }, t.refreshAll = function() {
    t.Context.refreshAll();
  }, t.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight;
  }, t.viewportWidth = function() {
    return document.documentElement.clientWidth;
  }, t.adapters = [], t.defaults = { context: window, continuous: true, enabled: true, group: "default", horizontal: false, offset: 0 }, t.offsetAliases = { "bottom-in-view": function() {
    return this.context.innerHeight() - this.adapter.outerHeight();
  }, "right-in-view": function() {
    return this.context.innerWidth() - this.adapter.outerWidth();
  } }, window.Waypoint = t;
}(), function() {
  "use strict";
  function t(t2) {
    window.setTimeout(t2, 1e3 / 60);
  }
  function e(t2) {
    this.element = t2, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t2), this.key = "waypoint-context-" + i, this.didScroll = false, this.didResize = false, this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }, this.waypoints = { vertical: {}, horizontal: {} }, t2.waypointContextKey = this.key, n[t2.waypointContextKey] = this, i += 1, o.windowContext || (o.windowContext = true, o.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
  }
  var i = 0, n = {}, o = window.Waypoint, r = window.onload;
  e.prototype.add = function(t2) {
    var e2 = t2.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[e2][t2.key] = t2, this.refresh();
  }, e.prototype.checkEmpty = function() {
    var t2 = this.Adapter.isEmptyObject(this.waypoints.horizontal), e2 = this.Adapter.isEmptyObject(this.waypoints.vertical), i2 = this.element == this.element.window;
    t2 && e2 && !i2 && (this.adapter.off(".waypoints"), delete n[this.key]);
  }, e.prototype.createThrottledResizeHandler = function() {
    function t2() {
      e2.handleResize(), e2.didResize = false;
    }
    var e2 = this;
    this.adapter.on("resize.waypoints", function() {
      e2.didResize || (e2.didResize = true, o.requestAnimationFrame(t2));
    });
  }, e.prototype.createThrottledScrollHandler = function() {
    function t2() {
      e2.handleScroll(), e2.didScroll = false;
    }
    var e2 = this;
    this.adapter.on("scroll.waypoints", function() {
      (!e2.didScroll || o.isTouch) && (e2.didScroll = true, o.requestAnimationFrame(t2));
    });
  }, e.prototype.handleResize = function() {
    o.Context.refreshAll();
  }, e.prototype.handleScroll = function() {
    var t2 = {}, e2 = { horizontal: { newScroll: this.adapter.scrollLeft(), oldScroll: this.oldScroll.x, forward: "right", backward: "left" }, vertical: { newScroll: this.adapter.scrollTop(), oldScroll: this.oldScroll.y, forward: "down", backward: "up" } };
    for (var i2 in e2) {
      var n2 = e2[i2], o2 = n2.newScroll > n2.oldScroll, r2 = o2 ? n2.forward : n2.backward;
      for (var s in this.waypoints[i2]) {
        var l = this.waypoints[i2][s];
        if (null !== l.triggerPoint) {
          var a = n2.oldScroll < l.triggerPoint, h = n2.newScroll >= l.triggerPoint, p = a && h, u = !a && !h;
          (p || u) && (l.queueTrigger(r2), t2[l.group.id] = l.group);
        }
      }
    }
    for (var d in t2) t2[d].flushTriggers();
    this.oldScroll = { x: e2.horizontal.newScroll, y: e2.vertical.newScroll };
  }, e.prototype.innerHeight = function() {
    return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight();
  }, e.prototype.remove = function(t2) {
    delete this.waypoints[t2.axis][t2.key], this.checkEmpty();
  }, e.prototype.innerWidth = function() {
    return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth();
  }, e.prototype.destroy = function() {
    var t2 = [];
    for (var e2 in this.waypoints) for (var i2 in this.waypoints[e2]) t2.push(this.waypoints[e2][i2]);
    for (var n2 = 0, o2 = t2.length; o2 > n2; n2++) t2[n2].destroy();
  }, e.prototype.refresh = function() {
    var t2, e2 = this.element == this.element.window, i2 = e2 ? void 0 : this.adapter.offset(), n2 = {};
    this.handleScroll(), t2 = { horizontal: { contextOffset: e2 ? 0 : i2.left, contextScroll: e2 ? 0 : this.oldScroll.x, contextDimension: this.innerWidth(), oldScroll: this.oldScroll.x, forward: "right", backward: "left", offsetProp: "left" }, vertical: { contextOffset: e2 ? 0 : i2.top, contextScroll: e2 ? 0 : this.oldScroll.y, contextDimension: this.innerHeight(), oldScroll: this.oldScroll.y, forward: "down", backward: "up", offsetProp: "top" } };
    for (var r2 in t2) {
      var s = t2[r2];
      for (var l in this.waypoints[r2]) {
        var a, h, p, u, d, f = this.waypoints[r2][l], c = f.options.offset, w = f.triggerPoint, y = 0, g = null == w;
        f.element !== f.element.window && (y = f.adapter.offset()[s.offsetProp]), "function" == typeof c ? c = c.apply(f) : "string" == typeof c && (c = parseFloat(c), f.options.offset.indexOf("%") > -1 && (c = Math.ceil(s.contextDimension * c / 100))), a = s.contextScroll - s.contextOffset, f.triggerPoint = Math.floor(y + a - c), h = w < s.oldScroll, p = f.triggerPoint >= s.oldScroll, u = h && p, d = !h && !p, !g && u ? (f.queueTrigger(s.backward), n2[f.group.id] = f.group) : !g && d ? (f.queueTrigger(s.forward), n2[f.group.id] = f.group) : g && s.oldScroll >= f.triggerPoint && (f.queueTrigger(s.forward), n2[f.group.id] = f.group);
      }
    }
    return o.requestAnimationFrame(function() {
      for (var t3 in n2) n2[t3].flushTriggers();
    }), this;
  }, e.findOrCreateByElement = function(t2) {
    return e.findByElement(t2) || new e(t2);
  }, e.refreshAll = function() {
    for (var t2 in n) n[t2].refresh();
  }, e.findByElement = function(t2) {
    return n[t2.waypointContextKey];
  }, window.onload = function() {
    r && r(), e.refreshAll();
  }, o.requestAnimationFrame = function(e2) {
    var i2 = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t;
    i2.call(window, e2);
  }, o.Context = e;
}(), function() {
  "use strict";
  function t(t2, e2) {
    return t2.triggerPoint - e2.triggerPoint;
  }
  function e(t2, e2) {
    return e2.triggerPoint - t2.triggerPoint;
  }
  function i(t2) {
    this.name = t2.name, this.axis = t2.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this;
  }
  var n = { vertical: {}, horizontal: {} }, o = window.Waypoint;
  i.prototype.add = function(t2) {
    this.waypoints.push(t2);
  }, i.prototype.clearTriggerQueues = function() {
    this.triggerQueues = { up: [], down: [], left: [], right: [] };
  }, i.prototype.flushTriggers = function() {
    for (var i2 in this.triggerQueues) {
      var n2 = this.triggerQueues[i2], o2 = "up" === i2 || "left" === i2;
      n2.sort(o2 ? e : t);
      for (var r = 0, s = n2.length; s > r; r += 1) {
        var l = n2[r];
        (l.options.continuous || r === n2.length - 1) && l.trigger([i2]);
      }
    }
    this.clearTriggerQueues();
  }, i.prototype.next = function(e2) {
    this.waypoints.sort(t);
    var i2 = o.Adapter.inArray(e2, this.waypoints), n2 = i2 === this.waypoints.length - 1;
    return n2 ? null : this.waypoints[i2 + 1];
  }, i.prototype.previous = function(e2) {
    this.waypoints.sort(t);
    var i2 = o.Adapter.inArray(e2, this.waypoints);
    return i2 ? this.waypoints[i2 - 1] : null;
  }, i.prototype.queueTrigger = function(t2, e2) {
    this.triggerQueues[e2].push(t2);
  }, i.prototype.remove = function(t2) {
    var e2 = o.Adapter.inArray(t2, this.waypoints);
    e2 > -1 && this.waypoints.splice(e2, 1);
  }, i.prototype.first = function() {
    return this.waypoints[0];
  }, i.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1];
  }, i.findOrCreate = function(t2) {
    return n[t2.axis][t2.name] || new i(t2);
  }, o.Group = i;
}(), function() {
  "use strict";
  function t(t2) {
    return t2 === t2.window;
  }
  function e(e2) {
    return t(e2) ? e2 : e2.defaultView;
  }
  function i(t2) {
    this.element = t2, this.handlers = {};
  }
  var n = window.Waypoint;
  i.prototype.innerHeight = function() {
    var e2 = t(this.element);
    return e2 ? this.element.innerHeight : this.element.clientHeight;
  }, i.prototype.innerWidth = function() {
    var e2 = t(this.element);
    return e2 ? this.element.innerWidth : this.element.clientWidth;
  }, i.prototype.off = function(t2, e2) {
    function i2(t3, e3, i3) {
      for (var n3 = 0, o2 = e3.length - 1; o2 > n3; n3++) {
        var r2 = e3[n3];
        i3 && i3 !== r2 || t3.removeEventListener(r2);
      }
    }
    var n2 = t2.split("."), o = n2[0], r = n2[1], s = this.element;
    if (r && this.handlers[r] && o) i2(s, this.handlers[r][o], e2), this.handlers[r][o] = [];
    else if (o) for (var l in this.handlers) i2(s, this.handlers[l][o] || [], e2), this.handlers[l][o] = [];
    else if (r && this.handlers[r]) {
      for (var a in this.handlers[r]) i2(s, this.handlers[r][a], e2);
      this.handlers[r] = {};
    }
  }, i.prototype.offset = function() {
    if (!this.element.ownerDocument) return null;
    var t2 = this.element.ownerDocument.documentElement, i2 = e(this.element.ownerDocument), n2 = { top: 0, left: 0 };
    return this.element.getBoundingClientRect && (n2 = this.element.getBoundingClientRect()), { top: n2.top + i2.pageYOffset - t2.clientTop, left: n2.left + i2.pageXOffset - t2.clientLeft };
  }, i.prototype.on = function(t2, e2) {
    var i2 = t2.split("."), n2 = i2[0], o = i2[1] || "__default", r = this.handlers[o] = this.handlers[o] || {}, s = r[n2] = r[n2] || [];
    s.push(e2), this.element.addEventListener(n2, e2);
  }, i.prototype.outerHeight = function(e2) {
    var i2, n2 = this.innerHeight();
    return e2 && !t(this.element) && (i2 = window.getComputedStyle(this.element), n2 += parseInt(i2.marginTop, 10), n2 += parseInt(i2.marginBottom, 10)), n2;
  }, i.prototype.outerWidth = function(e2) {
    var i2, n2 = this.innerWidth();
    return e2 && !t(this.element) && (i2 = window.getComputedStyle(this.element), n2 += parseInt(i2.marginLeft, 10), n2 += parseInt(i2.marginRight, 10)), n2;
  }, i.prototype.scrollLeft = function() {
    var t2 = e(this.element);
    return t2 ? t2.pageXOffset : this.element.scrollLeft;
  }, i.prototype.scrollTop = function() {
    var t2 = e(this.element);
    return t2 ? t2.pageYOffset : this.element.scrollTop;
  }, i.extend = function() {
    function t2(t3, e3) {
      if ("object" == typeof t3 && "object" == typeof e3) for (var i3 in e3) e3.hasOwnProperty(i3) && (t3[i3] = e3[i3]);
      return t3;
    }
    for (var e2 = Array.prototype.slice.call(arguments), i2 = 1, n2 = e2.length; n2 > i2; i2++) t2(e2[0], e2[i2]);
    return e2[0];
  }, i.inArray = function(t2, e2, i2) {
    return null == e2 ? -1 : e2.indexOf(t2, i2);
  }, i.isEmptyObject = function(t2) {
    for (var e2 in t2) return false;
    return true;
  }, n.adapters.push({ name: "noframework", Adapter: i }), n.Adapter = i;
}();
/*! Bundled license information:

waypoints/lib/noframework.waypoints.min.js:
  (*!
  Waypoints - 4.0.1
  Copyright © 2011-2016 Caleb Troughton
  Licensed under the MIT license.
  https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
  *)
*/
//# sourceMappingURL=waypoints_lib_noframework__waypoints__min__js.js.map
