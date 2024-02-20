import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { supabase } from "../../../supabase";

export interface AuthCredentials {
    email: string;
    password: string;
  }

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["auth"],
  endpoints: (builder) => ({ 
        signUp: builder.mutation({
            query: async (userData: AuthCredentials) => {
              const {data, error} = await supabase.auth.signUp({
                  email: userData.email,
                  password: userData.password,
                  });
      
              if (error) {
                throw error;
              }
              
              return { data };
            }
          }),
      
          signIn: builder.mutation({
            queryFn: async (credentials: AuthCredentials) => {              
              console.log('credentials', credentials);
              const {data, error} = await supabase.auth.signInWithPassword
              ({
                  email: credentials.email,
                  password: credentials.password,
                  });
      
              if (error) {
                console.log('error', error);
                  throw error;
              }
              console.log('data', data);
              
              return { data :data.session };
            },
            invalidatesTags: [{ type: "auth" }],
          }),
          signOut: builder.mutation({
              queryFn: async () => {
                const { error} = await supabase.auth.signOut();
                
                if (error) {
                  throw error;
              }
                
                return { data: null};
              }
            }),  
    }),
});
