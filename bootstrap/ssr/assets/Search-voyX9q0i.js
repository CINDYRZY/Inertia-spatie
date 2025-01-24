import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import "react";
import { Link, useForm } from "@inertiajs/react";
import { IconChevronLeft, IconChevronRight, IconSearch } from "@tabler/icons-react";
const Card = ({ title, className, children }) => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: `p-4 rounded-t-lg border ${className} bg-white`, children: /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2 font-semibold text-sm text-gray-700 uppercase", children: title }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-white rounded-b-lg border-t-0", children })
  ] });
};
const Table = ({ children }) => {
  return /* @__PURE__ */ jsx("div", { className: "w-full overflow-hidden overflow-x-auto border-collapse rounded-b-lg border border-t-0", children: /* @__PURE__ */ jsx("table", { className: "w-full text-sm", children }) });
};
const Thead = ({ className, children }) => {
  return /* @__PURE__ */ jsx("thead", { className: `${className} border-b bg-gray-50`, children });
};
const Tbody = ({ className, children }) => {
  return /* @__PURE__ */ jsx("tbody", { className: `${className} divide-y bg-white`, children });
};
const Td = ({ className, children }) => {
  return /* @__PURE__ */ jsx(
    "td",
    {
      className: `${className} whitespace-nowrap p-4 align-middle text-gray-700`,
      children
    }
  );
};
const Th = ({ className, children }) => {
  return /* @__PURE__ */ jsx(
    "th",
    {
      scope: "col",
      className: `${className} h-12 px-4 text-left align-middle font-medium text-gray-700`,
      children
    }
  );
};
const Empty = ({ colSpan, message, children }) => {
  return /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan, children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center h-96", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
    children,
    /* @__PURE__ */ jsx("div", { className: "mt-5", children: message })
  ] }) }) }) });
};
Table.Card = Card;
Table.Thead = Thead;
Table.Tbody = Tbody;
Table.Td = Td;
Table.Th = Th;
Table.Empty = Empty;
function Pagination({ links }) {
  const style = "p-1 text-sm border rounded-md bg-white text-gray-500 hover:bg-gray-100";
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("ul", { className: "mt-2 lg:mt-5 justify-end flex items-center gap-1", children: links.map((item, i) => {
    return item.url != null ? item.label.includes("Previous") ? /* @__PURE__ */ jsx(Link, { className: style, href: item.url, children: /* @__PURE__ */ jsx(IconChevronLeft, { size: "20", strokeWidth: "1.5" }) }, i) : item.label.includes("Next") ? /* @__PURE__ */ jsx(Link, { className: style, href: item.url, children: /* @__PURE__ */ jsx(IconChevronRight, { size: "20", strokeWidth: "1.5" }) }, i) : /* @__PURE__ */ jsx(Link, { className: `px-2 py-1 text-sm border  rounded-md text-gray-500 hover:bg-gray-100 ${item.active ? "bg-white text-gray-700" : "bg-white"}`, href: item.url, children: item.label }, i) : null;
  }) }) });
}
function Search({ url, placeholder }) {
  const { data, setData, get } = useForm({
    search: ""
  });
  const handleSearchData = (e) => {
    e.preventDefault();
    get(`${url}?search=${data.search}`);
  };
  return /* @__PURE__ */ jsx("form", { onSubmit: handleSearchData, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "text",
        value: data.search,
        onChange: (e) => setData("search", e.target.value),
        className: "py-2 px-4 pr-11 block w-full rounded-lg text-sm border focus:outline-none focus:ring-0 focus:ring-gray-400 text-gray-700 bg-white border-gray-200 focus:border-gray-200",
        placeholder
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 flex items-center pointer-events-none pr-4", children: /* @__PURE__ */ jsx(IconSearch, { size: 18, strokeWidth: 1.5 }) })
  ] }) });
}
export {
  Pagination as P,
  Search as S,
  Table as T
};
