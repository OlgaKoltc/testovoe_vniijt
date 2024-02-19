import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ServerResponse } from "http";
import { resourceLimits } from "worker_threads";
import { ITrain, ICharacteristic } from "../../model/TrainData";

const url = "http://localhost:3001/";

export const trainsApi = createApi({
  reducerPath: "trainsApi",
  tagTypes: ["Trains"],
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (build) => ({
    getTrains: build.query<ITrain[], string>({
      query: () => ({
        url: `trains`,
      }),
      // transformResponse: (response: ServerResponse<ITrain>) => response.items
    }),
  }),
});

export const { useGetTrainsQuery } = trainsApi;
