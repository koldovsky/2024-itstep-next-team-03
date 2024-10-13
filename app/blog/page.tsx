import BreadCrumbsBar from "../components/bread-crumbs-bar/bread-crumbs-bar";
import PageHeading from "../components/page-heading/page-heading";

export default function Blog() {
  return (
    <div>
      <BreadCrumbsBar params={{ url: `/blog` }} />
      <PageHeading params={{ content: "Blog" }} />
    </div>
  );
}
