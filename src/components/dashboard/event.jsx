import { BasicTable } from "../common/basic-table";
import { SCHEDULES } from "../../data/data";
import { useMemo } from "react";
import SteinStore from "stein-js-client";
import { useEffect, useState } from "react";
import { format, parse } from "date-fns";

const store = new SteinStore(
  "https://api.steinhq.com/v1/storages/655b1db5c5ad5604ce2c64e6"
)

store.read("event").then( data => {
  console.log(data)
})


export function Event() {
  const [schedules, setSchedules] = useState([])
  useEffect( () => {
    store.read("event").then(data => {
      setSchedules(data)
    })
  } ,[] )
  
  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const eventColumns = [
    {
      header: "ID",
      accessorKey: "id",
      footer: "ID",
    },
    {
      header: "Image",
      accessorKey: "image",
      cell: (info) => (
        <img className="w-[38px] h-[25px]" src={info.getValue()} />
      ),
      footer: "Image",
    },
    {
      header: "Date",
      accessorKey: "date",
      cell: (info) => {
        const parsedDate = parse(info.row.original.date, "dd/MM/yyyy HH:mm:ss", new Date())
        return (
          <div>
            {format(parsedDate, "PPP")}
          </div>
        )
      } ,
      footer: "Date",
    },
    {
      header: "Time",
      accessorKey: "start_time",
      cell: (info) => {
        console.log(info)
        const parsedStartTime = parse(info.row.original.start_time, "dd/MM/yyyy HH:mm:ss", new Date())
        const parsedEndTime = parse(info.row.original.end_time, "dd/MM/yyyy HH:mm:ss", new Date())
        return (
          <div>
            {format(parsedStartTime, "p")} - {format(parsedEndTime, 'p')}
          </div>
        )
      },
      footer: "Time",
    },
    {
      header: "Title",
      accessorKey: "title",
      footer: "Title",
    },
    {
      header: "Description",
      accessorKey: "description",
      footer: "Description",
    },
    {
      header: "Action",
      cell: (info) => {
        return (
          <div className="px-4 space-x-2 whitespace-nowrap">
            <button
              type="button"
              id="updateProductButton"
              data-drawer-target="drawer-update-product-default"
              data-drawer-show="drawer-update-product-default"
              aria-controls="drawer-update-product-default"
              data-drawer-placement="right"
              class="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                <path
                  fill-rule="evenodd"
                  d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Edit
            </button>
            <button
              type="button"
              id="deleteProductButton"
              data-drawer-target="drawer-delete-product-default"
              data-drawer-show="drawer-delete-product-default"
              aria-controls="drawer-delete-product-default"
              data-drawer-placement="right"
              class="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
            >
              <svg
                class="w-4 h-4 mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              Delete
            </button>
          </div>
        );
      },
      footer: "Image",
    },
  ];

  return (
    <BasicTable data={schedules} columns={eventColumns} newLink="/dashboard/event/new" />
  )
}