import BreadCrumbsBar from "../components/bread-crumbs-bar/bread-crumbs-bar";
import PageHeading from "../components/page-heading/page-heading";

export default function Contacts() {
  return (
    <div>
      <BreadCrumbsBar params={{ url: `/contacts` }} />
      <PageHeading params={{ content: "Contacts" }} />
    </div>
  );
}
