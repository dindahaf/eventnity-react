import {
    useReactTable,
    getCoreRowModel,
    flexRender,
    getPaginationRowModel,
    getSortedRowModel,
    getFilteredRowModel,
  } from "@tanstack/react-table";
  import { SCHEDULES } from "../../data/data";
  import { useMemo, useState } from "react";
  import { Breadcrumbs } from "./breadcrumbs";
import { NavLink } from "react-router-dom";
  
  export function BasicTable({data, columns, newLink}) {
   
  
    const [sorting, setSorting] = useState([]);
    const [filtering, setFiltering] = useState("");
  
    const table = useReactTable({
      data,
      columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      state: {
        sorting: sorting,
        globalFilter: filtering,
      },
      onSortingChange: setSorting,
      onGlobalFilterChange: setFiltering,
    });
  
    return (
      <div className="">
        {/* <input
          type="text"
          value={filtering}
          onChange={(e) => setFiltering(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        /> */}
        <div className="border-t p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5 ">
          <div className="w-full mb-1">
            <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100 ">
              <div class="flex items-center mb-4 sm:mb-0">
                <form class="sm:pr-3" action="#" method="GET">
                  <label for="products-search" class="sr-only">
                    Search
                  </label>
                  <div class="relative w-48 mt-1 sm:w-64 xl:w-96">
                    <input
                      value={filtering}
                      onChange={(e) => setFiltering(e.target.value)}
                      type="text"
                      name="email"
                      id="products-search"
                      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                      placeholder="Search for products"
                    />
                  </div>
                </form>
              </div>
              <NavLink to={newLink}  className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800" type="button" data-drawer-target="drawer-create-product-default" data-drawer-show="drawer-create-product-default" aria-controls="drawer-create-product-default" data-drawer-placement="right">
                  Add new product
              </NavLink>
            </div>
          </div>
        </div>
  
        <table className="min-w-full divide-y divide-gray-200 table-fixed ">
          <thead className="bg-gray-100 ">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    onClick={header.column.getToggleSortingHandler()}
                    scope="col"
                    className="p-4 text-xs font-medium text-left text-gray-500 uppercase"
                    key={header.id}
                  >
                    {header.isPlaceholder ? null : (
                      <div>
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {
                          { asc: "↑", desc: "↓" }[
                            header.column.getIsSorted() ?? null
                          ]
                        }
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr className="hover:bg-gray-100" key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td
                    className="px-4 py-2 text-sm font-inter font-normal text-gray-900 whitespace-nowrap"
                    key={cell.id}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
        <div class="sticky bottom-0 right-0 items-center w-full p-4 bg-white border-t border-gray-200 sm:flex sm:justify-end ">
          {/* <div class="flex items-center mb-4 sm:mb-0">
            <a
              href="#"
              class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <svg
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              href="#"
              class="inline-flex justify-center p-1 mr-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 "
            >
              <svg
                class="w-7 h-7"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
            <span class="text-sm font-normal text-gray-500 ">
              Showing <span class="font-semibold text-gray-900 ">1-20</span> of{" "}
              <span class="font-semibold text-gray-900 ">2290</span>
            </span>
          </div> */}
          <div class="flex items-center space-x-3">
            <button
              onClick={() => table.previousPage()}
              className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-normal text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
            >
              <svg
                class="w-5 h-5 mr-1 -ml-1"
                fillRule="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Previous
            </button>
            <button
              onClick={() => table.nextPage()}
              className="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-normal text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
            >
              Next
              <svg
                class="w-5 h-5 ml-1 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
            {/* <a
              href="#"
              class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
            >
              <svg
                class="w-5 h-5 mr-1 -ml-1"
                fillRule="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Previous
            </a>
            <a
              href="#"
              class="inline-flex items-center justify-center flex-1 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 "
            >
              Next
              <svg
                class="w-5 h-5 ml-1 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a> */}
          </div>
        </div>
        <Breadcrumbs />
      </div>
    );
  }
  