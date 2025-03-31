import {
  LayoutDashboard,
  Bolt,
  Info,
  Package,
  MessagesSquare,
  ChartColumnBig,
  Star,
  ReceiptText,
  Wallet
} from "lucide-react";

let menu = [
  {
    title: "Dashboard",
    url: "/",
    icon: <LayoutDashboard strokeWidth={1} size={20} />,
  },
  {
    title: "Products",
    url: "/product",
    icon: <Package strokeWidth={1} size={20} />,
  },
  {
    title: "Orders",
    url: "/order",
    icon: <ReceiptText strokeWidth={1} size={20} />,
  },
  {
    title: "Payment",
    url: "/payment",
    icon: <Wallet strokeWidth={1} size={20} />,
  },
  {
    title: "Analytics",
    url: "/analytics",
    icon: <ChartColumnBig strokeWidth={1} size={20} />,
  },
  {
    title: "Settings",
    url: "/settings",
    icon: <Bolt strokeWidth={1} size={20} />,
  },
  {
    title: "Help",
    url: "/help",
    icon: <Info strokeWidth={1} size={20} />,
  },
];

export default menu;
