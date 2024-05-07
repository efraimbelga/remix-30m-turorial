import { Form, Link } from "@remix-run/react";

export enum Role {
  member = "member",
  staff = "staff",
  admin = "admin",
}

export interface UserProps {
  q?: string;
}

const Sidebar = ({ q }: UserProps) => {
  return (
    <>
      <h1>Remix Contacts</h1>
      <div>
        <Form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
            defaultValue={q || ""}
          />
          <div id="search-spinner" aria-hidden hidden={true} />
        </Form>
        <Form method="post">
          <button type="submit">New</button>
        </Form>
      </div>
    </>
  );
};

export default Sidebar;
