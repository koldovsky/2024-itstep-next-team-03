import BreadCrumbsBar from "../components/bread-crumbs-bar/bread-crumbs-bar";
import PageHeading from "../components/page-heading/page-heading";

export default function ForCustomers() {
  return (
    <div>
      <BreadCrumbsBar params={{ url: `/for-customers` }} />
      <PageHeading params={{ content: "Buyers" }} />
    </div>
  );
}
