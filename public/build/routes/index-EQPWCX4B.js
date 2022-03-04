import {
  BaseImage_default,
  Box_default,
  Title,
  animated,
  links,
  useTransition
} from "/build/_shared/chunk-4ZJBYXBW.js";
import {
  require_react_dom
} from "/build/_shared/chunk-ZSWAXXEO.js";
import {
  require_prop_types
} from "/build/_shared/chunk-IUIYLM37.js";
import {
  Link,
  React,
  __commonJS,
  __toModule,
  init_react,
  require_react,
  useLoaderData
} from "/build/_shared/chunk-YEC535ZA.js";

// node_modules/frappe-gantt/dist/frappe-gantt.js
var require_frappe_gantt = __commonJS({
  "node_modules/frappe-gantt/dist/frappe-gantt.js"() {
    init_react();
    var Gantt2 = function() {
      "use strict";
      const YEAR = "year";
      const MONTH = "month";
      const DAY = "day";
      const HOUR = "hour";
      const MINUTE = "minute";
      const SECOND = "second";
      const MILLISECOND = "millisecond";
      const month_names = {
        en: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        es: [
          "Enero",
          "Febrero",
          "Marzo",
          "Abril",
          "Mayo",
          "Junio",
          "Julio",
          "Agosto",
          "Septiembre",
          "Octubre",
          "Noviembre",
          "Diciembre"
        ],
        ru: [
          "\u042F\u043D\u0432\u0430\u0440\u044C",
          "\u0424\u0435\u0432\u0440\u0430\u043B\u044C",
          "\u041C\u0430\u0440\u0442",
          "\u0410\u043F\u0440\u0435\u043B\u044C",
          "\u041C\u0430\u0439",
          "\u0418\u044E\u043D\u044C",
          "\u0418\u044E\u043B\u044C",
          "\u0410\u0432\u0433\u0443\u0441\u0442",
          "\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C",
          "\u041E\u043A\u0442\u044F\u0431\u0440\u044C",
          "\u041D\u043E\u044F\u0431\u0440\u044C",
          "\u0414\u0435\u043A\u0430\u0431\u0440\u044C"
        ],
        ptBr: [
          "Janeiro",
          "Fevereiro",
          "Mar\xE7o",
          "Abril",
          "Maio",
          "Junho",
          "Julho",
          "Agosto",
          "Setembro",
          "Outubro",
          "Novembro",
          "Dezembro"
        ],
        fr: [
          "Janvier",
          "F\xE9vrier",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Ao\xFBt",
          "Septembre",
          "Octobre",
          "Novembre",
          "D\xE9cembre"
        ],
        tr: [
          "Ocak",
          "\u015Eubat",
          "Mart",
          "Nisan",
          "May\u0131s",
          "Haziran",
          "Temmuz",
          "A\u011Fustos",
          "Eyl\xFCl",
          "Ekim",
          "Kas\u0131m",
          "Aral\u0131k"
        ],
        zh: [
          "\u4E00\u6708",
          "\u4E8C\u6708",
          "\u4E09\u6708",
          "\u56DB\u6708",
          "\u4E94\u6708",
          "\u516D\u6708",
          "\u4E03\u6708",
          "\u516B\u6708",
          "\u4E5D\u6708",
          "\u5341\u6708",
          "\u5341\u4E00\u6708",
          "\u5341\u4E8C\u6708"
        ]
      };
      var date_utils = {
        parse(date, date_separator = "-", time_separator = /[.:]/) {
          if (date instanceof Date) {
            return date;
          }
          if (typeof date === "string") {
            let date_parts, time_parts;
            const parts = date.split(" ");
            date_parts = parts[0].split(date_separator).map((val) => parseInt(val, 10));
            time_parts = parts[1] && parts[1].split(time_separator);
            date_parts[1] = date_parts[1] - 1;
            let vals = date_parts;
            if (time_parts && time_parts.length) {
              if (time_parts.length == 4) {
                time_parts[3] = "0." + time_parts[3];
                time_parts[3] = parseFloat(time_parts[3]) * 1e3;
              }
              vals = vals.concat(time_parts);
            }
            return new Date(...vals);
          }
        },
        to_string(date, with_time = false) {
          if (!(date instanceof Date)) {
            throw new TypeError("Invalid argument type");
          }
          const vals = this.get_date_values(date).map((val, i) => {
            if (i === 1) {
              val = val + 1;
            }
            if (i === 6) {
              return padStart(val + "", 3, "0");
            }
            return padStart(val + "", 2, "0");
          });
          const date_string = `${vals[0]}-${vals[1]}-${vals[2]}`;
          const time_string = `${vals[3]}:${vals[4]}:${vals[5]}.${vals[6]}`;
          return date_string + (with_time ? " " + time_string : "");
        },
        format(date, format_string = "YYYY-MM-DD HH:mm:ss.SSS", lang = "en") {
          const values = this.get_date_values(date).map((d) => padStart(d, 2, 0));
          const format_map = {
            YYYY: values[0],
            MM: padStart(+values[1] + 1, 2, 0),
            DD: values[2],
            HH: values[3],
            mm: values[4],
            ss: values[5],
            SSS: values[6],
            D: values[2],
            MMMM: month_names[lang][+values[1]],
            MMM: month_names[lang][+values[1]]
          };
          let str = format_string;
          const formatted_values = [];
          Object.keys(format_map).sort((a, b) => b.length - a.length).forEach((key) => {
            if (str.includes(key)) {
              str = str.replace(key, `$${formatted_values.length}`);
              formatted_values.push(format_map[key]);
            }
          });
          formatted_values.forEach((value, i) => {
            str = str.replace(`$${i}`, value);
          });
          return str;
        },
        diff(date_a, date_b, scale = DAY) {
          let milliseconds, seconds, hours, minutes, days, months, years;
          milliseconds = date_a - date_b;
          seconds = milliseconds / 1e3;
          minutes = seconds / 60;
          hours = minutes / 60;
          days = hours / 24;
          months = days / 30;
          years = months / 12;
          if (!scale.endsWith("s")) {
            scale += "s";
          }
          return Math.floor({
            milliseconds,
            seconds,
            minutes,
            hours,
            days,
            months,
            years
          }[scale]);
        },
        today() {
          const vals = this.get_date_values(new Date()).slice(0, 3);
          return new Date(...vals);
        },
        now() {
          return new Date();
        },
        add(date, qty, scale) {
          qty = parseInt(qty, 10);
          const vals = [
            date.getFullYear() + (scale === YEAR ? qty : 0),
            date.getMonth() + (scale === MONTH ? qty : 0),
            date.getDate() + (scale === DAY ? qty : 0),
            date.getHours() + (scale === HOUR ? qty : 0),
            date.getMinutes() + (scale === MINUTE ? qty : 0),
            date.getSeconds() + (scale === SECOND ? qty : 0),
            date.getMilliseconds() + (scale === MILLISECOND ? qty : 0)
          ];
          return new Date(...vals);
        },
        start_of(date, scale) {
          const scores = {
            [YEAR]: 6,
            [MONTH]: 5,
            [DAY]: 4,
            [HOUR]: 3,
            [MINUTE]: 2,
            [SECOND]: 1,
            [MILLISECOND]: 0
          };
          function should_reset(_scale) {
            const max_score = scores[scale];
            return scores[_scale] <= max_score;
          }
          const vals = [
            date.getFullYear(),
            should_reset(YEAR) ? 0 : date.getMonth(),
            should_reset(MONTH) ? 1 : date.getDate(),
            should_reset(DAY) ? 0 : date.getHours(),
            should_reset(HOUR) ? 0 : date.getMinutes(),
            should_reset(MINUTE) ? 0 : date.getSeconds(),
            should_reset(SECOND) ? 0 : date.getMilliseconds()
          ];
          return new Date(...vals);
        },
        clone(date) {
          return new Date(...this.get_date_values(date));
        },
        get_date_values(date) {
          return [
            date.getFullYear(),
            date.getMonth(),
            date.getDate(),
            date.getHours(),
            date.getMinutes(),
            date.getSeconds(),
            date.getMilliseconds()
          ];
        },
        get_days_in_month(date) {
          const no_of_days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          const month = date.getMonth();
          if (month !== 1) {
            return no_of_days[month];
          }
          const year = date.getFullYear();
          if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            return 29;
          }
          return 28;
        }
      };
      function padStart(str, targetLength, padString) {
        str = str + "";
        targetLength = targetLength >> 0;
        padString = String(typeof padString !== "undefined" ? padString : " ");
        if (str.length > targetLength) {
          return String(str);
        } else {
          targetLength = targetLength - str.length;
          if (targetLength > padString.length) {
            padString += padString.repeat(targetLength / padString.length);
          }
          return padString.slice(0, targetLength) + String(str);
        }
      }
      function $(expr, con) {
        return typeof expr === "string" ? (con || document).querySelector(expr) : expr || null;
      }
      function createSVG(tag, attrs) {
        const elem = document.createElementNS("http://www.w3.org/2000/svg", tag);
        for (let attr in attrs) {
          if (attr === "append_to") {
            const parent = attrs.append_to;
            parent.appendChild(elem);
          } else if (attr === "innerHTML") {
            elem.innerHTML = attrs.innerHTML;
          } else {
            elem.setAttribute(attr, attrs[attr]);
          }
        }
        return elem;
      }
      function animateSVG(svgElement, attr, from, to) {
        const animatedSvgElement = getAnimationElement(svgElement, attr, from, to);
        if (animatedSvgElement === svgElement) {
          const event = document.createEvent("HTMLEvents");
          event.initEvent("click", true, true);
          event.eventName = "click";
          animatedSvgElement.dispatchEvent(event);
        }
      }
      function getAnimationElement(svgElement, attr, from, to, dur = "0.4s", begin = "0.1s") {
        const animEl = svgElement.querySelector("animate");
        if (animEl) {
          $.attr(animEl, {
            attributeName: attr,
            from,
            to,
            dur,
            begin: "click + " + begin
          });
          return svgElement;
        }
        const animateElement = createSVG("animate", {
          attributeName: attr,
          from,
          to,
          dur,
          begin,
          calcMode: "spline",
          values: from + ";" + to,
          keyTimes: "0; 1",
          keySplines: cubic_bezier("ease-out")
        });
        svgElement.appendChild(animateElement);
        return svgElement;
      }
      function cubic_bezier(name) {
        return {
          ease: ".25 .1 .25 1",
          linear: "0 0 1 1",
          "ease-in": ".42 0 1 1",
          "ease-out": "0 0 .58 1",
          "ease-in-out": ".42 0 .58 1"
        }[name];
      }
      $.on = (element, event, selector, callback) => {
        if (!callback) {
          callback = selector;
          $.bind(element, event, callback);
        } else {
          $.delegate(element, event, selector, callback);
        }
      };
      $.off = (element, event, handler) => {
        element.removeEventListener(event, handler);
      };
      $.bind = (element, event, callback) => {
        event.split(/\s+/).forEach(function(event2) {
          element.addEventListener(event2, callback);
        });
      };
      $.delegate = (element, event, selector, callback) => {
        element.addEventListener(event, function(e) {
          const delegatedTarget = e.target.closest(selector);
          if (delegatedTarget) {
            e.delegatedTarget = delegatedTarget;
            callback.call(this, e, delegatedTarget);
          }
        });
      };
      $.closest = (selector, element) => {
        if (!element)
          return null;
        if (element.matches(selector)) {
          return element;
        }
        return $.closest(selector, element.parentNode);
      };
      $.attr = (element, attr, value) => {
        if (!value && typeof attr === "string") {
          return element.getAttribute(attr);
        }
        if (typeof attr === "object") {
          for (let key in attr) {
            $.attr(element, key, attr[key]);
          }
          return;
        }
        element.setAttribute(attr, value);
      };
      class Bar {
        constructor(gantt, task) {
          this.set_defaults(gantt, task);
          this.prepare();
          this.draw();
          this.bind();
        }
        set_defaults(gantt, task) {
          this.action_completed = false;
          this.gantt = gantt;
          this.task = task;
        }
        prepare() {
          this.prepare_values();
          this.prepare_helpers();
        }
        prepare_values() {
          this.invalid = this.task.invalid;
          this.height = this.gantt.options.bar_height;
          this.x = this.compute_x();
          this.y = this.compute_y();
          this.corner_radius = this.gantt.options.bar_corner_radius;
          this.duration = date_utils.diff(this.task._end, this.task._start, "hour") / this.gantt.options.step;
          this.width = this.gantt.options.column_width * this.duration;
          this.progress_width = this.gantt.options.column_width * this.duration * (this.task.progress / 100) || 0;
          this.group = createSVG("g", {
            class: "bar-wrapper " + (this.task.custom_class || ""),
            "data-id": this.task.id
          });
          this.bar_group = createSVG("g", {
            class: "bar-group",
            append_to: this.group
          });
          this.handle_group = createSVG("g", {
            class: "handle-group",
            append_to: this.group
          });
        }
        prepare_helpers() {
          SVGElement.prototype.getX = function() {
            return +this.getAttribute("x");
          };
          SVGElement.prototype.getY = function() {
            return +this.getAttribute("y");
          };
          SVGElement.prototype.getWidth = function() {
            return +this.getAttribute("width");
          };
          SVGElement.prototype.getHeight = function() {
            return +this.getAttribute("height");
          };
          SVGElement.prototype.getEndX = function() {
            return this.getX() + this.getWidth();
          };
        }
        draw() {
          this.draw_bar();
          this.draw_progress_bar();
          this.draw_label();
          this.draw_resize_handles();
        }
        draw_bar() {
          this.$bar = createSVG("rect", {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            rx: this.corner_radius,
            ry: this.corner_radius,
            class: "bar",
            append_to: this.bar_group
          });
          animateSVG(this.$bar, "width", 0, this.width);
          if (this.invalid) {
            this.$bar.classList.add("bar-invalid");
          }
        }
        draw_progress_bar() {
          if (this.invalid)
            return;
          this.$bar_progress = createSVG("rect", {
            x: this.x,
            y: this.y,
            width: this.progress_width,
            height: this.height,
            rx: this.corner_radius,
            ry: this.corner_radius,
            class: "bar-progress",
            append_to: this.bar_group
          });
          animateSVG(this.$bar_progress, "width", 0, this.progress_width);
        }
        draw_label() {
          createSVG("text", {
            x: this.x + this.width / 2,
            y: this.y + this.height / 2,
            innerHTML: this.task.name,
            class: "bar-label",
            append_to: this.bar_group
          });
          requestAnimationFrame(() => this.update_label_position());
        }
        draw_resize_handles() {
          if (this.invalid)
            return;
          const bar = this.$bar;
          const handle_width = 8;
          createSVG("rect", {
            x: bar.getX() + bar.getWidth() - 9,
            y: bar.getY() + 1,
            width: handle_width,
            height: this.height - 2,
            rx: this.corner_radius,
            ry: this.corner_radius,
            class: "handle right",
            append_to: this.handle_group
          });
          createSVG("rect", {
            x: bar.getX() + 1,
            y: bar.getY() + 1,
            width: handle_width,
            height: this.height - 2,
            rx: this.corner_radius,
            ry: this.corner_radius,
            class: "handle left",
            append_to: this.handle_group
          });
          if (this.task.progress && this.task.progress < 100) {
            this.$handle_progress = createSVG("polygon", {
              points: this.get_progress_polygon_points().join(","),
              class: "handle progress",
              append_to: this.handle_group
            });
          }
        }
        get_progress_polygon_points() {
          const bar_progress = this.$bar_progress;
          return [
            bar_progress.getEndX() - 5,
            bar_progress.getY() + bar_progress.getHeight(),
            bar_progress.getEndX() + 5,
            bar_progress.getY() + bar_progress.getHeight(),
            bar_progress.getEndX(),
            bar_progress.getY() + bar_progress.getHeight() - 8.66
          ];
        }
        bind() {
          if (this.invalid)
            return;
          this.setup_click_event();
        }
        setup_click_event() {
          $.on(this.group, "focus " + this.gantt.options.popup_trigger, (e) => {
            if (this.action_completed) {
              return;
            }
            this.show_popup();
            this.gantt.unselect_all();
            this.group.classList.add("active");
          });
          $.on(this.group, "dblclick", (e) => {
            if (this.action_completed) {
              return;
            }
            this.gantt.trigger_event("click", [this.task]);
          });
        }
        show_popup() {
          if (this.gantt.bar_being_dragged)
            return;
          const start_date = date_utils.format(this.task._start, "MMM D", this.gantt.options.language);
          const end_date = date_utils.format(date_utils.add(this.task._end, -1, "second"), "MMM D", this.gantt.options.language);
          const subtitle = start_date + " - " + end_date;
          this.gantt.show_popup({
            target_element: this.$bar,
            title: this.task.name,
            subtitle,
            task: this.task
          });
        }
        update_bar_position({ x = null, width = null }) {
          const bar = this.$bar;
          if (x) {
            const xs = this.task.dependencies.map((dep) => {
              return this.gantt.get_bar(dep).$bar.getX();
            });
            const valid_x = xs.reduce((prev, curr) => {
              return x >= curr;
            }, x);
            if (!valid_x) {
              width = null;
              return;
            }
            this.update_attr(bar, "x", x);
          }
          if (width && width >= this.gantt.options.column_width) {
            this.update_attr(bar, "width", width);
          }
          this.update_label_position();
          this.update_handle_position();
          this.update_progressbar_position();
          this.update_arrow_position();
        }
        date_changed() {
          let changed = false;
          const { new_start_date, new_end_date } = this.compute_start_end_date();
          if (Number(this.task._start) !== Number(new_start_date)) {
            changed = true;
            this.task._start = new_start_date;
          }
          if (Number(this.task._end) !== Number(new_end_date)) {
            changed = true;
            this.task._end = new_end_date;
          }
          if (!changed)
            return;
          this.gantt.trigger_event("date_change", [
            this.task,
            new_start_date,
            date_utils.add(new_end_date, -1, "second")
          ]);
        }
        progress_changed() {
          const new_progress = this.compute_progress();
          this.task.progress = new_progress;
          this.gantt.trigger_event("progress_change", [this.task, new_progress]);
        }
        set_action_completed() {
          this.action_completed = true;
          setTimeout(() => this.action_completed = false, 1e3);
        }
        compute_start_end_date() {
          const bar = this.$bar;
          const x_in_units = bar.getX() / this.gantt.options.column_width;
          const new_start_date = date_utils.add(this.gantt.gantt_start, x_in_units * this.gantt.options.step, "hour");
          const width_in_units = bar.getWidth() / this.gantt.options.column_width;
          const new_end_date = date_utils.add(new_start_date, width_in_units * this.gantt.options.step, "hour");
          return { new_start_date, new_end_date };
        }
        compute_progress() {
          const progress = this.$bar_progress.getWidth() / this.$bar.getWidth() * 100;
          return parseInt(progress, 10);
        }
        compute_x() {
          const { step, column_width } = this.gantt.options;
          const task_start = this.task._start;
          const gantt_start = this.gantt.gantt_start;
          const diff = date_utils.diff(task_start, gantt_start, "hour");
          let x = diff / step * column_width;
          if (this.gantt.view_is("Month")) {
            const diff2 = date_utils.diff(task_start, gantt_start, "day");
            x = diff2 * column_width / 30;
          }
          return x;
        }
        compute_y() {
          return this.gantt.options.header_height + this.gantt.options.padding + this.task._index * (this.height + this.gantt.options.padding);
        }
        get_snap_position(dx) {
          let odx = dx, rem, position;
          if (this.gantt.view_is("Week")) {
            rem = dx % (this.gantt.options.column_width / 7);
            position = odx - rem + (rem < this.gantt.options.column_width / 14 ? 0 : this.gantt.options.column_width / 7);
          } else if (this.gantt.view_is("Month")) {
            rem = dx % (this.gantt.options.column_width / 30);
            position = odx - rem + (rem < this.gantt.options.column_width / 60 ? 0 : this.gantt.options.column_width / 30);
          } else {
            rem = dx % this.gantt.options.column_width;
            position = odx - rem + (rem < this.gantt.options.column_width / 2 ? 0 : this.gantt.options.column_width);
          }
          return position;
        }
        update_attr(element, attr, value) {
          value = +value;
          if (!isNaN(value)) {
            element.setAttribute(attr, value);
          }
          return element;
        }
        update_progressbar_position() {
          this.$bar_progress.setAttribute("x", this.$bar.getX());
          this.$bar_progress.setAttribute("width", this.$bar.getWidth() * (this.task.progress / 100));
        }
        update_label_position() {
          const bar = this.$bar, label = this.group.querySelector(".bar-label");
          if (label.getBBox().width > bar.getWidth()) {
            label.classList.add("big");
            label.setAttribute("x", bar.getX() + bar.getWidth() + 5);
          } else {
            label.classList.remove("big");
            label.setAttribute("x", bar.getX() + bar.getWidth() / 2);
          }
        }
        update_handle_position() {
          const bar = this.$bar;
          this.handle_group.querySelector(".handle.left").setAttribute("x", bar.getX() + 1);
          this.handle_group.querySelector(".handle.right").setAttribute("x", bar.getEndX() - 9);
          const handle = this.group.querySelector(".handle.progress");
          handle && handle.setAttribute("points", this.get_progress_polygon_points());
        }
        update_arrow_position() {
          this.arrows = this.arrows || [];
          for (let arrow of this.arrows) {
            arrow.update();
          }
        }
      }
      class Arrow {
        constructor(gantt, from_task, to_task) {
          this.gantt = gantt;
          this.from_task = from_task;
          this.to_task = to_task;
          this.calculate_path();
          this.draw();
        }
        calculate_path() {
          let start_x = this.from_task.$bar.getX() + this.from_task.$bar.getWidth() / 2;
          const condition = () => this.to_task.$bar.getX() < start_x + this.gantt.options.padding && start_x > this.from_task.$bar.getX() + this.gantt.options.padding;
          while (condition()) {
            start_x -= 10;
          }
          const start_y = this.gantt.options.header_height + this.gantt.options.bar_height + (this.gantt.options.padding + this.gantt.options.bar_height) * this.from_task.task._index + this.gantt.options.padding;
          const end_x = this.to_task.$bar.getX() - this.gantt.options.padding / 2;
          const end_y = this.gantt.options.header_height + this.gantt.options.bar_height / 2 + (this.gantt.options.padding + this.gantt.options.bar_height) * this.to_task.task._index + this.gantt.options.padding;
          const from_is_below_to = this.from_task.task._index > this.to_task.task._index;
          const curve = this.gantt.options.arrow_curve;
          const clockwise = from_is_below_to ? 1 : 0;
          const curve_y = from_is_below_to ? -curve : curve;
          const offset = from_is_below_to ? end_y + this.gantt.options.arrow_curve : end_y - this.gantt.options.arrow_curve;
          this.path = `
            M ${start_x} ${start_y}
            V ${offset}
            a ${curve} ${curve} 0 0 ${clockwise} ${curve} ${curve_y}
            L ${end_x} ${end_y}
            m -5 -5
            l 5 5
            l -5 5`;
          if (this.to_task.$bar.getX() < this.from_task.$bar.getX() + this.gantt.options.padding) {
            const down_1 = this.gantt.options.padding / 2 - curve;
            const down_2 = this.to_task.$bar.getY() + this.to_task.$bar.getHeight() / 2 - curve_y;
            const left = this.to_task.$bar.getX() - this.gantt.options.padding;
            this.path = `
                M ${start_x} ${start_y}
                v ${down_1}
                a ${curve} ${curve} 0 0 1 -${curve} ${curve}
                H ${left}
                a ${curve} ${curve} 0 0 ${clockwise} -${curve} ${curve_y}
                V ${down_2}
                a ${curve} ${curve} 0 0 ${clockwise} ${curve} ${curve_y}
                L ${end_x} ${end_y}
                m -5 -5
                l 5 5
                l -5 5`;
          }
        }
        draw() {
          this.element = createSVG("path", {
            d: this.path,
            "data-from": this.from_task.task.id,
            "data-to": this.to_task.task.id
          });
        }
        update() {
          this.calculate_path();
          this.element.setAttribute("d", this.path);
        }
      }
      class Popup {
        constructor(parent, custom_html) {
          this.parent = parent;
          this.custom_html = custom_html;
          this.make();
        }
        make() {
          this.parent.innerHTML = `
            <div class="title"></div>
            <div class="subtitle"></div>
            <div class="pointer"></div>
        `;
          this.hide();
          this.title = this.parent.querySelector(".title");
          this.subtitle = this.parent.querySelector(".subtitle");
          this.pointer = this.parent.querySelector(".pointer");
        }
        show(options) {
          if (!options.target_element) {
            throw new Error("target_element is required to show popup");
          }
          if (!options.position) {
            options.position = "left";
          }
          const target_element = options.target_element;
          if (this.custom_html) {
            let html = this.custom_html(options.task);
            html += '<div class="pointer"></div>';
            this.parent.innerHTML = html;
            this.pointer = this.parent.querySelector(".pointer");
          } else {
            this.title.innerHTML = options.title;
            this.subtitle.innerHTML = options.subtitle;
            this.parent.style.width = this.parent.clientWidth + "px";
          }
          let position_meta;
          if (target_element instanceof HTMLElement) {
            position_meta = target_element.getBoundingClientRect();
          } else if (target_element instanceof SVGElement) {
            position_meta = options.target_element.getBBox();
          }
          if (options.position === "left") {
            this.parent.style.left = position_meta.x + (position_meta.width + 10) + "px";
            this.parent.style.top = position_meta.y + "px";
            this.pointer.style.transform = "rotateZ(90deg)";
            this.pointer.style.left = "-7px";
            this.pointer.style.top = "2px";
          }
          this.parent.style.opacity = 1;
        }
        hide() {
          this.parent.style.opacity = 0;
          this.parent.style.left = 0;
        }
      }
      const VIEW_MODE = {
        QUARTER_DAY: "Quarter Day",
        HALF_DAY: "Half Day",
        DAY: "Day",
        WEEK: "Week",
        MONTH: "Month",
        YEAR: "Year"
      };
      class Gantt3 {
        constructor(wrapper, tasks, options) {
          this.setup_wrapper(wrapper);
          this.setup_options(options);
          this.setup_tasks(tasks);
          this.change_view_mode();
          this.bind_events();
        }
        setup_wrapper(element) {
          let svg_element, wrapper_element;
          if (typeof element === "string") {
            element = document.querySelector(element);
          }
          if (element instanceof HTMLElement) {
            wrapper_element = element;
            svg_element = element.querySelector("svg");
          } else if (element instanceof SVGElement) {
            svg_element = element;
          } else {
            throw new TypeError("Frapp\xE9 Gantt only supports usage of a string CSS selector, HTML DOM element or SVG DOM element for the 'element' parameter");
          }
          if (!svg_element) {
            this.$svg = createSVG("svg", {
              append_to: wrapper_element,
              class: "gantt"
            });
          } else {
            this.$svg = svg_element;
            this.$svg.classList.add("gantt");
          }
          this.$container = document.createElement("div");
          this.$container.classList.add("gantt-container");
          const parent_element = this.$svg.parentElement;
          parent_element.appendChild(this.$container);
          this.$container.appendChild(this.$svg);
          this.popup_wrapper = document.createElement("div");
          this.popup_wrapper.classList.add("popup-wrapper");
          this.$container.appendChild(this.popup_wrapper);
        }
        setup_options(options) {
          const default_options = {
            header_height: 50,
            column_width: 30,
            step: 24,
            view_modes: [...Object.values(VIEW_MODE)],
            bar_height: 20,
            bar_corner_radius: 3,
            arrow_curve: 5,
            padding: 18,
            view_mode: "Day",
            date_format: "YYYY-MM-DD",
            popup_trigger: "click",
            custom_popup_html: null,
            language: "en"
          };
          this.options = Object.assign({}, default_options, options);
        }
        setup_tasks(tasks) {
          this.tasks = tasks.map((task, i) => {
            task._start = date_utils.parse(task.start);
            task._end = date_utils.parse(task.end);
            if (date_utils.diff(task._end, task._start, "year") > 10) {
              task.end = null;
            }
            task._index = i;
            if (!task.start && !task.end) {
              const today = date_utils.today();
              task._start = today;
              task._end = date_utils.add(today, 2, "day");
            }
            if (!task.start && task.end) {
              task._start = date_utils.add(task._end, -2, "day");
            }
            if (task.start && !task.end) {
              task._end = date_utils.add(task._start, 2, "day");
            }
            const task_end_values = date_utils.get_date_values(task._end);
            if (task_end_values.slice(3).every((d) => d === 0)) {
              task._end = date_utils.add(task._end, 24, "hour");
            }
            if (!task.start || !task.end) {
              task.invalid = true;
            }
            if (typeof task.dependencies === "string" || !task.dependencies) {
              let deps = [];
              if (task.dependencies) {
                deps = task.dependencies.split(",").map((d) => d.trim()).filter((d) => d);
              }
              task.dependencies = deps;
            }
            if (!task.id) {
              task.id = generate_id(task);
            }
            return task;
          });
          this.setup_dependencies();
        }
        setup_dependencies() {
          this.dependency_map = {};
          for (let t of this.tasks) {
            for (let d of t.dependencies) {
              this.dependency_map[d] = this.dependency_map[d] || [];
              this.dependency_map[d].push(t.id);
            }
          }
        }
        refresh(tasks) {
          this.setup_tasks(tasks);
          this.change_view_mode();
        }
        change_view_mode(mode = this.options.view_mode) {
          this.update_view_scale(mode);
          this.setup_dates();
          this.render();
          this.trigger_event("view_change", [mode]);
        }
        update_view_scale(view_mode) {
          this.options.view_mode = view_mode;
          if (view_mode === VIEW_MODE.DAY) {
            this.options.step = 24;
            this.options.column_width = 38;
          } else if (view_mode === VIEW_MODE.HALF_DAY) {
            this.options.step = 24 / 2;
            this.options.column_width = 38;
          } else if (view_mode === VIEW_MODE.QUARTER_DAY) {
            this.options.step = 24 / 4;
            this.options.column_width = 38;
          } else if (view_mode === VIEW_MODE.WEEK) {
            this.options.step = 24 * 7;
            this.options.column_width = 140;
          } else if (view_mode === VIEW_MODE.MONTH) {
            this.options.step = 24 * 30;
            this.options.column_width = 120;
          } else if (view_mode === VIEW_MODE.YEAR) {
            this.options.step = 24 * 365;
            this.options.column_width = 120;
          }
        }
        setup_dates() {
          this.setup_gantt_dates();
          this.setup_date_values();
        }
        setup_gantt_dates() {
          this.gantt_start = this.gantt_end = null;
          for (let task of this.tasks) {
            if (!this.gantt_start || task._start < this.gantt_start) {
              this.gantt_start = task._start;
            }
            if (!this.gantt_end || task._end > this.gantt_end) {
              this.gantt_end = task._end;
            }
          }
          this.gantt_start = date_utils.start_of(this.gantt_start, "day");
          this.gantt_end = date_utils.start_of(this.gantt_end, "day");
          if (this.view_is([VIEW_MODE.QUARTER_DAY, VIEW_MODE.HALF_DAY])) {
            this.gantt_start = date_utils.add(this.gantt_start, -7, "day");
            this.gantt_end = date_utils.add(this.gantt_end, 7, "day");
          } else if (this.view_is(VIEW_MODE.MONTH)) {
            this.gantt_start = date_utils.start_of(this.gantt_start, "year");
            this.gantt_end = date_utils.add(this.gantt_end, 1, "year");
          } else if (this.view_is(VIEW_MODE.YEAR)) {
            this.gantt_start = date_utils.add(this.gantt_start, -2, "year");
            this.gantt_end = date_utils.add(this.gantt_end, 2, "year");
          } else {
            this.gantt_start = date_utils.add(this.gantt_start, -1, "month");
            this.gantt_end = date_utils.add(this.gantt_end, 1, "month");
          }
        }
        setup_date_values() {
          this.dates = [];
          let cur_date = null;
          while (cur_date === null || cur_date < this.gantt_end) {
            if (!cur_date) {
              cur_date = date_utils.clone(this.gantt_start);
            } else {
              if (this.view_is(VIEW_MODE.YEAR)) {
                cur_date = date_utils.add(cur_date, 1, "year");
              } else if (this.view_is(VIEW_MODE.MONTH)) {
                cur_date = date_utils.add(cur_date, 1, "month");
              } else {
                cur_date = date_utils.add(cur_date, this.options.step, "hour");
              }
            }
            this.dates.push(cur_date);
          }
        }
        bind_events() {
          this.bind_grid_click();
          this.bind_bar_events();
        }
        render() {
          this.clear();
          this.setup_layers();
          this.make_grid();
          this.make_dates();
          this.make_bars();
          this.make_arrows();
          this.map_arrows_on_bars();
          this.set_width();
          this.set_scroll_position();
        }
        setup_layers() {
          this.layers = {};
          const layers = ["grid", "date", "arrow", "progress", "bar", "details"];
          for (let layer of layers) {
            this.layers[layer] = createSVG("g", {
              class: layer,
              append_to: this.$svg
            });
          }
        }
        make_grid() {
          this.make_grid_background();
          this.make_grid_rows();
          this.make_grid_header();
          this.make_grid_ticks();
          this.make_grid_highlights();
        }
        make_grid_background() {
          const grid_width = this.dates.length * this.options.column_width;
          const grid_height = this.options.header_height + this.options.padding + (this.options.bar_height + this.options.padding) * this.tasks.length;
          createSVG("rect", {
            x: 0,
            y: 0,
            width: grid_width,
            height: grid_height,
            class: "grid-background",
            append_to: this.layers.grid
          });
          $.attr(this.$svg, {
            height: grid_height + this.options.padding + 100,
            width: "100%"
          });
        }
        make_grid_rows() {
          const rows_layer = createSVG("g", { append_to: this.layers.grid });
          const lines_layer = createSVG("g", { append_to: this.layers.grid });
          const row_width = this.dates.length * this.options.column_width;
          const row_height = this.options.bar_height + this.options.padding;
          let row_y = this.options.header_height + this.options.padding / 2;
          for (let task of this.tasks) {
            createSVG("rect", {
              x: 0,
              y: row_y,
              width: row_width,
              height: row_height,
              class: "grid-row",
              append_to: rows_layer
            });
            createSVG("line", {
              x1: 0,
              y1: row_y + row_height,
              x2: row_width,
              y2: row_y + row_height,
              class: "row-line",
              append_to: lines_layer
            });
            row_y += this.options.bar_height + this.options.padding;
          }
        }
        make_grid_header() {
          const header_width = this.dates.length * this.options.column_width;
          const header_height = this.options.header_height + 10;
          createSVG("rect", {
            x: 0,
            y: 0,
            width: header_width,
            height: header_height,
            class: "grid-header",
            append_to: this.layers.grid
          });
        }
        make_grid_ticks() {
          let tick_x = 0;
          let tick_y = this.options.header_height + this.options.padding / 2;
          let tick_height = (this.options.bar_height + this.options.padding) * this.tasks.length;
          for (let date of this.dates) {
            let tick_class = "tick";
            if (this.view_is(VIEW_MODE.DAY) && date.getDate() === 1) {
              tick_class += " thick";
            }
            if (this.view_is(VIEW_MODE.WEEK) && date.getDate() >= 1 && date.getDate() < 8) {
              tick_class += " thick";
            }
            if (this.view_is(VIEW_MODE.MONTH) && (date.getMonth() + 1) % 3 === 0) {
              tick_class += " thick";
            }
            createSVG("path", {
              d: `M ${tick_x} ${tick_y} v ${tick_height}`,
              class: tick_class,
              append_to: this.layers.grid
            });
            if (this.view_is(VIEW_MODE.MONTH)) {
              tick_x += date_utils.get_days_in_month(date) * this.options.column_width / 30;
            } else {
              tick_x += this.options.column_width;
            }
          }
        }
        make_grid_highlights() {
          if (this.view_is(VIEW_MODE.DAY)) {
            const x = date_utils.diff(date_utils.today(), this.gantt_start, "hour") / this.options.step * this.options.column_width;
            const y = 0;
            const width = this.options.column_width;
            const height = (this.options.bar_height + this.options.padding) * this.tasks.length + this.options.header_height + this.options.padding / 2;
            createSVG("rect", {
              x,
              y,
              width,
              height,
              class: "today-highlight",
              append_to: this.layers.grid
            });
          }
        }
        make_dates() {
          for (let date of this.get_dates_to_draw()) {
            createSVG("text", {
              x: date.lower_x,
              y: date.lower_y,
              innerHTML: date.lower_text,
              class: "lower-text",
              append_to: this.layers.date
            });
            if (date.upper_text) {
              const $upper_text = createSVG("text", {
                x: date.upper_x,
                y: date.upper_y,
                innerHTML: date.upper_text,
                class: "upper-text",
                append_to: this.layers.date
              });
              if ($upper_text.getBBox().x2 > this.layers.grid.getBBox().width) {
                $upper_text.remove();
              }
            }
          }
        }
        get_dates_to_draw() {
          let last_date = null;
          const dates = this.dates.map((date, i) => {
            const d = this.get_date_info(date, last_date, i);
            last_date = date;
            return d;
          });
          return dates;
        }
        get_date_info(date, last_date, i) {
          if (!last_date) {
            last_date = date_utils.add(date, 1, "year");
          }
          const date_text = {
            "Quarter Day_lower": date_utils.format(date, "HH", this.options.language),
            "Half Day_lower": date_utils.format(date, "HH", this.options.language),
            Day_lower: date.getDate() !== last_date.getDate() ? date_utils.format(date, "D", this.options.language) : "",
            Week_lower: date.getMonth() !== last_date.getMonth() ? date_utils.format(date, "D MMM", this.options.language) : date_utils.format(date, "D", this.options.language),
            Month_lower: date_utils.format(date, "MMMM", this.options.language),
            Year_lower: date_utils.format(date, "YYYY", this.options.language),
            "Quarter Day_upper": date.getDate() !== last_date.getDate() ? date_utils.format(date, "D MMM", this.options.language) : "",
            "Half Day_upper": date.getDate() !== last_date.getDate() ? date.getMonth() !== last_date.getMonth() ? date_utils.format(date, "D MMM", this.options.language) : date_utils.format(date, "D", this.options.language) : "",
            Day_upper: date.getMonth() !== last_date.getMonth() ? date_utils.format(date, "MMMM", this.options.language) : "",
            Week_upper: date.getMonth() !== last_date.getMonth() ? date_utils.format(date, "MMMM", this.options.language) : "",
            Month_upper: date.getFullYear() !== last_date.getFullYear() ? date_utils.format(date, "YYYY", this.options.language) : "",
            Year_upper: date.getFullYear() !== last_date.getFullYear() ? date_utils.format(date, "YYYY", this.options.language) : ""
          };
          const base_pos = {
            x: i * this.options.column_width,
            lower_y: this.options.header_height,
            upper_y: this.options.header_height - 25
          };
          const x_pos = {
            "Quarter Day_lower": this.options.column_width * 4 / 2,
            "Quarter Day_upper": 0,
            "Half Day_lower": this.options.column_width * 2 / 2,
            "Half Day_upper": 0,
            Day_lower: this.options.column_width / 2,
            Day_upper: this.options.column_width * 30 / 2,
            Week_lower: 0,
            Week_upper: this.options.column_width * 4 / 2,
            Month_lower: this.options.column_width / 2,
            Month_upper: this.options.column_width * 12 / 2,
            Year_lower: this.options.column_width / 2,
            Year_upper: this.options.column_width * 30 / 2
          };
          return {
            upper_text: date_text[`${this.options.view_mode}_upper`],
            lower_text: date_text[`${this.options.view_mode}_lower`],
            upper_x: base_pos.x + x_pos[`${this.options.view_mode}_upper`],
            upper_y: base_pos.upper_y,
            lower_x: base_pos.x + x_pos[`${this.options.view_mode}_lower`],
            lower_y: base_pos.lower_y
          };
        }
        make_bars() {
          this.bars = this.tasks.map((task) => {
            const bar = new Bar(this, task);
            this.layers.bar.appendChild(bar.group);
            return bar;
          });
        }
        make_arrows() {
          this.arrows = [];
          for (let task of this.tasks) {
            let arrows = [];
            arrows = task.dependencies.map((task_id) => {
              const dependency = this.get_task(task_id);
              if (!dependency)
                return;
              const arrow = new Arrow(this, this.bars[dependency._index], this.bars[task._index]);
              this.layers.arrow.appendChild(arrow.element);
              return arrow;
            }).filter(Boolean);
            this.arrows = this.arrows.concat(arrows);
          }
        }
        map_arrows_on_bars() {
          for (let bar of this.bars) {
            bar.arrows = this.arrows.filter((arrow) => {
              return arrow.from_task.task.id === bar.task.id || arrow.to_task.task.id === bar.task.id;
            });
          }
        }
        set_width() {
          const cur_width = this.$svg.getBoundingClientRect().width;
          const actual_width = this.$svg.querySelector(".grid .grid-row").getAttribute("width");
          if (cur_width < actual_width) {
            this.$svg.setAttribute("width", actual_width);
          }
        }
        set_scroll_position() {
          const parent_element = this.$svg.parentElement;
          if (!parent_element)
            return;
          const hours_before_first_task = date_utils.diff(this.get_oldest_starting_date(), this.gantt_start, "hour");
          const scroll_pos = hours_before_first_task / this.options.step * this.options.column_width - this.options.column_width;
          parent_element.scrollLeft = scroll_pos;
        }
        bind_grid_click() {
          $.on(this.$svg, this.options.popup_trigger, ".grid-row, .grid-header", () => {
            this.unselect_all();
            this.hide_popup();
          });
        }
        bind_bar_events() {
          let is_dragging = false;
          let x_on_start = 0;
          let y_on_start = 0;
          let is_resizing_left = false;
          let is_resizing_right = false;
          let parent_bar_id = null;
          let bars = [];
          this.bar_being_dragged = null;
          function action_in_progress() {
            return is_dragging || is_resizing_left || is_resizing_right;
          }
          $.on(this.$svg, "mousedown", ".bar-wrapper, .handle", (e, element) => {
            const bar_wrapper = $.closest(".bar-wrapper", element);
            if (element.classList.contains("left")) {
              is_resizing_left = true;
            } else if (element.classList.contains("right")) {
              is_resizing_right = true;
            } else if (element.classList.contains("bar-wrapper")) {
              is_dragging = true;
            }
            bar_wrapper.classList.add("active");
            x_on_start = e.offsetX;
            y_on_start = e.offsetY;
            parent_bar_id = bar_wrapper.getAttribute("data-id");
            const ids = [
              parent_bar_id,
              ...this.get_all_dependent_tasks(parent_bar_id)
            ];
            bars = ids.map((id) => this.get_bar(id));
            this.bar_being_dragged = parent_bar_id;
            bars.forEach((bar) => {
              const $bar = bar.$bar;
              $bar.ox = $bar.getX();
              $bar.oy = $bar.getY();
              $bar.owidth = $bar.getWidth();
              $bar.finaldx = 0;
            });
          });
          $.on(this.$svg, "mousemove", (e) => {
            if (!action_in_progress())
              return;
            const dx = e.offsetX - x_on_start;
            const dy = e.offsetY - y_on_start;
            bars.forEach((bar) => {
              const $bar = bar.$bar;
              $bar.finaldx = this.get_snap_position(dx);
              this.hide_popup();
              if (is_resizing_left) {
                if (parent_bar_id === bar.task.id) {
                  bar.update_bar_position({
                    x: $bar.ox + $bar.finaldx,
                    width: $bar.owidth - $bar.finaldx
                  });
                } else {
                  bar.update_bar_position({
                    x: $bar.ox + $bar.finaldx
                  });
                }
              } else if (is_resizing_right) {
                if (parent_bar_id === bar.task.id) {
                  bar.update_bar_position({
                    width: $bar.owidth + $bar.finaldx
                  });
                }
              } else if (is_dragging) {
                bar.update_bar_position({ x: $bar.ox + $bar.finaldx });
              }
            });
          });
          document.addEventListener("mouseup", (e) => {
            if (is_dragging || is_resizing_left || is_resizing_right) {
              bars.forEach((bar) => bar.group.classList.remove("active"));
            }
            is_dragging = false;
            is_resizing_left = false;
            is_resizing_right = false;
          });
          $.on(this.$svg, "mouseup", (e) => {
            this.bar_being_dragged = null;
            bars.forEach((bar) => {
              const $bar = bar.$bar;
              if (!$bar.finaldx)
                return;
              bar.date_changed();
              bar.set_action_completed();
            });
          });
          this.bind_bar_progress();
        }
        bind_bar_progress() {
          let x_on_start = 0;
          let y_on_start = 0;
          let is_resizing = null;
          let bar = null;
          let $bar_progress = null;
          let $bar = null;
          $.on(this.$svg, "mousedown", ".handle.progress", (e, handle) => {
            is_resizing = true;
            x_on_start = e.offsetX;
            y_on_start = e.offsetY;
            const $bar_wrapper = $.closest(".bar-wrapper", handle);
            const id = $bar_wrapper.getAttribute("data-id");
            bar = this.get_bar(id);
            $bar_progress = bar.$bar_progress;
            $bar = bar.$bar;
            $bar_progress.finaldx = 0;
            $bar_progress.owidth = $bar_progress.getWidth();
            $bar_progress.min_dx = -$bar_progress.getWidth();
            $bar_progress.max_dx = $bar.getWidth() - $bar_progress.getWidth();
          });
          $.on(this.$svg, "mousemove", (e) => {
            if (!is_resizing)
              return;
            let dx = e.offsetX - x_on_start;
            let dy = e.offsetY - y_on_start;
            if (dx > $bar_progress.max_dx) {
              dx = $bar_progress.max_dx;
            }
            if (dx < $bar_progress.min_dx) {
              dx = $bar_progress.min_dx;
            }
            const $handle = bar.$handle_progress;
            $.attr($bar_progress, "width", $bar_progress.owidth + dx);
            $.attr($handle, "points", bar.get_progress_polygon_points());
            $bar_progress.finaldx = dx;
          });
          $.on(this.$svg, "mouseup", () => {
            is_resizing = false;
            if (!($bar_progress && $bar_progress.finaldx))
              return;
            bar.progress_changed();
            bar.set_action_completed();
          });
        }
        get_all_dependent_tasks(task_id) {
          let out = [];
          let to_process = [task_id];
          while (to_process.length) {
            const deps = to_process.reduce((acc, curr) => {
              acc = acc.concat(this.dependency_map[curr]);
              return acc;
            }, []);
            out = out.concat(deps);
            to_process = deps.filter((d) => !to_process.includes(d));
          }
          return out.filter(Boolean);
        }
        get_snap_position(dx) {
          let odx = dx, rem, position;
          if (this.view_is(VIEW_MODE.WEEK)) {
            rem = dx % (this.options.column_width / 7);
            position = odx - rem + (rem < this.options.column_width / 14 ? 0 : this.options.column_width / 7);
          } else if (this.view_is(VIEW_MODE.MONTH)) {
            rem = dx % (this.options.column_width / 30);
            position = odx - rem + (rem < this.options.column_width / 60 ? 0 : this.options.column_width / 30);
          } else {
            rem = dx % this.options.column_width;
            position = odx - rem + (rem < this.options.column_width / 2 ? 0 : this.options.column_width);
          }
          return position;
        }
        unselect_all() {
          [...this.$svg.querySelectorAll(".bar-wrapper")].forEach((el) => {
            el.classList.remove("active");
          });
        }
        view_is(modes) {
          if (typeof modes === "string") {
            return this.options.view_mode === modes;
          }
          if (Array.isArray(modes)) {
            return modes.some((mode) => this.options.view_mode === mode);
          }
          return false;
        }
        get_task(id) {
          return this.tasks.find((task) => {
            return task.id === id;
          });
        }
        get_bar(id) {
          return this.bars.find((bar) => {
            return bar.task.id === id;
          });
        }
        show_popup(options) {
          if (!this.popup) {
            this.popup = new Popup(this.popup_wrapper, this.options.custom_popup_html);
          }
          this.popup.show(options);
        }
        hide_popup() {
          this.popup && this.popup.hide();
        }
        trigger_event(event, args) {
          if (this.options["on_" + event]) {
            this.options["on_" + event].apply(null, args);
          }
        }
        get_oldest_starting_date() {
          return this.tasks.map((task) => task._start).reduce((prev_date, cur_date) => cur_date <= prev_date ? cur_date : prev_date);
        }
        clear() {
          this.$svg.innerHTML = "";
        }
      }
      Gantt3.VIEW_MODE = VIEW_MODE;
      function generate_id(task) {
        return task.name + "_" + Math.random().toString(36).slice(2, 12);
      }
      return Gantt3;
    }();
  }
});

