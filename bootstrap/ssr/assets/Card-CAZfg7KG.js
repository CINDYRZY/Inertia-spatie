import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import "react";
function Input({ label, type, className, errors, ...props }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
    /* @__PURE__ */ jsx("label", { className: "text-gray-600 text-sm", children: label }),
    /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: `w-full px-4 py-2 border text-sm rounded-md focus:outline-none focus:ring-0 bg-white text-gray-700 focus:border-gray-200 border-gray-200 ${className}`,
        ...props
      }
    ),
    errors && /* @__PURE__ */ jsx("small", { className: "text-xs text-red-500", children: errors })
  ] });
}
function Card({ title, children, className }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: `p-4 rounded-t-lg border ${className} bg-white`, children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 font-semibold text-sm text-gray-700 capitalize", children: title }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-white p-4 border border-t-0 border-b rounded-b-lg", children })
  ] });
}
export {
  Card as C,
  Input as I
};
