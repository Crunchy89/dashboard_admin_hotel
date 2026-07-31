"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DashboardPanel,
  SummaryMetricGrid,
  TableHeadRow,
} from "@/components/dashboard/DashboardPanel";

interface ClientPointRow {
  id: string;
  name: string;
  email: string;
  phone: string;
  hotelName: string;
  roomNumber: string;
  bookingCount: number;
  lastBooking: string;
  totalPoints: number;
}

const clients: ClientPointRow[] = [
  {
    id: "CLT-001",
    name: "Rina Wijaya",
    email: "rina.wijaya@mail.com",
    phone: "+62 812-3456-7801",
    hotelName: "Grand Horizon Hotel",
    roomNumber: "1204",
    bookingCount: 8,
    lastBooking: "2026-07-18",
    totalPoints: 1860,
  },
  {
    id: "CLT-002",
    name: "James Tan",
    email: "james.tan@mail.com",
    phone: "+62 813-9988-2210",
    hotelName: "Oceanview Suites",
    roomNumber: "805",
    bookingCount: 4,
    lastBooking: "2026-07-22",
    totalPoints: 980,
  },
  {
    id: "CLT-003",
    name: "Siti Rahma",
    email: "siti.rahma@mail.com",
    phone: "+62 857-1100-3344",
    hotelName: "Nusantara Boutique Inn",
    roomNumber: "312",
    bookingCount: 2,
    lastBooking: "2026-07-10",
    totalPoints: 420,
  },
  {
    id: "CLT-004",
    name: "Michael Chen",
    email: "michael.chen@mail.com",
    phone: "+62 821-4455-6677",
    hotelName: "Skyline Business Hotel",
    roomNumber: "1502",
    bookingCount: 11,
    lastBooking: "2026-07-01",
    totalPoints: 2540,
  },
  {
    id: "CLT-005",
    name: "Ayu Kartika",
    email: "ayu.kartika@mail.com",
    phone: "+62 878-2233-1199",
    hotelName: "Grand Horizon Hotel",
    roomNumber: "918",
    bookingCount: 1,
    lastBooking: "2026-07-28",
    totalPoints: 200,
  },
  {
    id: "CLT-006",
    name: "David Okonkwo",
    email: "david.ok@mail.com",
    phone: "+62 819-5566-7788",
    hotelName: "Oceanview Suites",
    roomNumber: "402",
    bookingCount: 3,
    lastBooking: "2026-05-20",
    totalPoints: 640,
  },
  {
    id: "CLT-007",
    name: "Putri Amelia",
    email: "putri.amelia@mail.com",
    phone: "+62 852-6677-8899",
    hotelName: "Nusantara Boutique Inn",
    roomNumber: "205",
    bookingCount: 5,
    lastBooking: "2026-08-01",
    totalPoints: 1120,
  },
  {
    id: "CLT-008",
    name: "Kenji Nakamura",
    email: "kenji.n@mail.com",
    phone: "+62 811-3344-5566",
    hotelName: "Skyline Business Hotel",
    roomNumber: "1108",
    bookingCount: 14,
    lastBooking: "2026-07-05",
    totalPoints: 3100,
  },
];

function formatDate(value: string) {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function ClientPointsTable() {
  const totalClients = clients.length;
  const totalBookings = clients.reduce((sum, c) => sum + c.bookingCount, 0);
  const totalPoints = clients.reduce((sum, c) => sum + c.totalPoints, 0);

  const tableHeadings = [
    "Client",
    "Times Booked",
    "Last Booking",
    "Total Points",
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      <SummaryMetricGrid
        items={[
          {
            label: "Total Clients",
            value: totalClients.toLocaleString("en-US"),
          },
          {
            label: "Total Bookings",
            value: totalBookings.toLocaleString("en-US"),
          },
          {
            label: "Points Issued",
            value: totalPoints.toLocaleString("en-US"),
          },
        ]}
      />

      <DashboardPanel
        title="Client Point Balance"
        description="Points earned when clients book rooms at affiliated hotels"
      >
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-gray-800">
              <TableHeadRow headings={tableHeadings} />
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-gray-800">
              {clients.map((client) => (
                <TableRow key={client.id}>
                  <TableCell className="px-5 py-4">
                    <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                      {client.name}
                    </p>
                    <p className="text-theme-xs text-gray-400">
                      {client.id} · {client.email}
                    </p>
                    <p className="text-theme-xs text-gray-400">{client.phone}</p>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm text-gray-800 dark:text-white/90">
                    {client.bookingCount.toLocaleString("en-US")}
                  </TableCell>
                  <TableCell className="px-5 py-4">
                    <p className="text-theme-sm font-medium text-gray-800 dark:text-white/90">
                      {formatDate(client.lastBooking)}
                    </p>
                    <p className="text-theme-xs text-gray-400">
                      {client.hotelName} · Room {client.roomNumber}
                    </p>
                  </TableCell>
                  <TableCell className="px-5 py-4 text-theme-sm font-semibold text-gray-800 dark:text-white/90">
                    {client.totalPoints.toLocaleString("en-US")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DashboardPanel>
    </div>
  );
}