// browser-route-module:/home/tharyckgusmao/Documentos/tharyck/Projetos/remix/treelodot8/app/routes/index.jsx?browser
init_react();

// app/routes/index.jsx
init_react();

// app/components/ColumnCards/ColumnCards.jsx
init_react();
var import_react5 = __toModule(require_react());

// app/components/BaseKit/BaseText/BaseText.js
init_react();
var import_react = __toModule(require_react());
var import_prop_types = __toModule(require_prop_types());
var BaseText = ({
  title,
  children,
  style,
  className,
  onClick,
  type,
  aria,
  target,
  href
}) => {
  const CustomTag = `${type}`;
  const hrefProp = type == "a" ? { href, target } : null;
  return /* @__PURE__ */ import_react.default.createElement(CustomTag, {
    className: `${className || ""}`,
    style,
    title: aria,
    ...hrefProp,
    onClick: () => {
      if (onClick)
        onClick();
    }
  }, title || children);
};
BaseText.propTypes = {
  title: import_prop_types.default.any,
  aria: import_prop_types.default.string,
  children: import_prop_types.default.node,
  type: import_prop_types.default.string,
  style: import_prop_types.default.object
};
var BaseText_default = BaseText;

// app/components/BaseKit/Divider/Divider.js
init_react();
var import_react2 = __toModule(require_react());
var import_prop_types2 = __toModule(require_prop_types());
var Divider = ({ type, spaccing, variant, style, size = 1 }) => {
  let dotted = {};
  dotted = variant == "dotted" ? {
    backgroundimage: `-webkit-linear-gradient(right, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(255,255,255,0) 51%,rgba(255,255,255,0) 100%),
                            -webkit-linear-gradient(bottom, rgba(128,128,128,1) 0%, rgba(128,128,128,0) 8%, rgba(128,128,128,0) 100%)`,
    backgroundSize: "12px 24px"
  } : {};
  return /* @__PURE__ */ import_react2.default.createElement("div", {
    style: {
      margin: type == "h" ? `${spaccing} 0px` : `0px ${spaccing}`,
      minWidth: type == "h" ? `100%` : `${size}px`,
      minHeight: type == "h" ? `${size}px` : `100%`,
      ...dotted,
      ...style
    }
  });
};
Divider.defaultProps = {
  variant: "solid"
};
Divider.propTypes = {
  type: import_prop_types2.default.string,
  spaccing: import_prop_types2.default.string,
  variant: import_prop_types2.default.string
};
var Divider_default = Divider;

