import { redirect } from "next/navigation";

// Contact now lives on the home page; keep old /contact links working
export default function Contact() {
  redirect("/#contact");
}
