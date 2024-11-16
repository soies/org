"use client";

import { useQuery } from "@tanstack/react-query";
import { useDebounce } from "use-debounce";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, Loader2 } from "lucide-react";
import { useState } from "react";

interface Alumnus {
  _id: string;
  name: string;
  Batch: number;
  currentPosition?: string;
  description?: string;
}

interface PaginatedResponse {
  data: Alumnus[];
  pagination: {
    totalPages: number;
    currentPage: number;
    totalItems: number;
  };
}

interface AlumniListFilters {
  page: number;
  limit: number;
  sortBy: string;
  order: string;
  search: string;
}

async function fetchAlumni({
  page,
  limit,
  sortBy,
  order,
  search,
}: AlumniListFilters): Promise<PaginatedResponse> {
  const params = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    sortBy,
    order,
    ...(search && { search }),
  });

  const response = await fetch(`/api/alumni?${params}`, {
    next: { tags: ["alumni"] },
  });

  if (!response.ok) throw new Error("Failed to fetch alumni");

  return response.json();
}

export default function AlumniList() {
  const [filters, setFilters] = useState<AlumniListFilters>({
    page: 1,
    limit: 10,
    sortBy: "name",
    order: "asc",
    search: "",
  });

  const [debouncedSearch] = useDebounce(filters.search, 500);
  const { data, isLoading, isError, error, isFetching } = useQuery({
    queryKey: ["alumni", { ...filters, search: debouncedSearch }],
    queryFn: () => fetchAlumni({ ...filters, search: debouncedSearch }),
  });

  const handlePageChange = (direction: "next" | "prev") => {
    setFilters((prev) => ({
      ...prev,
      page: direction === "next" ? prev.page + 1 : prev.page - 1,
    }));
  };

  const handleSortChange = (value: string) =>
    setFilters((prev) => ({ ...prev, sortBy: value, page: 1 }));

  const handleOrderChange = (value: string) =>
    setFilters((prev) => ({ ...prev, order: value, page: 1 }));

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) =>
    setFilters((prev) => ({ ...prev, search: event.target.value, page: 1 }));

  const AlumnusDetails = ({ alumnus }: { alumnus: Alumnus }) => (
    <div className='space-y-4'>
      <div>
        <Label>Name</Label>
        <p className='text-sm'>{alumnus.name}</p>
      </div>
      <div>
        <Label>Current Position</Label>
        <p className='text-sm'>{alumnus.currentPosition || "N/A"}</p>
      </div>
      <div>
        <Label>Batch</Label>
        <p className='text-sm'>{alumnus.Batch}</p>
      </div>
      {alumnus.description && (
        <div>
          <Label>Description</Label>
          <p className='text-sm'>{alumnus.description}</p>
        </div>
      )}
    </div>
  );

  if (isError)
    return (
      <div className='text-red-500'>Error: {(error as Error).message}</div>
    );

  return (
    <section className='space-y-6 p-4 bg-slate-200 h-screen'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-semibold'>Alumni List</h1>
        <div className='relative'>
          <Search className='absolute left-2 top-2.5 h-4 w-4 text-slate-500' />
          <Input
            placeholder='Search alumni...'
            value={filters.search}
            onChange={handleSearch}
            className='pl-8'
          />
        </div>
      </div>

      <div className='flex items-center gap-4'>
        <div className='flex items-center'>
          <Label className='mr-2'>Sort By:</Label>
          <Select value={filters.sortBy} onValueChange={handleSortChange}>
            <SelectTrigger className='w-40'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='name'>Name</SelectItem>
              <SelectItem value='Batch'>Batch Year</SelectItem>
              <SelectItem value='currentPosition'>Position</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className='flex items-center'>
          <Label className='mr-2'>Order:</Label>
          <Select value={filters.order} onValueChange={handleOrderChange}>
            <SelectTrigger className='w-40'>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='asc'>Ascending</SelectItem>
              <SelectItem value='desc'>Descending</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {isFetching && <Loader2 className='h-4 w-4 animate-spin' />}
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className='w-[240px]'>Name</TableHead>
            <TableHead>Current Position</TableHead>
            <TableHead className='text-right'>Batch</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={4} className='text-center py-8'>
                <Loader2 className='h-6 w-6 animate-spin mx-auto' />
              </TableCell>
            </TableRow>
          ) : (
            data?.data.map((alumnus) => (
              <Dialog key={alumnus._id}>
                <DialogTrigger asChild>
                  <TableRow className='cursor-pointer hover:bg-slate-100'>
                    <TableCell>{alumnus.name}</TableCell>
                    <TableCell>{alumnus.currentPosition || "N/A"}</TableCell>

                    <TableCell className='text-right'>
                      {alumnus.Batch}
                    </TableCell>
                  </TableRow>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Alumni Details</DialogTitle>
                  </DialogHeader>
                  <AlumnusDetails alumnus={alumnus} />
                </DialogContent>
              </Dialog>
            ))
          )}
        </TableBody>
      </Table>

      {data && (
        <div className='flex items-center justify-between'>
          <div className='text-sm text-slate-500'>
            {data.pagination.totalItems > 0 ? (
              <>
                Showing {(filters.page - 1) * filters.limit + 1} to{" "}
                {Math.min(
                  filters.page * filters.limit,
                  data.pagination.totalItems
                )}{" "}
                of {data.pagination.totalItems} entries
              </>
            ) : (
              "No entries available"
            )}
          </div>
          <div className='flex items-center gap-4'>
            <Button
              onClick={() => handlePageChange("prev")}
              disabled={filters.page === 1}
            >
              Previous
            </Button>
            <span>
              Page {filters.page} of {data.pagination.totalPages}
            </span>
            <Button
              onClick={() => handlePageChange("next")}
              disabled={filters.page === data.pagination.totalPages}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </section>
  );
}