// app/components/BaseKit/Icon/Icon.js
init_react();
var import_prop_types3 = __toModule(require_prop_types());
var import_react3 = __toModule(require_react());
var Icon = ({ style, name, className = "", onClick }) => {
  return /* @__PURE__ */ import_react3.default.createElement("i", {
    className: `icon ${name} ${className || ""}`,
    onClick: (e) => {
      if (onClick) {
        onClick(e);
      }
    },
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...style
    }
  });
};
Icon.propTypes = {
  name: import_prop_types3.default.string,
  className: import_prop_types3.default.string,
  style: import_prop_types3.default.object
};
var Icon_default = Icon;

// app/components/Modal/ModalPortal.js
init_react();
var import_react4 = __toModule(require_react());

// app/components/utils/portal.js
init_react();
var import_react_dom = __toModule(require_react_dom());
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
function createUniversalPortal(children, selector) {
  if (!canUseDOM()) {
    return null;
  }
  return import_react_dom.default.createPortal(children, document.querySelector(selector));
}

// app/components/Modal/ModalPortal.js
var Modal = ({
  isOpen,
  onRequestClose,
  children,
  style,
  styleInner,
  inline,
  color,
  title,
  icon,
  center,
  styleBg,
  header
}) => {
  const content = (0, import_react4.useRef)(null);
  (0, import_react4.useEffect)(() => {
    if (isOpen) {
      focusContent();
    }
  }, [isOpen]);
  const focusContent = () => {
    content.current && content.current.focus();
  };
  const requestClose = (event) => {
    onRequestClose && onRequestClose(event);
  };
  const transition = useTransition(isOpen, {
    from: {
      opacity: 0,
      transform: center ? "translateY(20px)" : "translate(0%, -34%)"
    },
    enter: {
      opacity: 1,
      transform: center ? "translateY(0px)" : "translate(0%, -50%)"
    },
    leave: {
      opacity: 0,
      transform: center ? "translateY(-20px)" : "translate(0%, -34%)"
    }
  });
  return transition((props, item) => item && /* @__PURE__ */ import_react4.default.createElement(animated.div, {
    onClick: requestClose,
    style: {
      ...props,
      ...styleBg
    }
  }, children));
};
var ModalPortal = class extends import_react4.default.Component {
  render() {
    return createUniversalPortal(/* @__PURE__ */ import_react4.default.createElement(Modal, {
      ...this.props
    }), "body");
  }
};
var ModalPortal_default = ModalPortal;

