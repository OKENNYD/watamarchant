import Aside from "@/components/Aside/Aside";
import Header from "@/components/Header/Header";

export const metadata = {
  title: "Titoja - Marchant Center",
  description: "Titoja marchant center",
};

export default function Layout({ children }) {

  return (
        <div className="w-full bg-gray-100 flex gap-4">
          <Aside />
          <div className="w-full flex flex-col pe-2">
            <Header/>
            {children}
          </div>
      </div>
  );
}
