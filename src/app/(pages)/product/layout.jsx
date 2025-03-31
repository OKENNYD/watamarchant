import ProductNav from "@/components/Nav/productNav";
export default function Layout({ children }) {
  return (
    <main className="w-full max-md:px-1">
      <ProductNav/>
      <div className="w-full py-4 overflow-y-scroll scroll-none scr-none">
        {children}
      </div>
    </main>
  );
}