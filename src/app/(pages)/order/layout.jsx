import Order from "@/components/Card/Order";
export const metadata = {
  title: "Orders",
  description: "Orders made on watawara",
};
export default function Layout({ children }) {
  return (
        <div className="w-full flex gap-4">
          <div className={`w-full flex flex-col gap-2`}>
          <form
          className="w-1/2 h-auto flex overflow-hidden p-2"
        >
          <input
            type="text"
            placeholder="product name, product Id"
            name="search"
            id="search"
            className="w-full rounded-full h-10 text-dim px-3 outline-secondary"
          />
        </form>
            <Order/>
            <Order/>
            <Order/>
          </div>
          {children}
      </div>
  );
}
