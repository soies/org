"use client";

import React from "react";
import {
  useQuery,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronUp, ChevronDown } from "lucide-react";
import { client } from "@/sanity/lib/client";

type Alumni = {
  name: string;
  Batch: number;
  email: string;
  currentPosition?: string;
};

const queryClient = new QueryClient();

function AlumniTableWithProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <AlumniTable />
    </QueryClientProvider>
  );
}

const AlumniTable: React.FC = () => {
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">(
    "desc"
  );
  const [yearFilter, setYearFilter] = React.useState("");
  const [selectedBatch, setSelectedBatch] = React.useState("");

  const {
    data: alumni = [],
    isLoading,
    error,
  } = useQuery<Alumni[]>({
    queryKey: ["alumni"],
    queryFn: async () => {
      return await client.fetch(`*[_type == "alumni"]`);
    },
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const uniqueBatches: number[] = React.useMemo(() => {
    const batches = [...new Set(alumni.map((alum) => alum.Batch))];
    return batches.sort((a, b) => a - b);
  }, [alumni]);

  const sortedAndFilteredAlumni = React.useMemo(() => {
    let filtered = [...alumni];

    if (selectedBatch) {
      filtered = filtered.filter(
        (alum) => alum.Batch === parseInt(selectedBatch)
      );
    }

    if (yearFilter) {
      filtered = filtered.filter(
        (alum) =>
          alum.Batch.toString().includes(yearFilter) ||
          alum.name.toLowerCase().includes(yearFilter.toLowerCase()) ||
          (alum.currentPosition?.toLowerCase() || "").includes(
            yearFilter.toLowerCase()
          )
      );
    }

    return filtered.sort((a, b) => {
      if (sortDirection === "asc") {
        return a.Batch - b.Batch;
      }
      return b.Batch - a.Batch;
    });
  }, [alumni, sortDirection, yearFilter, selectedBatch]);

  const toggleSort = () => {
    setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  if (isLoading) {
    return (
      <div className='flex items-center justify-center py-8'>
        <div className='text-center'>Loading alumni data...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex items-center justify-center py-8'>
        <div className='text-red-500'>
          Error loading alumni:{" "}
          {error instanceof Error ? error.message : "Unknown error"}
        </div>
      </div>
    );
  }

  return (
    <div className='w-full max-w-4xl mx-auto space-y-4'>
      <div className='flex flex-col sm:flex-row gap-4 sm:items-center'>
        <Input
          placeholder='Search by name, year, or position...'
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
          className='max-w-xs'
        />
        <Select value={selectedBatch} onValueChange={setSelectedBatch}>
          <SelectTrigger className='w-[180px]'>
            <SelectValue placeholder='Filter by batch' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value=''>All Batches</SelectItem>
            {uniqueBatches.map((batch) => (
              <SelectItem key={batch} value={batch.toString()}>
                {batch} B.S.
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className='rounded-md border'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className='cursor-pointer' onClick={toggleSort}>
                <div className='flex items-center space-x-1'>
                  <span>Batch Year (B.S.)</span>
                  {sortDirection === "asc" ? (
                    <ChevronUp className='w-4 h-4' />
                  ) : (
                    <ChevronDown className='w-4 h-4' />
                  )}
                </div>
              </TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Current Position</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sortedAndFilteredAlumni.map((alum, index) => (
              <TableRow key={`${alum.email}-${index}`}>
                <TableCell className='font-medium'>{alum.name}</TableCell>
                <TableCell>{alum.Batch}</TableCell>
                <TableCell>
                  <a
                    href={`mailto:${alum.email}`}
                    className='text-blue-600 hover:underline'
                  >
                    {alum.email}
                  </a>
                </TableCell>
                <TableCell>{alum.currentPosition || "-"}</TableCell>
              </TableRow>
            ))}
            {sortedAndFilteredAlumni.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className='text-center py-4'>
                  No alumni found for the selected criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='text-sm text-gray-500'>
        Showing {sortedAndFilteredAlumni.length} of {alumni.length} alumni
      </div>
    </div>
  );
};

export default AlumniTableWithProvider;
