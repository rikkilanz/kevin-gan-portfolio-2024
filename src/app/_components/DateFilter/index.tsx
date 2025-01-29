"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

function convertDate(monthYear: string) {
  const options: any = { year: "numeric", month: "long" }; // Format: December 2024
  const [year, month] = monthYear.split("-"); // Split "2024-12" into ["2024", "12"]
  const date = new Date(`${year}-${month}-31`); // Add the first day of the month
  return date.toLocaleDateString("en-US", options);
}

export default function DateFilter({
  monthYearArray,
}: {
  monthYearArray: any;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const before = searchParams.get("before");

  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    if (before) {
      const date = new Date(before);
      setSelectedDate(
        `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`
      );
    }
  }, [before]);

  return (
    <div className="text-right mb-8">
      <label htmlFor="date-filter" className="sr-only">
        Date Filter
      </label>
      <select
        name="date-filter"
        id="date-filter"
        className="bg-gray-100 p-2 text-sm focus:ring-2 focus:ring-black"
        onChange={(e) => {
          router.push(
            `/blog?before=${e.target.value}-31T00:00:00&after=${e.target.value}-01T00:00:00`
          );
          setSelectedDate(e.target.value);
        }}
        value={selectedDate}
      >
        <option value="0">All Posts</option>
        {monthYearArray.map((date: any) => (
          <option key={date} value={date}>
            {convertDate(date)}
          </option>
        ))}
      </select>
    </div>
  );
}