// app/components/ColumnCards/ColumnCards.jsx
var import_frappe_gantt = __toModule(require_frappe_gantt());

// node_modules/frappe-gantt/dist/frappe-gantt.css
var frappe_gantt_default = "/build/_assets/frappe-gantt-LUH3WWOC.css";

// app/components/ColumnCards/styles.css
var styles_default = "/build/_assets/styles-DJ6M2TAD.css";

// app/components/ColumnCards/ColumnCards.jsx
console.log(import_frappe_gantt.default);
var links2 = [
  { rel: "stylesheet", href: styles_default },
  {
    rel: "stylesheet",
    href: frappe_gantt_default
  }
];
var Card = ({ data }) => {
  const tasks = (0, import_react5.useRef)(null);
  (0, import_react5.useEffect)(() => {
    if (tasks?.current) {
      var gantt = new import_frappe_gantt.default(tasks?.current, [
        {
          id: "Task 1",
          name: "Redesign website",
          start: "2016-12-28",
          end: "2016-12-31",
          progress: 20,
          dependencies: "Task 2, Task 3",
          custom_class: "bar-milestone"
        }
      ], {
        header_height: 50,
        column_width: 30,
        step: 24,
        view_modes: ["Quarter Day", "Half Day", "Day", "Week", "Month"],
        bar_height: 20,
        bar_corner_radius: 3,
        arrow_curve: 5,
        padding: 18,
        view_mode: "Day",
        date_format: "YYYY-MM-DD",
        custom_popup_html: null
      });
    }
  }, []);
  const labels = (0, import_react5.useMemo)(() => {
    return data?.labels?.map((e, k) => {
      let color = e.color.toLowerCase();
      return /* @__PURE__ */ React.createElement(Box_default, {
        className: "typetask",
        justifyContent: "center",
        flexDirection: "row",
        key: Math.random(),
        style: {
          backgroundColor: color == "sky" ? "cornflowerblue" : `${color}`
        }
      }, /* @__PURE__ */ React.createElement(BaseText_default, {
        className: "typetask_inovao",
        type: "span",
        title: e.name
      }));
    });
  }, []);
  return /* @__PURE__ */ React.createElement(Box_default, {
    className: "card",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_infocard",
    alignItems: "center",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_header",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_tags",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "row",
    flex: 1,
    alignItems: "center"
  }, labels), /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "row"
  }, data?.members.map((e, k) => {
    return /* @__PURE__ */ React.createElement("span", {
      style: {
        width: "18px",
        height: "18px",
        borderRadius: "100px",
        marginRight: "5px",
        overflow: "hidden"
      },
      key: Math.random(),
      "data-tip": e.name
    }, /* @__PURE__ */ React.createElement(BaseImage_default, {
      src: e.avatar,
      width: "18px",
      height: "18px"
    }));
  }))), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_reconstruoregistrocorreodeponto",
    type: "span",
    title: data?.name
  })), /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_info",
    alignItems: "center",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_deadline",
    alignItems: "center",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_calendar1"
  }), /* @__PURE__ */ React.createElement("span", {
    "data-tip": "Previs\xE3o"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_",
    type: "span",
    title: data?.dateDeadLine
  }))), /* @__PURE__ */ React.createElement(Box_default, {
    className: "card_priority",
    alignItems: "center",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_alert"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_baixa",
    type: "span",
    title: data?.priority || "N\xE3o Informado"
  })), /* @__PURE__ */ React.createElement("a", {
    href: data?.url,
    className: "card_trello",
    target: "_blank"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: "icon-icon_trello"
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "card_cardtrello",
    type: "span",
    title: "Card Trello"
  })))), /* @__PURE__ */ React.createElement(ModalPortal_default, {
    isOpen: true,
    onRequestClose: () => {
      setOpenAccount(false);
    },
    style: {
      padding: "0px"
    }
  }, /* @__PURE__ */ React.createElement("div", {
    ref: tasks
  })));
};
var ColumnCards = ({ data, style }) => {
  const dataFiltered = (0, import_react5.useMemo)(() => {
    let finish = [];
    let process = [];
    process = data?.data?.process?.map((e) => {
      return /* @__PURE__ */ React.createElement(Card, {
        data: e,
        key: e.id
      });
    });
    finish = data?.data?.finish?.map((e) => {
      return /* @__PURE__ */ React.createElement(Card, {
        data: e,
        key: e.id
      });
    });
    return { finish, process };
  }, [data]);
  return /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation",
    style,
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_headerlist",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_title",
    style: {
      width: "100%"
    },
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_inovao",
    type: "span",
    title: data?.emoji
  }), /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_inovao",
    type: "span",
    title: data?.title
  })), /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_number",
    flexDirection: "row"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_total",
    type: "span",
    title: data?.data?.finish?.length + data?.data?.process?.length
  }))), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "h",
    spaccing: "0px",
    style: { backgroundColor: "#EBEBED" }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_ctn"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_inprocess",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_emprocesso",
    type: "span",
    title: "EM PROCESSO"
  }), /* @__PURE__ */ React.createElement("div", null, dataFiltered?.process)), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "h",
    spaccing: "0px",
    style: { backgroundColor: "#EBEBED" }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "inovation_completed",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(BaseText_default, {
    className: "inovation_concluidos",
    type: "span",
    title: "CONCLUIDOS"
  }), /* @__PURE__ */ React.createElement("div", null, dataFiltered?.finish))));
};

