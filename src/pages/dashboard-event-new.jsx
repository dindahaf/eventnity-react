import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../components/common/button";
import { DevTool } from "@hookform/devtools";
import { format, parse } from 'date-fns'

function DashboardEventNew() {
  const form = useForm();
  const { formState, control, handleSubmit, register } = form;
  const { errors } = formState;
  const [startDate, setStartDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [EndTime, setEndTime] = useState(null);
  return (
    <section className="bg-white w-full">
      <div className="py-8 px-4 mx-auto max-w-xl lg:py-16">
        <h2 className="mb-4 text-xl font-bold text-gray-900 ">Add New Event</h2>
        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
            noValidate;
          })}
        >
          <div className="grid gap-4 sm:grid-cols-4 sm:gap-6">
            <div className="sm:col-span-4">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                {...register("title", {
                  required: {
                    value: true,
                    message: "title is required",
                  },
                })}
                placeholder="Type title"
              />
              <p className="text-red-500 text-xs text-left">
                {errors.title?.message}
              </p>
            </div>
            <div>
              <label
                for="id"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                ID
              </label>
              <input
                type="string"
                id="id"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                {...register("id", {
                  required: {
                    value: true,
                    message: "id is required",
                  },
                })}
                placeholder="#1"
              />
              <p className="text-red-500 text-xs text-left">
                {errors.id?.message}
              </p>
            </div>
            <div className="w-full">
              <label
                for="date"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Date
              </label>
              <Controller
                control={control}
                name="date"
                render={({ field: { value, onChange, ...restField } }) => {
                  return (
                    <DatePicker
                      className="bg-gray-50 h-[42px] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                      showIcon
                      selected={value ? parse(value, "dd/MM/yyyy HH:mm:ss", new Date()) : value}
                      onChange={(date) => {
                        if (date instanceof Date) {
                          const formattedDate = format(date, "dd/MM/yyyy HH:mm:ss")
                          onChange(formattedDate)
                        }
                      }}
                      {...restField}
                    />
                  )
                }}
              />
            </div>
            <div className="w-full">
              <label
                for="start-time"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Start Time
              </label>
              <DatePicker
                selected={startTime}
                onChange={(time) => setStartTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />
            </div>
            <div className="w-full">
              <label
                for="end-time"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                End Time
              </label>
              <DatePicker
                selected={EndTime}
                onChange={(time) => setEndTime(time)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
              />
            </div>
            <div className="sm:col-span-4">
              <label
                for="description"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                {...register("desc", {
                  required: {
                    value: true,
                    message: "description is required",
                  },
                })}
                placeholder="Your description here"
              ></textarea>
              <p className="text-red-500 text-xs text-left">
                {errors.desc?.message}
              </p>
            </div>
            <div className="sm:col-span-4">
              <label
                for="image"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Image
              </label>
              <textarea
                id="image"
                rows="7"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                {...register("image", {
                  required: {
                    value: true,
                    message: "image is required",
                  },
                })}
                placeholder="Drop your image here"
              ></textarea>
              <p className="text-red-500 text-xs text-left">
                {errors.image?.message}
              </p>
            </div>
          </div>
          <Button
            type={"submit"}
            className={
              "inline-flex items-center lg:px-5 lg:py-2.5 mt-4 lg:mt-6 text-sm md:text-sm lg:rounded-lg font-medium text-center"
            }
            variant={"primary"}
          >
            Add Product{" "}
          </Button>
        </form>
        <DevTool control={control} />
      </div>
    </section>
  );
}

export default DashboardEventNew;
