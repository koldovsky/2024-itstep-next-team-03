import ListHeader from "./list-header";
import { categories } from "../../../lib/category-items";
import { navigationLinks } from "@/app/lib/navigation-links";
import ListItem from "./list-items";

interface NavSidebarProps {
  params: {
    navClassName: string;
    liClassName: string;
  };
}

export default function NavSidebar({ params }: NavSidebarProps) {
  return (
    <div
      className={`${params.navClassName} fixed overflow-y-auto top-0 left-0 flex-col h-full bg-[var(--background)] z-50 text-[var(--sidebar-font-clr)] border border-y-0 border-l-0 border-[var(--primary-clr)]`}
    >
      <div className="flex flex-col">
        <div>
          <ListHeader
            params={{ content: "Menu", className: params.liClassName }}
          />
          <ul className="flex flex-col gap-x-5">
            {navigationLinks.map((navigationLink) => (
              <ListItem key={navigationLink.id}
                params={{
                  id: navigationLink.id,
                  linkName: navigationLink.linkName,
                  link: `/${navigationLink.link}`,
                  className: params.liClassName,
                }}
              />
            ))}
          </ul>
        </div>
        <div>
          <ListHeader
            params={{ content: "Catalogue", className: params.liClassName }}
          />
          <ul className="flex flex-col gap-x-5">
            {categories.map((category) => (
              <ListItem key={category.id}
                params={{
                  id: category.id,
                  linkName: category.categoryName,
                  link: `/shop/${category.link}`,
                  className: params.liClassName,
                }}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