// app/components/Navigation/LeftNavbar/LeftNavbar.jsx
init_react();

// app/assets/images/logo.svg
var logo_default = "/build/_assets/logo-ZBIMXZP7.svg";

// app/components/Navigation/LinkNavigation/LinkNavigation.jsx
init_react();

// app/components/Navigation/LinkNavigation/styles.css
var styles_default2 = "/build/_assets/styles-UABLCSO2.css";

// app/components/Navigation/LinkNavigation/LinkNavigation.jsx
var links3 = [{ rel: "stylesheet", href: styles_default2 }];
var LinkNavigation = ({ icon }) => {
  return /* @__PURE__ */ React.createElement(Link, {
    className: "link_navbar",
    to: "/"
  }, /* @__PURE__ */ React.createElement(Icon_default, {
    name: icon
  }));
};

// app/components/Navigation/LeftNavbar/styles.css
var styles_default3 = "/build/_assets/styles-U3F2WV34.css";

// app/components/Navigation/LeftNavbar/LeftNavbar.jsx
var links4 = [
  { rel: "stylesheet", href: styles_default3 },
  ...links3
];
var LeftNavbar = ({ props }) => {
  return /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar",
    flexDirection: "row",
    position: "fixed"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar_ctn",
    flex: "1",
    alignItems: "center",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar_ctn_nav",
    flex: "1",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(BaseImage_default, {
    width: "30px",
    height: "30px",
    src: logo_default,
    style: {
      minWidth: "30px",
      minHeight: "30px"
    }
  }), /* @__PURE__ */ React.createElement(Box_default, {
    className: "leftnavbar_ctn_links",
    flex: "1",
    flexDirection: "column"
  }, /* @__PURE__ */ React.createElement(LinkNavigation, {
    icon: "icon-icon_code"
  })))), /* @__PURE__ */ React.createElement(Divider_default, {
    type: "v",
    spaccing: "0px",
    style: { backgroundColor: "#EBEBED" }
  }));
};

