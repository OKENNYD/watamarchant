import Customer from "@/components/Card/Customer";

export default function Stock() {
  return (
    <div
      className="w-full flex flex-col gap-2 h-full scroll-none"
    >
        <ul className="w-full flex flex-col gap-2 h-full scroll-none">
          <Customer />
        </ul>
    </div>
  );
}
