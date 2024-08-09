import { redirect } from "next/navigation";
// temporary solution for the redirecting user to
// main page if search is empty
export default function RedirectPage() {
  redirect("/");
}