// app/routes/index.jsx
function links5() {
  return [...links4, ...links, ...links2];
}
function Index() {
  let { data, currentMontFormatted, nextMonthFormatted } = useLoaderData();
  return /* @__PURE__ */ React.createElement("div", {
    style: {
      flexDirection: "row",
      display: "flex",
      height: "100%"
    }
  }, /* @__PURE__ */ React.createElement(LeftNavbar, null), /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "column",
    style: {
      padding: "30px",
      marginLeft: "80px"
    }
  }, /* @__PURE__ */ React.createElement(Title, {
    style: {
      marginBottom: "24px"
    },
    title: /* @__PURE__ */ React.createElement(React.Fragment, null, "Backlog Desenvolvimento", /* @__PURE__ */ React.createElement("span", {
      style: { color: "#EBEBED" }
    }, " \u2022 "), /* @__PURE__ */ React.createElement("span", {
      style: {
        color: "#7F7EFF",
        textTransform: "uppercase"
      }
    }, currentMontFormatted, "/", nextMonthFormatted))
  }), /* @__PURE__ */ React.createElement(Box_default, {
    flexDirection: "row"
  }, data?.map((e) => {
    return /* @__PURE__ */ React.createElement(ColumnCards, {
      data: e,
      key: Math.random(),
      style: {
        marginRight: "30px",
        alignSelf: "baseline"
      }
    });
  }))));
}
export {
  Index as default,
  links5 as links
};
//# sourceMappingURL=/build/routes/index-EQPWCX4B.js.map
