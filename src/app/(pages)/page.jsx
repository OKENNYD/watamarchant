import { Balance } from '@/components/Card/Balance';
import { User, ReceiptText } from "lucide-react";
import Radial from '../../components/Charts/Radial';
import Bar from '../../components/Charts/Bar';
import HomeTable from '@/components/Table/HomeTable';

export default function Home() {
  let bal = [{
    "title": "Total Sales",
    "amount": {"value": 1000, "bool": true},
    "icon": <ReceiptText strokeWidth={1} ize={15}s className="text-primary" />,
    "stats": true
  }, {
    "title": "Total Orders",
    "amount": {"value": 1000, "bool": false},
    "icon": <ReceiptText strokeWidth={1} size={15} className="text-primary" />,
    "stats": false
  }, {
    "title": "Visitors",
    "amount": {"value": 1000, "bool": false},
    "icon": <User strokeWidth={1} size={15} className="text-primary" />,
    "stats": true
  }, {
    "title": "Refunded",
    "amount": {"value": 1000, "bool": false},
    "icon": <ReceiptText strokeWidth={1} size={15} className="text-primary" />,
    "stats": false
  }]
  return (
    <main className="w-full h-full flex flex-col gap-3 p-2 overflow-y-scroll scroll-none">
      <div className="h-fit flex gap-3 w-full">
          {bal.map((_, i) => (
          <Balance key={i} title={_.title} icon={_.icon} stats={_.stats} amount={_.amount} />
        ))}
      </div>
      <div className="w-full h-auto flex max-sm:flex-col gap-3">
        <div className="bg-white rounded-lg w-2/3 h-auto shadow-md">
          <Bar/>
        </div>
        <div className="bg-white rounded-lg w-1/3 h-auto aspect-square shadow-md">
          <Radial/>
        </div>
      </div>
      <div className="bg-white rounded-lg w-full h-36">
        
      </div>
    </main>
  );
}
