import { jsxs, jsx } from "react/jsx-runtime";
import "react";
import { A as AuthenticatedLayout } from "./AuthenticatedLayout-Dc4O-RCd.js";
import { C as Container, B as Button } from "./Button-C2oJstgM.js";
import { usePage, useForm, Head } from "@inertiajs/react";
import { C as Card, I as Input } from "./Card-CAZfg7KG.js";
import Swal from "sweetalert2";
import "./ApplicationLogo-xMpxFOcX.js";
import "@headlessui/react";
import "@tabler/icons-react";
function Edit({ auth }) {
  const { permission } = usePage().props;
  const { data, setData, post, errors } = useForm({
    name: permission.name,
    _method: "put"
  });
  const handleUpdateData = async (e) => {
    e.preventDefault();
    post(route("permissions.update", permission.id), {
      onSuccess: () => {
        Swal.fire({
          title: "Success!",
          text: "Data updated successfully!",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
  };
  return /* @__PURE__ */ jsxs(
    AuthenticatedLayout,
    {
      user: auth.user,
      header: /* @__PURE__ */ jsx("h2", { className: "font-semibold text-xl text-gray-800 leading-tight", children: "Edit Permission" }),
      children: [
        /* @__PURE__ */ jsx(Head, { title: "Edit Permissions" }),
        /* @__PURE__ */ jsx(Container, { children: /* @__PURE__ */ jsx(Card, { title: "Edit permission", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleUpdateData, children: [
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsx(Input, { label: "Permission Name", type: "text", value: data.name, onChange: (e) => setData("name", e.target.value), errors: errors.name, placeholder: "Input permission name.." }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Button, { type: "submit" }),
            /* @__PURE__ */ jsx(Button, { type: "cancel", url: route("permissions.index") })
          ] })
        ] }) }) })
      ]
    }
  );
}
export {
  Edit as default
};
