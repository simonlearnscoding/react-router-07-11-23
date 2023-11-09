import { redirect } from "react-router-dom";
import { deleteContact } from "./../contacts"
export function action({ params }) {
  throw new Error('oh noes')
  deleteContact(params.contactId)
  return redirect('/')
}
