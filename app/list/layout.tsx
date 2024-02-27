import DesktopListHeader from "./components/DesktopListHeader";
import MobileLoggedInHeader from "./components/MobileListHeader";

const ListLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DesktopListHeader />
      <MobileLoggedInHeader />
      <div className="h-full">{children}</div>
    </>
  );
};

export default ListLayout;
